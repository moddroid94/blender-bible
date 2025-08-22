<div align="center">
  <h1>Welcome to The Blender Bible👋</h1>
  <img 
    style="display: block; 
           margin-left: auto;
           margin-right: auto;
           width: 30%;"
    src="https://blenderbible.pages.dev/channels.webp" 
    alt="Our logo">
</img>
</div>


# The Blender Bible
https://blenderbible.pages.dev

Welcome to The Blender Bible Repo! 

This repo is the CI/CD source for the https://blenderbible.pages.dev site.



## What is this?

This repository is a (hopefully) community-driven effort to gather and organize the most helpful Blender resources available, Tutorials, Assets, Addons, and more.

The goal is to create a resource collection that grows and evolves with the Blender community, completely free to use,contribute or even clone and adapt to other topics.

This site/App is built in such a way that there's no server side functions, no database, and therefore could be hosted as a simple static site/PWA, making it easy and cheap to maintain, and with some github actions we could make the merging and acceptance of PR/Issues almost automatic.

## Tech Stack - CI/CD

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=svelte,nodejs,vite,cloudflare" />
  </a>
</p>

Built with SvelteKit, using the PWA/SPA export.

Right now this repo is linked with a Cloudflare Pages CI/CD, which pulls the main branch every commit, and pushes the build online in less than a minute (if there's no error, that is).

The whole CI/CD and hosting is completely free thanks to Cloudflare policy on Static sites/Assets.

The repo could be easily cloned or linked to another CI/CD whenever, changing the adapter into the svelte config allow for multiple zero-config deployments.

## How to Use It

The repo is only for contributions and to host the project, to browse it go to https://blenderbible.pages.dev.

## Contributing

We love contributions! If you want to add your list of tutorials, your own, or some resource, Site or whatever cool you've found, or if you want to help with the coding part too.

**If you want to contribute tutorials or anything else just open an issue with the infos/links/ecc**

## To add content (WIP):
*this is still in WIP so there will be more instructions/methods to come*


I'm working on the automation to add a JSON list automatically, the method is the following.
1.  **Check for duplicates:** Make sure the tutorial you want to add isn't already in the list.
2.  **Use the issue template:** Head over to the "Issues" tab and click on "New Issue".
3.  **Choose the "Add a Tutorial" template:** This will give you a pre-formatted template to fill out with the JSON list.
4.  **Fill out the template:** copy the JSON list into the field and choose a title for the issue, leave the **[ADD:]** prefix.
5.  **Submit the issue:** Once you've filled out the template, submit the issue, some robots will take care of it (hopefully).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


## Disclaimer

The Blender Bible is a community-run project and is not affiliated with the official Blender Foundation. All tutorials and resources linked here belong to their respective creators.

***

Happy Blending!
