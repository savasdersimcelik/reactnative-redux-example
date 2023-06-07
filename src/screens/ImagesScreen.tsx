import React, { useState } from 'react';
import { View, ScrollView, Button, Image, ActivityIndicator } from 'react-native';
import { Text } from 'react-native';
import { RootState, actions, useAppSelector } from '../store/root.strore';


const ImagesScreen = () => {
  const [loading, setLoading] = useState(false)
  const listImages = useAppSelector((state: RootState) => state.image.listImage)

  const handleGetListImage = async () => {
    setLoading(true);
    await actions.image.getListImage();
    setLoading(false);
  }

  const handleDeleteImage = async (id: number) => {
    await actions.image.deleteImage(id);
  }

  return (
    <ScrollView>
      <Text style={{ color: 'black' }}>Redux Öğreniyorum - ImagesScreen</Text>
      <View style={{ height: 15 }} />
      <Button title="Get List Image" onPress={handleGetListImage} />
      <View style={{ height: 15 }} />
      {
        loading ? <ActivityIndicator size={'large'} style={{ alignSelf: 'center' }} />
          : <>
            {
              listImages.map((value) => {
                return (
                  <View key={value.id} style={{ marginTop: 15 }}>
                    <Text style={{ color: 'black' }}>{value.title}</Text>
                    <Image source={{ uri: value.thumbnailUrl }} style={{ width: 120, height: 120 }} />
                    <Button title='Delete Image' color={"red"} onPress={async () => handleDeleteImage(value.id)} />
                  </View>
                )
              })
            }
          </>
      }

    </ScrollView>
  );
}

export default ImagesScreen;