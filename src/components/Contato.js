import React, {useContext} from 'react';
import emailjs from 'emailjs-com';
import './Contato.css';
import {DarkmodeContext} from './DarkmodeContext';

export default function Contato() {
  const [clickDk] = useContext(DarkmodeContext);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'templatev1', e.target, 'user_3t6PzORDCl3D9ShaUJmDo')
      .then((result) => {
          document.getElementById("contact-form").reset();
          document.getElementById("retornaMsg").innerHTML = "E-Mail enviado com sucesso, entrarei em contato o mais rápido possível.";   
      }, (error) => {
        document.getElementById("retornaMsg").innerHTML = "Erro. Tente novamente ou considere usar outro meio de comunicação.";
      });
  }

  return (
    <>
    <div className='bgTeste'></div>
    <div className={clickDk ? 'bgDK' : 'bg'}> 
        <div className='wrappercontato'>
            <div className='containercontato'>
            <form id="contact-form" className="form" onSubmit={sendEmail}>
            <div className="form-group">
                <label className="form-label-nome" htmlFor="name" style={{color: clickDk ? '#F0F6FC' : 'black'}}>Nome</label>
                <input type="text" className={clickDk ? 'form-nome' : 'form-nomeDK'} id="name" name="nome" placeholder="" required style={{color: clickDk ? '#F0F6FC' : 'black'}}/>
            </div>                            
            <div className="form-group">
                <label className="form-label-email" htmlFor="email" style={{color: clickDk ? '#F0F6FC' : 'black'}}>Email</label>
                <input type="email" className={clickDk ? 'form-email' : 'form-emailDK'} id="email" name="email" placeholder="" required style={{color: clickDk ? '#F0F6FC' : 'black'}}/>
            </div>                            
            <div className="form-group">
                <label className="form-label-assunto" htmlFor="subject" style={{color: clickDk ? '#F0F6FC' : 'black'}}>Assunto</label>
                <input type="text" className={clickDk ? 'form-assunto' : 'form-assuntoDK'} id="subject" name="assunto" placeholder="" required style={{color: clickDk ? '#F0F6FC' : 'black'}}/>
            </div>                            
            <div className="form-group">
                <label className="form-label-mensagem" htmlFor="message" style={{color: clickDk ? '#F0F6FC' : 'black'}}>Mensagem</label>
                <textarea rows="8" cols="50" name="mensagem" className={clickDk ? 'form-mensagem' : 'form-mensagemDK'} id="message" placeholder="" required style={{color: clickDk ? '#F0F6FC' : 'black'}}></textarea>                                 
            </div>
            <div className="text-center">
                <button type="submit" className={clickDk ? "btn btn-start-order": 'btn btn-start-orderDK' } >Enviar</button>
            </div>
            <p id="retornaMsg" className="retornaMsg" style={{color: clickDk ? '#F0F6FC' : 'black'}}></p>
            </form>
            </div>
        </div>
    </div>
    </>
  );
}
