import React from 'react';

import "bootstrap/dist/css/bootstrap.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import styled from 'styled-components'

import { BrowserRouter, Route, hashHistory, Switch} from "react-router-dom"
import Navigation from './app_components/Navigation';
import MainSearch from './app_components/mainSearch'

import Categories from './categories'



const Tittle = styled.h4`
color: grey`;




class App extends React.Component {
 
  // homeKitchen = (event) => {
  //   const filtered = this.state.products.filter((item) => {
  //     const searchValue = item.bsr_category.toLowerCase();
  //     return searchValue.indexOf(event.target.value.toLowerCase()) !== -1
  //   })
  //   this.setState({ product: filtered })
  // }
  // sportOutdors = (event) => {
  //   const filtered = this.state.products.filter((item) => {
  //     const searchValue = item.bsr_category.toLowerCase();
  //     return searchValue.indexOf(event.target.value.toLowerCase()) !== -1
  //   })
  //   this.setState({ product: filtered })
  // }
  // healthCare = (event) => {
  //   const filtered = this.state.products.filter((item) => {
  //     const searchValue = item.bsr_category.toLowerCase();
  //     return searchValue.indexOf(event.target.value.toLowerCase()) !== -1
  //   })
  //   this.setState({ product: filtered })
  // }
  // babyProd = (event) => {
  //   const filtered = this.state.products.filter((item) => {
  //     const searchValue = item.bsr_category.toLowerCase();
  //     return searchValue.indexOf(event.target.value.toLowerCase()) !== -1
  //   })
  //   this.setState({ product: filtered })
  // }



  render() {
    return (
          <Container>
        <BrowserRouter >
        <Row>
          <Col lg={4}>
            <Navigation />
          </Col>
          <Col lg={true}>
          <Container>
            <Row>
              <Switch>
                
          <Route  path="/home" component={Categories}/>
          <Route path = '/:category' component={Categories}/>
          {/* <Route path="/home&kitchen" component={HomeKitchen} />
          <Route path="/sports&outdors/(:search)" component={SportsOutdors} />
          <Route path="/babyProducts" component={BabyProducts} />
          <Route path="/health&care" component={HealthCare} /> */}
         
          </Switch>
          </Row>
          </Container>
          </Col>
          </Row>
        </BrowserRouter>
        {/* <div>
        {this.state.product.map(products =>
          <ListItem
            brand={products.brand}
            name={products.name}
            img={products.img}
            price={products.price}
            key={products.index}
            bsr_category={products.bsr_category}
          />
        )
        }
        </div> */}
        </Container>
    )
  }
}


export default App;
