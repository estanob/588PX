json.extract! user, :id, :username 
# json.id user.id
json.username user.username
json.firstName user.first_name
json.lastName user.last_name
json.pics user.pictures.pluck(:id)
json.picLikes user.pic_likes
json.likedPics user.liked_pics
json.galleries user.galleries.pluck(:id)
json.followees user.followees.pluck(:id)
json.followers user.followers.pluck(:id)