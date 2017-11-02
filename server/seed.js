// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

var house_list = [
  {
    title: 'The Nice Northern',
    photos: '/images/house_1.jpg',
    bedrooms: `4`,
    bathrooms: `2`,
    user_id: '',
    address: "225 Bush Street, San Francisco, CA 94104",
    description:'la ecotasa The space Son Marimon, this B&B, is located in the municipality of Selva, at the feet of Serra de Tramuntana, recently declared World Heritage Site by UNESCO. It is five minutes away from Lloseta, a village that offers the travellers everything they need: gastronomy, theatre, concerts, shows, historical neighbourhood, library and public transport –the train will allow the travellers reach Palma, Ciutat de Mallorca, in 25 minutes and Inca, where one of the most important markets of the island take place every Thursday, in 5 minutes. Wonderfully secluded, and still well connected, this 40m2 refugee also counts with 3600m2 of private land rich in autochthonous vegetation. The main characteristic of the house is how little it impacts on the surroundings in order to preserve the nature. Simple designs, hand crafted furniture, clay tiles (typical Majorcan material that tells the stories lived there) and beams create a space where comfort and tradition go together. The inner space comprises a sleeping room area, a sitting room with fireplace, a kitchen with oven, a microwave and fridge and an independent bathroom with shower. The outer space comprises two terraces with a table and hammocks and a big stone table and barbecue and a porch that can be given different uses. The hosts from the B&B Son Marimon will be delighted to help you plan a great range of activities including hiking, climbing, horse-riding routes (there is a possibility of also keeping the horses in the B&B), cultural routes, sailing, excursions to nearby villages or beaches, or any other interesting spot on the island. In conclusion, this is the perfect place to start exploring the island or stop, breathe and rest in total peace, experiencing the flavours of Majorcan countryside.  ',


    lat: `37.790841`,
    lng: `-122.401280`,
    review: '',
    slug: 'lorem-ipsum', 
    cuid: 'cikqgkv4q01ck7453ualdn3hf',
    markedForDeletion: false,
  },
  {
    title: 'Napa on clouds ',
    photos: '/images/house_2.jpg',
    bedrooms: '2',
    bathrooms: `1`,
    user_id: '',
    address: `801 Main St, Napa, CA 94103`,

    lat: 37.775491,
    lng: -122.402425,
    review: '',
    slug: 'hello-mern', 
    cuid: 'cikqgkv4q01ck7453ualdn3hd',
    description:'la ecotasa The space Son Marimon, this B&B, is located in the municipality of Selva, at the feet of Serra de Tramuntana, recently declared World Heritage Site by UNESCO. It is five minutes away from Lloseta, a village that offers the travellers everything they need: gastronomy, theatre, concerts, shows, historical neighbourhood, library and public transport –the train will allow the travellers reach Palma, Ciutat de Mallorca, in 25 minutes and Inca, where one of the most important markets of the island take place every Thursday, in 5 minutes. Wonderfully secluded, and still well connected, this 40m2 refugee also counts with 3600m2 of private land rich in autochthonous vegetation. The main characteristic of the house is how little it impacts on the surroundings in order to preserve the nature. Simple designs, hand crafted furniture, clay tiles (typical Majorcan material that tells the stories lived there) and beams create a space where comfort and tradition go together. The inner space comprises a sleeping room area, a sitting room with fireplace, a kitchen with oven, a microwave and fridge and an independent bathroom with shower. The outer space comprises two terraces with a table and hammocks and a big stone table and barbecue and a porch that can be given different uses. The hosts from the B&B Son Marimon will be delighted to help you plan a great range of activities including hiking, climbing, horse-riding routes (there is a possibility of also keeping the horses in the B&B), cultural routes, sailing, excursions to nearby villages or beaches, or any other interesting spot on the island. In conclusion, this is the perfect place to start exploring the island or stop, breathe and rest in total peace, experiencing the flavours of Majorcan countryside.  ',
    // markedForDeletion: false,
  },
  {
    title: `Midevil Mansion`,
    photos: '/images/house_3.jpg',
    bedrooms: '3',
    bathrooms: `1.5`,
    user_id: '',
    address: `300 Pine, San Francisco, CA 94104`,
    lat: 37.792268,
    lng: -122.401255,
    review: '',
    description: "This magnificent, modern, fully staffed (chef and driver) private villa has some of the best ocean views on Phuket. Our 8 main bedrooms with king size beds have magnificent views, beautiful en-suite bathrooms with jacuzzis (7 out of 8), large flat screen TVs, and built in closets. The villa features an several salas, a movie room, a pool table, a fitness centre, a spa, and a commanding rooftop jacuzzi. Dining is by the 4th floor infinity pool.Ideal for up to 8 adult couples and 5 children. The space Property type: Villa Accommodates: 16 adults (8 couples) and 5 children. Additional charges apply for additional guests. Bedrooms: 8+2 Bathrooms: 11 Beds: 8 king, 1 queen, and 2 bunk beds (4 singles for children only) Check In: 15:00 (3 PM) Check Out: 12:00 (noon) Guest access INTRODUCTION Majestically located on a hill overlooking Bangtao and Surin beaches (the latter hidden by trees), Villa Amonteera has some of the best views on Phuket and exudes modern luxury and opulence at every turn. The architecture of Villa Amonteera makes the most of the outstanding views, which are hard to match even on Phuket. The 8 king size bed rooms are decorated in modern fashion with built in closets, 46-55 inch flat screen TVs with satellite TV and DVD players, airconditioning, balconies, and en-suite bathrooms with showers and jacuzzis (all but one). The Master Bedroom Suite consists of one of the king size rooms, located on the corner with large windows, and the room with a queen sized bed. The two spaces share a bathroom which has two showers rather than a shower and a jacuzzi. The 4th floor and roof terraces above provide the most magnificent views during the day and at night guests have told us that it feels as if you can touch the stars. As you watch the sun set over the sea, whether from the infinity pool, the jacuzzi, or lounging with a drink after dinner, don't be surprised to find yourself gazing aimlessly into the distance. There is no need for words as the full realization that you are in a tropical paradise hits you. FACILITIES OVERVIEW The villa has 1 800 square meters of living space with 10 bedrooms and 11 bathrooms. It is ideal for up to 8 couples and accommodates up to 16 adults and 5 children. There are plenty of spaces for socializing and private relaxation including our library, the dining area by the swimming pool, the pool table, several rooftop areas, a movie room, and our spa area. The rooms with king size beds all have magnificent ocean views and en-suite bathrooms. The Master Bedroom Suite shares its bathroom with the adjoining queen size bedroom and has 2 showers instead of separate shower and jacuzzi. HANDICAP ACCESS The villa has handicap access to all guest areas except for the 3 bedrooms 'between levels' (see below), the fitness centre, and the rooftop terraces. If you take the elevator to the fourth floor, you will be greeted by one of the best panoramic views on Phuket. Most guests choose this are for relaxing evenings with music and food overlooking the magnificent Phuket west coast as the sun sets and on into the night. On the absolute rooftop, on the 5th floor, sits the lone rooftop jacuzzi with its glass front offering the opportunity for a relaxing and possibly romantic moment with a view as commanding as any on Phuket. FLOOR BY FLOOR TOUR: 1. The ground floor houses our staff quarters, food and beverage stores, and the kitchen, which provides a variety of Thai, Western, and Indian menus. Just tell our chef which menu will suit your group best in advance and enjoy experiencing the variety of dishes served with your friends. Though we do sell cigars, please note that tobacco may not be smoked indoors and that any drugs apart from alcohol and tobacco are strictly prohibited on our premises. The ground floor is also where we kindly request that guests leave their shoes. Between the 1st and 2nd floors lies our fully equipped gym with strength training machines, a variety of tread mills, free weights, and other gym equipment. 2. The 2nd floor is where you can find the Kids' Room, one of the king size bedrooms with ocean view and en-suite bathroom with jacuzzi, our home theatre room with 11 plush movie seats and a 120-inch screen, the pool table, and the spa area. The pool table lies just down the hall from the movie room. If one steps outside from where we have our pool table, one reaches the spa area, which has massage cots both outside and inside and is serviced by professional spa therapists with advance bookings. For any guests staying in the Kids' Room (which does not have an en-suite bathroom), bathrooms are available by the stairs, in the king size bedroom, and in the spa area. Between the 2nd and 3rd floor, between the 4rd and 4th floors, and above the 4th floor are the three king size bedrooms without elevator access. These rooms all have jacuzzis designed for 2 people in the en-suite bathrooms. The room above the 4th floor is the one with a Buddha statue on the balcony outside the room often seen in pictures of Amonteera and beautifully framing the bedroom view. This top room also has a staircase leading from the balcony directly down to the infinity pool for the best pool access in the house. Especially for those of our guests who enjoy an early morning dip before the others wake up, this bedroom is simply magnificent. 3. On the 3rd floor is our library sala, 3 king size bedrooms with ocean views, and the Master Bedroom Suite, which is composed of the largest king size bedroom and an adjoining space with a queen size bed and small study area. The bathroom of the Master Bedroom Suite is the only one adjoining a king size bedroom without a jacuzzi; instead, it has 2 showers to accommodate more people sharing the same bathroom. 4. The 4th floor houses the main dining area, the infinity pool, and several social spaces. This is also where you will find the coffee machine. The 4th and 2nd floors are both equipped with speakers and the sound system can be managed with the mobile phone app Phonos. 5. On the roof above the 4th floor, accessible only by stairway, are several sun chairs, a shaded social area, and the incredibly commanding rooftop jacuzzi. This is also where you will be able to see our solar panels, which help us reduce the villa's carbon footprint. GENERAL NOTES Whilst guests are encouraged to use the air conditioning and to be as comfortable as possible, it is worth noting that Villa Amonteera is well ventilated, encouraging natural cross breezes, which are surprisingly refreshing, mainly due to the relatively high elevation of the villa in the green hills of Northwestern Phuket. Though the villa has nearly 100 square meters of solar panels that provide the bulk of the electricity and hot water for the villa, any additional energy used will not have been generated in an environmentally sound way. The elevation and the natural cross breezes makes the villa almost completely free of mosquitoes. This is worth noticing since many other villas in Thailand are plagued with mosquitoes especially during the summer season. NEARBY Some of Phuket's best nightlife, restaurants, and beaches, are just a few minutes from the villa. There are several fantastic restaurants and beach clubs by Surin Beach. Furthermore, you are only a few minutes from Bangtao/Layan beach, Phuket's finest. TRANSPORTATION The villa has one chauffeur and a Toyota fifteen-seater mini-bus (seating maximum 11 guests as per new Phuket regulations 2017) or a seven seat Toyota SUV at their disposal 08:00-17:00 daily (except for airport transfers, which are arranged separately). There are four indoor parking spaces and four outdoor spaces should you wish to rent your own vehicle or have friends over for a visit. Please note that only one vehicle is available at a time as guests or other staff than the driver may not drive the cars with guests in them according to local law. FACILITIES & SERVICES Villa Amonteera is fully serviced with managers, maids, a chef, and a chauffeur. -Split levels 1 800 square meter modern luxury villa with the most amazing views, contemporary design furniture and art work. -20 meters long infinity pool with freshwater system and Jacuzzi. -Roof plunge pool/Jacuzzi with million dollar views. -Air-conditioned. -10 bedrooms (including one Kids' Room with 2 bunk beds and one adjoining bedroom in the Master Bedroom Suite) and 11 bathrooms. -In-house kitchen with chef. -Full size professional gym. -Elevator. -24/7 security. -Integrated Sonos sound systems at upper and lower Lounge area, pool and in Salas, . -300 Mbps free Wi-Fi throughout the entire villa. -Spa room, treatments can be arranged in the villa (at guest cost). -Pool table. -Outdoor bar. -In-house laundry facilities (laundry at guest cost). -Indoor garage for 4 cars and outdoor parking for 4 cars. -Toyota Minibus with chauffeur. The van is available daily 08:00-17:00. Though it has 15 seats, it can carry no more than 11 passengers at a time as per recently changed Phuket regulations. The van is equipped with a TV and sound system. Guests pay only the price of fuel and voluntary tips. Extra hours charged at 500 THB per hour excluding fuel). Airport transfers THB 1500 per trip. -New Toyota SUV – 7 seats, (with chauffeur 500 THB per hour excluding fuel). THE STAFF Villa Amonteera is a premier class accommodation with a strong commitment to the highest of customer service standards. Our staff members have been carefully chosen and are all experienced in their field of work. The staff consists of waitresses, bartenders, chefs, house keepers, a handy man and a chauffeur. Between our Villa manager and Deputy Villa manager, we have several years of experience in national and international hospitality. Both managers will be leading our team as well as having the general responsibility for your visit. The staff will ensure that your visit is as relaxing and enjoyable as possible. If you have any special requests or needs, please do not hesitate to let us know so that we may help you to the best of our ability. MEALS The rental price includes breakfasts served every morning 08:00-10:00. For all meals, guests choose one of our varied set menus per meal (menus are themed and feature several regional types of Thai cuisine, Western food, Indian food, BBQ, and our exclusive Andaman Sea Harvest). We greatly appreciate that a single multiple choice choice menu is selected for the entire group so as to optimize food quality and timeliness. If there is need for menu alterations, these must be approved by the chef and manager so as to make sure the food can be prepared well. The kitchen is small and equipped with gas stoves and sharp objects, wherefore it may be used by our kitchen staff only. The 4th floor dining area has a table seating 16 people and the adjacent bar can seat another 8 people. At the short end of the pool, there is another dining table for 6-8 people. On the next level (level 5, the roof) offers open-air dining and can accommodate up to 16 people at the dining table (not including the seats in the three Salas). *** Villa Amonteera offers full service for weddings, private parties and other events for 50+ people. Please let us know your wishes and we will do our very best to make them come true. We can seat 30 for meals and stand 120 people for larger events using all the villa's common areas, inside and outside. Interaction with guests During your stay, cleaning/waiting staff and/or a manager will be on site 08:00-22:00 daily. The driver will be available daily 08:00-17:00 as well. In case staff are needed outside those hours (in case of late meals, parties, and so on), special arrangements can be made. Other things to note *Please note that these prices are for a maximum of 16 adults and 5 children (8+2 bedrooms use including children’s room with 2 double bunk beds). This assumes the adults are all couples who can share our king size beds and that 2 children can share the queen size bed. Additional charges apply if the maximum is exceeded and it may not be exceeded without our express permission. Guests may not arrive in greater numbers than have previously been approved. *There is a 4-night minimum stay for bookings that include a stay during Christmas, New Year, Songkran, and the Chinese New Year. *Tipping – prices do not include tips for staff, please tip at your discretion when you have received good service. *Food –we kindly ask our guests to order from the same set menu during any one lunch or dinner and to give notice of which set menu will be taken 24 hours in advance. Terms & Conditions Payment Policy* Once the Lessee reserve the villa a deposit of 50% of the villa rental rate is due within 7 days of booking to confirm. Failure to make this payment subjects your reservation to automatic cancellation without notice to you. The balance due of rent and damage deposit must be paid in full at least 30 days prior to arrival and 60 days prior to the Lessees arrival during peak season. If the Lessee choose to book extra nights just prior to arrival the rent for these nights shall be paid latest when check-in. Cancellation Policy* Airbnb terms and conditions apply regarding Payment and Cancellation. Travel Insurance For peace of mind we recommend travel and trip insurance including flight delays, cancellation, liability, health and loss and damage to personal items. Damage Deposit A $ 1000 safety deposit should be made upon arrival. The deposit will be fully refunded within 15 days of departure provided there is no damage, missing items, abnormal cleaning, or other special circumstances. If it is paid in cash, it can be paid in any currency and will be refunded to you upon departure. You, as the guest, agree to take all reasonable steps to ensure that your guests or families adhere to the rules and regulations affecting your villa. The villa is fully furnished, including a plentiful supply of bed linens and towels for guests’ use. Rearranging the furniture or removing any items from the villa is strictly prohibited. Arrival If you desire transportation from the airport to the villa, we need to know your arrival information (airline, flight number, arrival time, departure time, departure flight number) at least two weeks prior to your arrival. You will be able to fill in this information on our concierge form, which we will send to you by e-mail after the booking has been confirmed. It will appreciated if you notify us of any flight delays so we can notify the staff of any changes in schedule. Check-in and Check-out Times. Your check-in is 15:00 (3 PM) and check-out is at 12:00 (noon). It may be possible to arrange an early check-in or late check-out, of which we’d be happy to try and accommodate you, but since we may have other guests leaving or arriving on the same day, it is not always possible. The early check-in or late checkout fee (if possible) is US$350. If your flights do not fit our check in and check out times and we have other guests staying with us, we will of course try to help make arrangements for you to enjoy your first or last few hours on the island outside the villa. Liability The villa does not assume any liability for interruptions in the supply of electricity or water, internet, or pool filtration. We also do not assume any liability for personal or property loss, damage, or injury during your stay. The villa management also reserves the right to refuse service or rentals to anyone at their discretion. The guests are liable for their own safety and should have their children supervised by adults at all times, especially when young children are playing around the pool areas and the rails preventing falls from the upper floors. Capacity of Villa The total number of persons allowed in the villa at any one time is restricted to the number of persons scheduled and paid for (listed in the concierge form). The maximum occupancy of 16 adults is based on two persons per king size bedroom. Should a group misrepresent themselves and arrive in numbers beyond the villa's capacity, they may be required to pay for excess guests immediately or (in case of what the villa would label gross misconduct or misrepresentation) denied the right to stay in the villa altogether without refund. Towels and bed linen Towels are changed once per day (if not dirty). Bed linen are changed every third day (if not dirty). Transportation One Toyota Minibus with chauffeur is available for transport on Phuket. Due to recent (2017) changes in regulations, the maximum capacity of the van (strict Phuket regulations) is 11 guests, which leaves some extra space for bags since the van was designed to hold 15. The price is restricted to the cost of fuel during regular working hours (08:00-17:00). If guests require transportation outside those hours, the cost is THB 500 per hour + the price of fuel. Airport transfers are THB 1,500 or THB 1,000 depending on the size of the vehicle used. Staff working hours The staff general working hours are between 8 am to 6 pm. One staff will work until 10 pm. If a guest wants staff to work longer hours, he/she must let the villa manager know in advance and pay for staff overtime. Pets Pets of any kind are NOT allowed in or on the villa’s premises. A pet, or evidence of a pet, found on premises will cause immediate eviction, and the guest’s rent and deposit will be forfeited. Shoes Outdoor shoes are NOT allowed in the villa. We provide indoor slippers if required. Complaints & Maintenance No refund or rate adjustment shall be made for unforeseen mechanical failures such as the supply of electricity, telephone service, water, pool filtration systems, tubs, air conditioning, television or cable service, appliances, etc. House Parties & Functions The Lessor wishes to maintain a family atmosphere for the quiet enjoyment of guests. We rent to family groups and responsible adults only! Absolutely no house parties or functions such as weddings are allowed without advance written permission from the Lessor. Guests shall be respectfully peaceful, so as not to disturb other residents in the immediate area. The Lessee recognizes that the staff are Buddhist and shall treat the staff with respect. Drugs & Hazardous Materials Guest and members of his party shall not use or permit to be brought into any villa any illegal substances, inflammable fluids or other explosives or articles deemed hazardous to life, limb or property. Substitution Should the villa be out of order or deemed substandard prior to your arrival, the Lessor reserves the right to substitute comparable or better accommodations without liability. If comparable accommodations are not available, guests may receive a complete refund of the rental. Disclaimer The Lessor is not responsible for inadvertent errors on our website. All rates and villa details are subject to change without prior notice. Chef Services The services of the chef who are available for one, two, or three meals a day for the duration of your villa stay. Weddings & Large Events We do not Charge a Venue extra Fee, We invite you to use our Chef Team Bartenders Waiters manager drivers and Event planning staff for all items including accessories. Flowers Equipment rental etc We Provide all at Wholesale Cost + 10% If you use outside Planner Caters or Event Companies The is a BYO Charge on all Food and Beverage and invoices services of 10% charge to those outside companies providing the services any all categories. Disabled Guests The villa is located on a steep hillside, which offer stunning ocean views, but this also means that the villa has some areas reachable only by stairs (not reachable by the elevator). Force Majeure. The Lessor shall not be liable for any failure of or delay in the performance of this Agreement for the period that such failure or delay is due to causes beyond its reasonable control, including but not limited to acts of God, war, strikes or labor disputes, embargoes, government orders or any other force majeure event.",
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