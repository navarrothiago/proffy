import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PagesHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

function TeacherList() {
  // Start with a empty array.
  const [teachers, setTeachers] = useState([]);
  // Start with a empty string.
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent){
    e.preventDefault();

    // Query params
    const response = await api.get('/classes', {
      params:{
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {setSubject(e.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciência', label: 'Ciência' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Historia', label: 'Historia' },
            ]}>
          </Select>
          <Select
            name="week_day"
            label="Dia da Semana"
            value={week_day}
            onChange={e => {setWeekDay(e.target.value)}}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-Feira' },
              { value: '2', label: 'Terça-Feria' },
              { value: '3', label: 'Quarta-Feira' },
              { value: '4', label: 'Quinta-Feira' },
              { value: '5', label: 'Sexta-Feira' },
              { value: '6', label: 'Sábado' },
            ]}>
          </Select>
          <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={e => {setTime(e.target.value)}}
          ></Input>

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      {/* Conteudo principal da pagina */}
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}></TeacherItem>
        })}

      </main>
    </div>
  );
}

export default TeacherList;