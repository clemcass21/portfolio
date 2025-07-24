// --- MODALE ---
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("modal");
  const close = document.querySelector(".close");
  const modalImages = document.getElementById("modal-images");

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  const closeArrow = document.querySelector(".close-arrow");
closeArrow.addEventListener("click", () => {
  modal.style.display = "none";
});

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  const projects = {
    1: ['img/domaine.png'],
    2: ['img/hm.png'],
    3: ['img/repetto.png'],
    4: ['img/pounet.png'],
    5: ['img/wave.png'],
    6: ['img/edm.png'],
    7: ['img/supert.png'],
    8: ['img/jeu.png'],
    9: ['img/boom.png'],
    10: ['img/disque.png'],
    11: ['img/randonneur.png'],
    12: ['img/dior.png'],
    13: ['img/leopard.png'],
    14: ['img/oxy.png'],
    15: ['img/pressbook.png'],
    16: ['img/typo.png']
  };

  document.querySelectorAll('.box span').forEach((span, idx) => {
    span.addEventListener('click', () => {
      modalImages.innerHTML = '';
      (projects[idx+1] || []).forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        modalImages.appendChild(img);
      });
      modal.style.display = 'flex';
    });
  });

  // Rotation manuelle
  let currentAngle = 0;
  const box = document.querySelector('.box');
  const leftBtn = document.getElementById('rotate-left');
  const rightBtn = document.getElementById('rotate-right');

  leftBtn.addEventListener('click', () => {
    currentAngle -= 22.5;
    box.style.transform = `perspective(1000px) rotateY(${currentAngle}deg)`;
    box.style.animation = 'none';
  });

  rightBtn.addEventListener('click', () => {
    currentAngle += 22.5;
    box.style.transform = `perspective(1000px) rotateY(${currentAngle}deg)`;
    box.style.animation = 'none';
  });
});