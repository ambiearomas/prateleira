(function () {
  const win = window
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.feature, .pricing-table-inner', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 100
    })

    doc.classList.add('anime-ready')
    /* global anime */
    anime.timeline({
      targets: '.hero-figure-box-05'
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400)
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1
    }).add({
      duration: 800,
      rotateY: '-15deg',
      rotateX: '8deg',
      rotateZ: '-1deg'
    })

    anime.timeline({
      targets: '.hero-figure-box-06, .hero-figure-box-07'
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400)
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1
    }).add({
      duration: 800,
      rotateZ: '20deg'
    })

    anime({
      targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [ anime.random(-360, 360), function (el) { return el.getAttribute('data-rotation') } ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: 'easeInOutExpo'
    })
  }

  var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
      removeItemButton: true,
      duplicateItemsAllowed: true,
      maxItemCount: 3,
      searchResultLimit: 25,
      renderChoiceLimit: 25,
          choices: [
          {
              value: 'Lavanda',
              label: 'Lavanda',
              selected: false,
              disabled: false,
          },
          {
              value: 'Alfazema',
              label: 'Alfazema',
              selected: false,
              disabled: false,
          },
          {
              value: 'Rosas Vermelhas',
              label: 'Rosas Vermelhas',
              selected: false,
              disabled: false,
          },
          {
              value: 'Breu Branco',
              label: 'Breu Branco',
              selected: false,
              disabled: false,
          },
          {
              value: 'Flor Tupinambá',
              label: 'Flor Tupinambá',
              selected: false,
              disabled: false,
          },
          {
              value: 'Flor de Laranjeira',
              label: 'Flor de Laranjeira',
              selected: false,
              disabled: false,
          },
          {
              value: 'Baunilha',
              label: 'Baunilha',
              selected: false,
              disabled: false,
          },
          {
              value: 'Flor de Cerejeira',
              label: 'Flor de Cerejeira',
              selected: false,
              disabled: false,
          },
          {
              value: 'Alecrim',
              label: 'Alecrim',
              selected: false,
              disabled: false,
          },
          {
              value: 'Capim Limão',
              label: 'Capim Limão',
              selected: false,
              disabled: false,
          },
          {
              value: 'Sândalo',
              label: 'Sândalo',
              selected: false,
              disabled: false,
          },
            {
              value: 'Mulateiro',
              label: 'Mulateiro',
              selected: false,
              disabled: false,
            },
            {
              value: 'Açaí',
              label: 'Açaí',
              selected: false,
              disabled: false,
            },
            {
              value: 'Buriti',
              label: 'Buriti',
              selected: false,
              disabled: false,
            },
            {
              value: 'Muru Muru',
              label: 'Muru Muru',
              selected: false,
              disabled: false,
            },
            {
              value: 'Algodão',
              label: 'Algodão',
              selected: false,
              disabled: false,
            },
            {
              value: 'Patmirra',
              label: 'Patmirra',
              selected: false,
              disabled: false,
            },
            {
              value: 'Patwood',
              label: 'Patwood',
              selected: false,
              disabled: false,
            },
            {
              value: 'Bambu',
              label: 'Bambu',
              selected: false,
              disabled: false,
            },
            {
              value: 'Mamãe Bebê',
              label: 'Mamãe Bebê',
              selected: false,
              disabled: false,
            },
            {
              value: 'Cheirinho de Bebê',
              label: 'Cheirinho de Bebê',
              selected: false,
              disabled: false,
            },
            {
              value: 'Floral Bebê',
              label: 'Floral Bebê',
              selected: false,
              disabled: false,
            },
            {
              value: 'Flor de Ameixa',
              label: 'Flor de Ameixa',
              selected: false,
              disabled: false,
            }],
    itemSelectText:'',
   placeholder: true,
   placeholderValue: 'Escolha 3 aromas',
    maxItemText: (maxItemCount) => {
      return `Você já escolheu os ${maxItemCount} aromas.`;
    },
    
    });
   
}())
