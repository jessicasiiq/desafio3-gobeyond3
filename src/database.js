import LinkedinIcon from "./assets/icons/sidebar/w-linkedin.png"
import GithubIcon from "./assets/icons/sidebar/w-github.png"
import GmailIcon from "./assets/icons/sidebar/w-gmail.png"
import Desafio1 from "./assets/images/projetos/desafio1.gif"
import Desafio2 from "./assets/images/projetos/desafio2.gif"
import Desafio3 from "./assets/images/projetos/desafio3.gif"
import Desafio4 from "./assets/images/projetos/desafio4.gif"
import Desafio5 from "./assets/images/projetos/desafio5.png"
import Desafio6 from "./assets/images/projetos/desafio6.gif"
import Sobre1 from "./assets/images/sobre/imagem1.jpg"
import Sobre2 from "./assets/images/sobre/imagem2.png"
import Sobre3 from "./assets/images/sobre/imagem3.jpeg"
import Sobre4 from "./assets/images/sobre/imagem4.png"
import Sobre5 from "./assets/images/sobre/imagem5.png"
import Sobre6 from "./assets/images/sobre/imagem6.jpg"
import Tecnologia1 from "./assets/images/tecnologias/tecnologia1.jpg"
import Tecnologia2 from "./assets/images/tecnologias/tecnologia2.png"
import Tecnologia3 from "./assets/images/tecnologias/tecnologia3.png"
import Tecnologia4 from "./assets/images/tecnologias/tecnologia4.png"
import Tecnologia5 from "./assets/images/tecnologias/tecnologia5.png"
import Tecnologia6 from "./assets/images/tecnologias/tecnologia6.png"

export const data = {
  user: {
    name: "Jéssica da Silva Siqueira • jess",
    age: 22,
    funcao: "Front-end developer",
    localization: "Blumenau, SC",
    textProfile: "Seja bem-vindes ao meu portfolio! Sou estudante de front-end e aqui compartilho um pouquinho do que aprendo.",
    status: true
  },

  socialMedia: [
      {
        name: "Linkedin",
        icon: LinkedinIcon,
        link: "https://www.linkedin.com/in/jessicassiqueira/"
      },
      {
        name: "Github",
        icon: GithubIcon,
        link: "https://github.com/jessicasiiq"
      },
      {
        name: "E-mail",
        icon: GmailIcon,
        link: "ssiqueirajessica@gmail.com"
      }
  ],

  postagens: [
    {
      titulo: "👩 Sobre",
      posts:[
        {
          titulo: "👩‍🎓 Perfil para networking: Linkedin",
          imagem: Sobre1,
          link: "https://www.linkedin.com/in/jessicassiqueira/"
        },
        {
          titulo: "👾 Perfil de repositórios: Github",
          imagem: Sobre2,
          link: "https://github.com/jessicasiiq"
        },
        {
          titulo: "📧 Contate-me! Cá está meu e-mail: Gmail",
          imagem: Sobre3,
          link: "mailto:${ssiqueirajessica@gmail.com}"
        },
        {
          titulo: "🎶 Vamor relaxar com um pouco de música: Spotify",
          imagem: Sobre4,
          link: "https://open.spotify.com/playlist/0J4CNHRcGwtoxqmAl7dUcN?si=847823ce48ec4e55"
        },
        {
          titulo: "🐕‍🦺 Anime preferido: Inuyasha 💖",
          imagem: Sobre5,
          link: "https://en.wikipedia.org/wiki/Inuyasha"
        },
        {
          titulo: "🕵🏻‍♀️ Série favorita: Murdoch Mysteries 🔎",
          imagem: Sobre6,
          link: "https://en.wikipedia.org/wiki/Murdoch_Mysteries"
        }
      ]
    },
    {
      titulo: "👩‍💻 Projetos",
      posts:[
        {
          titulo: "👶 [IFC] PDS/Trabalho final: Jogo ADALIND",
          imagem: Desafio6,
          link: "http://blumenau.ifc.edu.br"
        },
        {
          titulo: "🧸 [HC] Desafio #1: E-commerce LP",
          imagem: Desafio1,
          link: "https://github.com/jessicasiiq/capitu-emocoes"
        },
        {
          titulo: "🌻 [HC] Desafio #2: Gestão de Cadastros",
          imagem: Desafio2,
          link: "https://github.com/jessicasiiq/inventario-capituemocoes"
        },
        {
          titulo: "🚀 [HC] Desafio #4: Desafio final • VTEX IO | ACCT",
          imagem: Desafio3,
          link: "https://github.com/jessicasiiq/desafiogrupo07-acct"
        },
        {
          titulo: "🐱‍👤 [GB] Desafio #1: Recriar página web • HTML/CSS",
          imagem: Desafio4,
          link: "https://github.com/jessicasiiq/desafio1-gobeyond3"
        },
        {
          titulo: "👀 [GB] Desafio #2: Cadastro de vendedores • Javascript",
          imagem: Desafio5,
          link: "https://github.com/jessicasiiq/desafiojs2-gobeyond3"
        }
      ]
    },
    {
      titulo: "🧠 Tecnologias",
      posts:[
        {
          titulo: "[Blogs, IFC, Gama, Corebiz] HTML • CSS • Javascript",
          imagem: Tecnologia1,
          link: "https://www.w3schools.com"
        },
        {
          titulo: "[Gama Academy + VTEX • Hiring Coders 2021] Typescript",
          imagem: Tecnologia2,
          link: "https://www.typescriptlang.org"
        },
        {
          titulo: "[Gama Academy + VTEX • Go Beyond • Corebiz] React",
          imagem: Tecnologia3,
          link: "https://reactjs.org"
        },
        {
          titulo: "[IFC - Linguagem principal, UFRN] Java {desktop&mobile}",
          imagem: Tecnologia4,
          link: "https://www.oracle.com/java/technologies/"
        },
        {
          titulo: "[IFC - DataBase, UFRN {jogos&mobile}] MySQL",
          imagem: Tecnologia5,
          link: "https://dev.mysql.com/doc/"
        },
        {
          titulo: "[Digital Innovation One] Kotlin Android",
          imagem: Tecnologia6,
          link: "https://kotlinlang.org"
        }
      ]
    }
  ]
}