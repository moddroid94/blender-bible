export const ssr = false;
import { posts } from '$lib/tutorials/data.js';
import { channels } from '$lib/data/channels';

export function load() {
    return {
        summaries: posts.map((post) => ({
            vid: post.vid,
			image: post.image,
			title: post.title,
			author: post.author,
			description: post.description,
			version: post.version,
			renderer: post.renderer,
			tags: post.tags
        })),
        channels: channels.map((channel) => ({
            name: channel.name,
            categories: channel.category,
            url: channel.channel_url,
            thumbnail_url: channel.thumbnail_url
        })) 
    };
}