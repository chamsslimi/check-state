
  
import React from 'react';
import './App.css';
import Profile from './Component/Profile.js';
import Interval from './Component/Interval.js';
    
class App extends React.Component {
  constructor () {
    super()
    this.state={
      isShow:true,
     }
    }  
   
 

   render(){
    return (
      <div className="App" style={{boxSizing:'borderBox' ,
      borderRadius: '10px',
      borderStyle:'double',
      width: '500px',
      height: '600px',
      color :'black',
      backgroundColor: 'rgb(227, 223, 223)',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginLeft:'370px'
      }}>
        
       <button onClick={()=>this.setState({isShow:!this.state.isShow}) }> {this.state.isShow?"hide":"show"}
          </button>{this.state.isShow?<Interval/>:null}
       {this.state.isShow?<Profile />:null}
        
       
      </div>
      
    );
   }
  }
  


export default App;
