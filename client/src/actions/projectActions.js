import {
  GET_PROJECT_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_FAIL,
} from "../constants/projectConstants";
import axios from "axios";

// GET projects data

export const getListProjects = () => async (dispatch) => {
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

// POST projects data

export const addProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PROJECT_REQUEST });
    const { data } = await axios.post(
      "http://localhost:8000/api/",
      projectData
    );
    dispatch({
      type: ADD_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ADD_PROJECT_FAIL,
      payload: err.response && err.response.data.message,
    });
  }
};
