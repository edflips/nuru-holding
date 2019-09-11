import 'bootstrap';
import { jarallax } from 'jarallax';
import SweetScroll from 'sweet-scroll';

// sweet-scroll
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // eslint-disable-next-line no-unused-vars
    const sweetScroll = new SweetScroll({
      offset: 0, // Specifies the value to offset the scroll position in pixels
    });
  },
  false,
);

// jarallax
// jarallaxVideo();
// jarallaxElement();
jarallax(document.querySelectorAll('.jarallax'), {
  speed: -0.2,
  disableParallax: /iPad|iPhone|iPod|Android/,
  disableVideo: /iPad|iPhone|iPod|Android/,
});


// Scroll off top
const headerNav = document.querySelector('header');
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (window.scrollY === 0) {
        headerNav.classList.add('top');
      } else {
        headerNav.classList.remove('top');
      }
      ticking = false;
    });
    ticking = true;
  }
};

window.addEventListener('scroll', handleScroll);

// Crossfade strapline
const straplineContainer = document.querySelector('.vision-branding .strap');
const strapEn = straplineContainer.querySelector('.en');
const strapFr = straplineContainer.querySelector('.fr');
const straplines = [strapEn, strapFr];

setInterval(() => {
  straplines.map((strapline) => strapline.classList.toggle('visible'));
}, 4000);
