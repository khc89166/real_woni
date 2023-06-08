$(document).ready(function(){
    let logoImg = $('.logo-img > img')
       
   
    
logoImg.mouseover(function(){
    $(this).attr('src',$(this).data("animated"))
})
logoImg.mouseout(function(){
    $(this).attr('src',$(this).data("static"))
})

})