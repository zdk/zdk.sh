import rss from '@astrojs/rss';
import { getArticles, url } from '../articles.js';

export async function GET(context) {
  return rss({
    title: 'zdk',
    description: 'Articles from zdk.sh',
    site: context.site,
    items: (await getArticles()).map((a) => ({
      title: a.data.title,
      pubDate: a.data.date,
      description: a.data.description,
      link: url(a),
    })),
  });
}
