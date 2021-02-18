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

user1 = User.create!(username: 'appacademy', password: '123456')
user2 = User.create!(username: 'jenny95611', password: '123456')
user3 = User.create!(username: 'rick901', password: '123456')


picture1 = Picture.create!(
  title: 'Taiwanese Food Stall', 
  location: 'Sun Moon Lake, Nantou County, TaiWan', 
  caption: 'Beautiful lake in central TaiWan', 
  uploader_id: user2.id
)
# picture not yet uploaded
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/%E6%97%A5%E6%9C%88%E6%BD%AD+%E5%9C%B0%E6%94%A4.jpg")
picture1.photo.attach(io: file, filename: 'taiwan_food_stall.jpg')
picture1.save!

picture2 = Picture.create!(
  title: 'Taiwanese Street Food', 
  location: 'Hsi Men Ting, Taipei, TaiWan', 
  caption: "Ever had stinky tofu before? It's great!", 
  uploader_id: user2.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagesptii/IMG-8746.JPG")
picture2.photo.attach(io: file, filename: 'stinky_tofu.jpg')
picture2.save!

picture3 = Picture.create!(
  title: 'Beautiful beach in Okinawa', 
  location: 'Yonehara Beach, Ishigaki City, Okinawa Prefecture, Japan', 
  caption: 'Water so clear you can see your feet in the sand', 
  uploader_id: user1.id
)
# picture not yet uploaded
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/gettyimages-130963804+yonehara+beach+ishigakijima.jpg")
picture3.photo.attach(io: file, filename: 'clear_water_beach.jpg')
picture3.save!
  
picture4 = Picture.create!(
  title: 'Shuri Castle', 
  location: 'Naha City, Okinawa Prefecture, Japan', 
  caption: 'Majestic castle in Okinawa', 
  uploader_id: user1.id
)
# picture not yet uploaded
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/18-56618+shuri+castle.jpeg")
picture4.photo.attach(io: file, filename: 'clear_water_beach.jpg')
picture4.save!

picture5 = Picture.create!(
  title: 'Lake View', 
  location: "Kailua, Oahu, Hawai'i", 
  uploader_id: user3.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagesptiv/IMG-2412.JPG")
picture5.photo.attach(io: file, filename: 'lake_view.jpg')
picture5.save!

picture6 = Picture.create!(
  title: 'Chocolate Hills', 
  location: 'Carmen, Bohol, Philippines', 
  caption: 'Posing with Auntie in front of Chocolate Hills. But this was during rainy season, so the hills were green.', 
  uploader_id: user3.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/fspimagesptii/IMG-1674.JPG")
picture6.photo.attach(io: file, filename: 'chocolate_hills.jpg')
picture6.save!

picture7 = Picture.create!(
  title: 'Zipline', 
  location: "Northshore, Oahu, Hawai'i", 
  uploader_id: user1.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/hLxFdBFfkHM3kpcWefTwWAX9")
picture7.photo.attach(io: file, filename: 'zipline.jpg')
picture7.save!

picture8 = Picture.create!(
  title: 'Marina Bay View', 
  location: "Infinity Pool - Marina Bay Sands Hotel, Downtown Core, Singapore", 
  uploader_id: user1.id
)
file = open("https://five88px-dev.s3-us-west-1.amazonaws.com/IMG-1532.jpg")
picture8.photo.attach(io: file, filename: 'infinity_pool_view.jpg')
picture8.save!

gallery1 = Gallery.create!(
  title: 'TaiWan Trip', 
  creator_id: user2.id
)

gallery2 = Gallery.create!(
  title: 'Okinawa Travel', 
  creator_id: user1.id
)

gallery3 = Gallery.create!(
  title: 'Better in the Philippines', 
  creator_id: user3.id
)