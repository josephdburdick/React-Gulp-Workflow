  /*global React:true*/
  var testRequire = require('./components/test_module.jsx');
  var React = require('react');
  var Body = React.createClass({ displayName: "Body",
    componentWillMount(){ },
    componentDidMount(){ },
    componentWillReceiveProps(){ },
    componentDidUpdate(){ },
    componentWillUnmount(){ },
    render(){
      let route = window.location.hash;
      return (
        <div>
          {testRequire()}!<br />
          the route hash is: {route}
        </div>
      );
    }
  });

  React.render(
    <Body />, document.querySelector('#yield')
  );
