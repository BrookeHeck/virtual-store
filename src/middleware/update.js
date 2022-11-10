import axios from 'axios';

function getUpdatePayload(obj) {
  return {
    type: 'update_product',
    payload: obj
  }
}

const updateRequest = async (body) => {
  try {
    const response = await axios({
      method: 'put',
      url: process.env.REACT_APP_SERVER,
      data: body,
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function update(body) {
  return async function (dispatch) {
    try {
      const productRecord = await updateRequest(body);
      return dispatch(getUpdatePayload(productRecord));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default update;