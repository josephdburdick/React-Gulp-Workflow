let
  React = require('react'),
  Footer = React.createClass({
    render(){
      return (
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="btn">Get in touch</div>
                <div className="">Check out our work</div>
              </div>
            </div>
          </div>
        </footer>
      );
    }
  });

module.exports = Footer;
