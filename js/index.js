$(document).ready(function(){
    let logoImg = $('.logo-img > img')
       
   
    
logoImg.mouseover(function(){
    $(this).attr('src',$(this).data("animated"))
})
logoImg.mouseout(function(){
    $(this).attr('src',$(this).data("static"))
})
function skillCircle(id, percent, color) {
    let bar = new ProgressBar.Circle(id, {
        strokeWidth:15,
        trailWidth:15,
        color: color,
        buration: 1400,
        step: function(state, line) {
            line.setText(Math.round(line.value()* 100) + "%")
        }
    })
    bar.animate(percent)
}

skillCircle('#ae',0.8,'#00005b')
skillCircle('#pr',0.8,'#00005b')
skillCircle('#cinema4d',0.7,'#232b75')
skillCircle('#ps',0.75,'#001e36')
skillCircle('#ai',0.75,'#330000')

$('.tab-menu li a').click(function(e) {
    e.preventDefault();

    // Remove 'active' class from all tabs
    $('.tab-menu li').removeClass('active');
    $('.tab-content .tab-item').removeClass('active');

    // Add 'active' class to the clicked tab
    $(this).parent('li').addClass('active');

    // Show the corresponding tab content
    var tabId = $(this).attr('href');
    $(tabId).addClass('active');
  });

})