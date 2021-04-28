# json.array! @pictures do |picture|
#   json.extract! picture, :id, :title
#   json.photoUrl url_for(picture.photo)
# end

@pictures.each do |picture|
  json.set! picture.id do
    json.partial! "picture", picture: picture
  end
end