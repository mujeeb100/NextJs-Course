import React from 'react'
import {notFound} from 'next/navigation';

async function Reviews({ params }: 
    { 
        params: Promise<{ productsId: string, reviewsId: string }>
     }) 
     {
    const { productsId, reviewsId } = await params;
    if(parseInt(reviewsId) > 1000)   {
      return  notFound();
    }
   
  return (
    <div>Reviews {reviewsId} for product {productsId}</div>
  )
}


export default Reviews