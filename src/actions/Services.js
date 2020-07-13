import axios from "axios";
import * as nprogress from "nprogress";
import ErrorHandler from "./ErrorHandler";
import { baseUrl } from "../apiConstants/ApiConstant";

import qs from "querystring";

const requestBody = {
  EmailPhone: "test@test.com",
  password: "password",
};

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export const getData = (url, done) => {
  const endpoint = baseUrl + url;
  nprogress.start();
  return async (dispatch) => {
    try {
      const response = await axios.get({
        url: url,
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
  console.log("Payload:" + JSON.stringify(payload));
  //nprogress.start();
  return async (dispatch) => {
    try {
      // const response = await fetch(endpoint, {
      //   method: "POST",

      //   headers: new Headers({
      //     "Content-Type": "application/json",
      //   }),
      //   body: JSON.stringify({
      //     email: "test@test.com",
      //     password: "password",
      //   }),

      //   // body: JSON.stringify({
      //   //   EmailPhone: "test@test.com",
      //   //   password: "password",
      //   // }),
      // });
      // const formData = new FormData();
      // formData.set("EmailPhone", "test@test.com");
      // formData.set("password", "password");
      const response = await axios.post(url, qs.stringify(requestBody), config);
      // const response = await axios.post(endpoint, {
      //   data: JSON.stringify({
      //     EmailPhone: "test@test.com",
      //     password: "password",
      //   }),
      // });

      if (!response.ok) {
        throw Error(response.statusText);
      }
      const result = response.json();
      console.log("Result: " + JSON.stringify(result));
      if (result) {
        //nprogress.done();
        //nprogress.remove();
        dispatch(done(result.data));
      }
    } catch (err) {
      // dispatch(ErrorHandler());
      console.log("Error: " + err.message);
    }
  };
};

const packageData = (data) => {
  const form = new FormData();
  for (const key in data) {
    form.append(key, data[key]);
  }
  return form;
};
