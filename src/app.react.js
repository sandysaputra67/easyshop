import React, { Component } from 'react'
import {AppContainer} from 'react-hot-loader'
import { Navbar } from './components/navbar/index';
import { ProductItem } from './components/product-item/index';
import { MediumContainer, NarrowContainer } from './layouts/container';
import { dummyProducts } from './data/dummy-products';
import { ProductCategories } from './components/product-categories/index';
import { dummyCategories } from './data/dummy-categories';
import {HashRouter as Router, Route} from 'react-router-dom'
import { Homepage } from './pages/home'
import { Searchpage } from './pages/search'
import { Categoriespage } from './pages/categories';
import { Listingpage } from './pages/listing'
import { SearchKeyword } from './pages/search-keyword';
import { Wishlistpage } from './pages/wishlist';


export default class App extends Component {
    constructor(props){
      super(props)
    }
  
    componentDidMount(){
    }
  
    render(){
      return (
      <AppContainer>
        <div style={{paddingTop: '50px'}}>
          <Router>
            <div>
              <Route path="/" exact component={Homepage} />
              <Route exact path="/search" component={Searchpage} />
              <Route path="/search/:keyword" component={SearchKeyword} />
              <Route exact path="/categories" component={Categoriespage} />
              <Route path="/categories/:category_name" component={Listingpage} />
              <Route path="/wishlist" component={Wishlistpage}/>
            </div>
          </Router>
        </div>
      </AppContainer>)
    }
  }