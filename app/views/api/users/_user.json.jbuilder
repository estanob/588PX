json.extract! user, :id, :username 
# json.id user.id
json.username user.username
json.galleries user.galleries.pluck(:title)
json.followees user.followees.pluck(:id)
json.followers user.followers.pluck(:id)