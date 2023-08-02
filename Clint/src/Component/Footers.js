import styled from "styled-components";
import { BsFacebook, BsInstagram, BsTwitter,  } from "react-icons/bs";
import {SiGooglemaps} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephoneFill} from 'react-icons/bs'
import { mobile } from "../Responsive";

const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}

`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=> props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 25px;
`;

const Center = styled.div`
display: flex;
flex-direction: row;
flex: 1;
padding: 20px;
${mobile({display:"none"})}

`;


const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
display: flex;
flex-wrap: wrap;  
`;

const ListItem = styled.li`
 width: 50px;
 margin-bottom: 10px; 
`;

 const Right = styled.div`
 flex: 1;
 padding: 20px;
${mobile({backgroundColor:"lightBlue"})}

 `;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
font-size: 300;
`;




const Payment = styled.div`

`




const Footers = () => {
  return (
    <Container>
    <Left>
      <Logo>Alok.</Logo>
      <Desc>There are many variations of passage of lorem Ipsum available ,but 
        the majority hav suffered alteration in some from, by injected humour, 
        or randomised word which dom't look even slightly believable.ˀ </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <BsFacebook />
        </SocialIcon>

        <SocialIcon color="E4405f">
          <BsInstagram />
        </SocialIcon>

        <SocialIcon color="55ACEE">
          <BsTwitter />
        </SocialIcon>
      </SocialContainer> 
    </Left>
    <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Women Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
      </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem><SiGooglemaps style={{marginRight:"15px"}}/>Laxmi nagar link road goregaon west mumbai 400104</ContactItem> 
        <ContactItem><BsTelephoneFill style={{marginRight:"15px"}}/>+91 84510 32412 </ContactItem> 
        <ContactItem><AiOutlineMail style={{marginRight:"15px"}}/>salok2857@gmail.com </ContactItem> 
        <Payment/>
   </Right>
  </Container>
);
};

export default Footers