export const fetchLikes = () => (
  $.ajax({
    url: `/api/likes`
  })
)

export const fetchLike = likeId => (
  $.ajax({
    url: `/api/pictures/${likeId}`
  })
)

export const createLike = (userId, pictureId) => {

  return (
    $.ajax({
      url: `/api/likes`,
      method: 'POST',
      data: {
        user_id: userId,
        picture_id: pictureId
      }
    })
  )
}

export const deleteLike = likeId => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: 'DELETE'
  })
)