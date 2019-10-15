import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function HomePage() {
  return (
      <div>
        <NavBar />
        <section className="">
          <div className="box">
            <div className="post">
              <h2>hey my dudes</h2>
              <p>I'm an aspiring youngin' looking to git good.</p>
              <p>This website is mainly for my portfolio and practicing React, but <strong>later on</strong> I'd like to add little widgets and functions related to my personal research and such.</p>
            </div>
          </div>
        </section>
        <section className="bg">
          <div className="box">
            <div className="post">
              <h2>Skills</h2>
            </div>
          </div>
        </section>
        <section className="">
          <div className="box">
            <div className="post">
              <h2>Projects</h2>
            </div>
          </div>
        </section>
        <Footer />
      </div>
  )
}