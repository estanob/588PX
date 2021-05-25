json.extract! gallery, :id, :title, :creator_id, :created_at, :updated_at
json.id gallery.id
json.creator_id gallery.creator_id
json.creator gallery.creator.username
json.picsToGal gallery.pictures_to_galleries
json.pics gallery.pictures