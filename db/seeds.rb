# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Picture.destroy_all
Gallery.destroy_all
Follow.destroy_all
PicturesToGallery.destroy_all

user1 = User.create!(
  first_name: 'App', 
  last_name: 'Academy', 
  username: 'appacademy', 
  password: '123456'
)

user2 = User.create!(
  first_name: 'Jenny', 
  last_name: 'Jenny', 
  username: 'jenny95611', 
  password: '123456'
)

user3 = User.create!(
  first_name: 'Bobby', 
  last_name: 'Five', 
  username: 'bobby555', 
  password: '123456'
)

user4 = User.create!(
  first_name: 'Demo', 
  last_name: 'Guest', 
  username: 'demo123', 
  password: '123456'
)

user5 = User.create!(
  first_name: 'Brandon', 
  last_name: 'Estaño', 
  username: 'estanob', 
  password: 'password123456'
)

user6 = User.create!(
  first_name: 'Rabbit', 
  last_name: 'Bunny', 
  username: 'rabbit262', 
  password: 'password123456'
)

picture1 = Picture.create(
  title: 'Taiwanese Food Stall', 
  location: 'Sun Moon Lake, Nantou County, TaiWan', 
  uploader_id: user2.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/%E6%97%A5%E6%9C%88%E6%BD%AD+%E5%9C%B0%E6%94%A4.jpg")
picture1.photo.attach(io: file, filename: 'taiwan_food_stall.jpg')
picture1.save!

picture2 = Picture.create(
  title: 'Stinky Tofu', 
  location: 'Hsi Men Ting, Taipei, TaiWan', 
  caption: "Ever had stinky tofu before? It's great!", 
  uploader_id: user2.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagesptii/IMG-8746.JPG")
picture2.photo.attach(io: file, filename: 'stinky_tofu.jpg')
picture2.save!

picture3 = Picture.create(
  title: 'Beautiful beach in Okinawa', 
  location: 'Yonehara Beach, Ishigaki City, Okinawa Prefecture, Japan', 
  caption: "Water so clear you can see your feet in the sand.\nImage taken from Google", 
  uploader_id: user1.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/gettyimages-130963804+yonehara+beach+ishigakijima.jpg")
picture3.photo.attach(io: file, filename: 'clear_water_beach.jpg')
picture3.save!
  
picture4 = Picture.create(
  title: 'Shuri Castle', 
  location: 'Naha City, Okinawa Prefecture, Japan', 
  caption: "Majestic castle in Okinawa.\nImage taken from Google", 
  uploader_id: user1.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/18-56618+shuri+castle.jpeg")
picture4.photo.attach(io: file, filename: 'clear_water_beach.jpg')
picture4.save!

picture5 = Picture.create(
  title: 'Lake View', 
  location: "Kailua, Oahu, Hawai'i", 
  uploader_id: user3.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagesptiv/IMG-2412.JPG")
picture5.photo.attach(io: file, filename: 'lake_view.jpg')
picture5.save!

picture6 = Picture.create(
  title: 'Chocolate Hills', 
  location: 'Carmen, Bohol, Philippines', 
  caption: 'Posing with Auntie in front of Chocolate Hills. But this was during rainy season, so the hills were green.', 
  uploader_id: user3.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagesptii/IMG-1674.JPG")
picture6.photo.attach(io: file, filename: 'chocolate_hills.jpg')
picture6.save!

picture7 = Picture.create(
  title: 'Zipline', 
  location: "Northshore, Oahu, Hawai'i", 
  uploader_id: user1.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/hLxFdBFfkHM3kpcWefTwWAX9")
picture7.photo.attach(io: file, filename: 'zipline.jpg')
picture7.save!

picture8 = Picture.create(
  title: 'Marina Bay View', 
  location: "Infinity Pool - Marina Bay Sands Hotel, Downtown Core, Singapore", 
  uploader_id: user1.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/IMG-1532.jpg")
picture8.photo.attach(io: file, filename: 'infinity_pool_view.jpg')
picture8.save!

picture9 = Picture.create(
  title: 'My boy Tofu', 
  location: "Bay Area, CA, USA", 
  uploader_id: user5.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/estanob/tofu+with+boba.png")
picture9.photo.attach(io: file, filename: 'tofu with boba.png')
picture9.save!

picture10 = Picture.create(
  title: 'Lanterns with wishes', 
  location: "Foster City, CA, USA", 
  uploader_id: user5.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/estanob/foster+city+lantern+festival.png")
picture10.photo.attach(io: file, filename: 'lantern_festival.png')
picture10.save!

picture11 = Picture.create(
  title: 'Ferris Wheel', 
  location: "Downtown, Seattle, WA, USA", 
  uploader_id: user5.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/estanob/seattle+ferris+wheel.png")
picture11.photo.attach(io: file, filename: 'ferris_wheel.png')
picture11.save!
3
picture12 = Picture.create(
  title: 'Cheese Board', 
  location: "Elk Grove, CA, USA", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/cheese+board.png")
picture12.photo.attach(io: file, filename: 'cheese board.png')
picture12.save!

picture13 = Picture.create(
  title: 'Beautiful Mural', 
  location: "Downtown Sacramento, CA, USA", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/dt+sac+blue+mural.png")
picture13.photo.attach(io: file, filename: 'blue mural.png')
picture13.save!

picture14 = Picture.create(
  title: 'So Green', 
  location: "Seoul, South Korea", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/korea+green.png")
picture14.photo.attach(io: file, filename: 'nature in korea.png')
picture14.save!

picture15 = Picture.create(
  title: 'Sakura', 
  location: "Sacramento State University, Sacramento, CA, USA", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/sac+state+sakura.png")
picture15.photo.attach(io: file, filename: 'sakura.png')
picture15.save!

picture16 = Picture.create(
  title: 'My baby Tofu with flowers', 
  location: "Bay Area, CA, USA", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/tofu+with+flowers.png")
picture16.photo.attach(io: file, filename: 'tofu flowers.png')
picture16.save!

picture17 = Picture.create(
  title: 'Japan Trip', 
  location: "NaritaSan Temple, Narita, Japan", 
  uploader_id: user5.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagespti/naritasan+with+mom.JPG")
picture17.photo.attach(io: file, filename: 'naritasan.png')
picture17.save!

picture18 = Picture.create(
  title: 'Merlion Park with Dad', 
  location: "Merlion Park, Central Area, Singapore", 
  uploader_id: user5.id,
  caption: "魚尾獅公園\n鱼尾狮公园"
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/next+uploads/%E9%AD%9A%E5%B0%BE%E7%8D%85%E5%85%AC%E5%9C%92+%E6%B8%85%E6%A5%9A.png")
picture18.photo.attach(io: file, filename: 'merlionpark.png')
picture18.save!

picture19 = Picture.create(
  title: 'Marina Bay Sands', 
  location: "Marina Bay Sands Hotel, Central Area, Singapore", 
  uploader_id: user5.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/next+uploads/%E6%BF%B1%E6%B5%B7%E7%81%A3%E9%87%91%E6%B2%99%E9%85%92%E5%BA%97.jpeg")
picture19.photo.attach(io: file, filename: 'marina bay sands.jpeg')
picture19.save!

picture20 = Picture.create(
  title: 'Hiking', 
  location: "Mission Peak, Fremont, CA, USA", 
  uploader_id: user5.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/next+uploads/%E5%85%84%E5%BC%9F.jpeg")
picture20.photo.attach(io: file, filename: 'mission peak.jpeg')
picture20.save!

picture21 = Picture.create(
  title: 'Mask', 
  location: "Loay, Bohol, Philippines", 
  caption: 'Sambat Mascara y Regatta',
  uploader_id: user4.id
)
file = open("https://five88px-dev.s3.us-west-1.amazonaws.com/IMG-1560.jpg")
picture21.photo.attach(io: file, filename: 'xmas bohol mask pic.jpg')
picture21.save!

picture22 = Picture.create(
  title: 'Japanese Garden', 
  location: "Bellevue Botanical Garden, Bellevue, WA, USA", 
  caption: 'First time taking gf on a trip to Seattle',
  uploader_id: user5.id
)
file = open("https://five88px-dev.s3.us-west-1.amazonaws.com/after+check+uploads/bellevue+garden+w+gf+.jpeg")
picture22.photo.attach(io: file, filename: 'gf bellevue garden.jpg')
picture22.save!

picture23 = Picture.create(
  title: 'Outside', 
  location: "Chihuly Garden and Glass, Uptown, Seattle, WA, USA", 
  uploader_id: user4.id
)
file = open("https://five88px-dev.s3.us-west-1.amazonaws.com/after+check+uploads/chihuly+glass+garden+outside.jpeg")
picture23.photo.attach(io: file, filename: 'glass garden outside.jpg')
picture23.save!

picture24 = Picture.create(
  title: 'Stone', 
  location: "Bellevue Botanical Garden, Bellevue, WA, USA", 
  uploader_id: user4.id
)
file = open("https://five88px-dev.s3.us-west-1.amazonaws.com/after+check+uploads/bellevue+garden+stone.jpeg")
picture24.photo.attach(io: file, filename: 'bellevue garden stone.jpg')
picture24.save!

picture25 = Picture.create(
  title: 'Estaño Family Estate', 
  caption: 'Crazy Rich Asians: Philippines Edition',
  location: "Barangay Alegria, Loboc, Bohol, Philippines", 
  uploader_id: user4.id
)
file = open("https://five88px-dev.s3.us-west-1.amazonaws.com/fspimagespti/IMG-8347.JPG")
picture25.photo.attach(io: file, filename: 'philippines estate.jpg')
picture25.save!

picture26 = Picture.create(
  title: 'Resort', 
  location: "Bellevue Resort, Barangay Doljo, Panglao, Panglao Island, Bohol, Philippines", 
  uploader_id: user4.id
)
file = open("https://five88px-dev.s3.us-west-1.amazonaws.com/fspimagesptii/IMG-1706.JPG")
picture26.photo.attach(io: file, filename: 'bellevue resort.jpg')
picture26.save!

picture27 = Picture.create(
  title: 'Pool Side', 
  location: "Bellevue Resort, Barangay Doljo, Panglao, Panglao Island, Bohol, Philippines", 
  uploader_id: user4.id
)
file = open("https://five88px-dev.s3.us-west-1.amazonaws.com/fspimagespti/IMG-1708.JPG")
picture27.photo.attach(io: file, filename: 'pool bellevue resort.jpg')
picture27.save!

gallery1 = Gallery.create!(
  title: 'TaiWan Trip', 
  creator_id: user2.id
)

gallery2 = Gallery.create!(
  title: 'My Photography', 
  creator_id: user6.id
)

gallery3 = Gallery.create!(
  title: 'Better in the Philippines', 
  creator_id: user3.id
)

gallery4 = Gallery.create!(
  title: "All Photos",
  creator_id: user5.id
)

gallery5 = Gallery.create!(
  title: "Asia Travel",
  description: "Japan & Singapore",
  creator_id: user5.id
)

gallery6 = Gallery.create!(
  title: "All Photos",
  creator_id: user4.id
)

gallery7 = Gallery.create!(
  title: "Philippines",
  description: "2017 and 2018",
  creator_id: user4.id
)

follow1 = Follow.create!(
  followee: user5,
  follower: user1
)

follow2 = Follow.create!(
  followee: user5,
  follower: user2
)
  
follow3 = Follow.create!(
  followee: user5,
  follower: user3
)

follow4 = Follow.create!(
  followee: user5,
  follower: user4
)

follow5 = Follow.create!(
  followee: user5,
  follower: user6
)

follow6 = Follow.create!(
  followee: user6,
  follower: user5
)

follow7 = Follow.create!(
  followee: user6,
  follower: user4
)

follow8 = Follow.create!(
  followee: user1,
  follower: user4
)

follow9 = Follow.create!(
  followee: user4,
  follower: user1
)

follow10 = Follow.create!(
  followee: user4,
  follower: user2
)

follow11 = Follow.create!(
  followee: user3,
  follower: user4
)

follow12 = Follow.create!(
  followee: user2,
  follower: user4
)

follow12 = Follow.create!(
  followee: user4,
  follower: user3
)

picToGal1 = PicturesToGallery.create!(
  gallery_id: gallery4.id,
  picture_id: picture9.id
)

picToGal2 = PicturesToGallery.create!(
  gallery_id: gallery4.id,
  picture_id: picture10.id
)

picToGal3 = PicturesToGallery.create!(
  gallery_id: gallery4.id,
  picture_id: picture11.id
)

picToGal4 = PicturesToGallery.create!(
  gallery_id: gallery4.id,
  picture_id: picture17.id
)

picToGal5 = PicturesToGallery.create!(
  gallery_id: gallery4.id,
  picture_id: picture18.id
)

picToGal6 = PicturesToGallery.create!(
  gallery_id: gallery4.id,
  picture_id: picture19.id
)

picToGal7 = PicturesToGallery.create!(
  gallery_id: gallery5.id,
  picture_id: picture17.id
)

picToGal8 = PicturesToGallery.create!(
  gallery_id: gallery5.id,
  picture_id: picture18.id
)

picToGal9 = PicturesToGallery.create!(
  gallery_id: gallery5.id,
  picture_id: picture19.id
)

picToGal10 = PicturesToGallery.create!(
  gallery_id: gallery3.id,
  picture_id: picture6.id
)

picToGal11 = PicturesToGallery.create!(
  gallery_id: gallery1.id,
  picture_id: picture1.id
)

picToGal12 = PicturesToGallery.create!(
  gallery_id: gallery1.id,
  picture_id: picture2.id
)

picToGal13 = PicturesToGallery.create!(
  gallery_id: gallery2.id,
  picture_id: picture12.id
) 

picToGal14 = PicturesToGallery.create!(
  gallery_id: gallery2.id,
  picture_id: picture13.id
) 

picToGal15 = PicturesToGallery.create!(
  gallery_id: gallery2.id,
  picture_id: picture14.id
) 

picToGal16 = PicturesToGallery.create!(
  gallery_id: gallery2.id,
  picture_id: picture15.id
) 

picToGal17 = PicturesToGallery.create!(
  gallery_id: gallery2.id,
  picture_id: picture16.id
) 

picToGal18 = PicturesToGallery.create!(
  gallery_id: gallery4.id,
  picture_id: picture22.id
)

picToGal19 = PicturesToGallery.create!(
  gallery_id: gallery6.id,
  picture_id: picture21.id
)

picToGal20 = PicturesToGallery.create!(
  gallery_id: gallery6.id,
  picture_id: picture23.id
)

picToGal21 = PicturesToGallery.create!(
  gallery_id: gallery6.id,
  picture_id: picture24.id
)

picToGal22 = PicturesToGallery.create!(
  gallery_id: gallery6.id,
  picture_id: picture25.id
)

picToGal23 = PicturesToGallery.create!(
  gallery_id: gallery6.id,
  picture_id: picture26.id
)

picToGal24 = PicturesToGallery.create!(
  gallery_id: gallery6.id,
  picture_id: picture27.id
)

picToGal25 = PicturesToGallery.create!(
  gallery_id: gallery7.id,
  picture_id: picture25.id
)

picToGal26 = PicturesToGallery.create!(
  gallery_id: gallery7.id,
  picture_id: picture26.id
)

picToGal27 = PicturesToGallery.create!(
  gallery_id: gallery7.id,
  picture_id: picture27.id
)

picToGal28 = PicturesToGallery.create!(
  gallery_id: gallery7.id,
  picture_id: picture21.id
)

picLike1 = PictureLike.create!(
  liker_id: user6.id,
  picture_id: picture11.id
)

picLike2 = PictureLike.create!(
  liker_id: user4.id,
  picture_id: picture11.id
)

picLike3 = PictureLike.create!(
  liker_id: user3.id,
  picture_id: picture11.id
)

picLike4 = PictureLike.create!(
  liker_id: user2.id,
  picture_id: picture11.id
)

picLike5 = PictureLike.create!(
  liker_id: user1.id,
  picture_id: picture11.id
)

picLike6 = PictureLike.create!(
  liker_id: user2.id,
  picture_id: picture4.id
)

picLike7 = PictureLike.create!(
  liker_id: user3.id,
  picture_id: picture4.id
)

picLike8 = PictureLike.create!(
  liker_id: user4.id,
  picture_id: picture4.id
)

picLike9 = PictureLike.create!(
  liker_id: user5.id,
  picture_id: picture4.id
)

picLike10 = PictureLike.create!(
  liker_id: user6.id,
  picture_id: picture4.id
)

picLike11 = PictureLike.create!(
  liker_id: ,
  picture_id: 
)

picLike12 = PictureLike.create!(
  liker_id: user1.id,
  picture_id: picture5.id
)

picLike13 = PictureLike.create!(
  liker_id: user2.id,
  picture_id: picture5.id
)

picLike14 = PictureLike.create!(
  liker_id: user4.id,
  picture_id: picture5.id
)

picLike15 = PictureLike.create!(
  liker_id: user5.id,
  picture_id: picture5.id
)

picLike16 = PictureLike.create!(
  liker_id: user6.id,
  picture_id: picture5.id
)