import React from 'react'

import axios from 'axios'
import ListItem from './listItem'
import { NavLink, withRouter } from "react-router-dom";

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      filterproducts: [],
      filter: [],
      search: '',
      tempValue: ''
      
    }
    
    
    
  }
  
  // filtered=()=>{
  // const filtered = this.state.products.filter((item) => {
  //   let value = this.props.match.params.category ? this.props.match.params.category.toLowerCase() : '';
  //   const space = value.split(' ').join('')
  //   console.log(space)
  //   const searchValue = item.bsr_category.toLowerCase();
  //   const sValue = searchValue.split(' ').join('')
  //   return sValue.indexOf(space) !== -1
  // })
  // }
  componentDidMount() {

    const { location } = this.props;

    let queryParam = location.search.slice(2, location.search.length);

    axios.get('https://demo8421975.mockable.io/products')
      .then(res => {
        const list = res.data.products;
        this.setState({ products: list });
        console.log(this.state.products)



      ///  
        const filtered = this.state.products.filter((item) => {
          let value = this.props.match.params.category ? this.props.match.params.category.toLowerCase() : '';
          const space = value.split(' ').join('')
          console.log(space)
          const searchValue = item.bsr_category.toLowerCase();
          const sValue = searchValue.split(' ').join('')
          return sValue.indexOf(space) !== -1
        })
          ////
        const updatedFiltered = filtered.filter((item) => {
          const searchValue = item.brand.toLowerCase();
          return searchValue.indexOf(queryParam) !== -1
        })

        this.setState({
          filter: updatedFiltered,
          search: queryParam
        })
        console.log(this.state.filter)
        console.log(this.props.history.location)
      })
  }

  handleSearch = (event) => {

    const { history } = this.props;
    const { filter } = this.state;

    const inputValue = event.target.value.toLowerCase()

    history.push({ search: `?=${inputValue}` });
    const filtered = this.state.products.filter((item) => {
      const searchValue = item.brand.toLowerCase();
      return searchValue.indexOf(inputValue) !== -1
    })
    this.setState({
      search: inputValue,
      filter: filtered
    })
  }
  

  componentDidUpdate(prevProps, prevState) {

    //let queryParam = location.search.slice(2, location.search.length);

    if (prevProps.location.pathname !== this.props.location.pathname) {
/////
      const filtered = this.state.products.filter((item) => {
        let value = this.props.match.params.category ? this.props.match.params.category.toLowerCase() : '';
        const space = value.split(' ').join('')
        console.log(space)
        const searchValue = item.bsr_category.toLowerCase();
        const sValue = searchValue.split(' ').join('')
        return sValue.indexOf(space) !== -1
      })
///
      const updatedFiltered = filtered.filter((item) => {
        const searchValue = item.brand.toLowerCase();
        return searchValue.indexOf(this.state.search) !== -1
      })

      this.setState({
        filter: updatedFiltered,
      })

    }
     
  }

  render() {

    const { search } = this.state;

    return (
      <div>
        <input value={search} placeholder="search by brand name" onChange={this.handleSearch} />
      <div></div>
        {this.state.filter.map(products =>
          <ListItem
            brand={products.brand}
            name={products.name}
            img={products.img}
            price={products.price}
            key={products.index}
            bsr_category={products.bsr_category}
          />

        )}
      </div>
    )
  }
}

export default withRouter(Categories);


    // const filtered=()=>{
    //   const filtered = this.state.products.filter((item) => {
    //     let value = this.props.match.params.category.toLowerCase()
    //     const space = value.split(' ').join('')
    //     console.log(space)
    //       const searchValue = item.bsr_category.toLowerCase();
    //       const sValue = searchValue.split(' ').join('')
    //       return sValue.indexOf(space) !== -1
    //   })
    //   this.setState({ filter:

    // handleSearch = (event) => {
  //   const route = event.target.value.toLowerCase();
  //   const querry = event.target.value.toLowerCase();
  //   console.log(querry);
  // this.props.history.push(`/home&kitchen/${route}`)
  //   const filtered = this.state.filter.filter((item) => {
  //       const searchValue = item.bsr_category.toLowerCase();
  //       return searchValue.indexOf(event.target.value.toLowerCase()) !== -1
  //   })
  //   this.setState({filter: filtered,value:route})
  // }

  
    // const filtered=()=>{
    //   const filtered = this.state.products.filter((item) => {
    //     let value = this.props.match.params.category.toLowerCase()
    //     const space = value.split(' ').join('')
    //     console.log(space)
    //       const searchValue = item.bsr_category.toLowerCase();
    //       const sValue = searchValue.split(' ').join('')
    //       return sValue.indexOf(space) !== -1
    //   })
    //   this.setState({ filter: filtered})
    // }