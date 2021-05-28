@pictures_to_galleries.each do |pics_to_gallery|
  json.set! pics_to_gallery.id do
    json.partial! "pics_to_gallery", pics_to_gallery: pics_to_gallery
  end
end