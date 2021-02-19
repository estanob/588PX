@pictures.each do |picture|
  json.set! picture.id do
    json.partial! 'picture', picture: picture
  end
end