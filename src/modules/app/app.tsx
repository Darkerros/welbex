import styles from './app.module.scss'
import {Header} from "../../components/header";
import {MainContent} from "../../components/main-content";
import {Footer} from "../../components/footer";
import {Light} from "../../components/light/light";

function App() {
  return (
    <div className={styles.app}>

      <Header/>
      <main className={styles.app__main}>
          <Light extraClass={styles.app__light_red}/>
          <Light extraClass={styles.app__light_purple}/>
          <MainContent/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
