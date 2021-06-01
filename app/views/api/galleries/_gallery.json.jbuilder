json.extract! gallery, :id, :title, :creator_id, :created_at, :updated_at
json.id gallery.id
json.creatorId gallery.creator_id
json.creatorUsername gallery.creator.username
json.creator "#{gallery.creator.first_name} #{gallery.creator.last_name}"
json.creatorTotalGals
json.picsToGal gallery.pictures_to_galleries
json.pics gallery.pictures, partial: 'api/pictures/picture', as: :picture