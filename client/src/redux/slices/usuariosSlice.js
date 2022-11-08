import { createSlice } from "@reduxjs/toolkit";

export const usuariosSlice = createSlice({
    name: "usuarios",

             //Este es el estado inicial 

    initialState: {
        usuarios:[],
    },

    reducers:{

                //Acá van las actions que van a modificar el estado

        traerUsuarios:(state , action)=>{
            state.usuarios = action.payload
        }
    }
})

export const { traerUsuarios } = usuariosSlice.actions

export default usuariosSlice.reducer