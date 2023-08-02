import styled from "styled-components"
import { mobile } from "../Responsive";
import {Link} from "react-router-dom"
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"20vh"})}

`;
const Info = styled.h1`
position: absolute;
top: 0;
left: 0%;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Title = styled.div`
color: black;
margin-bottom: 20px;
background-color: lightyellow;
`;
const Button = styled.button`
border: none;
padding: 10px;
background-color: lightblue;
color: black;
cursor: pointer;
font-weight: 800px;
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`products/${item.cat}`} >
     <Image src={item.img}/>
     <Info>
      <Title>{item.title}</Title>
      <Button>SHOPE NOW</Button>
     </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem