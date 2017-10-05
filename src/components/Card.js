import React, { Component } from 'react';

import '../assets/styles/Card.scss';

class Card extends Component {

  render() {
    
    const card = this.props.card;
    let cardIcon = null;
    let path = card.icon;
    if (!!card.icon) {
      cardIcon = <img src={path} alt=""/>
    } else {
      cardIcon = <img src={require("../assets/default.png")} alt=""/>
    }

    return(
      <a className="card-a" target="_blank" href={card.link}>
        <div className="card">
          <div className="card-title">
            { cardIcon } { card.title }
          </div>
          <div className="card-desc">
            { card.description }
          </div>
        </div>
      </a>
    );
  }
}

export default Card;