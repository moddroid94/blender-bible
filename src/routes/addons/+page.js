export const ssr = false;
import { addons } from '$lib/data/addons';

export function load() {
	return {
		sites: addons.map((addon) => ({
			name: addon.name,
			categories: addon.type,
			url: addon.link,
			notes: addon.notes
		}))
	};
}
