import styled, { keyframes } from "styled-components"

export const animateRotate3D = keyframes`

to { 
  transform: rotate3d(0,1,0, 60deg);
}
`

export const Container = styled.section`
  margin: 10rem auto;
  position: fixed;
  width: 100%;
  background-color: transparent;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 4rem;

  a {
    text-decoration: none;
    display: block;
    font-size: 1.5rem;
    color: #96f2d7;
    transform: scaleY(1.5);
  }
`

export const PortfolioText = styled.p``

export const ArtistText = styled.p`
  position: relative;
  color: #96f2d7;
  transition: 300ms;

  :hover::after,
  :hover::before {
    background-color: #fbb5b5;
  }
  :hover {
    color: #fbb5b5;
  }
  ::before {
    content: "";
    transition: 300ms;
    display: inline-block;
    width: 0.844rem;
    height: 5rem;
    position: absolute;
    top: -4.625rem;
    left: 2.031rem;
    background-color: #96f2d7;
    pointer-events: none;
  }
  ::after {
    transition: 300ms;
    content: "";
    display: inline-block;
    width: 0.375rem;
    height: 5rem;
    position: absolute;
    bottom: -4.613rem;
    left: 4.5rem;
    background-color: #96f2d7;
    pointer-events: none;
  }
`
export const ContactText = styled.p``
