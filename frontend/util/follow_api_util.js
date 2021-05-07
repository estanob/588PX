export const fetchFollows = () => {
  $.ajax({
    url: `/api/follows`,
    method: 'GET'
  });
};

export const createFollow = follow => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: follow
  });
};

export const deleteFollow = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`
  });
};

export const fetchFollow = id => {
  return $.ajax({
    method: 'GET',
    url: `api/follows/${id}`,
  });
};

// export const fetchFollows = userId => {
//   return $.ajax({
//     method: "GET",
//     url: `api/users/${userId}/follows`,
//   });
// };