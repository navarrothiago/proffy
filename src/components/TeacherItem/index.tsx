import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/42647168?s=460&u=b2bef17e64db677dc69d3563b62b5bb88e9f0310&v=4" alt="Thiago Navarro" />
        <div>
          <strong> Thiago Navarro</strong>
          <span>Computação</span>
        </div>
      </header>
      <p>
        Amante da tecnologia.
            <br /><br />
            Apaixonado por tecnologia. Já passou 50M de horas na frente do computador.
          </p>
      <footer>
        <p>Preço/hora <strong>R$ 80,00</strong></p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;