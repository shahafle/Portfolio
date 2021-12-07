'use strict'

var gProjs;
var gNextId = 1;


function getProjsToShow() {
   return gProjs
}


function createProj(name, title, desc, url, labels = ['general'],) { //add image arrgument
   return {
      id: gNextId++,
      name: name,
      title: title,
      desc: desc,
      url: url,
      publishedAt: Date.now(),
      labels: labels
   }
}

function createProjs() {
   gProjs = [
      createProj('Minesweeper', 'Be carefull on next step', 'Minesweeper single-player logic game', 'https://shahafle.github.io/Minesweeper/', ['game', 'single-player']),
      createProj('Pacman', 'We don\'t like ghosts', 'Pacman single-player game', 'https://shahafle.github.io/Pacman/', ['game', 'single-player']),
      createProj('Book Shop', 'A world in your hands', 'Book Shop site', 'https://shahafle.github.io/Book-Shop/', ['knowledge']),
      createProj('In Picture', 'Try Now', 'Try to choose all true pharses about the pictures', 'https://shahafle.github.io/In-Picture/', ['game', 'single-player']),
      createProj('Ball Board', 'Go catch \'em all', 'Ball Board single-player game. Collect all the Balls and on the board and get points', 'https://shahafle.github.io/Board-Ball/', ['game', 'single-player']),
      createProj('Blogin', 'Your designed blog', 'Online blog', ' https://shahafle.github.io/Blogin/', ['social']),
      createProj('Chess', 'Go get the king', 'Practice demo chess', 'https://shahafle.github.io/Chess/', ['game']),
      createProj('Touch Nums', 'Can you do it faster?', 'Get the numbers by order', 'https://shahafle.github.io/Touch-Nums/', ['game', 'single-player']),
      createProj('Akinator', 'I know who you think about', 'Answer the questioins and the Akinator will tell you who you think about', 'https://shahafle.github.io/Akinator/', ['AI']),
   ]
}

function getProjById(id) {
   return gProjs.find(proj => proj.id === id)
}





// function getDate() {
//    var today = new Date();
//    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// }