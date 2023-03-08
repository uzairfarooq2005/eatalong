import { Button, View, StyleSheet, Image, allowsEditing } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Video } from "expo-av";

function Profile() {
  const [imageUri, setImageUri] = useState("");
  const [videoUri, setVideoUri] = useState("");

  const openGallery = () => {
    ImagePicker.getMediaLibraryPermissionsAsync().then((response) => {
      console.log("permission Granted");
    });

    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    })
      .then((response) => {
        if (response.uri !== undefined) {
          setImageUri(response.uri);
          setVideoUri(response.uri);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {videoUri !== undefined ? (
        <Video
          style={{ width: "100%", height: "50%" }}
          source={{ uri: videoUri }}
          useNativeControls={true}
        />
      ) : (
        <View />
      )}

      <Button title={"Open Gallery"} onPress={openGallery} />
    </View>
  );
}
export { Profile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
