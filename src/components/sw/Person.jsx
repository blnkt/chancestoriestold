import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

export default class Person extends React.Component {
  static propTypes = {
  //   children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  commaSepTitles(films) {
    let titles = '';

    if (films.length > 1) {
      for (var film of films) {
        titles = titles + " " + film.title + ", "
      }
    } else {
      titles = films[0].title
    }

    return titles
  }

  onClick = () => {
    this.props.onClick(this.props.person.id);
  };

  render () {
    var personClasses = classNames({
      'person': true,
      'open': this.props.isOpen
    });

    return (
      <li className={ personClasses }>
        <figure className="summary" onClick={this.onClick} >
          <img src={"https://api.adorable.io/avatars/285/" + this.props.person.name + ".png"} alt={this.props.person.name} />
          <figcaption>
            <p>
              <span>{ this.props.person.name }</span>
            </p>
          </figcaption>
        </figure>
        <div className="details">
          <div className="details-inner">
            <p>
              <span>{ this.props.person.name }</span> was born in <span>{ this.props.person.birthYear }</span>
              { this.props.person.homeworld
                ? <span> on <span></span>{this.props.person.homeworld.name} </span>
                : null
              }
              .
            </p>
            { this.props.person.films.length > 0
              ?
                <p>
                  They have appeared in {this.commaSepTitles(this.props.person.films)}.
                </p>
              : null
            }
          </div>
        </div>
      </li>
    )
  }
}
