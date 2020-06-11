$(() => {
//color shceme https://www.isharearena.com/wp-content/uploads/2018/04/Smart-city-illustration-for-Website-header-UI.png
//https://www.isharearena.com/wp-content/uploads/2018/04/Art-Website-UI-Header.jpg
console.log('app.js', $)
//toggle dark mode button, hamburger icon, nav separate elements
const $body = $('body');
const $header = $('.header');
const $projectsWrapper = $('.projects-wrapper');
const $projectItems = $('.projectItems');
const $darkModeButton = $('.dark-mode-container');
const $stylesheetLink = $('#styles');
//dark mode toggle button
const toggleSlider = $('.slider, .slider:before');
toggleSlider.on('click', ()=>{
    
    $stylesheetLink.attr('href', 'darkstyle.css');
    
})
//end dark mode toggle code
//open nav page
$('nav button').on('click', () => {
    $('nav').toggleClass('open');
    $darkModeButton.toggleClass('dark-open');
});

$(window).on('resize', () => {
    if (window.innerWidth > 768) {
        $('nav').removeClass('open');
    }
})
//close navbar when clicking on links
$('.left li').on('click', ()=>{
    $('nav').toggleClass('open');
    $darkModeButton.toggleClass('dark-open');
})
//close nav page
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
//link spreadsheet for contents
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


function app(projectsArr){
    let i = 0;
    console.log('inside app - projects', projectsArr)
    projectsArr.forEach( project => {
    i++;
    // let $createDiv = $('<div>').addClass('project-item');
    let $createDiv = $('<div>').addClass(`project-item item${i}`);
    console.log($createDiv)
    let $addTitle = $('<h4>').text(project.title);
    let $addImage = $('<img>').attr('src', project.image).attr('alt', project.description);
    let $addDescription = $('<p>').text(project.description);
    let $addLink = $('<a>').attr('href', project.url).text('Code')
    $addDescription.append($addLink);
    $createDiv.append($addTitle).append($addImage).append($addDescription);
    $projectItems.append($createDiv);
    $projectsWrapper.append($projectItems);
    })
}
//end  jquery
//contact form ref https://www.w3schools.com/howto/howto_css_contact_form.asp

})