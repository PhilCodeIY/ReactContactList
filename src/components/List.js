import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from '../data.js'
import { NavLink, Link } from 'react-router-dom';


export default class List extends Component {

  render() {
    let Design = <div className="card-title">My Peeps</div>
    let Filler = <div>&nbsp;&nbsp;</div>
    let ContList = data.map((person)=>{
      return (
        <div key={person.id}>
            <Link to={`/Single/${person.id}`}><img className="img-list" src={person.picture.thumbnail} alt='myface'></img>
                &nbsp;&nbsp;{person.name.first}&nbsp;{ person.name.last}
            </Link>
        </div>
      )
    })
    return (

      <div>
        {Design}
        {Filler}
        {ContList}
      </div>

    )}}
