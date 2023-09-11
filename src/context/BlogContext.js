import React, { useReducer } from "react";
import createDataContext from "../screens/createDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "delete_BlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "add_BlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_BlogPost", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_BlogPost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: "edit_BlogPost", payload: { id, title, content } });
  };
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost,editBlogPost },
  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
