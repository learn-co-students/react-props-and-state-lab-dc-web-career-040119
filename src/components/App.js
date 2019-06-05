import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilterType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPets = (event) => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
      .then(response => response.json())
      .then(petsObjects => this.setState({
        pets: petsObjects
      }))
    }
    else {
    fetch(`/api/pets?type=${this.state.filters.type.toLowerCase()}`)
    .then(response => response.json())
    .then(petsObjects => this.setState({
      pets: petsObjects
    }))
  }
}

  adoptPet = (pet) => {
    // let t = this 
    // debugger
    // console.log(event)
    //make a copy of the pet state array, find the pet to update, then update in copy
    let newPetArray = [...this.state.pets]
    let petToUpdate = newPetArray.find(petObj => petObj.id === pet)
    petToUpdate.isAdopted = true
 
    //replace pet state array with copy, which includes the updated pet
    this.setState({
      pets: newPetArray
    })

    // , () => {
    //   event.target.innerText = "Already adopted"
    //   event.target.className = "ui disabled button"
    // }
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
