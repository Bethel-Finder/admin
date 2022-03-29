import {
  checkIfStateExist,
  addStateModel,
  getAllStates,
} from "../models/index";

export async function addState(payload) {
  // return payload
  return checkIfStateExist(payload).then((res) => {
    if (res.body.length < 1) {
      return addStateModel(payload).then((res2) => {
        return getAllStates().then((res3) => {
          return {
            success: true,
            data: res3.data,
          };
        });
      });
    } else {
      return {
        success: false,
        message: "State already exist",
      };
    }
  });
}
