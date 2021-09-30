// Parallax Function
let arrestHero = document.getElementById('arrestHero');
let memorabilia =document.getElementById('memorabilia');

window.addEventListener('scroll', () =>{
    let { scrollY } = window;

    arrestHero.style.top = 0.5 * scrollY + 'px';
    memorabilia.style.top = 0.5 * scrollY + 'px';
});

// test... still in progress
const haeder = document.querySelector("header");
const sectionOne = document.querySelector(".title");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
  };
  
  const sectionOneObserver = new IntersectionObserver(function(
    entries, sectionOneObserver) 
    {
        entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);
//   end of test