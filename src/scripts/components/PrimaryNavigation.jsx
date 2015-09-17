module.exports = (App) => {
  let React = App.libraries.React;
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
                <li><a href="#">Work</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Thoughts</a></li>
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
  return PrimaryNavigation;
};
