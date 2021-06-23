export const fetchPictureLikes = () => {
  return $.ajax({
    url: '/api/picture_likes',
    method: 'GET',
  });
};

export const createPictureLike = picLike => {
  return $.ajax({
    method: 'POST',
    url: 'api/picture_likes',
    data: picLike,
    contentType: false,
    processData: false,
  });
};

export const deletePictureLike = picLike => {
  return $.ajax({
    url: 'api/picture_likes',
    method: 'DELETE',
    data: picLike,
  });
};

export const fetchPictureLIke = id => {
  return $.ajax({
    method: 'GET',
    url: `api/picture_likes/${id}`,
  });
};