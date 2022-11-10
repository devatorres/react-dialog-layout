import { useContext } from 'react'
import StateContext from '@/contexts/stateContext'

const useOpen = () => {
  const { isOpen, setIsOpen } = useContext(StateContext)

  const handleOpenDialog = () => {
    setIsOpen(true)
  }

  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  const handleStopPropagation = (e) => {
    e.stopPropagation()
  }

  return { isOpen, handleOpenDialog, handleCloseDialog, handleStopPropagation }
}

export default useOpen
