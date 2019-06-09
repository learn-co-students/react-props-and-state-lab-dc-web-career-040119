import React from 'react'

class Filters extends React.Component {

handleFindPet = () => {
  console.log('attempting to find pets')
  // make fetch, using the response
  // the response we get back is an array of pets
  // We want to store that array of pets into the state
}

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.handleChangeFilter}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.handleFindPet} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
