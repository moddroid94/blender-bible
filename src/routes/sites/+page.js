export const ssr = false;
import {sites} from '$lib/data/sites'

export function load() {
    return {
        sites: sites.map((site) => ({
            name: site.name,
            categories: site.category,
            img_url: site.img_url,
            url: site.link,
            notes: site.note
        }))
    };
}