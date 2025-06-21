// import React,{ useEffect } from 'react'
// import Mehsul from './Mehsul'
// import { useGetProductsQuery } from '../redux/api/productsApi'
// import toast from 'react-hot-toast'

// const Mehsullar = () => {

// const [data, isLoding, error, isError] = useGetProductsQuery()

// useEffect(()=>{
//   if(isError){
//     toast.error(error?.data?.message)
//   }
// }, [isError])


//   return (
//    <div className='products container py-5 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6'>
//  {
//   data?.products?.map(products=> (
//     <Mehsul/>
//   ))
//  }
//    </div>


//   )
// }

// export default 




import React, { useEffect } from 'react'
import Mehsul from './Mehsul'
import { useGetProductsQuery } from '../redux/api/productsApi'
import toast from 'react-hot-toast'

const Mehsullar = () => {
  const { data, isLoading, error, isError } = useGetProductsQuery()

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Xəta baş verdi")
    }
  }, [isError])

  return (
    <div className='products container py-5 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6'>
      {
        data?.products?.map(product => (
          <Mehsul key={product._id} product={product} />
        ))
      }
    </div>
  )
}

export default Mehsullar
