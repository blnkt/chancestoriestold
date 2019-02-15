import React from "react"
// import PropTypes from "prop-types"

export default class Person extends React.Component {
  commaSepTitles(films) {
    let titles = '';

    if (films.length > 1) {
      for (var film of films) {
        titles = titles + " " + film.title + ", " + film.title
      }
    } else {
      titles = films[0].title
    }

    return titles
  }

  render () {
    return (
      <li>
        <figure>
          <img src={"https://api.adorable.io/avatars/285/" + this.props.person.name + ".png"} alt={this.props.person.name} />
          <figcaption>
            <p>
              <span>{ this.props.person.name }</span>
            </p>
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
                  They have appeared in{this.commaSepTitles(this.props.person.films)}.
                </p>
              : null
            }
          </figcaption>
        </figure>
        </li>
    )
  }
}
