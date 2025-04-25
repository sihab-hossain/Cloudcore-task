import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch(
        `https://admin.refabry.com/api/all/product/get`
        );
        const data = await response.json();
        console.log("API Data:", data);
        return data;
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state)=>{
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action)=>{
                state.loading = false
                state.products = action.payload.data.data
            })
            .addCase(fetchProducts.rejected, (state, action)=>{
                state.loading = false
                state.error = action.error.message
            })
    }

})

export default productSlice.reducer;