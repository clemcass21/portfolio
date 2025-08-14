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

  const pro = [
    {
      overlay: { img: 'img/couv_domaine.png', title: 'Identité visuelle<br>& web design<br>projet fictif' },
      modal: { img: 'img/domaine.png' },
      alt: 'Logo domaine des agrumes'
    },
    {
      overlay: { img: 'img/COUV-HM.png', title: 'Identité visuelle<br> & Web design<br> projet fictif' },
      modal: { img: 'img/hm.png' },
      alt: 'Logo harmoni music'
    },
    {
      overlay: { img: 'img/couv_repetto.png', title: 'Identité visuelle<br> projet de fin d\'étude' },
      modal: { img: 'img/repetto.png' },
      alt: 'Logo Repetto'
    },
    {
      overlay: { img: 'img/couv_pounet.png', title: 'Identité visuelle<br> projet fictif' },
      modal: { img: 'img/pounet.png' },
      alt: 'Logo Pounet'
    },
    {
      overlay: { img: 'img/couv_wave.png', title: 'Identité visuelle<br> projet fictif' },
      modal: { img: 'img/wave.png' },
      alt: 'Logo Wave (surf & co)'
    },
    {
      overlay: { img: 'img/couv_edm.png', title: 'Identité visuelle & édition<br> projet réel' },
      modal: { img: 'img/edm.png' },
      alt: 'Logo école de musique de la confluence'
    },
    {
      overlay: { img: 'img/couv_livre.png', title: 'Identité visuelle & édition<br> projet fictif' },
      modal: { img: 'img/supert.png' },
      alt: 'Couverture de livre (les recettes de Supertoinette)'
    },
    {
      overlay: { img: 'img/couv_cartes.png', title: 'Illustration<br>projet fictif' },
      modal: { img: 'img/jeu.png' },
      alt: 'Cartes ruban rose'
    },
    {
      overlay: { img: 'img/couv_boom.png', title: 'Illustration<br> projet réel' },
      modal: { img: 'img/boom.png' },
      alt: 'Couverture boom japon'
    },
    {
      overlay: { img: 'img/couv_vinyl.png', title: 'Montage photo<br> projet fictif' },
      modal: { img: 'img/disque.png' },
      alt: 'Vinyl Liberty Mia'
    },
    {
      overlay: { img: 'img/couv_rando.png', title: 'Montage photo<br> projet fictif' },
      modal: { img: 'img/randonneur.png' },
      alt: 'Couverture rando'
    },
    {
      overlay: { img: 'img/couv_dior.png', title: 'Montage photo<br>projet fictif' },
      modal: { img: 'img/dior.png' },
      alt: 'Couverture miss Dior'
    },
    {
      overlay: { img: 'img/couv_leopard.png', title: 'Montage photo<br> projet fictif' },
      modal: { img: 'img/leopard.png' },
      alt: 'Couverture montage photo léopard'
    },
    {
      overlay: { img: 'img/couv_cata.png', title: 'Édition<br>projet réel' },
      modal: { img: 'img/oxy.png' },
      alt: 'Catalogue produits oxygène'
    },
    {
      overlay: { img: 'img/couv_pressbook.png', title: 'Édition<br>projet réel' },
      modal: { img: 'img/pressbook.png' },
      alt: 'Pressbook d\'un moto cross'
    },
    {
      overlay: { img: 'img/couv_typo.png', title: 'Typographie<br> projet fictif' },
      modal: { img: 'img/typo.png' },
      alt: 'Typologie maison'
    }
  ];

  const nBoxes = pro.length;

  document.getElementById('projects-carousel').innerHTML = pro.map((project, i) => {
    return (`<div style="background: center / contain no-repeat url(${project.overlay.img}); transform: rotateY(${360 / nBoxes * i}deg) translateZ(900px);">
      <img src="${project.overlay.img}" alt="${project.alt}" />
      <div class='overlay'>${project.overlay.title}</div>
    </div>`)
  }).join('')



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
});



document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('open');
    });
  });
});
