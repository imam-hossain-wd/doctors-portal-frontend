 import { baseApi } from './api/baseApi';
import counterReducer from './slice/counterSlice';
 
 const reducer = {
    counter: counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
 };

 export default reducer;
