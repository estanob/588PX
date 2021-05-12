export const fetchPictures = () => (
  $.ajax({
    url: `/api/pictures`,
    method: 'GET',
  })
);

export const fetchPicture = pictureId => (
  $.ajax({
    url: `/api/pictures/${pictureId}`,
    method: 'GET',
  })
);

export const createPicture = picture => (
  $.ajax({
    url: `/api/pictures`,
    method: 'POST',
    data: picture,
    contentType: false,
    processData: false,
  })
);

export const updatePicture = picture => (
  $.ajax({
    url: `/api/pictures/${picture.id}`,
    method: 'PATCH',
    data: picture,
    contentType: false,
    processData: false,
  })
);

export const deletePicture = pictureId => (
  $.ajax({
    url: `/api/pictures/${pictureId}`,
    method: 'DELETE'
  })
);