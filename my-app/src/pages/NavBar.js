import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render(){
    return (
      <div className="nav-bar">
        <h1>WEBSITE</h1>
        <div>
          <Link to="/AboutMe">AboutMe</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    );
  }
}

function Btn(props){
  return (
    <button className="btn">{props.label}</button>
  );
}