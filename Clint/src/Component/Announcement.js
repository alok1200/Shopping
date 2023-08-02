import { Styled, styled } from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: green;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shopping on Over ₹1,000 </Container>
  )
}

export default Announcement