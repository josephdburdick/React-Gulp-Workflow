  import * as React from "../../bower_components/react/react.min.js";

  var Body = React.createClass({ displayName: "Body",
    componentWillMount(){ },
    componentDidMount(){ },
    componentWillReceiveProps(){ },
    componentDidUpdate(prevProps, prevState){ },
    componentWillUnmount(){ },
    render(){
      let route = window.location.hash;
      return(
        <div>The requested route is: ${route}</div>
      );
    }
  });

  React.render(
    <Body />, document.querySelector("#yield")
  );
