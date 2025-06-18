export default async function Page({ params,
 }: 
 {
     params: Promise <{ productsId: string }> })
      {
    const { productsId } = await params;
    // console.log('productsId', productsId);
    // console.log('params', params);
  return (
    <div>
      <h1>Product Page</h1>
      <p>This is the product page. {productsId}</p>
    </div>
  );
}