import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
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
		name: "Post",
		component: Post,
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
