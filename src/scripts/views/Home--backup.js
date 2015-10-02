let
  React = require('react'),
  Block = require('../components/Block.js'),
  Jumbotron = require('../components/Jumbotron.js'),
  Fill = require('../helpers/Fill.js'),
  Dock = require('../components/Dock.js'),
  Overflow = require('../components/Overflow.js'),
  Home = React.createClass({
    render(){
      return (
        <div>
          <Jumbotron>
            <h1>Adoptive is strategy-led experience design</h1>
            <a href="#/about" className="btn-white btn-outline btn-lg">Learn more</a>
          </Jumbotron>
          <section id="work">
            <div className="container">
              <div className="section-title text-center">
                <h2><span className="text-rule text-rule--above">Featured Work</span></h2>
              </div>
              <div className="row row-flex row-flex-wrap case-studies">
                <div className="col-sm-6">
                  <Block>
                    <div className="card-body">
                      <div className="project-brand">Yale Medicine</div>
                      <div className="project-title">
                        Redesigning Yale Medicine's Digital Experience</div>
                      <div className="action-link"><a href="#/work" className="btn btn-lg btn-transparent padding-left--0">See the case study <i className="glyphicon fa fa-chevron-right"></i></a></div>
                    </div>
                  </Block>
                </div>
                <div className="col-sm-6">
                  <Block>
                    <div className="card-body">
                      <div className="project-brand">Bundoo</div>
                      <div className="project-title">Building and Online Community Among New Parents</div>
                      <div className="action-link"><a href="#/work" className="btn btn-lg btn-transparent padding-left--0">See the case study <i className="glyphicon fa fa-chevron-right"></i></a></div>
                    </div>
                  </Block>
                </div>
              </div>
            </div>
          </section>
          <section id="services">
            <div className="container">
              <div className="section-title text-center">
                <h2><span className="text-rule text-rule--above">Services</span></h2>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <Block ratio="0.45" backgroundImage="https://c2.staticflickr.com/8/7390/16385635445_9e942c1121_k.jpg" backgroundSize="cover">
                    <Fill tintColor="white">
                      <div className="dock position-absolute--bottom full-width text-center">
                        <div className="action-link"><a href="#/services" className="btn btn-lg btn-transparent">See what we do <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </div>
                    </Fill>
                  </Block>
                </div>
              </div>
            </div>
          </section>
          <section id="about">
            <div className="container">
              <div className="section-title text-center">
                <h2><span className="text-rule text-rule--above">About Us</span></h2>
              </div>
            </div>

            <Overflow className="carousel carousel-overflow" target=".col-xs-4">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>
                <div className="carousel-item">
                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>

                  <Block ratio="1">
                    <div className="card-body">
                      <Dock bottom>
                        <div className="action-link text-right"><a href="#/about" className="btn btn-lg btn-transparent">Meet Team Member <i className="glyphicon fa fa-chevron-right"></i></a></div>
                      </Dock>
                    </div>
                  </Block>
                </div>

              </div>
            </Overflow>
          </section>
        </div>
      );
    }
  });

module.exports = Home;
