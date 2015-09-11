// React.render(
//   <overhorTemplate />,
//   document.querySelector('#overhor-scroll-example')
// );

  var HelloWorld = React.createClass({
    render: function() {
      return (
        <p>
          Hello, <input type="text" placeholder="Your name here" />!
          It is {this.props.date.toTimeString()}
        </p>
      );
    }
  });

  setInterval(function() {
    React.render(
      <HelloWorld date={new Date()} />,
      document.querySelector('#overhor-scroll-example')
    );
  }, 500);
