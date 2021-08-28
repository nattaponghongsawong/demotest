import React from 'react'

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-dark">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li> <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">About</a>
      </li> <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Skill</a>
      </li> <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Portfolio</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Contaxt us</a>
      </li>
    
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>    
      
  </ul>
</nav>

    )
}
