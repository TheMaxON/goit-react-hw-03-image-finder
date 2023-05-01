const KEY = '34527262-b94b65b29daaf98e2e152eee9';

const fetchAPI = (searchQuery, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default fetchAPI;
