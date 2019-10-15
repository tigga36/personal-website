import React, { Component } from 'react'
import NavBar from './NavBar'

export default function AboutMe() {
  return (
    <div className="container">
      <NavBar />
      <AboutCard />
    </div>
  )
}

class AboutCard extends React.Component{
  render(){
    return(
      <div className="main-card">
        <h2>ABOUT</h2>
        <p>This website's front-end was implemented with React, and Django for back-end. While this website does not need a large-scale database for now, back-end specifications are subject to change.</p>
      </div>
    );
  }
}