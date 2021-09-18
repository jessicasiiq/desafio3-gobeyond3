import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContainerSideBar from './components/sideBar/SideBar';

ReactDOM.render(
  <React.StrictMode>
    <ContainerSideBar
      nome = "Jéssica da Silva Siqueira • jess"
      idade = {22}
      funcao = "Front-end developer"
      localizacao = "Blumenau, SC"
      textProfile = "Seja bem-vindes ao meu portfolio! Sou estudante de front-end e aqui compartilho um pouquinho do que aprendo."
      status = {true}
      linkedin = "https://www.linkedin.com/in/jessicassiqueira/"
      github = "https://github.com/jessicasiiq"
      gmail = "ssiqueirajessica@gmail.com"
    />
  </React.StrictMode>,
  document.getElementById('root')
);