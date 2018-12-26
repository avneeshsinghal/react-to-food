import axios from 'axios';
import {GET_MENU , DELETE_ITEM} from './types';


export const getMenuItems = () => dispatch => {
  axios.get('/api/menu')
  .then(res => dispatch({
      type:GET_MENU,
      payload:res.data
  }))
};

export const orderMenuItem = (id, item) => dispatch => {

    
    axios.put(`/api/menu/`, item)
    .then(res => dispatch({
        type:DELETE_ITEM,
        payload:id
    }))

    axios.put(`/api/items/${id}`)
    .then()
};

export const predictItem = (id, item) => dispatch => {

    axios.put(`/api/menu/predict`, item)
    .then()
};


