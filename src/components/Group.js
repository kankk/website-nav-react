import React, { Component } from 'react';

import Card from './Card';

import '../assets/styles/Group.scss';

class Group extends Component {
  render() {
    const website = this.props.website;

    const cards = this.props.website.links.map(link => 
      <Card key={link.title} card={link}></Card>
    );

    return(
      <div className="group" id={website.id}>
        <p className="group-title">{ website.group }</p>
        {cards}
      </div>
    );
  }
}

export default Group;