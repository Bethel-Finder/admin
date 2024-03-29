import { 
   LOGIN, 
   LOGOUT,
   STATE,
   VIEWEVENT,
   BUY,
   BOUGHT,
   SEARCH
} from './type'


const initialState = {
   loggedIn: false,
   loggedInUser: '',
   states: [],
   viewevent: [],
   buy: [],
   bought:[],
   search:[]
   
}



const reducer = (state = initialState, action) => {
   switch (action.type) { 
      case LOGIN:
      return {
         ...state,
         loggedIn:true,
         loggedInUser:action.userMetadata
         }
      

      case LOGOUT:
      return {
         ...state,
         loggedIn:false,
         loggedInUser: '', 
         viewevent: [],
         buy: [],
         bought:[]
         // events: [],
         
         }
      
      case STATE:
         return {
            ...state,
            states:action.payload
         }
      
         case VIEWEVENT:
            return {
               ...state,
               viewevent:action.payload
         }
      
      case BUY:
         return {
            ...state,
            buy:action.payload
         }
      
      case BOUGHT:
         return {
            ...state,
            bought:action.payload
         }

         case SEARCH: 
         return {
            ...state,
            search:action.payload
         }

      default:return state
   }
}

export default reducer