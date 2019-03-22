import React from "react"
import axios from "axios"
// import { StaticQuery, graphql } from "gatsby"
import Neos from "../../components/nasa/Neos"

export default class Neas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: this.dateToday(),
            loading: false,
            error: false,
            neoData: null,
            neos: {},
            neosLoading: false
        }
    }

    dateToday = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + `-` + mm + `-` + dd;
    }

    fetchNeo = (url) => {
        this.setState({ loading: true });
        return axios
            .get(url)
            .then(response => {
                const neo ={};
                neo[response.data.id] = response.data;
                this.setState({
                    neos: {...this.state.neos, ...neo}
                });
            })
            .catch(error => {
                // handle error
                console.log(error);
            })

    }

    fetchNeos = () => {
        this.setState({ loading: true });
        return axios
            .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.today}&end_date=${this.state.today}&api_key=${process.env.GATSBY_NASA_API_KEY}`)
            .then(response => {
                // success
                const neos = response.data.near_earth_objects[this.state.today];

                [...neos].forEach((neo) => {
                    const url = neo.links.self;
                    this.fetchNeo(url);
                });

                this.setState({
                    loading: false,
                    neoData: response.data.near_earth_objects[this.state.today]
                });

            })
            .catch(error => {
                // handle error
                console.log(error);
                this.setState({
                    loading: false,
                    error
                });
            })
    }

    componentDidMount() {
        this.fetchNeos();
    }

    componentDidUpdate() {
        console.log(this.state.neos, this.state.neos.length);
    }

    render () {
        return (
            this.state.loading ?
                <div>loading...</div>
            :
                <div>

                    {Object.keys(this.state.neos).length > 0 ? (
                        // <div>yes</div>
                        <Neos neos={this.state.neos}/>
                    ) : null }
                </div>
        )
    }
}
