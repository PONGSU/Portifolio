import React from 'react';
import copy from 'copy-to-clipboard';
import { TbClipboardText } from 'react-icons/tb';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

import Header from '../../components/Header';
import { Container } from '../../styles/global';
import { StyledContactPage } from './style';

const ContactPage = () => {
  return (
    <StyledContactPage>
      <Header />
      <Container style={{ paddingTop: 150 }}>
        <article className='contacts-card'>
          <span>
            <a href='mailto:gabrielc.maciel42@gmail.com' target={'_blank'}>
              <FiMail />
              <h3>GabrielC.Maciel42@gmail.com</h3>
            </a>
            <TbClipboardText
              className='copy-icon'
              title='Copiar email'
              onClick={() => copy('gabrielc.maciel42@gmail.com')}
            />
          </span>
          <span>
            <a href='https://wa.me/5522981167375' target={'_blank'}>
              <FaWhatsapp />
              <h3>+55 (22) 98116-7375</h3>
            </a>
            <TbClipboardText
              className='copy-icon'
              title='Copiar telefone'
              onClick={() => copy('5522981167375')}
            />
          </span>
          <span>
            <a href='https://www.linkedin.com/in/gabriel-maciel-5600a6246/' target={'_blank'}>
              <FaLinkedin />
              <h3>Gabriel Maciel</h3>
            </a>
            <TbClipboardText
              className='copy-icon'
              title='Copiar Linkedin'
              onClick={() => copy('https://www.linkedin.com/in/gabriel-maciel-5600a6246/')}
            />
          </span>
          <span>
            <a href='https://github.com/PONGSU' target={'_blank'}>
              <FaGithub />
              <h3>PONGSU</h3>
            </a>
            <TbClipboardText
              className='copy-icon'
              title='Copiar Github'
              onClick={() => copy('https://github.com/PONGSU')}
            />
          </span>
        </article>
      </Container>
    </StyledContactPage>
  );
};

export default ContactPage;
