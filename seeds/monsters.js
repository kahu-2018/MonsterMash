
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        { id: 1, monster: 'The Blob', monster_img: 'https://3.bp.blogspot.com/-JBcOBDruUaI/U0i64-URknI/AAAAAAAAg5c/T100M0SR7UY/s1600/vlcsnap-2014-04-03-00h03m16s4.png', description: '"A deadly blob from another planet which consumes everything in its path."' },
        { id: 2, monster: 'Moo', monster_img: '/images/monster-moo.png', description: 'You may see a nice, friendly plant fellow, but do not be fooled! he is a monster who will burn your cities to the ground and suffocate them with his plant magic! Using his handy sidekick he conveniently has living amongst his branches he is a force not to be reckoned with!' },
        { id: 3, monster: 'Maiasaura', monster_img: 'http://dino.lt/gallery/dinozaurai/maiasaura.jpg', description: 'The Maiasaura was an actual dinosaur! It was a large herbivorous animal that lived 76.7 million years ago. The Maiasaura lived in North America and used its heavy muscular tail as its main mode of attack. Rawwrr!!' },
        { id: 4, monster: 'NickZilla', monster_img: 'https://www.craftbrewingbusiness.com/wp-content/uploads/2013/09/Godzilla-002.jpg', description: 'NickZilla is an enormous, destructive, prehistoric sea monster awakened and empowered by nuclear radiation. BOOM!' },
        { id: 5, monster: 'Puffajess', monster_img: '/images/puffajess.jpg', description: 'Once a polite creature who loved to sing, the Puffajess turned sour after it had its musical ear stolen! Left only with an overpowered breath and a shrieking sound, the Puffajess now roams around the world huffing and puffing while causing havoc wherever it goes.' }
      ]);
    });
};
