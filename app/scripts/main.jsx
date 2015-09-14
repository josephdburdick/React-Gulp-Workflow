// React.render(
//   <overhorTemplate />,
//   document.querySelector('#overhor-scroll-example')
// );

  var HelloWorld = React.createClass({
    componentWillMount(){
      this.setState({name: ''});
    },
    onChange(event){
      // this.state.name.set(event.currentTarget().value);
      // this.state.name = event.currentTarget().value;
      this.setState({name: event.currentTarget.value});
    },
    render() {
      return (
        <div>
          <input type="text" onChange={this.onChange} placeholder="Your name here" />
          <p>Hello, {this.state.name}! It is {this.props.date.toTimeString()}</p>
        </div>
      );
    }
  });

  setInterval(function() {
    React.render(
      <HelloWorld date={new Date()} />,
      document.querySelector('#overhor-scroll-example')
    );
  }, 500);
