import { useState } from 'react'
import Dialog from '@/components/dialog'
import './styles.css'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDialog = () => {
    setIsOpen(true)
  }

  return (
    <div className="home">
      <button
        className="btn-open-dialog"
        type="button"
        role="button"
        title="Abrir Dialog"
        aria-label="Open Dialog"
        onClick={handleOpenDialog}>
        Abrir Dialog
      </button>
      <div className="square big top-left" />
      <div className="square small bottom-right rotate" />
      <div className="circle big bottom-left" />
      <div className="circle small top-right" />
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Home
