'use strict';

/* global React, ReactDOM */

const teams = {
  'winterfell': 'Dire Wolves',
  'oldtown': 'Maesters',
  'pyke': 'Reavers',
  'king\'s landing': 'White Cloaks',
  'braavos': 'Titans',
  'mereen': 'Harpies',
  'sunspear': 'Serpents',
  'lannisport': 'Lions',
};

function uppercaseWords(str) {
  return str.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
}

function getMessage(city) {
  if (city) {
    if (city.toLowerCase() in teams) {
      return `Go ${uppercaseWords(city)} ${teams[city.toLowerCase()]}!`;
    }
    if (city.toLowerCase() === 'valar morghulis') {
      return 'Valar Dohaeris';
    }
    return `I don't know the city "${city}"`;

  }
  return 'Go ahead...';
}

const App = React.createClass({
  getInitialState: () => ({
    city: ''
  }),

  handleChange: function(event) {
    const myCity = event.target.value;
    this.setState({
      city: myCity
    });
  },

  render: function() {
    const message = getMessage(this.state.city);

    return React.createElement('div', null,
      React.createElement('h1', null, 'Type in your favorite city:'),
      React.createElement('input', {
        onChange: this.handleChange,
        value: this.state.city,
        type: 'text'
      }),
      React.createElement('p', null, message)
    );
  }
});

ReactDOM.render(React.createElement(App), document.getElementById('sportsball'));
