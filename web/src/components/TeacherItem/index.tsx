import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/43206830?s=460&u=9ceba8dfaa12b0f04f67ddcf21b94400d620e4d3&v=4" alt="Tábata Baesso"/>
                <div>
                    <strong>Tábata Baesso</strong>
                    <span>Automação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de automação avançada.
                <br /><br />
                Apaixonada por robôs e suas diversas utilizações.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 25,00</strong>
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