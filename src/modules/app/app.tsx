import styles from './app.module.scss'
import {Header} from "../../components/header";
import {MainContent} from "../../components/main-content";
import {Footer} from "../../components/footer";

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <main>
          <MainContent/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
