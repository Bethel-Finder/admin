import { supabase } from "../configs/index";
const new_supabase = supabase();

export async function checkIfStateExist(payload) {
  return new_supabase
    .from("states")
    .select("*")
    .eq("state", payload.state)
    .then((res) => {
      return res;
      // console.log(res)
    })
    .catch((err) => {
      return {
        success: false,
        error: err,
      };
    });
}

export async function addStateModel(payload) {
  return new_supabase
    .from("states")
    .insert({
      state: payload.state,
      meta: payload,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return {
        success: false,
        error: err,
      };
    });
}

// get all states
export async function getAllStates() {
  return new_supabase
    .from("states")
    .select("*")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return {
        success: false,
        error: err,
      };
    });
}

// update state
export async function updateState(payload) {
  let state = payload[0].state;
  return new_supabase
    .from("states")
    .update({
      districts: payload,
    })
    .eq("state", state)
    .then((res) => {
      return {
        success: true,
        data: res.body,
      };
    })
    .catch((err) => {
      return {
        success: false,
        error: err,
      };
    });
}
