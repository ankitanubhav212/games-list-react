import React, { Component } from 'react';

class filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mt-4 mb-4">
                <div className="row">
                    <div className="col-sm-4">
                        <input type="text" onChange={e=>this.props.callbackSearch(e.target.value)} className="form-control" placeholder="Search game..." />
                    </div>
                    <div className="col-sm-4 padding-6">
                    <label className="form-check-inline">Sort By </label>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" onChange={e=>{this.props.callbackSort("Year",e.target.id)}} className="form-check-input" id="asc" name="optradio" value="year-asc" />New to Old
                        </label>
                    </div>
                   
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" onChange={e=>{this.props.callbackSort("Year",e.target.id)}} className="form-check-input" id="desc" name="optradio" value="year-desc" />Old to New
                        </label>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default filters;