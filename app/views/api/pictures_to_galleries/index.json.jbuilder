@pictures_to_galleries.each do |pictures_to_gallery|
  json.set! pictures_to_gallery.id do
    json.partial! "pictures_to_gallery", pictures_to_gallery: pictures_to_gallery
  end
end