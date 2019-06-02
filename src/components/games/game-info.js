import React, { Component } from 'react';

class GameInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {}
        }
    }

    componentDidMount() {
        var games = JSON.parse(localStorage.getItem('games'));
        const filteredGame = games.filter(game => game.Name === this.props.match.params.name);
        const game = filteredGame[0];
        this.setState({ game: game });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="name-info">{this.state.game.Name}</div>
                <div><span className="sec-info-text">Released :</span><span>{this.state.game.Year}</span></div>
                <div><span className="sec-info-text">Rank :</span><span>{this.state.game.Rank}</span></div>
                <div><span className="sec-info-text">Genre :</span><span>{this.state.game.Genre}</span></div>
                <div><span className="sec-info-text">Platform :</span><span>{this.state.game.Platform}</span></div>
                <div><span className="sec-info-text">Publisher :</span><span>{this.state.game.Publisher}</span></div>
                <div><span className="sec-info-text">Global Sale :</span><span>{this.state.game.Global_Sales}</span></div>
            </div>
        );
    }
}


export default GameInfo;