// const fetch = require('node-fetch');


let city

const getValue = () => {
    city = document.getElementById('123').value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=877b59e2e991f956d0394235b7de8467`)
    .then (function (resp) {return resp.json()})
    .then (function (data) {
        console.log(data);
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = Math.round(data.main.temp - 273.15) + ' °C';
        document.querySelector('.feels_like').textContent = 'Ощущается как ' + Math.round(data.main.feels_like-273.15) + ' °C';
    })
    .catch(function() {
    })
}




    
// $(document).ready(function() {
//     $('a.myLinkModal').click( function(event){
//         event.preventDefault();
//         $('#myOverlay').fadeIn(297,	function(){
//         $('#myModal') 
//         .css('display', 'block')
//         .animate({opacity: 1}, 198);
//         });
//     });
    
//     $('#myModal__close, #myOverlay').click( function(){
//         $('#myModal').animate({opacity: 0}, 198, function(){
//         $(this).css('display', 'none');
//         $('#myOverlay').fadeOut(297);
//         });
//     });
//     });