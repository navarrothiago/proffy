// This import is used to idenfiy what is request and reponse object.
// TS is useful for this cases.
// When you use TS, use UpperCase.
import { Request, Response } from 'express'
import db from '../database/conncetion';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

// TODO: Avoid to manage DB here.
export default class ClassesController {
  async index(resquest: Request, response: Response) {
    const filters = resquest.query;
    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to seach classes'
      });
    }
    const timeInMinutes = convertHourToMinutes(time);


    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          // ?? is same of %d in C
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` >  ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    console.log(timeInMinutes);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;

    // Transaction all DB operations.
    const trx = await db.transaction();

    try {
      // Wait the database operation.
      // Short syntaxe.
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      })

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        };
      })

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      // 201 - Created with success.
      return response.status(201).send()
    } catch (err) {
      trx.rollback();
      console.log(err);

      return response.status(400).json({
        error: 'Unexptected error while creating new class'
      })
    }

  }
}
