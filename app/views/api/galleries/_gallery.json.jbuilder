json.extract! gallery, :id, :title, :creator_id, :created_at, :updated_at
json.id gallery.id
json.creator gallery.creator.username
json.pictures_to_galleries gallery.pictures_to_galleries
json.pics gallery.pictures