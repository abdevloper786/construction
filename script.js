const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
// Animate cards on scroll
const cards = document.querySelectorAll('.faculty-card');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Button click interactions
document.querySelectorAll('.profile-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Viewing profile...');
  });
});

document.querySelectorAll('.contact-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Contacting faculty...');
  });
});





  // Like button toggle
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
    });
  });
  
  // Add to cart animation
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = "✅ Added!";
      setTimeout(() => {
        btn.textContent = "🛒 Add to Cart";
      }, 1500);
    });
  });



   // Optional: Add staggered animation delay
   document.querySelectorAll('.box').forEach((box, i) => {
    box.style.animationDelay = `${i * 0.1}s`;
  });


  document.querySelectorAll('.package-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    alert(`You selected: ${title}`);
  });
});


let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").onclick = () => showSlide(index + 1);
document.querySelector(".prev").onclick = () => showSlide(index - 1);

setInterval(() => {
  showSlide(index + 1);
}, 5000);  // 👈 pehle 3000 tha, ab slow (5 sec)

/* Swipe Support */
let startX = 0;

slides.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) showSlide(index + 1);
  if (endX - startX > 50) showSlide(index - 1);
});