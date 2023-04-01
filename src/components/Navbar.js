import React from 'react'

export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">{props.logoName}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Versions</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Unit Convertor</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Distance Converter</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
    </>
  )
}
