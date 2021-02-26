import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        query: ""
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) =>  {
        event.preventDefault()
        this.props.searchFetch(this.state.query)
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Search</label>
                <input type="text" value={this.state.query} onChange={event => this.handleSearch(event)}></input>
                <input type="submit" ></input>
            </form>
        )
    }
}