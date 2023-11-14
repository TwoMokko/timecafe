import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/MainPage";
import Games from "@/pages/GamesPage";
import About from "@/pages/AboutPage";
import Event from "@/pages/EventsPage";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/games',
        component: Games
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/events',
        component: Event
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;