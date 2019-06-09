import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // {console.log(this.props.listOfPets)}
    let pets = this.props.listOfPets
    return (<div className="ui cards">
      {pets.map(petObj => <Pet
        key={petObj.key}
        pet={petObj}
        handleAdoptPet={this.props.handleAdoptPet}
        /> )}
    </div>
  )
  }
}

export default PetBrowser
