json.partial! "picture", picture: @picture
# json.photoUrl @picture.photo.map { |file| url_for(file) }