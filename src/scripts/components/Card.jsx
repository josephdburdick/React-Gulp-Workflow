module.exports = (App) => {
  let React = App.libraries.React;
  let Card = React.createClass({
    render(){
      return (
        <div className="card card-base case-study vertical-center" data-heightratio>
          {this.props.children}
        </div>
      );
    }
  });
  return Card;
};
