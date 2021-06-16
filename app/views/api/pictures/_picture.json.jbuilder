json.extract! picture, :id, :title, :caption, :location, :uploader_id, :created_at, :updated_at
json.id picture.id
json.uploader picture.uploader.username
json.uploaderName "#{picture.uploader.first_name} #{picture.uploader.last_name}"
json.photoUrl url_for(picture.photo)
json.location picture.location
json.galleries picture.galleries
json.picsToGals picture.pictures_to_galleries
json.likes picture.likes