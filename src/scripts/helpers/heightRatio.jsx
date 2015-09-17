module.exports = (App) => {
  const config = App.config;
  let $ = App.libraries.$;

  let heightRatio = () =>{
    $(window).on('resize', () =>{
      $('[data-heightRatio]').each(function(){
        let ratio = $(this).attr('data-heightRatio') ? parseFloat($(this).attr('data-heightRatio')) : config.defaults.heightRatio;
        $(this).css({'min-height': $(this).outerWidth() * ratio });
      });
    }).trigger('resize');
  };

  return heightRatio;
};
