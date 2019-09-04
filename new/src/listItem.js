import React from 'react'
import styled from "styled-components"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Card = styled.div`
width: 50%;
margin: 2%;
text-align:center;
border-radius:5%;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
`;

const Img = styled.img`
width:100%;
border-radius:5%;`


  const ListItem = (props) =>{
    return(
      <Card>
      <div>   
        <div>
        <Img src={props.img}></Img>
        </div>
        <div>Brand: {props.brand}</div>
        <div>Item name - {props.name}</div>
        <div>Price - {props.price}</div>
        <div>Category : {props.bsr_category}  </div>
        <div></div>
      </div>
      </Card>
      
    )
  }
    

  export default ListItem
  
