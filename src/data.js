const data = {

  apparel: [{name: 'hipStore Black Beanie', image: ['https://s25.postimg.org/ncfgdsy8v/cdec7586d503e4b90a9bc6c39286b25f.jpg'], price: 9.99, description: 'Essential beanie in the color black, exclusively available at hipStore. Cozy knit construction is complete with a sloughy fit.', quantity: 50, rating: 4.0, category: "apparel"},
      
      {name: 'Idk, Google It ', image: ['https://s25.postimg.org/hpj3gbvq7/il_570x_N_790990333_kngx.jpg'], price: 14.99, description: 'HipStore Exclusive Graphic Tee,',quantity: 35, rating: 3.5, category: "apparel"},
      
      {name: 'Plaid shirt with sleeves rolled up',image: ['https://s25.postimg.org/qnm6wnhpb/plaid_shirt.jpg'], price: 45.00, 
      description: "We know you're tired of rolling up your sleeves. That's why we already did it for you.",quantity: 15,rating: 4.8, category: "apparel"},
      
      {name: 'Traditional blanket sweater', image: ['https://s25.postimg.org/lnayjh7xb/fcf21121d1a100538f20ef1259698137.jpg'], price: 75.00, description: 'Totally not a poncho but this cozy sweater is better than yours.Teamed up with a nice pair of blue jeans and can be rocked with all-white chuck taylors', quantity: 35, rating: 4.1, category: "apparel"}, 

      {name: 'Converse Shoe: Vintage',image: ['https://s25.postimg.org/e8lmr3m1r/e7f973d7d1f9dcd4c378a7ec3587f05d.jpg'], price: 95, description: "Want to fit in but don't know where to start. Well grab you a pair of these bad boys, and everyone will want to hang out with you. We dipped them in a bag of dirt, to give you the vintage fill with out the smell. You are welcome.", quantity: 50, rating: 0, category: "apparel"},

      {name: 'Hipster roll-up Jeans', image: ['https://s25.postimg.org/f122viue7/jeans.jpg'], price: 25.99, description: 'Slashed boyfriend jean from modern essentials. In a slightly slouchy low-rise fit with 5 pockets and a button zip fly. Pairs perfectly with white sneaks + slim-fit tops for a modern tomboy look we love. Exclusively available here at hipStore.', quantity: 16, rating: 9.5, category: "apparel"}, 

      {name: 'Mermaid T-Shirt', image: ['https://s25.postimg.org/3n1rf3fq7/Basic_t_shirt_women_font_b_hipster_b_font_font_b.jpg'], price: 14.99, description: 'Mermaid T-Shirt/ Womens', quantity: 5, rating: 7.5, category: "apparel"},

      {name: 'Bomber Jacket', image: ['https://s25.postimg.org/8ktmccfa7/1jacket.jpg'], price: 50.99, description: 'Give yourself and old school look with a new school swag.', quantity: 5, rating: 7.5, category: "apparel"},

      {name: 'Shoes', image: ['https://s25.postimg.org/bh2d0hnj3/s_l1000.jpg'], price: 35.75, description: 'Suade Gentlemen woven shoes', quantity: 14, rating: 9.5, category: "apparel"}
      ],

//---------- CATEGORY:FOOD -----------

  food: [{name: 'Thai style peanut chicken wrap', image: ['https://s25.postimg.org/ag24bd6jj/47e532188086402e9ef3b37292a61fde.jpg'], price: 6.00, description: 'Grilled chicken breast tossed in a peanut coconut sauce, topped with a chile-lime veggie slaw, red bell peppers, lettuce and ginger cream cheese served on a chile tortilla. Paired with peanut-coconut sauce and a side of grapes.', quantity: 30, rating: 4.0, category: "food"},

        {name: 'Organic Quinoa', image:['https://s25.postimg.org/fpaxegt3z/kchips.jpg'], price: 15.00, description: "We're still not sure what it's made of, but it's better than tofu." , quantity: 'Seriously, buy this. We have way too much of this stuff', rating: 3.9, category: "food"},

        {name:'Ciderboys',  image: ['https://s25.postimg.org/5iojq94kf/9754e395a9fe8f58bde2da49b648f897.jpg'], price: 12.00, description: 'Six Pack: Pours a clear light yellow gold. Aroma has a good amount of sweet sugary apple with a bit of a light bitterness underlying. Flavor is similarly sweet with apple and has just a light bite towards the finish. Just drink it, cause all the cool kids are.', quantity: 1000, rating: 4, category: "food"},

        {name: 'Kombucha', image: ['https://s25.postimg.org/v2qtwopy7/o_KOMBUCHATONICA_facebook.jpg'], price: 5.00, description: 'Vegan Immune- boosting drink. Kombucha is a fizzy, fermented beverage made from tea that is refreshing.The drink is essentially fermented tea: its made from sweetened tea, usually black, that is fermented by a bacteria and yeast culture and ends up full of probiotics as a result.', quantity: 18, rating: 7.8, category: "food"}, 

        {name: 'Vegan Sandwiches', image: ['https://s25.postimg.org/jro68bj33/d5efe3e0455e534256e35a5c1e8083b4.jpg'], price: 5.00, description: 'Hummus Kale Toast. It’s a game-changer. Not to mention that you’re getting some carbs, protein, healthy fats, and leafy greens, all in one spectacular toasty experience. These sandwiches are utterly delightful!', quantity: 16, rating: 8.7, category: "food"}, 

        {name: 'Vegan Spices', image: ['https://s25.postimg.org/gm3ki40gv/AJORSB0490.jpg'], price: 8.00, description: 'Indian Spices with an authentic taste!', quantity: 40, rating: 9.6, category: "food"},

        {name:'Gluten Free Cherry Almond Muffins', image: ['https://s25.postimg.org/irxvcm3xb/600x400_Gluten_Free_Cherry_Almond_Muffins1368194624.jpg'], price:3.00,description:'The apples in Apple Cranberry Muffins make these baked goods super moist. Natural wheat bran adds extra nutrition to this tasty treat.',quantity:30,rating:5,category:"food"},

        {name: 'French Croissants', image: ['https://s25.postimg.org/rbluo41nj/d91fd78adf72fb1754a41cee26ccba95.jpg'], price:  2.00, description: 'There is nothing like a hot buttered french croissant with a bowl of jam this fall. This is one of hipStore breakfast favorites', quantity: 40, rating: 5, category: "food"},

        {name:'Vegan homemade fries', image:['https://s25.postimg.org/yg3nx58wv/ad2da3831ee8c41458b00eb6b72b126a.jpg'], price:5.00,description:'Thyme Potatoes with Vegan Herb & Mustard Dip. One of the most delicious dishes you can ever ate. Try It Here at our hipStore Cafe ', quantity:30,rating:5,category:"food"}

        
        ],


//---------- CATEGORY:TECH -----------

    tech: [{name: 'Amara Headphones', image: ['https://s25.postimg.org/x2c11u9nj/mw60_wireless_over_ear_headphones_silver_brown_2.jpg'], price: 230.00, description: 'Style: Silver/Brown', quantity: 30, rating: 0, category: "tech"}, 

          {name: 'Beyonce Vinyl Platinum Edition', image: ['https://s25.postimg.org/frut1awrj/beyonce.jpg'], price: 44.00, description: 'The surprise self-titled album from Beyonce, available here on vinyl.', quantity: 0, rating: 0, category: "tech"},

          {name: 'Fujifilm Instax',image: ['https://s25.postimg.org/gfugsrgpr/Review_Fujifilm_Instax_25_Polaroid_5_1024x1024.jpg'], price: 85.00, description: "Tired of taking perfectly fine, high-quality images on your iPhone 7? This is the camera for you. Keep your blurry memories with you forever." , quantity: 30,rating: 2.7, category: "tech"},

          {name:'Mini Fridge',  image: ['https://s25.postimg.org/r7iugdhen/minifridge.jpg'], price: 125.00, description:'Perfect size fridge for the really small studio apartment you live in. Enough room inside for all 4 of your roommate.', quantity: 900, rating: 2, category: "tech"},

          {name: 'Polaroid Camera: Lilac', image:['https://s25.postimg.org/in7w860rj/pol.jpg'], price: 45.00, description: "What is life without a picture you can't shake?", quantity: 10, rating: 10, category: "tech"},

          {name: 'Phone Projector', image:['https://s25.postimg.org/mkvo4hh0f/1smart.jpg'], price: 165.50, description: "Plan the perfect movie night with this phone projector. No need to watch HBO with the subsscription your friend of a friend gave you on your little smart phone. Project the image large on a black wall.", quantity: 1000990, rating: 7, category: "tech"},

          {name: 'Walkman', image: ['https://s25.postimg.org/likzf14rj/Walkman_006.jpg'], price: 24.00, description: 'Sony Walkman', quantity: 4, rating: 7.5, category: "tech"}, 

          {name: 'Vinyl Records player', image: ['https://s25.postimg.org/3pq8fo8rj/steepleton_norwic.jpg'], price: 57.00, description: 'An all- wooden Vinyl Records player', quantity: 13, rating: 8.5, category: "tech"}, 

          {name: 'Boom-box', image: ['https://s25.postimg.org/c99mdfh3z/Boom_Box_10.jpg'], price: 45.00, description: 'JVC Boom-box', quantity: 4, rating: 7.5, category: "tech"}
          ],

//---------- CATEGORY:ART -----------

    art: [{name: 'Art Not War ', image: ['https://s25.postimg.org/4ukal1v8f/2f537397bd7421fdca931a9ce7d5ecb9.jpg'], price: 12.99, description: 'HipStore Poster', quantity: 50, rating: 3.7, category: "art"}, 

          {name: 'Soilder ', image: ['https://s25.postimg.org/p3guy99b3/b175195f1bd3d3dc5f4c7fd7a36e66aa.jpg'], price: 12.99, description: ' HipStore Poster', quantity: 50, rating: 4.0, category: "art"},

          {name: 'Foxy Art',image: ['https://s25.postimg.org/fio1jw57j/b175195f1bd3d3dc5f4c7fd7a36e66aa.jpg'],price: 200.00,description: 'hipStore poster', quantity: 3, rating: 4.3, category: "art"}, 

          {name: 'Dads Are the Original Hipsters', image: ['https://s25.postimg.org/xzigapl5r/image.jpg'], price: .50, description: 'He listened to vinyl before you did. He drank whiskey before you did. He had a mustache before you did. Admit it: your dad was a hipster before you were! Based on the blog phenomenon of the same name, this book celebrates dads as the original hipsters. Vintage photos of real dads back in the day—in their short shorts and tight tees playing arcade games—accompany snarky captions that at once tip a cap to Dad\'s glory days and poke fun at modern hipsters. Featuring tons of never-before-seen content, this book is perfect for dads, hipsters, and those who love to tease them!', quantity: 1000000, rating: 1, category: "art"},

          {name: 'So You Think You Are A Hipster', image: ['https://s25.postimg.org/vjgmwv333/c0e37adcec1c99cdf5f8a5fe6b10f5cd.jpg'], price: .25, description: 'Are you sure you are a hipster? Find out in this one page book if you are. But honestly... its not that serious.', quantity: "why do we even sell this", rating: 0, category: "art"},

          {name: 'Lion painting', image: ['https://s25.postimg.org/pwovd4py7/balazs_solti.jpg'], price: 25.99, description: 'Picture of a Nerdy Lion', quantity: 6, rating: 8.5, category: "art"}, 

          {name: 'Edward Scissor-hands', image: ['https://s25.postimg.org/m1lhak6sf/artista_chileno_fab_ciraolo_ilustraciones_hipste.png'], price: 17.99, description: 'Picture of Edwad Scissor-hands', quantity: 4, rating: 6.7, category: "art"}, 

          {name: 'Picture of a Praying Man', image: ['https://s25.postimg.org/ij9he65wf/tumblr_n13r2d1_HSE1rp70gvo1_500.jpg'], price: 14.99, description: 'Picture of a Praying man, with 2 monkeys on his shoulders', quantity: 7, rating: 8.5, category: "art"},

          {name: 'One with Nature', image: ['https://s25.postimg.org/f0xhhs50f/amazing_art_grunge_hipster_Favim_com_2170520.jpg'], price: 13.79, description: 'Picture of a woman who is seen to be one with Nature', quantity: 4, rating: 7.5, category: "art"}
          ],

//---------- CATEGORY:OTHER -----------

   other: [{name: ' Vintage Roll Top BackPack', image: ['https://s25.postimg.org/iltd109jz/435969d9048531c9d8719a94d082179a.jpg'], price: 24.99, description: 'Black Leather Buckled Roll Top BackPack', quantity: 0, rating: 0, category: "other"},

          {name: "Beard Grooming kit", image: ['https://s25.postimg.org/rm2jyxv1b/Elite_BEARD_Grooming_Kit_Kit_packed_closeup_2.jpg'], price: 29.99, description: 'hipStore favorite',quantity: 25, rating: 4.5, category: "other"},
          {name: "Rug Runned Over By A Lawnmover", image: ['https://s25.postimg.org/md817z61r/1home.jpg'], price: 799.99, description: 'This one of a kind rug fell off the back of this truck. Then it rolled over underneath a lawnmover. It still looked cool, so we are selling it.',quantity: 1, rating: 2, category: "other"},

          {name: 'Glasses with no lenses', image:['https://s25.postimg.org/c9e7r66hr/oculos_sem_lente.jpg'], price: 89.99, description: 'Stylish glasses for those with 20/20 vision and are in need of some face swag.', quantity: 25, rating: 3.5, category: "other"},

          {name: 'Hipster Bingo', image: ['https://s25.postimg.org/4563mfk2n/FN651_TUI1_EU3_IPW_MEDIUM.jpg'], price: 35, description: 'bingo reinvented for a new generation, for the 21st century, with bells and whistles, but still unmistakably, undeniably, bingo. There are cards and callers, numbers to be crossed off or dabbed, lines and full houses to be had, winners in waiting.', quantity: 30, rating: 3, category: "other"},
          
          {name: 'Vote for Bernie', image: ['https://s25.postimg.org/x8ubio867/hipster_bernie_poster_r2033d75cf4db437b838ff397d.jpg'], price: 22, description: 'We know who you are voting for... go ahead and REPRESENT', quantity: 25000, rating: 5, category: "other"},
          
          {name: 'The Palm Tree in the Corner', image: ['https://s25.postimg.org/jxx9xo2u7/duvet.jpg'], price: 250, description: 'Buy this dying palm tree to give your room a vintage feel. Limited stock. Get one before they die out. #Pun', quantity: 5, rating: 1, category: "other"},

          {name: 'Beard Wax', image: ['https://s25.postimg.org/so853qogv/woody_s_beard_balm_2_oz_500x500.jpg'], price: 6.75, description: 'Woodys Beard Wax', quantity: 12, rating: 8.5, category: "other"},

          {name: 'Blood Rage', image: ['https://s25.postimg.org/5ba3l88db/3_blood_rage.png'], price: 14.99, description: 'Blood rage Board game', quantity: 6, rating: 8.5, category: "other"},

          {name: 'Hack and Sack', image: ['https://s25.postimg.org/vxr5ny1y7/Dc_Comics_Superman_Shield_Logo_Super_Hero_Hack.jpg'], price: 8.75, description: 'Superman Hack & Sack ball', quantity: 13, rating: 8.5, category: "other"},

          {name: 'Toy Car: Vintage', image: ['https://s25.postimg.org/7sqyd5b33/1car.jpg'], price: 8.75, description: 'Let your inner child shine with this toy car. But your to cool for that, so buy this toy car and leave it on a high shelf for "decoration."', quantity: 255, rating: 3, category: "other"},

          {name: 'Key Holder', image: ['https://s25.postimg.org/6ualauxr3/1other.jpg'], price: 15.95, description: 'Key all you little items safe in this tray. Why would you buy this? We do not know. But it looks nice, and you are going to buy it."', quantity: 1655, rating: 3, category: "other"},

          {name: 'Tokyo Bike', image: ['https://s25.postimg.org/dto53b49r/tumblr_m4f9ld059_R1qcuhvho1_540.jpg'], price: 1200, description: "For those people who love the earth. Don't drive ride to where every your heart desire", quantity: 4, rating: 9, category: "other"}
          ],

};


export default data;

