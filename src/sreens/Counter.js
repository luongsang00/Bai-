// import React from 'react';
// import {
//   View,
//   SafeAreaView,
//   Button,
//   Text,
//   TextInput,
//   StyleSheet,
// } from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {decrement, increment} from '../redux/slices/counterSlice';

// export function Counter() {
//   const counter = useSelector(state => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <SafeAreaView>
//       <View>
//         <Button
//           // aria-label="Increment value"
//           onPress={() => dispatch(increment())}
//           title="increment"
//         />
//         <View
//           style={{
//             alignItems: 'center',
//             marginVertical: 20,
//           }}>
//           <Text>{counter}</Text>
//         </View>
//         <Button
//           aria-label="Decrement value"
//           onPress={() => dispatch(decrement())}
//           title="Update"
//         />
//       </View>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   input: {
//     // marginVertical: 2,
//     marginHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#ff7f50',
//     color: '#000000',
//     marginVertical: 20,
//   },
// });

// // import React from 'react';
// // import {Button, View, Text} from 'react-native';
// // // import {useSelector, useDispatch} from 'react-redux';
// // // import {increment, decrement} from '../redux/slices/counterSlice';

// // const Counter = () => {
// //   // const data = useSelector(state => state.counter);
// //   // const dispath = useDispatch();
// //   return (
// //     <View>
// //       <Button title="Cong" onPress={{}} />
// //       {/* <Text>{data}</Text> */}
// //       <Text>data</Text>
// //       <Button title="Tru" onPress={{}} />
// //     </View>
// //   );
// // };

// export default Counter;
// // () => dispath(increment())
// // () => dispath(decrement())
import React from 'react';
import {
  View,
  SafeAreaView,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {store} from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';

const initialState = {
  counter: 0,
};
const increment = () => ({type: 'INCREMENT'});
const decrement = () => ({type: 'DECREMENT'});

export const counterSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // console.log('counter: ' + state.counter);
      return {...state, counter: state.counter + 1};

    case 'DECREMENT':
      // console.log('counter: ' + state.counter);
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};
const Readuxxxx = props => {
  const data = useSelector(state => state.counter);
  console.log('data', data);
  const dispath = useDispatch();

  return (
    <SafeAreaView>
      <Button
        // aria-label="Increment value"
        onPress={() => dispath(increment())}
        title="increment"
      />
      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text style={{color: 'white'}}>{data}</Text>
      </View>
      <Button
        // aria-label="Decrement value"
        onPress={() => dispath(decrement())}
        title="Update"
      />
    </SafeAreaView>
  );
};
export default Readuxxxx;
