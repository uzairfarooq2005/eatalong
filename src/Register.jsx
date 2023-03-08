import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import * as EmailValidator from "email-validator";
import { Camera, CameraType } from "expo-camera";
function Register() {
  // depend the whole form is filled or not
  const [isValid, setIsValid] = useState(false);

  const cameraRef = useRef();
  const [profilePicUri, setProfilePicUri] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitPress = () => {};

  // component ma lifecycle k dremyan hona wali tbdilian capture ke jaskti hain
  // useEffect
  // it has dependceny array (wo apna apko bind kr skti kisi b cheez k sath)

  useEffect(() => {
    checkValidForm();
  }, [email, firstName, lastName, password, confirmPassword]);

  const checkValidForm = () => {
    if (email === "") {
      setIsValid(false);
      return;
    }

    if (firstName === "") {
      setIsValid(false);
      return;
    }

    if (lastName === "") {
      setIsValid(false);
      return;
    }

    if (password === "") {
      setIsValid(false);
      return;
    }

    if (confirmPassword === "") {
      setIsValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsValid(false);
      return;
    }

    // uses email validator package and tell that email is valid or not
    if (EmailValidator.validate(email) === false) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  };

  const onTakePicturePress = () => {
    // check if camera is working not fine then just dont do anything
    if (cameraRef.current === undefined) {
      return;
    }

    cameraRef.current
      .takePictureAsync()
      .then((response) => {
        console.log(response);
        // check if the path of picture exists then take it to the state
        if (response.uri !== undefined) {
          setProfilePicUri(response.uri);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Camera ref={cameraRef} style={styles.camera} type={type}>
          <View style={styles.cameraButtonView}>
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={onTakePicturePress}
            ></TouchableOpacity>
          </View>
        </Camera>
        <Image style={styles.profilePicImg} source={{ uri: profilePicUri }} />
        <TextInput
          style={styles.inputBox}
          placeholder={"first name"}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"last name"}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"email"}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"password"}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"confirm password"}
          onChangeText={setConfirmPassword}
        />

        <Button
          title={"submit"}
          onPress={onSubmitPress}
          disabled={isValid === false}
        />
      </View>
    </View>
  );
}

export { Register };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  form: {
    flex: 0.7,
    padding: 5,
  },
  inputBox: {
    padding: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
  camera: { width: "100%", height: 200 },

  cameraButtonView: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  cameraButton: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: "white",
  },
  profilePicImg: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 50,
  },
});
