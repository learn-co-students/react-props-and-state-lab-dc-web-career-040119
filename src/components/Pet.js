import React from 'react'

class Pet extends React.Component {
  render() {
    // console.log("Pet's props:", this.props.pet)
    let {pet: {name, gender, type, age, weight, isAdopted, id}, handleAdoptPet} = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {gender === "female" ? '♀ ' : '♂ '}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
        {
          isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button"
          data-id={`${id}`}
          onClick={() => handleAdoptPet(id)}>Adopt pet</button>
        }
        </div>
      </div>
    )
  }
}

export default Pet
