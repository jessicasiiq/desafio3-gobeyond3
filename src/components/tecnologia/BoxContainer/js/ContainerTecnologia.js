import '../css/ContainerTecnologia.css';
import CardContainer from '../../Card/js/CardContainer.js'

function ContainerTecnologia(props) {
  return (
    <section className="box-container">
      <CardContainer
        indice = {props.indice}
      />
    </section>
  );
}

export default ContainerTecnologia;