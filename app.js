console.log('app.js', $)
//toggle dark mode button, hamburger icon, nav separate elements

const $body = $('body');

const $mainPage = $('.main-page');
const $header = $('.header');
const $mainBody = $('.main-body');
const $title = $('<div>').addClass('main-title').html('<p>Naama Paulemont</p><p>Software Engineer</p>')
$header.append($title);
const $aboutMe = $('<div>').addClass('about-me').html('<h3>About Me</h3><article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper. Consequat semper viverra nam libero justo laoreet sit amet. Eleifend donec pretium vulputate sapien. Sem nulla pharetra diam sit. Cras ornare arcu dui vivamus arcu. A erat nam at lectus urna duis. Ut aliquam purus sit amet luctus venenatis. Orci ac auctor augue mauris. Nunc consequat interdum varius sit amet. Tempus egestas sed sed risus pretium quam vulputate dignissim. Erat velit scelerisque in dictum non consectetur a erat. Senectus et netus et malesuada fames. Tincidunt eget nullam non nisi est.</article>');
$mainBody.append($aboutMe);
const $projectWrapper = $('<div>').addClass('projects-wrapper');

const $contactMe = $('<div>').addClass('contact-me').html('<h3>Get In Touch</h3>');
const $buttons = $('<div>').html('<button>Github</button><button>LinkedIn</button><button>Email</button><p><a href="mailto:0naama0@gmail.com">Send to 0naama0@gmail</a></p>')
$contactMe.append($buttons);
$mainBody.append($contactMe);
const $footer = $('<footer>').html('<p>Made with love by Naama Paulemont</p>');
$mainPage.append($footer);
//chemdoodle for N P interactive design

