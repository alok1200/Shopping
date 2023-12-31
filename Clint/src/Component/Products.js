import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter, sort }) => {
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:4000/api/products?category=${cat}`
            : "http://localhost:4000/api/products"
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    if(!cat) return
    setFilteredProducts(products.filter((item) => item.category.includes(cat)));
  }, [products, cat, filter]);

  useEffect(() => {
    if ((sort = "newest")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createAt - b.create)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0,8).map((item) => <Product item={item} key={item.id} />
        )}
    </Container>
  );
};

export default Products;


