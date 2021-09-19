import '../css/ContainerSideBar.css';
import Linkedin from "../../../assets/icons/sidebar/w-linkedin.png"
import Github from "../../../assets/icons/sidebar/w-github.png"
import Gmail from "../../../assets/icons/sidebar/w-gmail.png"
import ContainerTecnologia from "../../tecnologia/BoxContainer/js/ContainerTecnologia.js"
import {useState} from "react";

function ContainerSideBar({
  name,
  age,
  funcao,
  localization,
  textProfile,
  status
}) {
  const [index, setIndex] = useState(0);
  return (
    <section>
      <section className="container-parent">
        <article className="container-child">
        </article>
      </section>
      <div className="box-image-parent">
            <div className="box-image-child">
            </div>
          </div>
      <div className="profile-box">
        <div className="profile-header">
          <h2 className="profile-name">{name}, {age}</h2>
          <p className="profile-info">✨ {funcao} • {localization}</p>
          <p className="veg">🌱💕🐮</p>
          <p className="profile-text">{textProfile}</p>
        </div>
          <p className="profile-status">{status ? "✔️ DISPONÍVEL PARA CONTRATAÇÃO!" : "❌ NÃO-DISPONÍVEL PARA CONTRATAÇÃO!"}</p>
        </div>
        <div className="nav-container">
        <button href="" className={index === 0 ? "menuItemAtivado" : "menuItem"} onClick={() => 
          setIndex(0) 
        }>👩 Sobre</button>
        <button href="" className={index === 1 ? "menuItemAtivado" : "menuItem"} onClick={() => 
          setIndex(1)
        }>👩‍💻 Projetos</button>
        <button href="" className={index === 2 ? "menuItemAtivado" : "menuItem"} onClick={() => 
          setIndex(2)
        }>🧠 Tecnologias</button>
        </div>
        <div className="socialMedia-container">
          <div className="linkedin-container">
            <a href="https://www.linkedin.com/in/jessicassiqueira/" target="_blank" >
              <img src={Linkedin} className="linkedin-icon"/>
            </a>
          </div>
          <div className="github-container">
            <a href="https://github.com/jessicasiiq" target="_blank">
              <img src={Github} className="github-icon"/>
            </a>
          </div>
          <div className="gmail-container">
            <a href="mailto:${ssiqueirajessica@gmail.com}" target="_blank">
              <img src={Gmail} className="gmail-icon"/>
            </a>
          </div>
        </div>
        <span className="linkedin-text">Linkedin</span>
        <span className="github-text">Github</span>
        <span className="gmail-text">E-mail</span>
        <ContainerTecnologia indice={index}/>
    </section>
  );
}

export default ContainerSideBar;