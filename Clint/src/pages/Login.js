import styled from 'styled-components'
import { mobile } from '../Responsive';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
height: 100vh;
width: 100vw;
 background: url("https://thumbs.dreamstime.com/b/white-retriever-dog-pushing-woman-shopping-bags-cart-29697004.jpg?w=1200") center;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper= styled.div`
width: 30%;
padding: 5px;
background-color: white;
${mobile({width:"75%"})}
`;

const Title = styled.h1`
font-size: 20px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 18px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;

`;



const Login = () => {

  const navigate = useNavigate()
  const [ formData, setFormData] = useState({email: "", password: ""})
  const [message, setmessage]= useState()

  

  const handleChange = (e) => {
    setFormData(p => ({...p, [e.target.name]: e.target.value}))
  }

  const  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await axios.post("http://localhost:4000/api/auth/login", formData)
      localStorage.setItem("user", JSON.stringify(data.data))
      navigate("/")
    } catch (error) {
      setmessage(error.response.data)
    }
  }

  return (
    <Container>
     <Wrapper>
        <Title></Title>
      <Form onSubmit={handleSubmit} >
        
        <Input placeholder="email" name="email" value={FormData.email} onChange={handleChange}/>
        <Input placeholder="Password" name="password" value={FormData.password} onChange={handleChange}/>
        <Agreement>
          By creating an account,I consent to the processing of my   personal
          data in according with the <b>PRIVACY POLICY  </b>
        </Agreement>
        <Button>LOGIN IN</Button>

        {message?.message && <p style={{color: message.success ? "green" : "red"}}>{message.message}</p>}
      </Form>
     </Wrapper>
    </Container>
  )
}

export default Login