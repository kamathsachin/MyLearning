import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Total Items
            <span className="badge badge-pill badge-secondary m-2">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
