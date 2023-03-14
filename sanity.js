// sanity.js
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'xe28ls1a',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-10', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
}

