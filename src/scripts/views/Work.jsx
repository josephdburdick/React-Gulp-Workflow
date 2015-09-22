let
  React = require('react'),
  Card = require('../components/Card'),
  Jumbotron = require('../components/Jumbotron'),

  Work = React.createClass({
    render(){
      return (
        <div>
          <Jumbotron>
            <h1>This is the Work page</h1>
            <a href="#/about" className="btn-black btn-outline btn-lg">Learn more</a>
          </Jumbotron>
          <section id="work">
            <div className="container">
              <div className="section-title text-center">
                <h2><span className="text-rule --above">Work</span></h2>
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
          <section id="services">
            <div className="container">
              <div className="section-title text-center">
                <h2><span className="text-rule --above">Services</span></h2>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <figure className="figure --tint --white bg-cover" data-heightratio>
                    <div className="figure-body">
                      <div className="position-absolute--bottom full-width text-center">
                        <div className="action-link"><a href="" className="btn btn-lg btn-transparent padding-left--0">See what we do <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section id="about">
            <div className="container">
              <div className="section-title text-center">
                <h2><span className="text-rule --above">About Us</span></h2>
              </div>
              <div className="row">
                <div className="team-carousel">
                  <div className="col-sm-12">
                    <div className="card card-base">
                      <div className="card-body">
                        <div className="project-brand">Project Brand</div>
                        <div className="project-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</div>
                        <div className="btn btn-lg btn-transparent action-link">See the case study <i className="glyphicon fa fa-chevron-right"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  });

module.exports = Work;
