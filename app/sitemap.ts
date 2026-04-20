import { MetadataRoute } from 'next';
import { destinations } from '@/content/shared/destinations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://banjarmasintourism.go.id';

  const mainPages = [
    '',
    '/profil-kota',
    '/sejarah',
    '/budaya',
    '/kuliner',
    '/wisata',
    '/panduan',
    '/visi-digital',
    '/galeri',
    '/kontak',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const destinationPages = destinations.map((dest) => ({
    url: `${baseUrl}/wisata/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...destinationPages];
}
