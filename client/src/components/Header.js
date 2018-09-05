import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        {/* Usually we use the CSS property | class="nav-wrapper" | but we instead use
        className when working with React  */}
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
