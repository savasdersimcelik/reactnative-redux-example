import React from "react";
import { View, Text, Button } from "react-native"
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>Redux Öğreniyorum - HomeScreen</Text>
            <Button title="Open ImagesScreen" onPress={() => navigation.navigate('ImagesScreen')} />
            <View style={{ height: 15 }} />
            <Button title="Open DetailScreen" onPress={() => navigation.navigate('DetailScreen')} />
        </View>
    );
}

export default HomeScreen;