import * as PicToGalUtil from '../util/pictures_to_gallery_api_util';

export const RECEIVE_ALL_PICTURES_TO_GALLERIES = 'RECEIVE_ALL_PICTURES_TO_GALLERIES';
export const RECEIVE_PICTURES_TO_GALLERY = 'RECEIVE_PICTURES_TO_GALLERY';
export const REMOVE_PICTURES_TO_GALLERY = 'REMOVE_PICTURES_TO_GALLERY';

const receiveAllPicturesToGalleries = picturesToGalleries => {
  return {
    type: RECEIVE_ALL_PICTURES_TO_GALLERIES,
    picturesToGalleries,
  };
};

const receivePicturesToGallery = picturesToGallery => {
  return {
    type: RECEIVE_PICTURES_TO_GALLERY,
    picturesToGallery,
  };
};

const removePicturesToGallery = picturesToGallery => {
  return {
    type: REMOVE_PICTURES_TO_GALLERY,
    picturesToGallery,
  };
};

export const fetchPicturesToGalleries = () => dispatch => {
  return PicToGalUtil.fetchPicturesToGalleries()
    .then(picturesToGalleries => {
      dispatch(receiveAllPicturesToGalleries(picturesToGalleries))
    })
    .fail(error => console.log(error))
};

export const createPicturesToGallery = picturesToGallery => dispatch => {
  return PicToGalUtil.createPicturesToGallery(picturesToGallery)
    .then(newPicturesToGallery => {
      dispatch(receivePicturesToGallery(newPicturesToGallery))
    });
};

export const deletePicturesToGallery = picturesToGallery => dispatch => {
  console.log("PTG to delete")
  console.log(picturesToGallery)
  return PicToGalUtil.deletePicturesToGallery(picturesToGallery)
    .then(() => dispatch(removePicturesToGallery(picturesToGallery)))
};
