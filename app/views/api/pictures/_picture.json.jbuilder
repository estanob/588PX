json.extract! picture, :id, :title, :caption, :location, :uploader_id, :created_at, :updated_at
json.photoUrl url_for(picture.photo)
json.id picture.id
json.uploader_id picture.uploader_id
json.uploader picture.uploader.username
json.location picture.location
json.galleries picture.pictures_to_galleries