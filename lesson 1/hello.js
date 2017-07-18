'use strict';

/* global React, ReactDOM */

const App = React.createClass({
  getInitialState: () => ({
    who: 'world'
  }),

  handleChange: function(event) {
    const nextWho = event.target.value;
    this.setState({
      who: nextWho
    });
  },

  render: function() {
    const message = (this.state.who.trim() === '') ? 'Hello?' : `Hello ${this.state.who}`;

    return React.createElement('div', null,
      React.createElement('h1', null, message),
      React.createElement('input', {
        onChange: this.handleChange,
        value: this.state.who,
        type: 'text'
      })
    );
  }
});

ReactDOM.render(React.createElement(App),
  document.getElementById('app'));
