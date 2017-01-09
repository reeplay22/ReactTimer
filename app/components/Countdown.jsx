var React = require('react');
var Clock = require('Clock')


var Countdown = React.createClass({

  render: function () {
    return (
      <div>
        <h3>This is the Countdown</h3>
        <Clock totalSeconds ={129} />
      </div>
    )
  }

});

module.exports = Countdown;
