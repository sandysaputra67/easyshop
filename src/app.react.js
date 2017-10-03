import React, { Component } from 'react'
import {AppContainer} from 'react-hot-loader'

export default class App extends Component {
    constructor(props){
      super(props)
    }
  
    componentDidMount(){
    }
  
    render(){
      return (
      <AppContainer>
          <div>
          <div style={{background: '#fff',padding: '10px', height: '100%', textAlign: 'center'}}>
            <h1>Welcome to Mobx Boilerplate by arrowfunxtion</h1>
            Bismillah it works finally alhamdulillah
            
          </div>
      </div>
      </AppContainer>)
    }
  }