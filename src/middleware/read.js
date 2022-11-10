import axios from 'axios';

function getAllPayload(arr, endpoint) {
  return {
    type: `get_${endpoint}`,
    payload: arr
  }
}

const getRequest = async (endpoint) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
    });
    console.log(response.data);
    return response.data.results;

  } catch (e) { console.log(e) }
}

function readAll(endpoint) {
  return async function (dispatch) {
    try {
      const arr = await getRequest(endpoint);
      return dispatch(getAllPayload(arr, endpoint));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default readAll;