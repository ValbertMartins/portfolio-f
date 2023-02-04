import { ButtonCloseModal, ContainerBackdrop, ModalContent, ProjectImage } from "./styles"
import prefeituraMediasrc from "../../assets/images/prefeitoGilbertoMedia.png"
import { Dispatch, SetStateAction } from "react"
import { ReactComponent as CloseBtnIcon } from "../../assets/svgs/closeButtonIcon.svg"
interface ModalProps {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ setModalOpen, modalOpen }: ModalProps) => {
  function handleCloseModal(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event.stopPropagation()
    if (event.currentTarget == event.target) {
      setModalOpen(false)
    }
  }

  return (
    <ContainerBackdrop onClick={handleCloseModal}>
      <ModalContent>
        <ButtonCloseModal onClick={event => setModalOpen(false)}>
          <CloseBtnIcon />
        </ButtonCloseModal>
        <ProjectImage src={prefeituraMediasrc} />
      </ModalContent>
    </ContainerBackdrop>
  )
}

export default Modal
