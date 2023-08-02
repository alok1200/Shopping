
import { styled } from 'styled-components'
import {BsFillArrowLeftCircleFill } from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { sliderItems } from '../Data'
import { mobile } from '../Responsive'


const Container =styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: coral;
position: relative;
overflow: hidden;
${mobile({display:"none"})}

`;
const Arrow = styled.div`
width: 50%;
height: 50%;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
height: 33px;
width: 40px;
bottom: 0%;
top: 0%;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"}; 
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;

transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
position: relative;
background-color: #${props=>props.bg}
`;


const ImgContainer = styled.div`
height: 100%;
width: 100%;
`
const Img = styled.img`
height: 100%;
width: 100%;
`;

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
right: 0;
padding: 50px;
position: absolute;
>*{ 
  width: max-content;
}
`;
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 30px;
font-weight: 500;
letter-spacing: 3px;
width: 400px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
      console.log({slideIndex : slideIndex > 0 ? slideIndex -1 : 2})
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    }else{
      console.log({slideIndex: slideIndex < 2 ? slideIndex +1 : 0})
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
    }
  };
  
      return (
    <Container>
     <Arrow direction="left" onClick={()=>handleClick("left")}>
      <BsFillArrowLeftCircleFill/>
     </Arrow>
     <Wrapper slideIndex={slideIndex}>
     {sliderItems.map((item)=>(
       <Slide bg={item.bg} key={item.id}>
       <ImgContainer>
       <Img src={item.img}/>
       </ImgContainer>
       <InfoContainer>
       <Title>{item.title}</Title> 
       <Desc>{item.desc}</Desc> 
       <Button>SHOP NOW</Button> 
       </InfoContainer>    
       </Slide>
       ))}
     </Wrapper>
     <Arrow  direction="right" onClick={()=>handleClick("right")} >
    <BsFillArrowRightCircleFill/>
     </Arrow>
    </Container>
  )
}

export default Slider