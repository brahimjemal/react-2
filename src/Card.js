import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.url} />
                <h1>{this.props.titre}</h1>
                <h2>{this.props.job}</h2>
                <h3>{this.props.age}</h3>
            </div>
        )
    }
}

export default Card;