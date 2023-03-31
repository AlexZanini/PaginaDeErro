// Criação de três instâncias do Timeline do GSAP
let t1 = gsap.timeline();
let t2 = gsap.timeline();
let t3 = gsap.timeline();

// Animação do elemento com a classe "cog1"
t1.to(".cog1",
{
  // Define o ponto de origem da transformação como o centro do elemento
  transformOrigin:"50% 50%",
  // Rotaciona o elemento em 360 graus (1 volta completa) em sentido horário
  rotation:"+=360",
  // Define a animação para repetir infinitamente
  repeat:-1,
  // Define que a animação deve ocorrer de maneira linear (sem aceleração ou desaceleração)
  ease:Linear.easeNone,
  // Define a duração da animação em segundos
  duration:8
});

// Animação do elemento com a classe "cog2"
t2.to(".cog2",
{
  // Define o ponto de origem da transformação como o centro do elemento
  transformOrigin:"50% 50%",
  // Rotaciona o elemento em 360 graus (1 volta completa) em sentido anti-horário
  rotation:"-=360",
  // Define a animação para repetir infinitamente
  repeat:-1,
  // Define que a animação deve ocorrer de maneira linear (sem aceleração ou desaceleração)
  ease:Linear.easeNone,
  // Define a duração da animação em segundos
  duration:8
});

// Animação do elemento com a classe "wrong-para"
t3.fromTo(".wrong-para",
{
  // Define a opacidade inicial do elemento como 0 (totalmente transparente)
  opacity:0
},
{
  // Define a opacidade final do elemento como 1 (totalmente opaco)
  opacity:1,
  // Define a duração da animação em segundos
  duration:1,
  // Define que a animação deve ocorrer indefinidamente, alternando entre os valores inicial e final
  stagger:{
    repeat:-1,
    yoyo:true
  }
});
