// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

const mouses = document.querySelectorAll('.mouse');


  document.addEventListener('mousemove', e => {
    mouses.forEach(mouse => {
      mouse.style.top = e.y + "px";
      mouse.style.left = e.x + "px";
      mouse.style.mixBlendMode = "difference"
    });
  })

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")


// window.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.x + "px";
//   cursor.style.top = e.y + "px";

//   circleMedium.style.left = e.x + "px";
//   circleMedium.style.top = e.y + "px";

//   circleBig.style.left = e.x + "px";
//   circleBig.style.top = e.y + "px";
// });


// S'assurer que les liens sont clickables


// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// Exercice Réussi !✅