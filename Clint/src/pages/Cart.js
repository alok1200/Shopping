import styled from "styled-components";
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Footers from "../Component/Footers";
import { MdAdd, MdRemove } from "react-icons/md";
import { mobile } from "../Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({width:"10PX"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const TopButton = styled.div`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid black;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.span`
${mobile({display:"none"})}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
${mobile({flexDirection:"column"})}

`;

const Info = styled.span`
  flex: 3;
`;


const Product = styled.div`
  display: flex;
  justify-content: space-between;
${mobile({flexDirection:"column"})}

  `;

const ProductDetaile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const Img = styled.img`
  width: 200px;
  `;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  `;

const ProductSize = styled.span``;

const PriceDetaile = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
${mobile({marginBottom:"20px"})}

  `;

const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
  `;

const ProductAmount = styled.div`
  font-weight: 40px;
  margin: 5px;
${mobile({margin:"5px 15px"})}

  `;

  const Summary = styled.span`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
  `;
const SummaryTitle = styled.h1`

`;

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-size: ${props=>props.type === "total" && "500"};
font-weight: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>You Wishlist (0)</TopText>
          </TopTexts>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetaile>
                <Img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/h/e/9/-original-imagpgpeazw6gyzz.jpeg?q=70" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 90934284737486
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 28.5
                  </ProductSize>
                </Details>
              </ProductDetaile>
              <PriceDetaile>
                <ProductAmountContainer>
                  <MdAdd />
                  <ProductAmount>2</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>₹ 3,000</ProductPrice>
              </PriceDetaile>
            </Product>

            <Hr />
            <Product>
              <ProductDetaile>
                <Img src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/h/e/9/-original-imagpgpeazw6gyzz.jpeg?q=70" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 90934284737486
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 28.5
                  </ProductSize>
                </Details>
              </ProductDetaile>
              <PriceDetaile>
                <ProductAmountContainer>
                  <MdAdd />
                  <ProductAmount>2</ProductAmount>
                  <MdRemove />
                </ProductAmountContainer>
                <ProductPrice>₹ 3,000</ProductPrice>
              </PriceDetaile>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ 2,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shopping</SummaryItemText>
              <SummaryItemPrice>₹ 1,500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Sing discount</SummaryItemText>
              <SummaryItemPrice>₹ 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="Total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ 3,300</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footers />
    </Container>
  );
};

export default Cart;
