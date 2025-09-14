import React, { useEffect } from 'react';
import styles from './App.module.css';
import { Header, Banner } from './components';
import classnames from 'classnames';
import { HomeView, LifelineView } from './Views';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


const cx = classnames.bind(styles);

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      window.location.hostname.includes('groeivooruit') &&
      window.location.pathname !== '/lifeline'
    ) {
      navigate('/lifeline', { replace: true });
    }
  }, [navigate]);

  return (
    <div className={cx(styles.base)}>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/lifeline" element={<LifelineView />} />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
