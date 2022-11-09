import axios from 'axios';

function getAllPayload(arr) {
  return {
    type: `get_products`,
    payload: arr
  }
}

const getRequest = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_SERVER}/products`,
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function readAll() {
  return async function (dispatch) {
    try {
      const productArr = await getRequest();
      return dispatch(getAllPayload(productArr));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default readAll;