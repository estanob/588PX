json.extract! picture, :id, :title, :caption, :location, :uploader_id, :created_at, :updated_at
json.photoUrl url_for(picture.photo)