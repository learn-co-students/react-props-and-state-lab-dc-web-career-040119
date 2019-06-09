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

  handleAdoptPet = (id) => {
    console.log(id)
    // create copy of pets
    let petsCopy = [...this.state.pets]
    let adoptedPet = petsCopy.find(pet => pet.id === id)
    // changes adoptPet to be true when clicked on
    // line 22 also makes it so that the instance of that adopted pet exists in petsCopy (video @ 1:31:00)
    adoptedPet.isAdopted = true
    // update sate with petsCopy
    this.setState({pets: petsCopy})
  }

  // state changing callback
  handleChangeFilter = (event) => {
    console.log('attempting to change filter')
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  // state changing callback
  handleFindPet = () => {
    console.log('attempting to find pets')
    // make fetch, using the response
    // the response we get back is an array of pets
    // We want to store that array of pets into the state
    let type = this.state.filters.type

    // if you filter for all pets, need to fetch to '/api/pets' else need to further define URL. Below is ternary to filter based on selection, interpolating the 'type' using the variable set above
    // fetch(`/api/pets${type !== 'all' ? '?type=${type}' : ""}`)

    // instead of using ternary, can use if statement below
    let URL = '/api/pets'

    if (type !== 'all'){
      URL += `?type=${type}`
    }

    fetch(URL)
    .then(res => res.json())
    .then(petsArray => {
      this.setState({
        pets: petsArray
      })
    })
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
              <Filters
                handleFindPet={this.handleFindPet}
                handleChangeFilter={this.handleChangeFilter}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              listOfPets={this.state.pets}
              handleAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
