import './sideBar.css';
import Linkedin from "../../assets/icons/sidebar/w-linkedin.png"
import Github from "../../assets/icons/sidebar/w-github.png"
import Gmail from "../../assets/icons/sidebar/w-gmail.png"

function ContainerSideBar({
  nome,
  idade,
  funcao,
  localizacao,
  textProfile,
  status,
  linkedin,
  github,
  gmail
}) {
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
          <h2 className="profile-name">{nome}, {idade}</h2>
          <p className="profile-info">✨ {funcao} • {localizacao}</p>
          <p className="profile-text">{textProfile}</p>
        </div>
          <p className="profile-status">{status ? "✔️ DISPONÍVEL PARA CONTRATAÇÃO!" : "❌ NÃO-DISPONÍVEL PARA CONTRATAÇÃO!"}</p>
        </div>
        <div className="nav-container">
        <a href="/" className="menuItem">🏡 Home</a>
        <a href="/" className="menuItem">👩 Sobre</a>
        <a href="/" className="menuItem">🧠 Repositórios</a>
        </div>
        <div className="socialMedia-container">
          <div className="linkedin-container">
            <a href="linkedin" title="Perfil Linkedin" target="_blank" >
              <img src={Linkedin} className="linkedin-icon"/>
            </a>
          </div>
          <div className="github-container">
            <a href="github" title="Perfil Github" target="_blank">
              <img src={Github} className="github-icon"/>
            </a>
          </div>
          <div className="gmail-container">
            <a href="gmail" title="Gmail" target="_blank">
              <img src={Gmail} className="gmail-icon"/>
            </a>
          </div>
        </div>
        <span className="linkedin-text">Linkedin</span>
        <span className="github-text">Github</span>
        <span className="gmail-text">E-mail</span>
    </section>
  );
}

export default ContainerSideBar;