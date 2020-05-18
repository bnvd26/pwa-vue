import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts.vue";
import Article from "../views/Article.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/posts",
		name: "Posts",
		component: Posts,
	},
	{
		path: "/post/:id",
		name: "Article",
		component: Article,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
