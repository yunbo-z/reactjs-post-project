import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const showModalHandler = () => {
    setModalIsVisible(true)
  }
  const hideModalHandler = () => {
    setModalIsVisible(false)
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  )
}

export default App
