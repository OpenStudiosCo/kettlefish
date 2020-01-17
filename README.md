# kettlefish

![Kettlefish Logo](./src/lib/kettlefish.png)

# Getting started
Kettlefish is an [Open Studios](https://openstudios.xyz) project that provides a very simple boilerplate for fussy lazy web dev.

[Example Kettlefish Site](http://htmlpreview.github.io/?https://github.com/paulbrzeski/kettlefish/blob/master/index.html)

The default templates and tools provided by the Kettlefish repository can be configured and extended for efficiently building websites and software with components tested through Open Studios' other projects including [Kamigen](https://kamigen.com/) and [Manifold](http://manifold.paulbrzeski.com/).

## Installation
Global install with NPM
```
npm install -g kettlefish
```
Local install with NPM  (for a project)
```
npm install kettlefish --save
```


## Features
If you're new to some of the features in the next section, have a look at the final section **References and Learning** 
- Simple low maintenance configuration and CLI tool, works out of the box.
- [Rollup](https://rollupjs.org/) for compiling front-end scripts
- [Pug](https://pugjs.org/) for HTML.
  - The [templates](/src/templates) folder contains page layouts, scripts blocks, etc and the [pages](/src/pages) folder creates the HTML structure of the site at the root, this is why there's a rogue index.html file in this repository. 
- [Stylus for CSS](http://stylus-lang.com/)
  - The [styles](/src/styles) folder compiles into CSS, as you'll note in the `css` script below, any files defined in `/src/styles` are compiled to CSS in `/dist`.
- Example sites for even faster site building (coming soon)
  - For now, I've re-implemented the Semantic UI homepage demo using Kettlefish - [demo here](http://htmlpreview.github.io/?https://github.com/paulbrzeski/kettlefish/blob/master/index.html).

### Reference and tutorials
- [Getting Started with Semantic UI](https://semantic-ui.com/introduction/getting-started.html)
- [Pug (Jade) HTML preprocessor video tutorials](https://www.youtube.com/watch?v=AY99ODBchIA)
- [Stylus CSS preprocessor video tutorials](https://www.youtube.com/watch?v=eJahtnmywMI)
- [Rollup JS Configuration Guide](https://rollupjs.org/guide/en/#configuration-files)

# Usage
Kettlefish is a multi purpose static site generator.

Out of the box, you can start a new site using this as a base - you'll have everything you need to do anything. If you're a CMS developer, you can use this to implement a design first and then integrate it into your development pipeline.

## As a boilerplate
Simply copy the contents of Kettlefish into your starter project or install it as a node_module as a reference.

## Developing static sites
Kettlefish comes with a script that will watch for changes to Pug, Stylus and JS files and rebuild them. A simply HTTP server is also run to preview in a browser.

```<kettlefish project root> node dev.js```

## As a global CLI tool
If you install Kettlefish globally, you can use it as a multipurpose static generator for things like project documentation or invoicing.

The default target directory is the current folder, but a path argument can also be passed in.

```<kettlefish compatible folder root> kf .```
###### OR
```<kettlefish compatible folder root> kettlefish .```

## Scripts
Kettlefish comes with a couple of handy scripts out of the box. They are the basis for key tasks and bound to package.json which you are welcome to use as a starting point for your own project.	
```	@TODO: Complete this section
  "scripts": {	- Dev script / watch mode
    "build": "pug src/pages -P -o . -b . && stylus src/styles -o dist",	- Compiler / run once
    "css": "stylus src/styles -o dist -w",	
    "pug": "pug src/pages -P -o . -b . -w",	
    "dev-osx": "sudo http-server -p 80 -c-1 .",	
    "dev": "http-server -p 80 -c-1 .",	
    "watch": "npm run css & npm run pug & npm run rollup & npm run dev",	
    "gs": "for i in ../*; do (cd $i && (echo $i; git status)); done",	
    "preinstall": "npm i -g http-server"	
  }	
```
## Important files
The following files are part of the Kettlefish compilation and templating system.

Any of these default files can be customised for your requirements.
### Required:
- ```/package.json``` - scripts that Kettlefish uses.
- ```/rollup.config.js``` - configuration for front-end Javascript compilation using Rollup.
- ```/src/``` folder - templates and content that will be compiled by Kettlefish
- ```/src/pages``` folder - Pug templates that represent the desired HTML structure. ```/src/pages/index.pug => /index.html```.

### Optional:
- ```/src/app.js``` - uses Rollup to compile a front-end script. ```/src/app.js => /dist/app.js```
- ```/src/app/``` folder - additional Javascript code that can be imported to app.js using import or require patterns.
- ```/src/styles``` folder - Stylus files that will compile to CSS. ```/src/styles/layout.styl => /dist/layout.css```
- ```/src/templates``` - reusable Pug templates for use by pages defined in ```/src/pages```.

## Built with Kettlefish
### Websites and Web Apps
- [Kamigen](https://kamigen.com/)
- [Langenium](http://langenium.paulbrzeski.com/)
### Websites
- [Open Studios](https://openstudios.xyz)
- [Paul Brzeski Consulting](https://paulbrzeski.com)
### Web Apps
- [Manifold](http://manifold.paulbrzeski.com/)
- [Rover](http://rover.paulbrzeski.com/)
