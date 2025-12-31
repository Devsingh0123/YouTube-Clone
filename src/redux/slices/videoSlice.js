import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEOS_API } from "../../utils/youtubeApi";
import axios from "axios";

export const fetchPopularVideos = createAsyncThunk(
  "videos/fetchPopularVideos",
  async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEOS_API);
    //   console.log(res);
      
      return res.data.items;
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }}
);

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: false,
    error: null,

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
        // console.log(action);
        
      })
      .addCase(fetchPopularVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedVideoId, clearSelectedVideoId } =
  videosSlice.actions;

export default videosSlice.reducer;
