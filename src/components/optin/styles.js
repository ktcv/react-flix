import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 50px;
  flex-wrap: wrap;
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  max-width: 350px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 660px) {
    border-radius: 10px;
    max-width: 100%;
  }
`

export const Button = styled.button`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  height: 70px;
  max-width: 250px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 660px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 660px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    border-radius: 10px;
  }
`

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 660px) {
    font-size: 16px;
    line-height: 22px;
  }
`
