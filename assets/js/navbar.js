"use Strict";

// target elements 
const barIcon = document.getElementsByClassName('bar')[0];
const xMarkIcon = document.getElementsByClassName('xmark')[0];
const navbarList = document.getElementsByClassName('navbar-items')[0];
let navbarListItems = document.getElementsByClassName('navbar-item');
navbarListItems = [...navbarListItems];


barIcon.addEventListener('click', (e)=> {
    barIcon.setAttribute('style', 'display:none');
    xMarkIcon.setAttribute('style', 'display:block');
    navbarList.setAttribute('style', 'display: block');
});


xMarkIcon.addEventListener('click', (e)=> {
    xMarkIcon.setAttribute('style', 'display:none');
    barIcon.setAttribute('style', 'display:block');
    navbarList.setAttribute('style', 'display: none');
});


navbarListItems.forEach(navbarListItem => {
    navbarListItem.addEventListener('click', (e)=>{
        navbarList.setAttribute('style', 'display: none');
        xMarkIcon.setAttribute('style', 'display:none');
        barIcon.setAttribute('style', 'display:block');
    })
});

document.addEventListener('click', (e) => {
    console.log(e.target)
    // console.log(navbarList.contains(e.target))
    console.log( barIcon.contains(e.target));
    
    if (!navbarList.contains(e.target) && !barIcon.contains(e.target)){
        navbarList.setAttribute('style', 'display: none');
        xMarkIcon.setAttribute('style', 'display:none');
        barIcon.setAttribute('style', 'display:block');
    }
})
