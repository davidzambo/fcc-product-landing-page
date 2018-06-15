const links = document.getElementsByClassName('nav-link');
let navLinks = [];
let tmpSectionHeight = 0;

for (link of links){
    navLinks.push(link.getAttribute('data-target'));
}

const sectionPositions = navLinks.map(link => {
    let l = document.querySelector(link);
    tmpSectionHeight += parseInt(l.getBoundingClientRect().height);
    return tmpSectionHeight;
});
console.log(sectionPositions);

function toggleNavbar(){
    const navbar = document.querySelector('#nav-bar');
    navbar.classList.toggle('open');
}

for (link of links){
    link.addEventListener('click', e => {
        e.preventDefault();
        clearActiveTag();
        e.target.parentNode.classList.add('active');
        document.querySelector(e.target.getAttribute('data-target')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

document.addEventListener('scroll', () => {
   let scrollPosition = window.scrollY;
   clearActiveTag();
   for (let i = 0; i < sectionPositions.length; i++){
       if (sectionPositions[i] - 300 > scrollPosition){
           links[i].parentNode.classList.add('active');
           break;
       }
   }
});

const clearActiveTag = () => {
    for (el of links){
        el.parentNode.classList.remove('active');
    }
}