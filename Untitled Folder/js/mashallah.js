$(document).ready(function() {
    $('#menu a').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 5
        }, 2500,'easeInOutExpo');
        event.preventDefault();
    
});
    // $(function() {                     
    //   $('#about4').waypoint(              
    //     function() {
    //       $('#about4').show();
    //       }
        
    //   )});

$('#skill4').waypoint(function() {
  $(this).css({
    borderColor: 'blue'
  });
}, { offset: 'bottom-in-view' });
//             $(function() {                   
//   $('#skill4').waypoint(         
//     function() {
//       $('#skill1').addClass('activebar1');
//       $('#skill2').addClass('activebar2');
//       $('#skill3').addClass('activebar3');
//       $('#skill4').addClass('activebar4');
//     }
//   )
// });
// ANIMATING TEXT IN FROM SIDES
    $(function() {   
                    $("#about1").waypoint(function() {
                    $("#aboutbackend").animate({"left": "0px"},"slow");});

                 });
    $(function() {   
                    $("#about1").waypoint(function() {
                    $("#aboutfrontend").animate({"right": "0px"},"slow");});

                 });
      $(function() {                     
      $('#menu').waypoint(              
        function() {
          $('#menu').addClass('activenav').removeClass('nav');
          }
        
      )});
            
    $("#login").hover(function () {
          $('#login').hide('slow')
          $('#circlecontent').show()  
    });
  

       
});
