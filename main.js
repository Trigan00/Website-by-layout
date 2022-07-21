let items = document.querySelectorAll('.topnav a')
const icon = document.querySelector('.menuIcon')
const mediaQuery = window.matchMedia('(max-width: 768px)')

let CurrentColor ='#74c7d5'


function OpenOrCloseMenu() {
    icon.classList.toggle("change");
    document.querySelector('.topnav').classList.toggle("responsive");

    if(mediaQuery.matches) items.forEach((item) => item.classList.toggle('But'))                
}


function changeBackColor (color){
    //repaints the border of the icon
    CurrentColor = color
    document.querySelector('.menuIcon').style.borderRight = `3px solid ${CurrentColor}`

    //repaints the border at the buttons
    let buttons = document.querySelectorAll('.But')
    buttons.forEach((item) => item.style.borderRight = `3px solid ${CurrentColor}`)

    //collapses the menu
    OpenOrCloseMenu()
}


items.forEach((item) => {
    item.onmousedown = function(){
        this.style.backgroundColor = ''
    } 
    item.onmouseenter = function(){
        this.style.backgroundColor = CurrentColor
    }
    item.onmouseleave = function(){
        this.style.backgroundColor = ''
    }    
})

document.addEventListener("scroll", function() {
    const servicesEl = document.querySelectorAll('.section')
    servicesEl.forEach((elem) => {
        if(isVisible(elem)){
            if(elem.className == 'Home section') return CurrentColor = '#74c7d5'
            if(elem.className == 'Services section') return CurrentColor = '#df5c64'
            if(elem.className == 'About section') return CurrentColor = '#91778e'
            if(elem.className == 'Work section') return CurrentColor = '#a1ca6c'
            if(elem.className == 'Contacts section') return CurrentColor = '#82c8bd'
        }
    })

})


function isVisible (ele) {
    var rect = ele.getBoundingClientRect();
  
    return (
        rect.top <= 100 && rect.top >=0
    )
}

// document.addEventListener('wheel', function(event) {
//     console.log(event.deltaY);
// });
