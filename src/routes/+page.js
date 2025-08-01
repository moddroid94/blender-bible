import { posts } from '$lib/tutorials/data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			url: post.url,
			title: post.title,
			author: post.author,
			description: post.description,
			tags: post.tags
		}))
	};
}