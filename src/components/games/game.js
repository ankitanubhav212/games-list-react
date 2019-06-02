import React, { Component } from 'react';
import Filters from './filter';
import GameCard from './game-card';
import vgsales55c93b8 from './vgsales55c93b8.csv';
import Papa from '../../../node_modules/papaparse';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            oldGames: []
        };
        this.updateData = this.updateData.bind(this);
    }

    //filters games list by given input 
    search(key) {
        if (key !== '') {
            const filteredGame = this.state.data.filter(game => game.Name.toLowerCase().match(key.toLowerCase()));
            this.setState({ data: filteredGame });
        } else {
            this.setState({ data: this.state.oldGames })
        }
    }

    //sorts the game list as per radio button input
    handleSort(key, sort) {
        function compareValues(key, order = 'asc') {
            return function (a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    return 0;
                }

                const varA = (typeof a[key] === 'string') ?
                    a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ?
                    b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA < varB) {
                    comparison = 1;
                } else if (varA > varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        }
        const games = this.state.data;
        games.sort(compareValues(key, sort));
        this.setState({ data: games });
    }


    componentDidMount() {
        Papa.parse(vgsales55c93b8, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: this.updateData
        });
    }

    //set the data to state and store in localeStorage
    updateData(result) {
        const data = result.data;
        this.setState({ data: data }, () => localStorage.setItem('games', JSON.stringify(this.state.data)));
        this.setState({ oldGames: data });
    }

    //returns list of game card components
    getCards() {
        return this.state.data.map((game, index) => {
            return (
                <div className="col-8" key={index} >
                    <GameCard game={game} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col no-gutters">
                    <Filters callbackSearch={(key) => { this.search(key) }}
                        callbackSort={(key, value) => { this.handleSort(key, value) }} />
                    {this.getCards()}
                </div>
            </div>
        );
    }
}

export default Game;