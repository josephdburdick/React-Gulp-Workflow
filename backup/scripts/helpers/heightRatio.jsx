module.exports = (element) => {
  let $ = require('jquery');

  $(window).on('resize', () => {
    $(element).each(function(){
      let ratio = $(this).data('heightratio');
      $(this).css({'min-height': Math.round($(this).outerWidth() * ratio )});
    });
  }).trigger('resize');
};
