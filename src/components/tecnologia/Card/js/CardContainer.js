import "../css/CardContainer.css"
import {data} from "../../../../database.js"

function CardContainer(props) {
  return (
    <section>
      {data.postagens[props.indice].posts.map((post) => 
        <article className="desafios-posts">
        <div className="card-container">
          <a href={post.link} className="desafios-posts" target="_blank"
          style={{ backgroundImage: `url(${post.imagem})`}}>
            <p>{post.titulo}</p>
          </a>
        </div>
        </article>
      )}
    </section>
  );
}

export default CardContainer;