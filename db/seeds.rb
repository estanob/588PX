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

user1 = User.create!(username: 'bobby555', password: '123456')
user2 = User.create!(username: 'jenny95611', password: '123456')
user3 = User.create!(username: 'rick901', password: '123456')

picture1 = Picture.new(title: 'Sun Moon Lake', location: 'Nantou County, TaiWan', caption: 'Beautiful lake in central TaiWan', uploader_id: user2.id)

picture2 = Picture.new(title: 'Lively Shopping District', location: 'Hsi Men Ting, Taipei, TaiWan', caption: 'Best area to shop in Taiwan, can buy many things', uploader_id: user2.id)

picture3 = Picture.new(title: 'Beautiful beach in Okinawa', location: 'Yonehara Beach, Ishigaki City, Okinawa Prefecture, Japan', caption: 'ater so clear you can see your feet in the sand', uploader_id: user1.id)

picture4 = Picture.new(title: 'Castle', location: 'Naha City, Okinawa Prefecture, Japan', caption: 'Majestic castle in Okinawa', uploader_id: user1.id)

picture5 = Picture.new(title: 'Chocolate Hills', location: 'Carmen, Bohol, Philippines', caption: "Look! It's hills that look like Chocolate!!!", uploader_id: user3.id)

picture6 = Picture.new(title: 'Cruz Daku', location: 'Loboc, Bohol, Philippines', caption: 'Hike up the hill to see this giant cross', uploader_id: user3.id)

gallery1 = Gallery.create!(title: 'TaiWan Trip', creator_id: user2.id)
gallery2 = Gallery.create!(title: 'Okinawa Travel', creator_id: user1.id)
gallery3 = Gallery.create!(title: 'Better in the Philippines', creator_id: user3.id)