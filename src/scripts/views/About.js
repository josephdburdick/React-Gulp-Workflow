let
  React = require('react'),
  Card = require('../components/Card.js'),
  Jumbotron = require('../components/Jumbotron.js'),
  About = React.createClass({
    render(){
      return (
        <div id="about" className="fill-viewport">
          <Jumbotron>
            <h1>This is the About page</h1>
            <a href="#/about" className="btn-white btn-outline btn-lg">Learn more</a>
          </Jumbotron>
          <section>
            <div className="container">
              <div className="section-title text-center">
                <h2><span className="text-rule text-rule--above">Work</span></h2>
              </div>
              <div className="row row-flex row-flex-wrap case-studies">
                <div className="col-sm-6">
                  <Card>
                    <div className="card-body">
                      <div className="project-brand">Yale Medicine</div>
                      <div className="project-title">
                        Redesigning Yale Medicine's Digital Experience</div>
                      <div className="action-link"><a href="" className="btn btn-lg btn-transparent padding-left--0">See the case study <i className="glyphicon fa fa-chevron-right"></i></a></div>
                    </div>
                  </Card>
                </div>
                <div className="col-sm-6">
                  <Card>
                    <div className="card-body">
                      <div className="project-brand">Bundoo</div>
                      <div className="project-title">Building and Online Community Among New Parents</div>
                      <div className="action-link"><a href="" className="btn btn-lg btn-transparent padding-left--0">See the case study <i className="glyphicon fa fa-chevron-right"></i></a></div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  });
  module.exports = About;
