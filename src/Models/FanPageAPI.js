import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL

class FanPageAPI {
  /* get all fanPages */
  static all = () => {
    return axios.get( `${BASE_URL}/melophied/explore`);
  }

  /* get top five fanPages */
  static topFive = () => {
    return axios.get( `${BASE_URL}/melophied/topfive`);
  }

  /* get one fanPage */
  static show = ( pageId ) => {
    return axios.get(`${BASE_URL}/melophied/fanPage/${pageId}`);
  }

  /* create fanPage */
  static create = ( pageData, userToken ) => {
    return axios.post(`${BASE_URL}/melophied/fanPage/create`, pageData, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    } );
  }

  /* update fanPage */
  static update = ( pageId, pageData, userToken ) => {
    return axios.put(`${BASE_URL}/melophied/fanPage/update/${pageId}`, pageData, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    } );
  }

  /* upvote fanPage */
  static upvote = ( pageId, userToken ) => {
    return axios.put(`${BASE_URL}/melophied/fanPage/upvote/${pageId}`, {placeholder:'placeholder'}, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    } );
  }

  /* delete fanPage */
  static delete = ( pageId, userToken ) => {
    return axios.delete(`${BASE_URL}/melophied/fanPage/delete/${pageId}`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
  }
}

export default FanPageAPI;