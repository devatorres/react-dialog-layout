import './styles.css'

const Dialog = (props) => {
  const { isOpen, setIsOpen } = props

  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  const handleStopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className={`dialog-backdrop ${isOpen ? 'open' : ''}`}
      tabIndex="-1"
      role="presentation"
      aria-hidden="true"
      aria-label="Dialog backdrop"
      onClick={handleCloseDialog}>
      <div
        className="dialog-container"
        role="dialog"
        aria-label="Dialog container"
        aria-labelledby="learn-develop-dialog"
        onClick={handleStopPropagation}>
        <h2 className="title" role="heading" aria-label="title">
          Dialog design
        </h2>
        <p className="subtitle" role="heading" aria-label="subtitle">
          Aprende a diseñar un dialog atractivo y moderno que se adapta a
          cualquier pantalla.
        </p>
        <div className="direction-row reset-skew">
          <button
            className="btn-action"
            type="button"
            role="button"
            title="Continuar"
            aria-label="Continue"
            onClick={handleStopPropagation}>
            Continuar
          </button>
          <button
            className="btn-cancel"
            type="button"
            role="button"
            title="Cancelar"
            aria-label="Cancel"
            onClick={handleCloseDialog}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dialog
