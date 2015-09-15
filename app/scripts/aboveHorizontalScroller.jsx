var aboveHorizontalScroller = React.createClass({
  render(){
    return(
      <div className="overhor-scroll">
        <div className="overhor-scroll--container">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src="http://placehold.it/700x420&text=Slide 1" />
              </div>
              <div className="carousel-item">
                <img src="http://placehold.it/700x420&text=Slide 2" />
              </div>
              <div className="carousel-item">
                <img src="http://placehold.it/700x420&text=Slide 3" />
              </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="icon-prev" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="icon-next" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
});
