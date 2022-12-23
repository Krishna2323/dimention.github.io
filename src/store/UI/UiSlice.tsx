import { createSlice, PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";



export const UI: Slice = createSlice({
  name: "ui",
  initialState: {taskForm:{display:false,defaultTaskType:"Todo"}},
  reducers: {
    updateTaskForm(state,action){
        state.taskForm.display=action.payload.taskFormDisplay;
        state.taskForm.defaultTaskType=action.payload.defaultTaskType;
    }
  },
});

export default UI;
