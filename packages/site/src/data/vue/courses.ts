import { Course } from "@framework/system/src/models/course"
import { Tags } from "../../models/tags"

export const courses: Course<Tags[number]>[] = [
	{
		title: "Vue - The Complete Guide (incl. Router & Composition API)",
		author: "Maximilian Schwarzmüller",
		image: "https://github.com/maxschwarzmueller.png",
		description:
			"Join this bestselling Vue course to learn how to use the latest version of VueJS to build amazing, modern web apps!",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
		tags: [
			"state management",
			"data fetching",
			"routing",
			"vue 2",
			"vue 3",
			"vuex",
			"authentication",
			"forms",
		],
	},
	{
		title: "Advanced Vue Component Design",
		author: "Adam Wathan",
		image: "https://github.com/adamwathan.png",
		description:
			"Learn how to design simpler, more flexible components that are both more powerful and easier to maintain.",
		paymentType: "paid",
		level: "advanced",
		format: "video",
		href: "https://adamwathan.me/advanced-vue-component-design/",
		tags: ["components", "vue 2"],
	},
	{
		title: "Vue Foundations",
		author: "Anthony Gore",
		image: "https://github.com/anthonygore.png",
		description:
			"Learn Vue 3 from scratch by building real-world web apps. Plus key tools like Vue CLI and Vue Router.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://vuejsdevelopers.com/courses/foundations/",
		tags: ["data fetching", "vue 3", "routing"],
	},
	{
		title: "Learn Vue 2 in 65 Minutes",
		author: "Gary Simon",
		image: "https://github.com/designcourse.png",
		description:
			"This tutorial teaches you how to build Vue apps through nine interactive screencasts. You'll learn basic Vue.js concepts, and also take part in building two super fun apps: Schrödingers Div and the Emoji Color Picker!",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://www.youtube.com/watch?v=78tNYZUS-ps",
		tags: ["CSS", "vue 2", "forms", "routing"],
	},
	{
		title: "Nuxt.js 2 - Vue.js on Steroids",
		author: "Maximilian Schwarzmüller",
		image: "https://github.com/maxschwarzmueller.png",
		description:
			"Build highly engaging Vue JS apps with Nuxt.js. Nuxt adds easy server-side-rendering and a folder-based config approach.",
		paymentType: "paid",
		level: "intermediate",
		format: "video",
		href: "https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/",
		tags: [
			"CSS",
			"nuxt 2",
			"forms",
			"routing",
			"data fetching",
			"authentication",
		],
	},
	{
		title: "Complete Vue Developer in 2022",
		author: "Luis Ramirez Jr & Andrei Neagoie",
		image: "https://github.com/aneagoie.png",
		description:
			"The only Vue.js tutorial + projects course you need to learn Vue (including all new Vue 3 features), build large-scale Vue applications from scratch, and get hired as a Vue developer in 2022. Go from Zero To VUE Mastery.",
		paymentType: "paid",
		level: "beginner",
		format: "video",
		href: "https://zerotomastery.io/courses/learn-vue-js/",
		tags: [
			"PWA",
			"vue 3",
			"testing",
			"routing",
			"vuex",
			"authentication",
			"forms",
			"components",
			"CSS",
		],
	},
	{
		title: "1 Hour to Learn Vue",
		author: "Simone Cuomo",
		image: "https://github.com/thisdot.png",
		description:
			"In this Vue.js training, you will learn how to create a sample blog application from the ground up. This training includes how to set up a project with the Vue CLI, a basic understanding of the framework structure, understanding async data loading, mixins and much more.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/XItC-JBL3kw",
		tags: [
			"vue CLI",
			"vue 2",
			"sass",
			"data fetching",
			"components",
			"javascript marathon",
		],
	},
	{
		title: "Master PWA in Vue",
		author: "Simone Cuomo",
		image: "https://github.com/thisdot.png",
		description:
			"Progressive web apps have recently become an industry standard, and in this training, we are going to learn all the steps necessary to add this feature to a Vue application.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/15Yr-J4X34M",
		tags: ["PWA", "vue CLI", "vue 2", "javascript marathon"],
	},
	{
		title: "Master State Management in Vue with VueX",
		author: "Simone Cuomo",
		image: "https://github.com/thisdot.png",
		description:
			"State management is an extremely important feature of web applications. In this training, we are going to walk through VueX. Topic covered will include: Installation, basic usage, best practices, modules and much more.",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/KO4KQ2tjG_M",
		tags: ["vue 2", "vuex", "state management", "javascript marathon"],
	},
	{
		title: "Learning Unit Testing in Vue",
		author: "Simone Cuomo",
		image: "https://github.com/thisdot.png",
		description:
			"TDD (Test driven development), is every developer’s dream. This training will teach you how to do testing right in Vue.js with the help of vue-test-util and jest. We will also cover a variety of test scenarios to support you in improving your testing knowledge.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/-CJDcjxXEaY",
		tags: ["vue 2", "testing", "javascript marathon"],
	},
	{
		title: "Pro Tips on Using AWS with Vue",
		author: "Simone Cuomo",
		image: "https://github.com/thisdot.png",
		description:
			"Cloud infrastructure can be scary, but AWS makes this task so much easier.In this training, we are going to walk you through how to set up your Vue.js application on AWS with Amplify.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/7XWraodmPAk",
		tags: [
			"AWS",
			"DevOps",
			"continuous integration",
			"vue 2",
			"javascript marathon",
		],
	},
	{
		title: "Vite Training with Anthony",
		author: "Anthony Fu",
		image: "https://github.com/thisdot.png",
		description:
			"In this training session, Anthony Fu will walk you through getting started with Vite! Learn how it works, how it'll benefit you and your workflow, and why it's a must-use library! Use Vite with React, Svelte, and more!",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/ecpvIo4NIoY",
		tags: ["vite", "vue 2", "vue 3", "javascript marathon"],
	},
	{
		title: "Effectively Using the New Vue Composition API",
		author: "Jake Dohm",
		image: "https://github.com/thisdot.png",
		description:
			"Come join us as we walk through the new Composition API that will be released as part of Vue 3. The Composition API is a way to abstract functionality in your application, using some new internal APIs that Vue is exposing. Inspired by React Hooks, it makes it much easier to share logic, data, and methods across components in your app.",
		paymentType: "free",
		level: "intermediate",
		format: "video",
		href: "https://youtu.be/E6hjtY3e8H0",
		tags: ["vue 3", "javascript marathon"],
	},
	{
		title: "Debugging Vue: Quick Tips and Tricks",
		author: "Simone Cuomo",
		image: "https://github.com/thisdot.png",
		description:
			"Let's face it - our code is never perfect! There are times when debugging is necessary, and debugging a Vue.js application has never been easier. This session is going to show you how to debug your code using Vue Devtools and Visual Studio Code. ",
		paymentType: "free",
		level: "beginner",
		format: "video",
		href: "https://youtu.be/wXFcRDsFSEU",
		tags: ["vue 2", "debugging", "javascript marathon"],
	},
]
