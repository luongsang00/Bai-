import {createSlice} from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    // value: 0,
    value: {
      name: '',
      age: '',
      phone: '',
    },
  },
  reducers: {
    setnull: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // (state.value.namee = ''), (state.value.age = '');
      // state.value.age
      state.value = {
        name: '',
        age: '',
        phone: '',
      };
    },

    update: (state, action) => {
      state.value = {
        name: action.payload.name,
        age: action.payload.age,
        phone: action.payload.phone,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {setnull, update} = counterSlice.actions;

export default counterSlice.reducer;
// const initialState = {
//   name: '',
//   password: '',
// };

// export default function actionForReducer(state = initialState, payload) {
//   switch (payload.type) {
//     case 'CAP_NHAT_TEN':
//       return {
//         ...state,
//         name: payload.name,
//       };
//     case 'CAP_NHAT_PASS':
//       return {
//         ...state,
//         password: payload.password,
//       };
//     default:
//       return state;
//   }
// }
