import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, intialValue }) => {
  const [title, setTitle] = useState(intialValue.title);
  const [content, setContent] = useState(intialValue.content);
  return (
    <View>
      <Text style={styles.input}>Enter Title :</Text>
      <TextInput
        style={styles.label}
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Text style={styles.input}>Enter Content :</Text>
      <TextInput
        style={styles.label}
        value={content}
        onChangeText={(content) => setContent(content)}
      />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
    intialValue:{
        title:"",
        content:"",
     }
}
const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 5,
  },
  input: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 5,
  },
});
export default BlogPostForm;
