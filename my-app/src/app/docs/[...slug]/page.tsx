import React from 'react';

interface Iobj {
  name: string;
  city: string;
}

const sample: Iobj = {
  name: 'John',
  city: 'New York',
};

interface DocsProps {
  params: { slug?: string[] };
}

const Docs = async ({ params }: DocsProps) => {
  const slug = params.slug || [];

  console.log('slug', slug);
  console.log('params', params);

  if (slug.length === 2) {
    const key = slug[1] as keyof typeof sample;
    return (
      <h1>
        Viewing the Docs feature: <strong>{slug[0]}</strong> and concept: <strong>{sample[key]}</strong>
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Viewing the Docs for feature: <strong>{slug[0]}</strong></h1>;
  }

  return <h1>Welcome to the Docs Page</h1>;
};

export default Docs;
