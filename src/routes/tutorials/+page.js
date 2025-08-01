import { posts } from '$lib/tutorials/data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			vid: post.vid,
			title: post.title,
			author: post.author,
			description: post.description,
			version: post.version,
			renderer: post.renderer,
			tags: post.tags
		}))
	};
}