import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL='http://3.65.32.166/'
const product_type= 'digital'
const sub_product_type='book'

export const EbookApi = createApi({
    reducerPath: 'EbookApi',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}`}),
    endpoints: (builder) => ({
        getEbooksList: builder.query({
            query: () => `api/v2/storefront/products?filter[product_type]=${product_type}&filter[sub_product_type]=${sub_product_type}`,
        }),
        getEbookDetails: builder.query({
            query: (id) => `api/v2/storefront/products/${id}`,
        }),
    })
})

export const { useGetEbooksListQuery, useGetEbookDetailsQuery } = EbookApi;