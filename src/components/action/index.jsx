import Logotype from '@/components/logotype'
import './styles.css'

const Action = () => {
  return (
    <>
      <section className="before">
        <h1>Sin animation-play-state</h1>
        <Logotype />
      </section>
      <section className="after">
        <h1>Con animation-play-state</h1>
        <Logotype isWidth />
      </section>
    </>
  )
}

export default Action
