const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = e.target.classList.contains("arrow-left");
  
      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }
  
      if (currentItem >= maxItems) {
        currentItem = 0;
      }
  
      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }
  
      items.forEach((item) => item.classList.remove("current-item"));
  
      items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
      });
  
      items[currentItem].classList.add("current-item");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open');
    const closeBtn = document.getElementById('close');
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = navMobile.querySelectorAll('a');

    // Função para fechar o menu mobile
    function closeMenu() {
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
        navMobile.classList.remove('active');
    }

    openBtn.addEventListener('click', () => {
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
        navMobile.classList.add('active');
    });

    closeBtn.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});