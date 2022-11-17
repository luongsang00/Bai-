import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {decrement, increment} from '../redux/slices/counterSlice';
import {setnull, update} from '../redux/slices/userSlice';

export function User() {
  const info = useSelector(state => state.user.value);
  const dispatch = useDispatch();
  const [names, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text>Name: {info.name}</Text>
          <Text>Age: {info.age}</Text>
          <Text>Phone: {info.phone}</Text>
        </View>
        <Button
          // aria-label="Increment value"
          onPress={() => dispatch(setnull())}
          title="Setnull"
        />
        <TextInput
          placeholderTextColor={'#a9a9a9'}
          placeholder="nguyen van b"
          // keyboardType="email-address"
          value={names}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={'#a9a9a9'}
          placeholder="20"
          keyboardType="number-pad"
          value={age}
          onChangeText={setAge}
          style={styles.input}
        />
        <TextInput
          placeholderTextColor={'#a9a9a9'}
          placeholder="0123456789"
          keyboardType="number-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        <Button
          aria-label="Decrement value"
          onPress={() =>
            dispatch(
              update({
                name: names,
                age: age,
                phone: phone,
              }),
            )
          }
          title="Update"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    // marginVertical: 2,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ff7f50',
    color: '#fff8dc',
    marginVertical: 20,
    textAlign: 'center',
  },
});
