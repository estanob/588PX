export const fetchPicturesToGalleries = () => {
  debugger
  return $.ajax({
    url: '/api/pictures_to_galleries',
    method: 'GET',
  });
};

export const createPicturesToGallery = picturesToGallery => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/pictures_to_galleries',
    data: picturesToGallery,
    contentType: false,
    processData: false
  });
};

export const deletePicturesToGallery = picturesToGallery => {
  return $.ajax({
    url: `/api/pictures_to_galleries/`,
    method: 'DELETE',
    data: picturesToGallery,
  });
};

export const fetchPicturesToGallery = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/pictures_to_galleries/${id}`,
  });
};