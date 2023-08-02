import React from "react";
import styled from "styled-components";
import { BsLightbulb, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { mobile } from "../Responsive";

const Container = styled.div`
  background-color: black;
  color: white;
  ${mobile({backgroundcColor:"BsLightbulb"})}
  ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding:"10px 0px"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 12px;
  cursor: pointer;
  ${mobile({display:"none"})}

`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  padding-left: 10px;
  width: 300px;
  border-radius: 50px;
`;
const Input = styled.div`
  border: none;
  ${mobile({width:"50px"})}

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize:"24px"})}

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:"2",justifyContent:"center"})}

`;
const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({fontSize:"12px", marginLeft:"10px"})}

`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer style={{ color: "gray", fontSize: 16 }}>
            <input placeholder="Search"></input>
            <BsSearch style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Alok.</Logo>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN </MenuItem>
          <MenuItem>
            <AiOutlineShoppingCart />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
