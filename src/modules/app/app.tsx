import styles from './app.module.scss'
import {Header} from "../../components/header";
import {MainContent} from "../../components/main-content";

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <main>
          <MainContent/>
      </main>
    </div>
  );
}

export default App;
