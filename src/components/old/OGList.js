import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from '../data.js'
import { Link } from 'react-router-dom';


export default class List extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="card" style={{width: "20rem"}}>
              <div>
                <h4 className="card-title">My Peeps</h4>
              </div>
              {data.map(data => (
                <ul>
                  <li><Link to="/Single:id">
                  <img src={data.picture.thumbnail}></img>
                  &nbsp;{data.id}&nbsp;{data.name.first}&nbsp;{ data.name.last}</Link></li>
                </ul>
                ))}
              </div>
          </div>
        </div>
      );
    }
  }
