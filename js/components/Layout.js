import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'WelcOme',
    };
  }
  render() {
    setTimeout(() => {
      this.setState({title: 'Welc0me Vitaly!1'});
    }, 2000);
    return (
      <div>
        <Header title={this.state.title} />
        <Header title={'Another title'} />
        <Footer />
      </div>
    );
  }
}