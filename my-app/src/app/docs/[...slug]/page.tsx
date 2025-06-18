import React from 'react'

async function Docs({ 
params,
}: { params: Promise < { slug: string[] } >;
}) {
    const { slug } = await params;
    console.log('slug', slug);
    console.log('params', params);
    if( slug.length === 2) {
        return (
            <h1>Viweing the Docs feature {slug[0]} and concept {slug[1]}</h1>
        )
    } else if (slug.length === 1) {
        return (
            <h1>Viewing the Docs for feature {slug[0]}</h1>
        )
    }
    
  return (
    <h1>Welcome Docs Page</h1>
  )
}

export default Docs