 var Body = React.createClass({ displayName: 'Body',
    componentWillMount(){ },
    componentDidMount(){ },
    componentWillReceiveProps(){ },
    componentDidUpdate(){ },
    componentWillUnmount(){ },
    render(){
      let route = window.location.hash;
      return (
        <div>The requested route is: {route}</div>
      );
    }
  });

  React.render(
    <Body />, document.querySelector('#yield')
  );
