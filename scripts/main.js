// React.render(
//   <aboveHorizontalScroller />,
//   document.querySelector('#overhor-scroll-example')
// );

  var HelloWorld = React.createClass({displayName: "HelloWorld",
    componentWillMount(){
      this.setState({name: ''});
    },
    onChange(event){
      this.setState({name: event.currentTarget.value});
    },
    render() {
      return (
        React.createElement("div", null, 
          React.createElement("input", {type: "text", onChange: this.onChange, placeholder: "Your name here"}), 
          React.createElement("p", null, "Hello, ", this.state.name, "! It is ", this.props.date.toTimeString())
        )
      );
    }
  });

  setInterval(function() {
    React.render(
      React.createElement(HelloWorld, {date: new Date()}),
      document.querySelector('#overhor-scroll-example')
    );
  }, 500);
