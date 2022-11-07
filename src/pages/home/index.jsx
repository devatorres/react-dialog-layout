import Signature from '@/components/signature'
import Action from '@/components/action'
import './styles.css'

const Home = () => {
  return (
    <div className="home">
      <main>
        <Action />
      </main>
      <footer>
        <Signature />
      </footer>
    </div>
  )
}

export default Home
