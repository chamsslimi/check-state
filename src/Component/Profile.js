import image from '../image.jpg'; 
import React from 'react';
class Profile extends React.Component {
    constructor () {
      super()
      this.state={
        Person:{
            fullName:"Slimi Chams",
            bio:<p>Je suis diplomée de l’Ecole Supérieure des Ingénieurs de Medjez El Bab, je me suis spécialisée en génie 
            topographie et géomatique.j assiste  à une 
             formation au sein d'une start up nommée gomycode. </p>,
             Profession:" Ingénieure en génie topographie et géomatique",
             imgSrc:<img src={image} alt='...' />
          }
      }
    }
    componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
     console.log("componentWillUnmount")
   }

     render(){
      return (
<div>
    <p> {this.state.Person. fullName}</p>
    <p>{this.state.Person.Profession}   </p>
    <p>{this.state.Person. bio}</p>
    
    <div>{this.state.Person.imgSrc} </div>

    </div>
          );
        }
        
      
    }
     
     export default  Profile;
        
        