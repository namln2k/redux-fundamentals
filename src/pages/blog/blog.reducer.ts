import { INITIAL_BLOG_LIST } from "./../../constants/blog";
import { createReducer } from "@reduxjs/toolkit";
import { Blog } from "types/blog.type";

interface BlogState {
  blogList: Blog[];
}

const initialState: BlogState = {
  blogList: INITIAL_BLOG_LIST
};

const blogReducer = createReducer(initialState, (builder) => {});

export default blogReducer;
