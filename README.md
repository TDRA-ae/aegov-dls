<div>
	<a href="https://u.ae/">
		<img src="https://tdra.gov.ae/Assets/images/UAEGoldNew-01.png" alt="United Arab Emirates" width="100" height="100">
	</a>
</div>
<p>&nbsp;</p>
<div>
	<a href="https://tdra.gov.ae/">
		<img src="https://tdra.gov.ae/Assets/images/TDRA-final-logo.svg" alt="The Telecommunication and Digital Government Regulatory Authority of the United Arab Emirates" height="40">
	</a>
</div>
<p>&nbsp;</p>

# The United Arab Emirates Design System

> [!CAUTION]
> **This is an older version of the UAE Design System and is no longer maintained.**
>
> This repository and the `@aegov/design-system` package (the TailwindCSS plugin, v3.x and earlier) will not receive further updates, bug fixes or security patches.
>
> **A new version of the UAE Design System, built on Web Components, is now available as [`@aegov/designsystem`](https://www.npmjs.com/package/@aegov/designsystem) (version 4.0.x). All projects must aim to upgrade to it.** Companion packages are available for React, Vue and Angular.
>
> ```bash
> npm install @aegov/designsystem@^4.0.0
> ```

> [!WARNING]
> **Upgrading to version 4.0.x is a breaking change.** A Web Components based design system requires structural changes to your HTML. Components are no longer built from HTML elements and CSS classes; each one is a custom element with its own attributes and events, and it needs the design system's JavaScript loaded to render. For example:
>
> ```html
> <!-- @aegov/design-system (this repository) -->
> <button class="aegov-btn btn-secondary btn-outline">Submit</button>
>
> <!-- @aegov/designsystem 4.0.x -->
> <aegov-button variant="secondary" appearance="outline">Submit</aegov-button>
> ```
>
> Plan the upgrade: replace markup component by component, update any JavaScript that depended on the old classes or the bundled Flowbite-based scripts, and test your pages thoroughly. Installation and the full component reference are on [designsystem.gov.ae](https://designsystem.gov.ae).

---

The design system has been created based on research and information collected from in-depth studies conducted on user behaviour and benchmarking best practices.

The purpose of the design system is to create a set of components, blocks and patterns with detailed guidelines on how to create UI for websites and application of Federal Government Entities (FGE's) of the United Arab Emirates. This system is designed primarily for content specialists, user interface (UI) designers, developers, user researchers and digital operations teams of FGE's.

---

## Objective

The system aims to unify the digital presence of FGE's. It seeks to position the UAE as a pioneer in the provision of digital services as measured by the United Nation's Online Services Index and in line with the UAE Government Charter for Future Services.

---

## Documentation

For full documentation, visit [UAE Design System](https://designsystem.gov.ae).

## Getting started

The design system is built with standards and components that will help you build websites faster and with a consistent UI adhering to accessibility principles.

The design system is built with [TailwindCSS](https://tailwindcss.com) and to get started, you simply need to add the the <code>@aegov/design-system</code> plugin to your existing or new TailwindCSS project.

For installation instructions, go to [designsystem.gov.ae/docs/installation](https://designsystem.gov.ae/docs/installation)

### How to install the plugin (deprecated)

> [!NOTE]
> The instructions below are kept for existing projects only. New projects should install [`@aegov/designsystem@^4.0.0`](https://www.npmjs.com/package/@aegov/designsystem) instead.

If you want to install the package via the NPM CLI, you can use the following:

<pre>
npm install @aegov/design-system
</pre>

If you want to add the package to your package.json file, you can use the following:

<pre>
...
{
	"dependencies": {
    	"@aegov/design-system": "^2.0"
	}
}
...
</pre>

## The use of JavaScript

The design system aims to provide guidelines and components, focusing on the look and feel of each component, block and pattern. To faciliate the easy use of components and blocks, each of them have relevant code example. Developers can use the provided code examples to add components and blocks to their project.

Some components depend on the use of JavaScript. The design system does not mandate the use of the bundled JavaScript library, however recommend's it's use. The bundled JavaScript is forked from [Flowbite's JS](https://github.com/themesberg/flowbite) library. 

If a developer chooses not to use the bundled JavaScript, it is expected that the functionality and interaction of each component needs to be consistent to what is available on the design system website.

## What more is available

The design system also includes:

- [Guidelines](https://designsystem.gov.ae/guidelines)
- [Components](https://designsystem.gov.ae/docs/components)
- [Blocks](https://designsystem.gov.ae/docs/blocks)
- [Patterns](https://designsystem.gov.ae/docs/patterns)
- [Assets, tools and templates](https://designsystem.gov.ae/resources/assets-and-tools)
- [Roadmap of development](https://designsystem.gov.ae/resources/roadmap)

## Report an issue

To report a bug, an issue and for help, you can [submit an issue](https://github.com/TDRA-ae/aegov-dls/issues) on GitHub. We also encourage you to join our [GitHub discussions](https://github.com/orgs/TDRA-ae/discussions) for help from the community. For more information and details, you can also visit [tdra.gov.ae](https://tdra.gov.ae)