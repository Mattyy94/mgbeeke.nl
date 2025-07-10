import styles from './App.module.css';
import { Header, Banner } from './components';
import classnames from 'classnames';
import { HomeView, LifelineView } from './Views';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const cx = classnames.bind(styles);

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/lifeline" element={<LifelineView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
