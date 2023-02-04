import styled from "styled-components"
export const ContainerBackdrop = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  max-width: 80%;
  max-height: 90%;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ButtonCloseModal = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  width: 4rem;
  height: 3.5rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`
