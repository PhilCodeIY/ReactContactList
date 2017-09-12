import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from '../data.js'
import { NavLink, Link } from 'react-router-dom';

export default class Single extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="card" style={{width: "20rem"}}>
              <div>
                <Link to="./List">
                    <button id="next">
                      Return to the listing
                    </button>
                </Link>
                  <h4 className="card-title">Single listing</h4>
              </div>
              {data.map(data => (
                <ul>
                  <li><img src={data.picture.medium}></img></li>
                  <li>{data.id}&nbsp;{data.name.first}&nbsp;{ data.name.last}</li>
                  <li>{data.email}</li>
                  <li>{data.phone}</li>
                  <li>{data.location.city}, &nbsp;{ data.location.state}</li>
                </ul>
                ))}
              </div>
          </div>
        </div>
      // <div className="card" style="width: 20rem;">
      //   <img src={data.picture.medium}></img>
      //     <div className="card-block">
      //     </div>
      //       <ul>
      //         <li>{data.id}&nbsp;{data.name.first}&nbsp;{ data.name.last}</li>
                  // <li>{data.email}</li>
                  // <li>{data.phone}</li>
                  // <li>{data.location.city}, &nbsp;{ data.location.state}</li>

      //         <div className="card-block">
      //             <Link to="./List">
      //               <button id="next">
      //                 Return to the listing
      //               </button>
      //             </Link>
      //         </div>
      //       </ul>
      // </div>
    )
  }
}
