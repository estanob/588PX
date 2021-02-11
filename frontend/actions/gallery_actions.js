import * as GalleryAPIUtils from '../util/gallery_api_util';

export const RECEIVE_ALL_GALLERIES = 'RECEIVE_ALL_GALLERIES';
export const RECEIVE_GALLERY = 'RECEIVE_GALLERY';
export const REMOVE_GALLERY = 'REMOVE_GALLERY';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receivePictures = galleries => ({
  type: RECEIVE_ALL_GALLERIES,
  galleries
})

const receivePicture = gallery => ({
  type: RECEIVE_GALLERY,
  gallery
})

const removePicture = galleryId => ({
  type: REMOVE_GALLERY,
  galleryId
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchPictures = () => dispatch => {
  return PictureAPIUtils.fetchPictures()
    .then(galleries => {
      dispatch(receivePictures(galleries))
    })
}

export const fetchPicture = galleryId => dispatch => {
  return PictureAPIUtils.fetchPicture(galleryId)
    .then(gallery => dispatch(receivePicture(gallery)))
}

export const createPicture = gallery => dispatch => {
  return PictureAPIUtils.createPicture(gallery)
    .then(createPicture => {
      dispatch(receivePicture(createPicture))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err)))
}

export const updatePicture = gallery => dispatch => (
  PictureAPIUtils.updatePicture(gallery)
    .then(updatePicture => {
      dispatch(receivePicture(updatePicture))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err)))
)

export const deletePicture = galleryId => dispatch => (
  PictureAPIUtils.deletePicture(galleryId)
    .then(() => dispatch(removePicture(galleryId)))
)