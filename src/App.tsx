import styles from './App.module.css';
import {Header, Banner} from './components';
import classnames from 'classnames';
import { HomeView } from './Views';

const cx = classnames.bind(styles);

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <HomeView />
    </div>
  );
}

export default App;
