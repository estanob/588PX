export const fetchPictures = () => (
  $.ajax({
    url: `/api/pictures`
  })
)
export const fetchPicture = pictureId => (
  $.ajax({
    url: `/api/pictures/${pictureId}`
  })
)

export const createPicture = picture => (
  $.ajax({
    url: `/api/pictures`,
    method: 'POST',
    data: picture,
    contentType: false,
    processData: false
  })
)

export const updatePicture = picture => (
  $.ajax({
    url: `/api/pictures/${picture.id}`,
    method: 'PATCH',
    data: picture,
    contentType: false,
    processData: false
  })
)

export const deletePicture = pictureId => (
  $.ajax({
    url: `/api/pictures/${pictureId}`,
    method: 'DELETE'
  })
)