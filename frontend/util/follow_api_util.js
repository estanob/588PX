export const fetchFollows = () => {
  $.ajax({
    url: `/api/follows`,
    method: 'GET',
  });
};

export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: `api/follows/`,
    data: follow,
    contentType: false,
    processData: false,
  });
};

export const deleteFollow = follow => {
  console.log("follow:")
  console.log(follow)
  return $.ajax({
    url: `api/follows/`,
    method: 'DELETE',
    data: follow,
  });
};

export const fetchFollow = id => {
  return $.ajax({
    method: 'GET',
    url: `api/follows/${id}`,
  });
};
