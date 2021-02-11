import * as PictureAPIUtils from '../util/picture_api_util';

export const RECEIVE_ALL_PICTURES = 'RECEIVE_ALL_PICTURES';
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const REMOVE_PICTURE = 'REMOVE_PICTURE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receivePictures = pictures => ({
  type: RECEIVE_ALL_PICTURES,
  pictures
})

const receivePicture = picture => ({
  type: RECEIVE_PICTURE,
  picture
})

const removePicture = pictureId => ({
  type: REMOVE_PICTURE,
  pictureId
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
    .then(pictures => {
    dispatch(receivePictures(pictures))
  })
}

export const fetchPicture = pictureId => dispatch => {
  return PictureAPIUtils.fetchPicture(pictureId)
    .then(picture => dispatch(receivePicture(picture)))
}

export const createPicture = picture => dispatch => {
  return PictureAPIUtils.createPicture(picture)
    .then(createPicture => {
      dispatch(receivePicture(createPicture))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err)))
}

export const updatePicture = picture => dispatch => (
  PictureAPIUtils.updatePicture(picture)
    .then(updatePicture => {
      dispatch(receivePicture(updatePicture))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err)))
)

export const deletePicture = pictureId => dispatch => (
  PictureAPIUtils.deletePicture(pictureId)
    .then(() => dispatch(removePicture(pictureId)))
)