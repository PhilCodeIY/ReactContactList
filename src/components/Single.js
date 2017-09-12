import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from '../data.js'
import { NavLink } from 'react-router-dom';
import Individual from './Individual.js'

export default class Single extends Component {
  render() {
    const id = this.props.match.params.id

    var favContact = data.find(person  => person.id == id)

    return (
      <div>
        <Individual key={favContact.id} person={favContact} />
      </div>



    )
  }
}
