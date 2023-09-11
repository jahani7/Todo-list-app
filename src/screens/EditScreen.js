import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../BlogPostForm";

const EditScreen = ({ navigation, editBlogPost }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");

  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <BlogPostForm
      intialValue={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content);
      }}
    />
  );
};
const styles = StyleSheet.create({});
export default EditScreen;
