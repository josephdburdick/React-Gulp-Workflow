module.exports = (App) => {
  const config = App.config;
  let $ = App.libraries.$;

  let heightRatio = () =>{
    $(window).on('resize', () =>{
      $('[data-heightratio]').each(function(){
        // let ratio = $(this).attr('data-heightRatio') ? parseFloat($(this).attr('data-heightratio')) : config.defaults.heightRatio;
        let ratio = config.defaults.heightRatio;
        $(this).css({'min-height': Math.round($(this).outerWidth() * ratio )});
      });
    }).trigger('resize');
  };

  return heightRatio;
};
