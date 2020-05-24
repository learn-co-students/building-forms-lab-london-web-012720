import React, { Component } from 'react'
import BandInput from "../components/BandInput"
import {connect} from "react-redux"

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map( (band,id) => {
  return <li key={id}>Name: {band.name}</li>
  })
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({type: "ADD_BAND", payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
