import Dialog from '@/components/dialog'
import useOpen from '@/hooks/useOpen'
import './styles.css'

const Home = () => {
  const { isOpen, handleOpenDialog } = useOpen()

  return (
    <div className="home">
      <button
        className={`btn-open-dialog ${isOpen ? 'open' : 'close'}`}
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
      <Dialog />
    </div>
  )
}

export default Home
