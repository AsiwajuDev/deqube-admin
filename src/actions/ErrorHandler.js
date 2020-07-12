import * as ActionType from "./ActionType";

const onError = (status) => {
  return {
    type: ActionType.ON_ERROR,
    status,
  };
};

export default onError;
