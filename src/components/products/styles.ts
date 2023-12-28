import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  justify-items: center;
  padding: 40px 0 40px 40px;
  grid-row-gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`
