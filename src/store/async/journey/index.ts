import { createAsyncThunk } from "@reduxjs/toolkit";
import { getJourney } from "../../../libs/call/journey";

export const getJourneyAsync = createAsyncThunk(
  "journey/getJourneyAsync",
  async () => {
    try {
      const res = await getJourney();
      return res.data.data;
    } catch (error) {
      console.error("Error in getJourneyAsync:", error);
      throw error;
    }
  }
);
