export const fetchGalleries = () => (
  $.ajax({
    url: `/api/galleries`,
    method: 'GET'
  })
)

export const fetchGallery = galleryId => (
  $.ajax({
    url: `/api/galleries/${galleryId}`,
    method: 'GET'
  })
)

export const createGallery = gallery => (
  $.ajax({
    url: `/api/galleries`,
    method: 'POST',
    data: gallery,
    contentType: false,
    processData: false
  })
)

export const updateGallery = gallery => {
  debugger
  return $.ajax({
    url: `/api/galleries/${gallery.id}`,
    method: 'PATCH',
    data: gallery,
    contentType: false,
    processData: false
  })
} //(
//   $.ajax({
//     url: `/api/galleries/${gallery.id}`,
//     method: 'PATCH',
//     data: gallery,
//     contentType: false,
//     processData: false
//   })
// )

export const deleteGallery = galleryId => (
  $.ajax({
    url: `/api/galleries/${galleryId}`,
    method: 'DELETE'
  })
)