json.extract! follow, :id, :user_id, :followee_id
json.id follow.id
json.follower follow.user_id
json.followee follow.followee_id