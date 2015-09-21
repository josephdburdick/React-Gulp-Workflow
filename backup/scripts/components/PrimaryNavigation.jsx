module.exports = (App) => {
  // let React = require('react');
  let React = App.libraries.React;
  // let { Router, Route, Link } from 'react-router';
  // let Router = App.Router,
  //     Route = App.Route,
  //     Link = Router.Link;

  const styles = {};

  let PrimaryNavigation = React.createClass({
    render(){
      return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">Adoptive {this.props.route}</a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="/work" style={styles.link} activeStyle={styles.activeLink}>Work</a></li>
                <li><a href="/services" style={styles.link} activeStyle={styles.activeLink}>Services</a></li>
                <li><a href="/about" style={styles.link} activeStyle={styles.activeLink}>About Us</a></li>
                <li><a href="/thoughts" style={styles.link} activeStyle={styles.activeLink}>Thoughts</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Search</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });
  // let dark = 'hsl(200, 20%, 20%)';
  // let light = '#fff';
  // styles.wrapper = {
  //   padding: '10px 20px',
  //   overflow: 'hidden',
  //   background: dark,
  //   color: light
  // };
  //
  // styles.link = {
  //   padding: 11,
  //   color: light,
  //   fontWeight: 200
  // };
  //
  // styles.activeLink = Object.assign({}, styles.link, {
  //   background: light,
  //   color: dark
  // });

  return PrimaryNavigation;
};
