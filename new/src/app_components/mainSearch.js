import React from 'react'
import axios from 'axios'
import ListItem from "./../listItem"


class MainSearch extends React.Component{
constructor(props){
    super(props)
    this.state = {
        products: [],
        product: [],
        value:'',
      }
   
    }
    
    componentDidMount() {
      console.log(this.props)
      axios.get('https://demo8421975.mockable.io/products')
      .then(res => {
        const list = res.data.products;
        console.log(list)
        console.log(this.props)
        this.setState({ products: list, product: list });
        const query = this.props.match.params.search;
        const filtered = this.state.products.filter((item) => {
          const searchValue = item.brand.toLowerCase();
          return searchValue.indexOf(query) !== -1
        })
        this.setState({product:filtered})
      })
  }
    handleSearch = (event) => {
      let a = this.props;
      debugger;
      console.log(event)
      const route = event.target.value.toLowerCase()
      this.props.location.search = route;
      
      const filtered = this.state.products.filter((item) => {
          const searchValue = item.brand.toLowerCase();
          return searchValue.indexOf(route.toLowerCase()) !== -1
      })
      this.setState({value:route})
      console.log(this.state.value)
      console.log(this.props.match.params)
      this.setState({ product: filtered})
     
}
       

    render(){
  
        return(
            <div>
<input  placeholder="search by brand name" onChange={this.handleSearch} />
             
{this.state.product.map(products =>
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
export default MainSearch