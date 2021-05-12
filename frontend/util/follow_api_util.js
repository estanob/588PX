export const fetchFollows = () => {
  $.ajax({
    url: `/api/follows`,
    method: 'GET',
  });
};

export const createFollow = follow => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: follow,
    contentType: false,
    processData: false,
  });
};

export const deleteFollow = followId => {
  console.log("followId:")
  console.log(followId)
  return $.ajax({
    url: `api/follows/${followId}`,
    method: 'DELETE',
  });
};

export const fetchFollow = id => {
  return $.ajax({
    method: 'GET',
    url: `api/follows/${id}`,
  });
};
