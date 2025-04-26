import { Carousel } from "./carousel";
import { $, $$ } from "./helpers";
import "./loading";

// Mobile menu toggle
$('#menu-toggle')?.addEventListener('click', function () {
  const mobileMenu = $('#mobile-menu');
  mobileMenu?.classList.toggle('hidden');
});

// Back to top button
const backToTopButton = $('#back-to-top');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    backToTopButton?.classList.remove('opacity-0', 'invisible');
    backToTopButton?.classList.add('opacity-100', 'visible');
  } else {
    backToTopButton?.classList.remove('opacity-100', 'visible');
    backToTopButton?.classList.add('opacity-0', 'invisible');
  }
});

backToTopButton?.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for anchor links
$$<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (!targetId) {
      return;
    }

    const targetElement = $<HTMLDivElement>(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const mobileMenu = $('#mobile-menu');
      if (!mobileMenu?.classList.contains('hidden')) {
        mobileMenu?.classList.add('hidden');
      }
    }
  });
});

// Theme toggle functionality
const themeToggleBtn = $('#theme-toggle');
themeToggleBtn?.addEventListener('click', function () {
  // Toggle dark class on html element
  document.documentElement.classList.toggle('dark');

  // Update localStorage
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
});

// Skill bar animation on scroll
const skillsSection = $('#skills');
const skillBars = $$<HTMLDivElement>('.skill-bar');
let animated = false;

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      // Animate all skill bars when skills section is visible
      skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width') + '%';
        bar.style.setProperty('--target-width', targetWidth);
        bar.classList.add('animate');
      });
      animated = true;

      // Optional: Unobserve after animation is triggered
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% of the section is visible

// Start observing the skills section
if (skillsSection) {
  observer.observe(skillsSection);
}

// Floating resume button
const floatingResumeBtn = $('#floating-resume');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 600) {
    floatingResumeBtn?.classList.remove('opacity-0', 'invisible');
    floatingResumeBtn?.classList.add('opacity-100', 'visible');
  } else {
    floatingResumeBtn?.classList.remove('opacity-100', 'visible');
    floatingResumeBtn?.classList.add('opacity-0', 'invisible');
  }
});

// Scroll Progress Bar
window.onscroll = function () {
  updateScrollProgress();
};

function updateScrollProgress() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressBar = $<HTMLDivElement>("#scrollProgressBar");
  if (progressBar) {
    progressBar.style.width = scrolled + "%";

  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateScrollProgress();
  const slidesContainer = document.getElementById('testimonial-slides');

  if (slidesContainer) {
    new Carousel(slidesContainer);
  }
});