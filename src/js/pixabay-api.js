// import 'izitoast/dist/css/iziToast.min.css';
// import axios from "axios";

// const API_KEY = '42569915-bcd29008899db620988a57306';
// const BASE_URL = `https://pixabay.com/api/`;
// const loader = document.querySelector('.loader');

// let page = 1;
// let limit = 15;

// // export async function fetchPosts() {
// //   const params = new URLSearchParams({
// //     _limit: limit,
// //     _page: page
// //   });

// //   const response = await axios.get(
// //     `https://pixabay.com/api/posts?${params}`
// //   );
// //   return response.data;
// // }



// export async function fetchData(searchQuery) {
//   const params = await new URLSearchParams({
//     key: API_KEY,
//     q: searchQuery,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   loader.style.display = 'block';

//   return fetch(`${BASE_URL}?${params}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not OK!');
//       }
//       return response.json();
//     })
//     .then(data => {
//       loader.style.display = 'none';

//       if (data.hits.length === 0) {
//         iziToast.error({
//           fontSize: 'large',
//           close: false,
//           position: 'topRight',
//           messageColor: 'white',
//           timeout: 2000,
//           backgroundColor: 'red',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//       }
//       return data;
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }






import axios from 'axios';

export async function buildUrl(query, page) {
  const API_KEY = '42458886-d6d62fa6987d6f72b0a5e97bb';
  const URL = 'https://pixabay.com/api/';

  const fetchGallery = await axios.get(URL, {
    params: {
      per_page: 15,
      page: page,
      key: API_KEY,
      q: query,
      IMAGE_TYPE: 'photo',
      SAFESEARCH: 'true',
      ORIENTATION: 'horizontal',
    },
  });

  return fetchGallery.data;
}