$(() => {
//color shceme https://www.isharearena.com/wp-content/uploads/2018/04/Smart-city-illustration-for-Website-header-UI.png
//https://www.isharearena.com/wp-content/uploads/2018/04/Art-Website-UI-Header.jpg
console.log('app.js', $)
//toggle dark mode button, hamburger icon, nav separate elements

const $body = $('body');

const $mainPage = $('.main-page');
const $header = $('.header');
const $mainBody = $('.main-body');

// const $navButton = $('nav button');
//     const $nav = $('nav')
//     $navButton.on('click', () => {
//         $nav.toggleClass('open')
//     })


//dark mode toggle button
const toggleSlider = $('.slider, .slider:before');
toggleSlider.on('click', ()=>{
    $body.toggleClass('dark-mode')
    $header.toggleClass('header-dark')
})
//have to change to jquery somehow

$('nav button').on('click', () => {
    $('nav').toggleClass('open');
});

$(window).on('resize', () => {
    if (window.innerWidth > 768) {
        $('nav').removeClass('open');
    }
})
//end dark mode toggle code

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
//carousel sources: https://codepen.io/pascaloliv/pen/LVZaeE https://codepen.io/junaama/pen/WNrreKM https://kenwheeler.github.io/slick/



})