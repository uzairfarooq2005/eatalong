import { Button, View, StyleSheet, Image, allowsEditing } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

function Profile() {
  const [imageUri, setImageUri] = useState("");

  const openGallery = () => {
    ImagePicker.getMediaLibraryPermissionsAsync().then((response) => {
      console.log("permission Granted");
    });

    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })
      .then((response) => {
        if (response.uri !== undefined) {
          setImageUri(response.uri);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <Button title={"Open Gallery"} onPress={openGallery} />
    </View>
  );
}
export { Login };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
