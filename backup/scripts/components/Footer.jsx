module.exports = (App) => {
  let React = App.libraries.React;
  let Footer = React.createClass({
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
  return Footer;
};
