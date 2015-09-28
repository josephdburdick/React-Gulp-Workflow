let
  React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  Link = Router.Link,

  PrimaryNavigation = React.createClass({
    componentDidMount(){
      let nav = React.findDOMNode(this),
          navPosition = nav.getBoundingClientRect(),
          navPlaceholder = document.createElement('div');
          navPlaceholder.style.width = navPosition.width + 'px';
          navPlaceholder.style.height = navPosition.height + 'px';
      let isAdded = false;
      let detectSticky = function(){
        if (window.pageYOffset >= navPosition.top && !isAdded) {
          nav.classList.add('sticky');
          nav.parentNode.insertBefore(navPlaceholder, nav);
          isAdded = true;
        } else if (window.pageYOffset < navPosition.top && isAdded) {
          nav.classList.remove('sticky');
          nav.parentNode.removeChild(navPlaceholder);
          isAdded = false;
        }
      };
      window.addEventListener('scroll', detectSticky);
      //window.addEventListener('scrollstop', detectSticky;
    },
    render(){
      return (
        <div id="nav-primary">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#/">Adoptive {this.props.route}</a>
              </div>

              <div id="navbar" className="navbar-collapse collapse navbar-stroke--bottom">
                <ul className="nav navbar-nav">
                  <li><a href="#/work">Work</a></li>
                  <li><a href="#/services">Services</a></li>
                  <li><a href="#/about">About Us</a></li>
                  <li><a href="#/thoughts">Thoughts</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Search</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });

module.exports = PrimaryNavigation;
