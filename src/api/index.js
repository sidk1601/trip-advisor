import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '41067e60a0msh9087aa7e83cc8d7p145337jsnddcdf8d5603a',
    },
  };

  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
