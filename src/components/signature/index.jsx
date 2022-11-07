import Me from '@/assets/images/me.png'
import './styles.css'

const Signature = () => {
  return (
    <figure className="signature">
      <img src={Me} alt="Marca personal" />
      <figcaption>
        Alejandro Torres
        <span>@atorres.dev</span>
      </figcaption>
    </figure>
  )
}

export default Signature
