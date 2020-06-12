$(() => {

console.log('app.js', $)

const $body = $('body');
const $header = $('.header');
const $projectsWrapper = $('.projects-wrapper');
const $projectItems = $('.projectItems');
const $darkModeButton = $('.dark-mode-container');
const $stylesheetLink = $('#styles');
//dark mode toggle button
const toggleSlider = $('.slider, .slider:before');
const $darkModeCheckbox = $('#darkmodeCheck');
//use property to check for checked
//toggle between stylesheets
toggleSlider.on('click', ()=>{
    if($darkModeCheckbox.prop('checked')){
        console.log($darkModeCheckbox.prop('checked'))
        $stylesheetLink.attr('href', 'style.css');
    } else if($darkModeCheckbox.prop('checked') === false){
        $stylesheetLink.attr('href', 'darkstyle.css');
    }

})
//end dark mode toggle code

//navbar code
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
//sticky nav code ref https://codepen.io/_codemics/pen/PwEbYJ/
// grab the initial top offset of the navigation 
let stickyNavTop = $('nav').offset().top;
		   	
// our function that decides weather the navigation bar should have "fixed" css position or not.
let stickyNav = function(){
 let scrollTop = $(window).scrollTop(); // our current vertical position from the top
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
//END sticky code
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
//html contact form ref https://www.w3schools.com/howto/howto_css_contact_form.asp

})