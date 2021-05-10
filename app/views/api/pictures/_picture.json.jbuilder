json.extract! picture, :id, :title, :caption, :location, :uploader_id, :created_at, :updated_at
json.id picture.id
json.uploader_id picture.uploader_id
json.uploader picture.uploader.username
json.uploaderFirstName picture.uploader.first_name
json.uploaderLastName picture.uploader.last_name
json.photoUrl url_for(picture.photo)
json.location picture.location
json.galleries picture.galleries
json.pictures_to_galleries picture.pictures_to_galleries