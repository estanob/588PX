@picture_likes.each do |picture_like|
  json.set! picture_like.id do
    json.partial! "picture_like", picture_like: picture_like
  end
end