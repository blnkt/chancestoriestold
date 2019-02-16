import React from "react"
import PropTypes from "prop-types"
import { Transition, animated } from 'react-spring/renderprops'

export default class Person extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  commaSepTitles(films) {
    let titles = '';

    for (const [index, film] of films.entries()) {
      if (index === 0) {
        titles = film.title;
      } else {
        titles += ", " + film.title;
      }
    }

    return titles
  }

  onClick = () => {
    this.props.onClick(this.props.person.id);
  };

  render () {
    return (
      <div className={ this.props.isOpen ? 'open' : '' }>
        <figure className="summary" onClick={this.onClick} >
          <img src={"https://api.adorable.io/avatars/285/" + this.props.person.name + ".png"} alt={this.props.person.name} />
          <figcaption>
            <p>
              <span>{ this.props.person.name }</span>
            </p>
          </figcaption>
        </figure>
        <Transition
          native
          items={this.props.isOpen}
          from={{ maxHeight: 0, opacity: 0 }}
          enter={[{ maxHeight: 400, opacity: 1 }]}
          leave={{ maxHeight: 0, opacity: 0 }}>
            {show => show && (
              props => (
                <animated.div className="details" style={props}>
                  <div className="details-inner">
                    <p>
                      <span>{ this.props.person.name }</span> was born in <span>{ this.props.person.birthYear }</span>
                      { this.props.person.homeworld
                        ? <span> on <span>{this.props.person.homeworld.name}</span>. </span>
                        : null
                      }
                    </p>
                    { this.props.person.films.length > 0
                      ?
                        <p>
                          They have appeared in {this.commaSepTitles(this.props.person.films)}.
                        </p>
                      : null
                    }
                  </div>
                </animated.div>
              )
            )}
        </Transition>
      </div>
    )
  }
}
