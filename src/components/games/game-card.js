import React from 'react';
import { Link } from 'react-router-dom';
const GameCard = props => {
    const game = props.game
    return (
        <Link style={{ textDecoration: 'none' }} to={"/gameinfo/" + game.Name}>
            <div className="p-3 mb-3 card text-dark">
                <div className="row no-gutters">
                    <div className="no-gutters">
                        <div className="rank-card">
                            <div>{game.Rank}</div>
                            <div>Rank</div>
                        </div>
                    </div>
                    <div className="no-gutters col-sm-3">
                        <div className="name">{game.Name}</div>
                        <div>{game.Year}</div>
                        <div className="sec-text">Released:</div>
                    </div>
                    <div className="col-sm-3">
                        <div className="mt-3">
                            {game.Platform}
                        </div>
                        <div className="sec-text">
                            Platform
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="mt-3">
                            {game.Genre}
                        </div>
                        <div className="sec-text">
                            Genere
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;