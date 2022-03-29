import { checkIfStateExist, updateState, getAllStates } from "../models/index";

export async function add_dist(payload) {
  return checkIfStateExist(payload).then((res) => {
    let distArray = res.body[0].districts;
    distArray.push(payload);
    return updateState(distArray).then((res) => {
      if (res.success === true) {
        getAllStates().then((resX) => {
          return resX.data;
        });
      } else {
        return {
          success: false,
          error: res,
        };
      }
    });
  });
}
