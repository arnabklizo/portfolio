let toglerBtn = document.querySelector('.togglarIcon');
let navlist = document.querySelector('.navlist');
let socialNavbar = document.querySelector('.socialNavbar');
let navLinks = document.querySelectorAll('.navLink')
// created variables for each elements 



toglerBtn.addEventListener('click', function () {  //after click nav button
    navlist.classList.toggle("activeNav"); // nav bar <ul> will toggle a class
    socialNavbar.classList.toggle("activeNav") // social links will toggle a class
})


// Function to hide navbar when clicking outside
document.addEventListener('click', function (event) {
    if (!navlist.contains(event.target) && !toglerBtn.contains(event.target)) {
        hideNav();
    }
});



navLinks.forEach((navLink) => { //at click each navbar tag
    navLink.addEventListener('click', function () {
        hideNav();
        navLinks.forEach(a => a.classList.remove('active')) //remove from all
        navLink.classList.add('active'); // new class will add
    });
})

function hideNav() {
    socialNavbar.classList.remove("activeNav");
    navlist.classList.remove("activeNav");
}






// footer date 
let date = new Date().getFullYear(); // current year has been added to a variable

let dateBox = document.querySelector(".dateBox"); // created variable for soan ['.dateBox']
dateBox.innerText = date; // current date has been implemanted to that footer span.