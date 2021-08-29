import React from 'react'

export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/group4.jpg" alt="" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Group4</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
   
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
        <li className="nav-header">CHOICE</li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="nav-icon fas fa-home" />
            <p>
              Home
            </p>
          </a>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <a href="pages/kanban.html" className="nav-link">
=======
          <a href="index3.html" className="nav-link">
>>>>>>> 304717f1744e632fbdb3212980a2179b186d2240
            <i className="nav-icon fas fa-user-friends" />
            <p>
              About
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-skull" />
            <p>
              Skill
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/mailbox/mailbox.html" className="nav-link">
                <i className="fab fa-github nav-icon" />
                <p>Apitran</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/compose.html" className="nav-link">
                <i className="fab fa-js nav-icon" />
                <p>Nattapong</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/read-mail.html" className="nav-link">
                <i className="fab fa-python nav-icon" />
                <p>Sivuch</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/mailbox/read-mail.html" className="nav-link">
                <i className="fab fa-css3-alt nav-icon" />
                <p>Janejire</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Portfolio
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-phone-alt" />
            <p>
              Contaxt us
            </p>
          </a>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    )
}
