@pictures_to_galleries.each do |pics_to_gal|
  json.set! pics_to_gal.id do
    json.partial! "pics_to_gal", pics_to_gal: pics_to_gal
  end
end