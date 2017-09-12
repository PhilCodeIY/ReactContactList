import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Individual = (props)=> {

let person = props.person;


  return (

    <div className="person-stuff">
          <ul className="person_bio_ul">
            <li className="person_content" key={person.id}>
              <div className="image-box">
                <NavLink activeClassName="selected" className="nav-link" to="/">Back</NavLink>
                  <img className="person-image" src={person.picture.large} alt="person" />
              </div>
              <div className="person-info">
                <li>{person.name.first}&nbsp;{ person.name.last}</li>
                <li></li>
                <li>{person.email}</li>
                <li>{person.phone}</li>
                <li>{person.location.city},&nbsp;{ person.location.state}</li>
              </div>
            </li>
          </ul>
        </div>
      );

    };

    export default Individual;


    // <div className="card" style="width: 20rem;">
    //   <img src={person.picture.large}></img>
    //     <div className="card-block">
    //     </div>
    //       <ul>
    //         <li>{person.id}&nbsp;{person.name.first}&nbsp;{ person.name.last}</li>
                // <li>{person.email}</li>
                // <li>{person.phone}</li>
                // <li>{person.location.city}, &nbsp;{ person.location.state}</li>

    //         <div className="card-block">
    //             <Link to="./List">
    //               <button id="next">
    //                 Return to the listing
    //               </button>
    //             </Link>
    //         </div>
    //       </ul>
    // </div>
