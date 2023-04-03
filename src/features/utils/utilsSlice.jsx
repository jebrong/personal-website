import { createSlice, current } from "@reduxjs/toolkit";
import { projects } from "../../data/projects";

const initialState = {
  openNav: false,
  singleProject: null,
  singleImages: [],
  openImage: true,
  selectedImage: "",
  allProjects: projects,
};
const utilsSlice = createSlice({
  name: "utils",

  initialState,
  reducers: {
    toggleNav: (state) => {
      state.openNav = !state.openNav;
    },
    findProject: (state, action) => {
      const { payload } = action;
      state.singleProject = state.allProjects.find((project) => {
        return project.id === payload;
      });
      state.singleImages = state.singleProject.img;
      state.selectedImage = state.singleProject.img[0];
    },
    prevSingleImage: (state) => {
      let currentIndex = state.singleImages.findIndex((e) => {
        return e === state.selectedImage;
      });

      let lastIndex = state.singleImages.length - 1;

      if (currentIndex === 0) {
        state.selectedImage = state.singleImages[lastIndex];
      } else {
        state.selectedImage = state.singleImages[currentIndex - 1];
      }
    },
    nextSingleImage: (state) => {
      let currentIndex = state.singleImages.findIndex((e) => {
        return e === state.selectedImage;
      });
      let lastIndex = state.singleImages.length - 1;

      if (currentIndex === lastIndex) {
        state.selectedImage = state.singleImages[0];
      } else {
        state.selectedImage = state.singleImages[currentIndex + 1];
      }
    },
    clickSingleImage: (state, action) => {
      const { payload } = action;
      state.selectedImage = payload;
    },
    toggleOpenImage: (state) => {
      state.openImage = !state.openImage;
      console.log(state.openImage);
    },
  },
});

export const utilsReducer = utilsSlice.reducer;
export const {
  toggleNav,
  findProject,
  prevSingleImage,
  nextSingleImage,
  clickSingleImage,
  toggleOpenImage,
} = utilsSlice.actions;
