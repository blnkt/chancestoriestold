import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames";

export default class Header extends React.Component {
  static propTypes = {
    siteTitle: PropTypes.string,
    menuLinks: PropTypes.array,
    siteTitleMobile: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      hamburgerActive: false
    }
  }

  onClick = () => {
    const buttonState = this.state.hamburgerActive;
    this.setState({hamburgerActive: !buttonState});
  }

  render () {
    let hamburgerClasses = classnames({
      "hamburger-box": true,
      "button-unstyled": true,
      "active": this.state.hamburgerActive
    })

    let navClasses = classnames({
      "main-nav": true,
      "active": this.state.hamburgerActive
    })

    let siteTitleClasses = classnames({
      "site-title": true,
      "active": this.state.hamburgerActive
    })

    return (
      <div className="background-primary">
      <header className="main-header">
        <h1 className={siteTitleClasses}>
          <Link to="/" >
            <span className="desktop-only">{this.props.siteTitle}</span>
            <span className="mobile-only">CST</span>
          </Link>
        </h1>
        <nav className={navClasses}>
          {
            this.props.menuLinks.map(link =>
              <Link className="nav-item" key={link.name} to={link.link}>{link.name}</Link>
            )
          }
        </nav>
        <button className={hamburgerClasses} onClick={this.onClick}>
          <div className="hamburger-inner"></div>
        </button>
      </header>
    </div>
    )
  }
}
