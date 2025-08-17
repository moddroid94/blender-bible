export const ssr = false;

import { error } from '@sveltejs/kit';
import { posts } from '$lib/tutorials/data.js';

export const load = ({params}) => {
	let data = {};
	let filteredposts = {};

	if (params.slug != "all") {
		filteredposts = posts.filter(video => {
			return (video.author === params.slug);
		})
	} else {
		filteredposts = posts;
	}
	
	if (filteredposts.length > 0) {
		data = filteredposts.map((post) => ({
			vid: post.vid,
			title: post.title,
			author: post.author,
			description: post.description,
			version: post.version,
			renderer: post.renderer,
			tags: post.tags
		}))
		return {data}
	} else {
		error(404, 'Not found');
	}
	;
}