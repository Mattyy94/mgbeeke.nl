import { useState } from 'react'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import {Header, Banner} from './components';
import classnames from 'classnames';
import { HomeView } from './Views';

const cx = classnames.bind(styles)

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Header />
      <Banner />
      <HomeView />
    </div>
  )
}

export default App
