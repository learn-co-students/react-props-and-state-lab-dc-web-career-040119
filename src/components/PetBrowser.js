import React from 'react'
import Pet from './Pet'
import { timingSafeEqual } from 'crypto';

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props.pets)
    return (
    <div className="ui cards" >
      {this.props.pets.map(petObj => {
        // console.log(<Pet pet={petObj}/>);
        return <Pet pet={petObj} onAdoptPet = {this.props.onAdoptPet} key={petObj.id}/>
      })}
    </div>
    )
  }
}

export default PetBrowser
