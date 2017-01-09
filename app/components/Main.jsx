var React = require('react');
var Navigation = require('Navigation');


var Main = (props) => {
  return (
    <div>
      <div >
        <div>
          <Navigation />
          <h1>Main component Rendered</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
