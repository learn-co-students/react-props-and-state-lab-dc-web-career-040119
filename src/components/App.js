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

  onChangeType = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    fetch(`/api/pets${this.state.filters.type === 'all' ? '' : '?type=' + this.state.filters.type}`)
      .then(resp => resp.json())
      .then(pets =>  this.setState({pets: pets}))
      .catch(() => console.log('FAIL'))
  }

  onAdoptPet = (id) => {
    const pets = [...this.state.pets]
    const petIndex = pets.findIndex(pet => pet.id === id)
    pets[petIndex].isAdopted = true

    this.setState({
      pets: pets
    })
  }
  //   fetch(`api/pets/${id}` , {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({isAdopted: true})
  //   })
  //     .then(resp => resp.json())
  //     .then(console.log)
  //     .catch(console.log)
  // }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
