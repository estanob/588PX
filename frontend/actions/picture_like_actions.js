import * as PictureLikeAPIUtil from '../util/picture_like_api_util';

export const RECEIVE_ALL_PICTURE_LIKES = 'RECEIVE_ALL_PICTURE_LIKES';
export const RECEIVE_PICTURE_LIKE = 'RECEIVE_PICTURE_LIKE';
export const REMOVE_PICTURE_LIKE = 'REMOVE_PICTURE_LIKE';

const receivePictureLikes = picLikes => {
  return {
    type: RECEIVE_ALL_PICTURE_LIKES,
    picLikes,
  };
};

const receivePictureLike = picLike => {
  return {
    type: RECEIVE_PICTURE_LIKE,
    picLike,
  };
};

const removePictureLike = picLike => {
  return {
    type: REMOVE_PICTURE_LIKE,
    picLike,
  };
};

export const fetchPictureLike = picLikeId => dispatch => {
  return PictureLikeAPIUtil.fetchPictureLIke(picLikeId)
    .then(like => {
      dispatch(receivePictureLike(like))
    });
};

export const;

export const;

export const;