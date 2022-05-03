import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { chartTypes } from 'utils/helpers';
import { sections } from 'utils/sections';

interface InitialState {
  chart: Record<any, any>,
  selectedSection: Record<any, any>
}

const initialState: InitialState = {
  chart: chartTypes[0],
  selectedSection: sections[0],
};

export const contextSlice = createSlice({
  name: 'Context',
  initialState,
  reducers: {
    setChart: (state, action: PayloadAction<Record<any, any>>) => {
      state.chart = action.payload;
    },
    setSelectedSection: (state, action: PayloadAction<Record<any, any>>) => {
      state.selectedSection = action.payload;
    },
  },
});

export const contextActions = { ...contextSlice.actions };

export default contextSlice.reducer;
