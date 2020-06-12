Project Schedule

|  Day | Deliverable | Time Spent
|---|---|---|
|Day 1: Mon| Wireframes / MVP / Timeline| Complete
|Day 2: Tue| Pseudocode / Build HTML / Responsive Design / CSS Grid/Flexbox| Complete
|Day 3: Wed| Nav Bar and Hamburger / About Me| Complete
|Day 4: Thur| Projects / Contact Me Page / Working Prototype| Complete
|Day 5: Fri| Finalization| Incomplete

### Components
##### Desktop version
1. Toggle dark mode
2. Use grid
3. Clicking on nav bar links jumps to section of window
4. On scoll down, fade in effect on elements
5. Scrollbar
6. Contact form

##### Mobile version
1. Toggle dark mode
2. Clicking on nav bar links jumps to section of window
3. Scrollbar
4. Carousel through projects
## References
| What I want to incorporate | Link to site
---|---
|Toggle Dark Mode: | https://whitneylubin.com/
|Click hamburger to open navigation: | https://pollenlondon.com/
|On scroll-down fade in images/videos etc: | https://pollenlondon.com/
|Click Nav Bar Items to scroll down in window: | https://www.lianapenn.com/

# Wireframes
Desktop - https://res.cloudinary.com/dzfyk3r12/image/upload/v1591590835/portfolio%20wireframe%20-%20desktop.jpg

Mobile - https://res.cloudinary.com/dzfyk3r12/image/upload/v1591590835/portfolio%20wireframe%20-%20mobile.jpg

# MVP
| Component	| Priority	| Estimated Time |	Time Invested	| Actual Time
|---|---|---|---|---|
|Hamburger	|H	|1hr	|2hr	|-hr
|Project Previews	|H	|3hr	|9+hr	|-hr
|Regular Nav	|H	|1H	|3hr	|-hr
|Adding Contact Form	|H	|2hr	|1hr	|-hr
|Other sections and flex	|M	|4hr	|2hr	|-hr
|Working with API	|H	|3hrs	|1hr	|-hr
|Responsive	|H	|3hr	|12+hr	|-hr
|Social Media Icons	|L	|1hr	|0hr	|-hr
|Total	|H	|18hrs	|31hrs	|-hrs

# PostMVP
| Component	| Priority	| Estimated Time |	Time Invested	| Actual Time
|---|---|---|---|---|
|Carousel	|M	|3hr	|0hr	|-hr
|Dark mode	|L	|1hr	|9hr	|-hr
|Fade-in on scroll	|L	|1H	|0hr	|-hr
|Total	|H	|5hrs	|9hrs	|-hrs

# Code Snippet
```
toggleSlider.on('click', ()=>{
    if($darkModeCheckbox.prop('checked')){
        console.log($darkModeCheckbox.prop('checked'))
        $stylesheetLink.attr('href', 'style.css');
    } else if($darkModeCheckbox.prop('checked') === false){
        $stylesheetLink.attr('href', 'darkstyle.css');
    }
})
```
I struggled thinking of a way to toggle between stylesheets and I used this conditional to target my problem, and I'm very proud of it.

# Issues/Resolutions
* In mobile version, clicking on navbar links didn't close out the navbar before jumping to that section in the page
  *This was resolved through adding another click event on each navbar link*
* For the dark mode style, there was a lot of specificity involved, and I needed to individually style multiple elements
  *This was resolved by creating a separate stylesheet rather than adding upwards of 15+ new classes on elements*
