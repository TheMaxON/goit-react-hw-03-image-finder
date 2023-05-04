import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=34527262-b94b65b29daaf98e2e152eee9&image_type=photo';

export const getImages = async (searchQuery, page) => {
  try {
    const response = await axios.get(
      `&orientation=horizontal&per_page=12&page=${page}&q=${searchQuery}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
