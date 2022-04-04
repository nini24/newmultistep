import { createSlice } from "@reduxjs/toolkit";

const formViews = {
    1:{
        name:'name',
        step:'1/5',
        title:'Please let us know',
        progress:1
    },
    2:{
        name:'describe',
        step:'2/5',
        title:'Please let us know',
        progress:2
    },
    3:{
        name:'services',
        step:'3/5',
        title:'Please let us know',
        progress:3
    },
    4:{
        name:'budget',
        step:'4/5',
        title:'Please let us know',
        progress:4
    },
    5:{
        name:'email',
        step:'5/5',
        title:'Please let us know',
        progress:5
    },
    

}
const formData = {
    name:'',
    description:'',
    services:'',
    budget:'12500',
    email:''
}

export const formSlice = createSlice({
    name:'form',
    initialState:{
        view:formViews[1],
        data:formData
    },
    reducers: {
        goToNext: (state,action) => {
            state.data = action.payload
            state.view= formViews[state.view.progress +=1]
        },
        goBack: (state,action) => {
           /*  state.data = action.payload */
            state.view= formViews[state.view.progress -=1]
        }
    }
})



export default formSlice.reducer
export const {goToNext, goBack} = formSlice.actions