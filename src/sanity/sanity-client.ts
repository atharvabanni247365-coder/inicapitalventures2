import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset, apiVersion, useCdn } from './env-config';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  publishedAt,
  excerpt,
  tags,
  mainImage,
  author->{
    name,
    role,
    image
  }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  publishedAt,
  excerpt,
  tags,
  mainImage,
  body,
  author->{
    name,
    role,
    image
  }
}`;
