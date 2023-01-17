import {
  GET_PROJECT_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from "../constants/projectConstants";
import axios from "axios";

// GET projects data

const getListProjects = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT_REQUEST });
    const { data } = await axios.get("http://localhost:8000/api/");
    dispatch({
      type: GET_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROJECT_FAIL,
      payload: err.response && err.response.data.message,
    });
  }
};

export default getListProjects;
