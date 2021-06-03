import * as GalleryAPIUtils from '../util/gallery_api_util';

export const RECEIVE_ALL_GALLERIES = 'RECEIVE_ALL_GALLERIES';
export const RECEIVE_GALLERY = 'RECEIVE_GALLERY';
export const REMOVE_GALLERY = 'REMOVE_GALLERY';
export const RECEIVE_GALLERY_ERRORS = 'RECEIVE_GALLERY_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveGalleries = galleries => ({
  type: RECEIVE_ALL_GALLERIES,
  galleries
})

const receiveGallery = gallery => ({
  type: RECEIVE_GALLERY,
  gallery
})

const removeGallery = galleryId => ({
  type: REMOVE_GALLERY,
  galleryId
})

export const receiveErrors = errors => ({
  type: RECEIVE_GALLERY_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchGalleries = () => dispatch => {
  return GalleryAPIUtils.fetchGalleries()
    .then(galleries => {
      dispatch(receiveGalleries(galleries))
    })
}

export const fetchGallery = galleryId => dispatch => {
  return GalleryAPIUtils.fetchGallery(galleryId)
    .then(gallery => dispatch(receiveGallery(gallery)))
}

export const createGallery = (gallery) => dispatch => {
  return GalleryAPIUtils.createGallery(gallery)
    .then(createGallery => {
      dispatch(receiveGallery(createGallery))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
}

export const updateGallery = (gallery, picsToGal) => dispatch => (
  GalleryAPIUtils.updateGallery(gallery, picsToGal)
    .then((updateGallery, updatePTG) => {
      dispatch(receiveGallery(updateGallery, updatePTG))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteGallery = galleryId => dispatch => (
  GalleryAPIUtils.deleteGallery(galleryId)
    .then(() => dispatch(removeGallery(galleryId)))
)