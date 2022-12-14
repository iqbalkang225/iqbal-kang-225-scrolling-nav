const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.navigation__link');

const colors = ['pink', 'orangered', 'green', 'tomato'];

const navOptions = { 
  root: null,
  threshold: 0.7,
}

const navScroll = function(entries) {
  const [entry] = entries;
  let activePage = +entry.target.className.slice(-1) - 1;

  links.forEach((link, i) => {

    if(i === activePage) link.style.backgroundColor = colors[activePage]
    if(i !== activePage) link.style.backgroundColor = "transparent";
  })
}

const navObserver = new IntersectionObserver(navScroll, navOptions);

sections.forEach(section => navObserver.observe(section));

// ========================================================

links.forEach((link, i) => {
  
  link.addEventListener('mouseenter', () => {

    link.style.backgroundColor = colors[i]
  })

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = "transparent"
  })
})