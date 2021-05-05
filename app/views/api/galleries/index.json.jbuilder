@galleries.each do |gallery|
  json.set! gallery.id do
    json.partial! "gallery", gallery: gallery
  end
end