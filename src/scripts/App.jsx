  var Body = React.createClass({ displayName: "Body",
    componentWillMount(){

    },
    render(){
      return(
        <div>Hello World</div>
      );
    }
  });

  React.render(
    <Body />, document.querySelector("#yield")
  );
