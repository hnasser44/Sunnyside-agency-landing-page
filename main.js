const headerUL = document.getElementById('header-ul')
const Article_header = document.querySelector('.hidden-header')


 function myFunction(x) {
        if (x.matches) { // If media query matches
                headerUL.classList.add('hide-ul')
                Article_header.classList.remove('hidden-header')
        }
        else{
                headerUL.classList.remove('hide-ul')
                Article_header.classList.add('hidden-header')
        }
      }
      
var x = window.matchMedia("(min-width: 700px)")
myFunction(x)
x.addListener(myFunction)
