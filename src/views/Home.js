import React, { Component } from 'react';

import websites from '../assets/websites';

import Sidebar from '../components/Sidebar';
import Group from '../components/Group';

class Home extends Component {

  render() {

    const groups = websites.map(website => 
      <Group key={website.id} website={website}></Group>
    );

    return (
      <div className="home">
        <Sidebar websites={websites}></Sidebar>
        { groups }
      </div>
    );
  }
}

export default Home;