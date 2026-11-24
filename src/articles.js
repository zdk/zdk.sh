import { getCollection } from 'astro:content';

export const url = (a) => a.data.href ?? `/articles/${a.id}`;

// "Sep 14, 2026". Post dates are UTC midnight, so format in UTC.
export const fmt = (d) => d.toLocaleDateString('en-US', { dateStyle: 'medium', timeZone: 'UTC' });

// Newest first.
export const getArticles = async () =>
  (await getCollection('articles')).sort((a, b) => b.data.date - a.data.date);
