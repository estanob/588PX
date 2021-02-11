export const fetchGalleries = () => (
  $.ajax({
    url: `/api/galleries`
  })
)
export const fetchGallery = galleryId => (
  $.ajax({
    url: `/api/galleries/${galleryId}`
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

export const updateGallery = gallery => (
  $.ajax({
    url: `/api/galleries/${gallery.id}`,
    method: 'PATCH',
    data: gallery,
    contentType: false,
    processData: false
  })
)

export const deleteGallery = galleryId => (
  $.ajax({
    url: `/api/galleries/${galleryId}`,
    method: 'DELETE'
  })
)