import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=a&api_key=E4gdE6SRftYEcG1sMV4CB7bHcW7bhKTF')
        .then(res => res.json())
        .then(gifs => this.handleFetch(gifs))
    }

    handleFetch(gifdata) {
        let random = Math.floor(Math.random() * (gifdata.data.length - 3))
        this.setState({
            gifs: gifdata.data.slice(random, random + 3)
        })
    }

    searchFetch = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=E4gdE6SRftYEcG1sMV4CB7bHcW7bhKTF`)
        .then(res => res.json())
        .then(gifs => this.handleFetch(gifs))
    }

    render() {
        return(
            <div>
            <GifSearch searchFetch={this.searchFetch}/>  
            <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}