const myTags = [
    'Diseño Web', 'Programación', 'Robótica',
    'Mantenimiento','Python', 'Java', 'git',
    'Ofimática', 'Boostrap', 'Wordpress',
    'Cloud', 'Redes','Linux', 'Sistemas operativos',
];

var tagCloud = TagCloud('.tagcloud', myTags,{

  // radius in px
  radius: 200,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'slow',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#1a81ac'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.tagcloud').style.color = random_color;
document.querySelector('.tagcloud').style.fontSize='1.4em';