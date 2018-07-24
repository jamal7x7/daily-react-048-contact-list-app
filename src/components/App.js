import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Contact List App</h1>
  </header>
)

const Items = (props) => (
  <div className=' artboard ' >

      <svg viewBox="0 0 200 100" >
        <ellipse cx="100" cy="50" rx="100" ry="50" />
      </svg>
      
      
    </svg>
  </div>
)

const Menu = (props) => (
  <div className='side-bar'>
    <div className='menu-icones'>

      

    </div>
  </div>
)

class ContactListApp extends Component {
  
  state = {

 

  }
  


  componentDidMount() {


  }

  

  render () {
    return (
      <div 
      className='App-container'>

        <Menu 
          
        />
        <Items 
      
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <ContactListApp />

  </div>
)

export default App

