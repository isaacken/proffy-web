import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1254962201686933504/IcQyArlU_400x400.jpg" alt="Isaac Kennedy"/>
        <div>
          <strong>Isaac Kennedy</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Doutorado pela Universidade de Harvard em Matemática na área de fazer as contas de quanto tempo procrastina por dia.
        <br /><br />
        Não sabe a tabuada do 7 completa, mas sabe somar quaisquer números de até 1 dígito.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 0,30</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;