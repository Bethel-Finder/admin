import { 
   LOGIN,
   LOGOUT,
   STATE,
   VIEWEVENT,
   BUY,
   BOUGHT,
   SEARCH
} from './type'

export const login = (userMetadata)=>{
   return {
      type:LOGIN,
      userMetadata
   }
}

export const logout = ()=>{
   return {
      type:LOGOUT
   }
}

export const disp_states = (payload) => {
   return {
      type: STATE,
      payload
   }
}

export const disp_viewevent = (payload) => {
   return {
      type: VIEWEVENT,
      payload
   }
}

export const disp_buy = (payload) => {
   return {
      type: BUY,
      payload
   }
}

export const disp_bought = (payload) => {
   return {
      type: BOUGHT,
      payload
   }
}


export const disp_search = (payload) => {
   return {
      type: SEARCH,
      payload
   }
}
