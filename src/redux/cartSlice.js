import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const loadProducts = createAsyncThunk(
    'store/loadProducts',
    async (userId, thunkAPI) => {
        const categoriesStorage = JSON.parse(localStorage.getItem('categories'));
        const productsStorage = JSON.parse(localStorage.getItem('products'));
        if (!!productsStorage && !!categoriesStorage) {
            return [categoriesStorage, productsStorage]
        }
        const response = await fetch(`api/classifylist`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors'
        });
        const res = await response.json();
        let products = []
        for (const item of res.data.classifyList) {
            const response = await fetch(`api/classifylist?classify_id=${item.id}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: 'cors'
            });
            const ret = await response.json();
            products.push(ret.data.itemList)
        }

        localStorage.setItem("categories", JSON.stringify(res.data.classifyList));
        localStorage.setItem("products", JSON.stringify(products))
        return [res.data.classifyList, products];
    })


const allProducts = createSlice({
    name: 'store',
    initialState: {
        categories: [],
        products: [],
        cart: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {

            let itemId = action.payload.id;
            let data = {
                "useruss": "test",
                "itemId": itemId,
                "type": "add",
            };
            const url = `api/shoppingmodify`;
            // let productInCart = state.cart.find(mer => mer.id === action.payload.id)
            // console.log(productInCart)
            //
            // if (productInCart) {
            //     productInCart.quantity += 1
            // } else {
            //     state.cart.push({
            //         ...action.payload,
            //         quantity: 1
            //     })
            // }
            // let total = 0
            // for (let mer of state.cart) {
            //     total += mer.quantity * mer.price
            // }
            // console.log(total)
            // state.total = total.toFixed(2)
        }
    },
    extraReducers: {
        [loadProducts.rejected]: (state, action) => {
            state.categories = []
        },
        [loadProducts.fulfilled]: (state, action) => {
            state.categories = action.payload[0]
            state.products = action.payload[1]
        }
    }

})

export default allProducts;
export {loadProducts};