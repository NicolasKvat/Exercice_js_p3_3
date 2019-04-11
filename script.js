// on creer un tableau avec getElementsByClassName et on lui attribut une fonction avec l'event 'click'
document.getElementsByClassName('color')[0].addEventListener('click', function(){
  document.getElementById('text').style.color = 'green';
});
// Même chose sauf qu'on utilise le deuxième élément du tableau
document.getElementsByClassName('color')[1].addEventListener('click', function(){
  document.getElementById('text').style.color = 'red';
});
// Même chose sauf qu'on utilise le troisième élément du tableau
document.getElementsByClassName('color')[2].addEventListener('click', function(){
  document.getElementById('text').style.color = 'blue';
});
