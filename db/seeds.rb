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

user1 = User.create!(first_name: 'App', last_name: 'Academy', username: 'appacademy', password: '123456')
user2 = User.create!(first_name: 'Jenny', last_name: 'Jenny', username: 'jenny95611', password: '123456')
user3 = User.create!(first_name: 'Rickety', last_name: 'Rick', username: 'rick901', password: '123456')
user4 = User.create!(first_name: 'Bobby', last_name: 'Five', username: 'bobby555', password: '123456')
user5 = User.create!(first_name: 'Demo', last_name: 'Guest', username: 'demo123', password: '123456')
user6 = User.create!(first_name: 'Brandon', last_name: 'Estaño', username: 'estanob', password: 'password123456')
user7 = User.create!(first_name: 'Rabbit', last_name: 'Bunny', username: 'rabbit262', password: 'password123456')
user8 = User.create!(first_name: 'Five', last_name: 'Eight-eight', username: 'five88', password: 'password')

picture1 = Picture.create(
  title: 'Taiwanese Food Stall', 
  location: 'Sun Moon Lake, Nantou County, TaiWan', 
  caption: 'Beautiful lake in central TaiWan', 
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
  caption: 'Water so clear you can see your feet in the sand', 
  uploader_id: user1.id
)
# picture not yet uploaded
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/gettyimages-130963804+yonehara+beach+ishigakijima.jpg")
picture3.photo.attach(io: file, filename: 'clear_water_beach.jpg')
picture3.save!
  
picture4 = Picture.create(
  title: 'Shuri Castle', 
  location: 'Naha City, Okinawa Prefecture, Japan', 
  caption: 'Majestic castle in Okinawa', 
  uploader_id: user1.id
)
# picture not yet uploaded
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
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/estanob/tofu+with+boba.png")
picture9.photo.attach(io: file, filename: 'tofu with boba.png')
picture9.save!

picture10 = Picture.create(
  title: 'Lanterns with wishes', 
  location: "Foster City, CA, USA", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/estanob/foster+city+lantern+festival.png")
picture10.photo.attach(io: file, filename: 'lantern_festival.png')
picture10.save!

picture11 = Picture.create(
  title: 'Ferris Wheel', 
  location: "Downtown, Seattle, WA, USA", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/estanob/seattle+ferris+wheel.png")
picture11.photo.attach(io: file, filename: 'ferris_wheel.png')
picture11.save!

picture12 = Picture.create(
  title: 'Cheese Board', 
  location: "Elk Grove, CA, USA", 
  uploader_id: user7.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/cheese+board.png")
picture12.photo.attach(io: file, filename: 'cheese board.png')
picture12.save!

picture13 = Picture.create(
  title: 'Beautiful Mural', 
  location: "Downtown Sacramento, CA, USA", 
  uploader_id: user7.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/dt+sac+blue+mural.png")
picture13.photo.attach(io: file, filename: 'blue mural.png')
picture13.save!

picture14 = Picture.create(
  title: 'So Green', 
  location: "Seoul, South Korea", 
  uploader_id: user7.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/korea+green.png")
picture14.photo.attach(io: file, filename: 'nature in korea.png')
picture14.save!

picture15 = Picture.create(
  title: 'Sakura', 
  location: "Sacramento State University, Sacramento, CA, USA", 
  uploader_id: user7.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/sac+state+sakura.png")
picture15.photo.attach(io: file, filename: 'sakura.png')
picture15.save!

picture16 = Picture.create(
  title: 'My baby Tofu with flowers', 
  location: "Bay Area, CA, USA", 
  uploader_id: user7.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/rabbit626/tofu+with+flowers.png")
picture16.photo.attach(io: file, filename: 'tofu flowers.png')
picture16.save!

picture17 = Picture.create(
  title: 'Japan Trip', 
  location: "NaritaSan Temple, Narita, Japan", 
  uploader_id: user6.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagespti/naritasan+with+mom.JPG")
picture17.photo.attach(io: file, filename: 'naritasan.png')
picture17.save!

gallery1 = Gallery.create!(
  title: 'TaiWan Trip', 
  creator_id: user2.id
)

gallery2 = Gallery.create!(
  title: 'My Photography', 
  creator_id: user7.id
)

gallery3 = Gallery.create!(
  title: 'Better in the Philippines', 
  creator_id: user3.id
)

gallery4 = Gallery.create!(
  title: "All Photos",
  creator_id: user6.id
)

follow1 = Follow.create!(
  followee: user6,
  follower: user1
)

follow2 = Follow.create!(
  followee: user6,
  follower: user2
)
  
follow3 = Follow.create!(
  followee: user6,
  follower: user3
)

follow4 = Follow.create!(
  followee: user6,
  follower: user4
)

follow5 = Follow.create!(
  followee: user6,
  follower: user5
)

follow6 = Follow.create!(
  followee: user6,
  follower: user7
)

follow7 = Follow.create!(
  followee: user7,
  follower: user6
)

picToGal1 = PicturesToGallery.create!(
  picture_id: picture9.id,
  gallery_id: gallery4.id
)
picToGal2 = PicturesToGallery.create!(
  picture_id: picture10.id,
  gallery_id: gallery4.id
)

picToGal3 = PicturesToGallery.create!(
  picture_id: picture11.id,
  gallery_id: gallery4.id
)

picToGal4 = PicturesToGallery.create!(
  picture_id: picture17.id,
  gallery_id: gallery4.id
)