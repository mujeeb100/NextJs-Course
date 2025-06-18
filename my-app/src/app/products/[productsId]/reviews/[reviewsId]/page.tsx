import React from 'react'

async function Reviews({ params }: 
    { 
        params: Promise<{ productsId: string, reviewsId: string }>
     }) 
     {
    const { productsId, reviewsId } = await params;
    console.log('productsId', productsId);
    console.log('reviewsId', reviewsId);
    console.log('params', params);
  return (
    <div>Reviews {reviewsId} for product {productsId}</div>
  )
}

export default Reviews