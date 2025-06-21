import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({baseUrl:"/api/v1"}),
    endpoints:(builder) =>({
        getProducts: builder.query({
            query: (params) => "/mehsullar"
        }),
        getProductsDetails: builder.query({
            query:(id) =>`/mehsullar/${id}`
        })
    })
})

export const {useGetProductsQuery,useGetProductsDetailsQuery} = productApi
