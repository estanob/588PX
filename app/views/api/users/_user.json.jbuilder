json.extract! user, :id, :username 
# json.id user.id
json.username user.username
json.firstName user.first_name
json.lastName user.last_name
json.pics user.pictures.pluck(:id)
json.galleries user.galleries.pluck(:title)
json.followees user.followees.pluck(:id)
json.followers user.followers.pluck(:id)