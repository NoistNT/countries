import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh auto;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border-radius: 0.6rem;
  background-color: #000000ab;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.11s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-family: 'Raleway', sans-serif;

  &:hover {
    box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -webkit-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: -1px 3px 28px -4px rgba(0, 0, 0, 0.74);
    text-shadow: 1px 0px 8px #727272;
    transition: 0.11s;
  }

  /* &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    text-shadow: 1px 0px 8px #727272;
    background-color: #3c3649;
  } */
`
export const Title = styled.h1`
  font-size: 2rem;
`
export const Image = styled.img`
  border-radius: 0.4rem;
  padding: 0 0.1rem;
`
export const Name = styled.div`
  padding: 0.3rem 0;
  width: 100%;
  color: #e2e2e2;
  border-top: solid gray;
  border-bottom: solid gray;
`
export const DescriptionContainer = styled.div`
  color: #e2e2e2;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 50rem;

  @media (max-width: 320px) {
    margin-top: 0.3rem;
    margin-left: 0;
    margin-right: 0;
  }
`
export const Items = styled.h4`
  margin: 0.5rem 0;
  padding: 0.001rem 0.4rem;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0000008f;
  width: 100vw;
  height: 94vh;

  span {
    background-color: #2e2e2ed3;
    color: #e2e2e2;
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0.2rem;
  }
`
export const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    border: 0.6rem solid #aaaaaa;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #e2e2e2 transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
