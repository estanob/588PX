json.extract! picture, :id, :title, :location, :caption, :uploader_id
json.photo_url url_for(picture.photo)