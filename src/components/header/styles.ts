import styled from 'styled-components'

export const HeaderContainer = styled.header`
  color: #222222;
  width: 100%;
  border-bottom: 2px solid #eeee;

  /* display: flex;

  align-items: center;
  justify-content: center; */

  p {
    font-size: 1.5rem;
  }
`

export const HeaderContent = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`

export const HeaderLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

export const HeaderButton = styled.button`
  background: transparent;
  color: #ffffff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

export const HeaderViewCart = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  p {
    font-size: 1.2rem;
  }
`
