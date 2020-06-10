$(() => {
//color shceme https://www.isharearena.com/wp-content/uploads/2018/04/Smart-city-illustration-for-Website-header-UI.png
//https://www.isharearena.com/wp-content/uploads/2018/04/Art-Website-UI-Header.jpg
console.log('app.js', $)
//toggle dark mode button, hamburger icon, nav separate elements
const $body = $('body');
const $header = $('.header');
const $nav = $('nav');
//dark mode toggle button
const toggleSlider = $('.slider, .slider:before');
toggleSlider.on('click', ()=>{
    $body.toggleClass('dark-mode')
    $header.toggleClass('header-dark')
})
//end dark mode toggle code
//open nav page
$('nav button').on('click', () => {
    $('nav').toggleClass('open');
});

$(window).on('resize', () => {
    if (window.innerWidth > 768) {
        $('nav').removeClass('open');
    }
})
//close nav page
// //make navbar sticky ref: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
// // Get the navbar
// // var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// let sticky = $nav.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     $nav.classList.add("sticky")
//   } else {
//     $nav.classList.remove("sticky");
//   }
// }
// //end sticky navbar
// $(window).scroll(function(){
//     if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
//         menu.fadeOut('fast', function(){
//             $(this).removeClass('default').addClass('sticky').fadeIn('fast');
//         });
//     }else if($(this).scrollTop() <= pos.top && menu.hasClass('sticky')){
//         menu.fadeOut('fast', function(){
//             $(this).removeClass('sticky').addClass('default').fadeIn('fast');
//         });
//     }
// });

//START ref https://codepen.io/_codemics/pen/PwEbYJ/
// grab the initial top offset of the navigation 
var stickyNavTop = $('nav').offset().top;
		   	
// our function that decides weather the navigation bar should have "fixed" css position or not.
var stickyNav = function(){
 var scrollTop = $(window).scrollTop(); // our current vertical position from the top
      
 // if we've scrolled more than the navigation, change its position to fixed to stick to top,
 // otherwise change it back to relative
 if (scrollTop > stickyNavTop) { 
     $('nav').addClass('sticky');
 } else {
     $('nav').removeClass('sticky'); 
 }
};

stickyNav();
// and run it again every time you scroll
$(window).scroll(function() {
 stickyNav();
});
//END
//link spreadsheet for carousel contents
let sheetUrl = 'https://docs.google.com/spreadsheets/d/15rkSjf8Ls-mUssYyTipx13ORrQYkhsUKen46LnwLKno/edit?usp=sharing'
let sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/15rkSjf8Ls-mUssYyTipx13ORrQYkhsUKen46LnwLKno/od6/public/values?alt=json'
$.ajax({
    url: sheetAsJSON,
  }).then((data) => {
      console.log("data", data);
      const projects = data.feed.entry.map(project => {
        return {
            title: project.gsx$title.$t,
            image: project.gsx$image.$t,
            description: project.gsx$description.$t,
            url: project.gsx$url.$t
        }
      })
      app(projects)
  })
  .catch( err => console.log('err', err))
console.log('running after ajax')

function app(projectsArr){
    console.log('inside app - projects', projectsArr)
    projectsArr.forEach( project => {
    let $updateImage = $('.carousel-item img');
    console.log($updateImage)
    $updateImage.attr('src', project.image)
    })
}
//end carousel jquery

//carousel sources: https://codepen.io/pascaloliv/pen/LVZaeE https://codepen.io/junaama/pen/WNrreKM https://kenwheeler.github.io/slick/



})