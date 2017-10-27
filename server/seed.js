// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

var house_list = [
  {
    title: 'The Nice Northern',
    photos: '/images/food_truck/curryupnow.png',
    bedrooms: `4`,
    bathrooms: `2`,
    user_id: '',
    address: '225 Bush Street, San Francisco, CA 94104',
    description:'The place is spacious and has much to offer. There is a pool with a slide in the back. The house is 2000sq feet ',
    lat: `37.790841`,
    long: `-122.401280`,
    review: '',
    slug: 'lorem-ipsum', 
    cuid: 'cikqgkv4q01ck7453ualdn3hf',
    markedForDeletion: false,
  },
  {
    title: 'Napa on clouds ',
    photos: '/images/food_truck/elnortenotaco.png',
    bedrooms: '2',
    bathrooms: `1`,
    user_id: '',
    address: `801 Main St, Napa, CA 94103`,

    lat: 37.775491,
    long: -122.402425,
    review: '',
    slug: 'hello-mern', 
    cuid: 'cikqgkv4q01ck7453ualdn3hd',
    description:'This place is known as the walk back from wine. The places is some simple and white everything. I love how you can literally do a tour, and walk back with ease. ',
    // markedForDeletion: false,
  },
  {
    title: `Midevil Mansion`,
    photos: '/images/food_truck/senorsisig.jpg',
    bedrooms: '3',
    bathrooms: `1.5`,
    user_id: '',
    address: `300 Pine, San Francisco, CA 94104`,
    lat: 37.792268,
    long: -122.401255,
    review: '',
    description:'not good',
    markedForDeletion: false,
    cuid: 'cikqgk5jq01ck7453ualdn3hd',
  },
];


//=====================
// Review List
//=====================


var review_list = [
  {
    userName: `Donna`,

    title: 'Bachelor Ready!',
    titleOfReview: `4 day hangout`,
    images: `/images/reviews/curryup0.jpg`,
    rating: '4',
    user_id: '',
    house_id:'' ,
    house: `The Nice Northern`,
    content: 'this place was one for the booking',

    markedForDeletion: false,
  },
  {
    userName: `Jevell`,

    title: 'Peaceful getaway',
    titleOfReview: `killer fun`,
    images: `/images/reviews/curryup0.jpg`,
    rating: '2',
    user_id: '',
    house_id:'' ,
    house: `The Nice Northern`,
    content: 'The beach right across the street. You are able to hear at night and it is game changer',
    
    markedForDeletion: false,
  },
  {
    userName: `Ray`,

    title: 'Spacious',
    titleOfReview: `3`,
    images: `/images/reviews/curryup1.jpg`,
    rating: '3',
    user_id: '',
    house_id:'' ,
    house: `The Nice Northern`,
    content: 'I though i woulde need a masion for 5 and this worked fine',
    
    markedForDeletion: false,
  },
  {
    userName: `Jessica`,

    title: 'Misty Michigan',
    titleOfReview: `wont come again `,
    images: `/images/reviews/curryup0.jpg`,
    rating: '5',
    user_id: '',
    house_id:'' ,
    house: `The Nice Northern`,
    content: 'the devloper of the howuse did not finish small ammenties. So i was not much go ',
    
    markedForDeletion: false,
  },
  {
      userName: `Jimmy`,

    title: 'Clean Clean Clean',
    titleOfReview: `5 stars all day `,
    images: `/images/reviews/curryup0.jpg`,
    rating: '3',
    user_id: '',
    house_id:'' ,
    content: 'this place was one for the books',
    house: `Midevil Mansion`,
    markedForDeletion: false,
  },
  {
    userName: `Connor`,

    title: 'Status Quo',
    titleOfReview: `Killer`,
    images: `/images/reviews/curryup1.jpg`,
    rating: '3',
    user_id: '',
    house_id:'' ,
    content: 'This place was okay perfect bang for the buck just location isnt where I expected',
    house: `Midevil Mansion`,
    markedForDeletion: false,
  },
];
















db.House.remove({}, function(err, houses) {
    console.log('removing houses')
  if (err) {
    console.log('there was an error deleting all houses', err); 
  }

  console.log('removed all houses');
  db.House.create(house_list, function(err, houses){
    if ('SAVE house', err) {
      console.log(err);
      return;
    }
    console.log('recreated all houses');
    console.log("created", houses.length, "houses");
    db.Review.remove({}, function(err, reviews){
      console.log('removed all reviews');
      review_list.forEach(function (reviewData) {
        var review = new

         db.Review({
          title: reviewData.title,
          photos: reviewData.photos,
          rating: reviewData.rating,
          content: reviewData.content,
          user_id: reviewData.user_id,
          house_id: reviewData.house_id,
          slug: reviewData.slug,
          cuid: reviewData.cuid,
        });
        db.House.findOne({title: reviewData.house}, function (err, foundHouse) {
          console.log('this is the found house ', foundHouse)
          // console.log('found house ' + foundHouse.name + ' with review written by ' + review.title);
          if (err) {
            console.log('findOne Error!', err);
            return;
          }
          // we are saying that were you find the db.Truck where the name of the house === the name of the house in the review
          // then set the name house that you found === to the name of the food house in the review
          review.house = foundHouse;
          console.log("review is now", review)
          review.save(function(err, savedReview){
            if ('SAVED REVIEW ERR', err) {
              return console.log(err);
            }
            console.log('saved review by' + savedReview.title + ' for ' + foundHouse.title);
            // console.log('THIS IS THE SAVED REVIEW', savedReview);
            // console.log('THIS IS THE FOOD TRUCK', foundHouse);
          });
        });
      });
    });
  });
});