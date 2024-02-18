import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: false,
  isBookmarked: false,  
  progress: 0,
  activeTab: "icerik",
  accordionData: [],
  subtypes: [],
  names: [],
  videos: [],
  selectedVideos: null,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    toggleLike: (state) => {
      state.liked = !state.liked;
    },
    toggleBookmark: (state) => {
      state.isBookmarked = !state.isBookmarked;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setAccordionData: (state, action) => {
      state.accordionData = action.payload;
    },
    setSubtypes: (state, action) => {
      state.subtypes = action.payload;
    },
    setNames: (state, action) => {
      state.names = action.payload;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setSelectedVideo: (state, action) => {
      state.selectedVideos = action.payload;
    },
  },
});
export const {
  toggleLike,
  toggleBookmark,
  setProgress,
  setActiveTab,
  setAccordionData,
  setSubtypes,
  setNames,
  setVideos,
  setSelectedVideo,
} = activitySlice.actions;

export default activitySlice.reducer;