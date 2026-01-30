// Animated counters
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
// gallery  section
// FILTER
const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach((btn) => {
  btn.onclick = () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    items.forEach((item) => {
      item.style.display =
        filter === "all" || item.dataset.category === filter ? "block" : "none";
    });
  };
});

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

items.forEach((item) => {
  item.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = item.querySelector("img").src;
  };
});

closeBtn.onclick = () => (modal.style.display = "none");
modal.onclick = () => (modal.style.display = "none");

// SCROLL ANIMATION
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

items.forEach((item) => observer.observe(item));
