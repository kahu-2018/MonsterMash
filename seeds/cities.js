
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert(
        [

          {id: 1, city: 'London', destroyed: 0, city_img: 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg'},
          
          {id: 2, city: 'Paris', destroyed: 0, city_img: 
          'https://www.st-christophers.co.uk/__data/assets/image/0005/441644/iStock-604371970.jpg'},
          
          {id: 3, city: 'Buenos Aires', destroyed: 0, city_img: '/images/BuenosAires.jpg'},
          
          {id: 4, city: 'Lima', destroyed: 0, city_img: '/images/lima-peru.jpg'},
          
          {id: 5, city: 'Toronto', destroyed: 0, city_img: 'https://shawglobalnews.files.wordpress.com/2017/06/gettyimages-592629804-1.jpg?quality=70&strip=all&crop=0px%2C1px%2C1024px%2C683px&resize=720%2C480'},
          
          {id: 6, city: 'San Fransisco', destroyed: 0, city_img: 'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/san-francisco-deluxe-half-day-city-tour-in-san-francisco-117240.jpg'},
          
          {id: 7, city: 'Kuala Lumpur', destroyed: 0, city_img: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/kuala-lumpur-2013-exterior-dusk?$MO_masthead-property-mobile$'},
          
          {id: 8, city: 'Hong Kong', destroyed: 0, city_img: 'https://wikitravel.org/upload/shared//thumb/2/23/Hong_Kong_Skyline_Restitch_-_Dec_2007.jpg/600px-Hong_Kong_Skyline_Restitch_-_Dec_2007.jpg'},
          
          {id: 9, city: 'Marrakesh', destroyed: 0, city_img: '/images/marrakesh.jpg'},
          
          {id: 10, city: 'Johannesburg', destroyed: 0, city_img: '/images/johannesburg.jpg'}
       ]
      )
    }) 
};