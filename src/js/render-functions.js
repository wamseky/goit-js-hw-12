// export function renderMarkup(data) {
//     return data.hits
//       .map(
//         element => `<div class="gallery-item">
//         <a class="gallery-link" href="${element.largeImageURL}">
//             <img class="gallery-image" src="${element.webformatURL}" alt="${element.tags}">
//         </a>
//         <div class="gallery-image-info">
//             <p class="image-info-item"><span class="image-items-text">Likes: </span>${element.likes}</p>
//             <p class="image-info-item"><span class="image-items-text">Views: </span>${element.views}</p>
//             <p class="image-info-item"><span class="image-items-text">Comments: </span>${element.comments}</p>
//             <p class="image-info-item"><span class="image-items-text">Downloads: </span>${element.downloads}</p>
//         </div>
//     </div>`
//       )
//       .join('')
    
//   }




export function renderGallery(images) {
    return images
      .map(
        img =>
          `
          <li class="gallery-item">
            <div class="gallery-box item-card-wrapper">
              <a class="gallery-link" href="${img.largeImageURL}">
                <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}" loading="lazy">
              </a>
              <div class="card-box">
                <div>
                  <p class="card-box-text"><b>Likes</b></p>
                  <p class="card-box-text">${img.likes}</p>
                </div>
                <div>
                  <p class="card-box-text"><b>Views</b></p>
                  <p class="card-box-text">${img.views}</p>
                </div>
                <div>
                  <p class="card-box-text"><b>Comments</b></p>
                  <p class="card-box-text">${img.comments}</p>
                </div>
                <div>
                  <p class="card-box-text"><b>Downloads</b></p>
                  <p class="card-box-text">${img.downloads}</p>
                </div>
              </div>
            </div>
          </li>`
      )
      .join('');
  }