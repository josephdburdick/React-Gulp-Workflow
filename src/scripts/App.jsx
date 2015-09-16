  var testRequire = require('./test_module.jsx');
  var React = require('react');
  var Body = React.createClass({ displayName: "Body",
    componentWillMount(){},
    render(){
      // testRequire();
      let test = testRequire;
      return(
        <div>{testRequire()}</div>
      );
    }
  });

  React.render(
    <Body />, document.querySelector("#yield")
  );
