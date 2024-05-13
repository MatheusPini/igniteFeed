import { useState } from 'react'
import styles from './App.module.css'
import "./global.css"
import { Post } from "./components/Post"
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Matheus Pini" content="teste" />
          <Post author="Tatiane" content="teste2" />
        </main>
      </div>
    </>
  )
}