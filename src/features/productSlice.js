import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false,
  error: {},
}

const getProductList = createAsyncThunk('product/getProductList', async () => {
  try {
    return null
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error)
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(getProductList.fulfilled, (state, { payload }) => {
      if (payload) {
        let newProductList = [...state.products]
        newProductList = payload
        state.products = newProductList
      }
      state.loading = false
    })

    builder.addCase(getProductList.rejected, (state, { payload }) => {
      state.loading = false
      if (payload) {
        let newError = [...state.products]
        newError = payload
        state.error = newError
      }
    })
  },
})

// Action creators are generated for each case reducer function
const { reducer: productListReducer, actions } = productSlice
export const {} = actions

export default productListReducer
