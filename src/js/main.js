const Types = Object.freeze({
  ROUPAS: Symbol('Roupas'),
  PAPEL: Symbol('Papel'),
  AMBIENTE: Symbol('Ambiente')
})

const Aromas = Object.freeze({
  LAVANDA: Symbol('Lavanda'),
  ROSAS_VERMELHAS: Symbol('Rosas Vermelhas'),
  BREU_BRANCO: Symbol('Breu Branco'),
  FLOR_DE_AMEIXA: Symbol('Flor de Ameixa'),
  FLOR_DE_LARANJEIRA: Symbol('Flor de Laranjeira'),
  FLOR_DE_CEREJEIRA: Symbol('Flor de Cerejeira'),
  FLORAL_BEBE: Symbol('Floral Beb&#234;'),
  CHEIRINHO_DE_BEBE: Symbol('Cheirinho de Beb&#234;'),
  SANDALO: Symbol('S&#226;ndalo'),
  CAPIM_LIMAO: Symbol('Capim Lim&#227;o'),
  ALECRIM: Symbol('Alecrim'),
  BAUNILHA: Symbol('Baunilha'),
  ACAI: Symbol('A&#231;a&#237;'),
  FLOR_TUPINAMBA: Symbol('Flor Tupinamb&#225;'),
  MULATEIRO: Symbol('Mulateiro'),
  MURU_MURU: Symbol('Muru Muru'),
  PATMIRRA: Symbol('Patmirra'),
  AMBALY: Symbol('Ambaly'),
  ALGODAO: Symbol('Algod&#227;o'),
  BAMBU: Symbol('Bambu'),
  MAMAE_BEBE: Symbol('Mam&#227;e Beb&#234;'),
  BURUTI: Symbol('Buriti')
})

class Item {
  constructor (name, price, type, {aromas}) {
    this.name = name
    this.price = price
    this.type = type
    this.aroma = new Array(aromas)
  }
}

var doc = document.documentElement
var win = window
var cart = Item[{}]

function sendOrder () {
  let num = 5592999810845
  let msg = 'Capim na palheteres!!!'
  win.open(`https://wa.me/${num}?text=${msg}`, '_blank')
}

function updateCart (el) {
  console.log(el)
}

(function () {
  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = win.sr = ScrollReveal()

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
}())
