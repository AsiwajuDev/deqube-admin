import axios from "axios";
import * as nprogress from "nprogress";
import ErrorHandler from "./ErrorHandler";

export const getData = (url, done) => {
  const endpoint = baseUrl + url;
  nprogress.start();
  return async (dispatch) => {
    try {
      const response = await axios.get({
        url: endpoint,
        headers: {},
      });

      if (!response.status === 200) {
        throw Error(response.statusText);
      }
      const result = response.json();
      if (result) {
        nprogress.done();
        nprogress.remove();
        dispatch(done(result.data));
      }
    } catch (err) {
      // dispatch(ErrorHandler(true));
      alert("Something went wrong");
    }
  };
};

export const postData = (url, payload, done) => {
  const endpoint = baseUrl + url;
  nprogress.start();
  return async (dispatch) => {
    try {
      const response = await axios.post({
        url: endpoint,
        body: payload,
        headers: {},
      });

      if (!response.status === 200) {
        throw Error(response.statusText);
      }
      const result = response.json();
      if (result) {
        nprogress.done();
        nprogress.remove();
        dispatch(done(result.data));
      }
    } catch (err) {
      // dispatch(ErrorHandler());
      alert("Error Ocuured");
    }
  };
};
