
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categories: [
      {
        id: 1,
        name: 'CSPM Executive Dashboard',
        widgets: [{ id: 1, name: 'Widget 1', content: 'Random text' }],
      },
      {
        id: 2,
        name: 'CWPP Dashbord',
        widgets: [],
      },
      {
          id: 2,
          name: 'Registry Scan',
          widgets: [],
        },
    ],
  };

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const category = state.categories.find(
        (cat) => cat.id === action.payload.categoryId
      );
      category.widgets.push({
        id: Date.now(),
        name: action.payload.name,
        content: action.payload.content,
      });
    },
    removeWidget: (state, action) => {
      const category = state.categories.find(
        (cat) => cat.id === action.payload.categoryId
      );
      category.widgets = category.widgets.filter(
        (widget) => widget.id !== action.payload.widgetId
      );
    },
  },
});

export const { addWidget, removeWidget } = widgetsSlice.actions;

export const selectAllWidgets = (state) =>
  state.widgets.categories.flatMap((category) => category.widgets);

export default widgetsSlice.reducer;
