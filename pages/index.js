import Styles from '../styles/Home.module.css';
import { FaGitAlt, FaLinkedin, FaTwitter,  } from 'react-icons/fa';

export default function Home() {

  const abertura_tag = '<';
  const fechamento_tag = '/>';
  const name = 'João Luis';

  return (
    <div>
      <section> 
        <div className={Styles.container}>
          <img src="./assets/background.jfif" alt="image" />
          <div className={Styles.left}>
            <div className={Styles.name} style={{ display: 'flex' }}>
              <h1 style={{ color: '#FF2748', fontSize: '4rem' }}>{ abertura_tag }</h1>
              <h1 style={{ fontSize: '4rem' }}>{ name }</h1>
              <h1 style={{ color: '#FF2748', fontSize: '4rem' }}>{ fechamento_tag }</h1>
            </div>
            <div className={Styles.description}>
              <h2>QUEM SOU EU?</h2>
              <p><strong>DESENVOLVEDOR WEB</strong>, sou apaixonado por desenvolvimento web gosto muito de desafios!</p>
              <p>trabalho com as tecnologias <strong>JAVASRCIPT COM REACTJS, REACTNATIVE E TYPESCRIPT</strong> </p>
              <p>amo o que faço e dou meu melhor a cada projeto!.</p>
              <button style={{ marginTop: 10 }}>ENTRE EM CONTATO</button>
            </div>
          </div>
          <footer className={Styles.footer}>
            <a href="https://www.github.com/JUAUMDEV89">
              <FaGitAlt style={{ color: 'white', marginLeft: 10 }} />
            </a>
            <a href="https://www.github.com/JUAUMDEV89">
               <FaLinkedin style={{ color: 'white', marginLeft: 10 }} />
            </a>
            <a href="https://www.github.com/JUAUMDEV89">
               <FaTwitter style={{ color: 'white', marginLeft: 10 }} />
            </a>
          </footer>
        </div>
      </section>
    </div>
  )
}
