import styled from "styled-components";
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Products from "../Component/Products";
import Newsletter from "../Component/Newsletter";
import Footers from "../Component/Footers";
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";
import  { useEffect, useState } from "react";
import { publicRequest } from "../requistMethords";

const Container = styled.div``;

const Title = styled.h1``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  margin-right: 10px;
  padding: 10px;
  ${mobile({ width: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc" >Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footers />
    </Container>
  );
};

export default ProductList;



