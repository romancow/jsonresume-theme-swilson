# Sean Wilson's custom JSON Resume theme

This is my custom [JSON Resume](https://jsonresume.org/) theme, created for use with my own résumé. But you can use it too, if you like! Take a look at [my résumé](https://seanwilson.dev) to see it in action. It uses the [Pug](https://github.com/pugjs/pug) templating engine to create the markup and [Stylus](https://github.com/stylus/stylus) for styling.

- [How To Use](#how-to-use)
- [Extra Fields](#extra-fields)
- [Markdown](#markdown)
- [Query String Vars](#query-string-vars)

## How To Use

Add this theme package as a a dependency to your project containing your résumé JSON. Currently the package is not on npm, so you will have to use the GitHub npm package manager. Info on doing this can be found [here](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#installing-a-package). Basically it amounts to the following steps:

1) Create a GitHub access token with (at least) a `packages:read` scope.

2) Add a scope mapping and the access token for the GitHub npm package manager by adding a `.npmrc` file with lines:
```
	@romancow:registry=https://npm.pkg.github.com/
	//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN_HERE
```

3) Install the package:

	`npm install @romancow/jsonresume-theme-swilson`

You should then be able to use a package like [`resumed`](https://www.npmjs.com/package/resumed) or [`resume-cli`](https://www.npmjs.com/package/resume-cli) to render your résumé using this theme, specifiying the "swilson" theme if necessary (`--theme swilson`).


## Extra Fields

There are a few extra json fields the swilson theme uses in addtion to the standarad [JSON Resume schema](https://jsonresume.org/schema/) ones. These fields are all optional, and your json should still validate with them.

<dl>
	<dt><code>basics.notes</code> <em>(string[])</em></dt>
	<dd>General notes to show at the top of the résumé beneath the header. Used on my own résumé to show a "Learn more" link.</dd>
	<dt><code>projects[].icon</code> <em>(string)</em></dt>
	<dd>The name of a <a href="https://fontawesome.com/icons">FontAwesome</a> icon to show underneath the project name. This allows you to customize the icon to fit the type of project.</dd>
	<dt><code>education[].honors</code> <em>(string[])</em></dt>
	<dd>A list of education related honors you may have received. For example, "Valedictorian" or <a href="https://en.wikipedia.org/wiki/Latin_honors">latin honors</a>.</dd>
	<dt><code>references[].at</code> <em>(string)</em></dt>
	<dd>The name of a company or organization (or just generally the significance) of the person providing the reference.</dd>
	<dt><code>references[].position</code> <em>(string)</em></dt>
	<dd>The position or role of the person providing the reference.</dd>
</dl>


## Markdown

The following fields support [Markdown](https://www.markdownguide.org/basic-syntax/) content:

- `basics.summary`
- `basics.notes[]`
- `awards[].summary`
- `certificates[].summary`
- `publications[].summary`
- `education[].honors[]`
- `projects[].description`
- `references[].reference`
- `work[].highlights[]`
- `volunteer[].highlights[]`
- `projects[].highlights[]`
- `work[].summary`
- `volunteer[].summary`


## Query String Vars

The generated HTML version of the résumé has a few supported query string variables you can pass in the url to customize color and fonts.

Basic Example: https://www.seanwilson.dev/?secondary-font-color=%23CFAE70&accent-bg-color=DimGray

### Colors
<dl>
	<dt><code>body-bg-color</code></dt>
	<dd>The color of the area outside/between the résumé "sections" & header. Default: <code>#ffffff</code></dd>
	<dt><code>primary-bg-color</code></dt>
	<dd>The background color inside résumé "section" boxes (i.e. profile, skills, work experience, etc.). Default: <code>#fbfbfb</code></dd>
	<dt><code>primary-font-color</code></dt>
	<dd>The color of text inside résumé "section" boxes. Default: <code>#333333</code></dd>
	<dt><code>secondary-bg-color</code></dt>
	<dd>The background color of the résumé header. Default: <code>#232323</code></dd>
	<dt><code>secondary-font-color</code></dt>
	<dd>The color of text inside the résumé header and "accent" backgrounds. Default: <code>#fbfbfb</code></dd>
	<dt><code>accent-bg-color</code></dt>
	<dd>An "accent" background color, used for résumé "section" box subheaders (work experience & volunteer) and keywords. Default: <code>#8b95a2</code></dd>
	<dt><code>accent-font-color</code></dt>
	<dd>An "accent" font color, used in places like notes, reference quotes, and subtitles (e.g. education study type, project roles). Default: <code>#777777</code></dd>
</dl>

### Fonts
<dl>
	<dt><code>primary-font</code></dt>
	<dd>The primary font used in most places in the résumé. Default: <code>'Roboto', sans-serif</code></dd>
	<dt><code>secondary-font</code></dt>
	<dd>The alternate font used in the header label and section name headers. Default: <code>'Roboto Slab', serif</code></dd>
</dl>


If you do use this theme, I'd love to know about it. Drop me a line at <hi@seanwilson.dev>.
