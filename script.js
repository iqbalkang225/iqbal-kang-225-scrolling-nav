const sections = document.querySelectorAll('section');

const colors = ['pink', 'orangered', 'green', 'tomato'];

const navOptions = { 
  root: null,
  threshold: 0.7,
}

const navScroll = function(entries) {
  const [entry] = entries;
  let activePage = +entry.target.className.slice(-1) - 1;

  const links = document.querySelectorAll('.navigation__link');

  links.forEach((link, i) => {

    if(i === activePage) link.style.backgroundColor = colors[activePage]
    if(i !== activePage) link.style.backgroundColor = "transparent";
  })
}

const navObserver = new IntersectionObserver(navScroll, navOptions);

sections.forEach(section => navObserver.observe(section));