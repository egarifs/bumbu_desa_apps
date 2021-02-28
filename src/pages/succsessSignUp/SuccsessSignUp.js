import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccsessSignUp} from '../../assets';
import {Button, Gap} from '../../components/';

const SuccsessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccsessSignUp />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.btnContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccsessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  btnContainer: {width: '100%', paddingHorizontal: 80},
});
