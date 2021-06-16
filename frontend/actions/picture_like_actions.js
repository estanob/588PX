import * as PictureLikeAPIUtil from '../util/picture_like_api_util';

export const RECEIVE_ALL_PICTURE_LIKES = 'RECEIVE_ALL_PICTURE_LIKES';
export const RECEIVE_PICTURE_LIKE = 'RECEIVE_PICTURE_LIKE';
export const REMOVE_PICTURE_LIKE = 'REMOVE_PICTURE_LIKE';

const receivePictureLikes = pictureLikes => {
  return {
    type: RECEIVE_ALL_PICTURE_LIKES,
    pictureLikes,
  };
};

const receivePictureLike = pictureLike => {
  return {
    type: RECEIVE_PICTURE_LIKE,
    pictureLike,
  };
};

const removePictureLike = pictureLike => {
  return {
    type: REMOVE_PICTURE_LIKE,
    pictureLike,
  };
};

export const fetchPictureLike = pictureLikeId => dispatch => {
  return PictureLikeAPIUtil.fetchPictureLIke(pictureLikeId)
    .then(like => {
      dispatch(receivePictureLike(like))
    });
};

export const fetchPictureLikes = () => dispatch => {
  return PictureLikeAPIUtil.fetchPictureLikes()
    .then(pictureLikes => {
      dispatch(receivePictureLikes(pictureLikes))
    })
};

export const createPictureLike = pictureLike => dispatch => {
  return PictureLikeAPIUtil.createPictureLike(pictureLike)
    .then(newPictureLike => {
      dispatch(receivePictureLike(newPictureLike))
    })
};

export const deletePictureLike = pictureLike => dispatch => {
  return PictureLikeAPIUtil.deletePictureLike(pictureLike)
    .then(() => dispatch(removePictureLike(pictureLike)))
};