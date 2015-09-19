module.exports = (App, element) => {
  let $ = require('jquery');
  const config = App.config;

  $(window).on('resize', () => {
    $(element).each(function(){
      let ratio = config.defaults.heightRatio;
      $(this).css({'min-height': Math.round($(this).outerWidth() * ratio )});
    });
  }).trigger('resize');
};
