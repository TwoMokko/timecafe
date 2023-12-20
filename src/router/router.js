import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/MainPage";
import Games from "@/pages/GamesPage";
import About from "@/pages/AboutPage";
import Event from "@/pages/EventsPage";
import Rules from "@/pages/RulesPage";
import Admin from "@/pages/AdminPage";
import notFound from "@/pages/NotFound";
import adminCreate from "@/pages/AdminCreate";
import adminUpdate from "@/pages/AdminUpdate";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main
    },
    {
        path: '/games',
        name: 'games',
        component: Games
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/events',
        name: 'events',
        component: Event
    },
    {
        path: '/rules',
        name: 'rules',
        component: Rules
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        children: [
            {
            path: 'create',
            name: 'create',
            component: adminCreate
            },
            {
            path: 'update',
            name: 'update',
            component: adminUpdate
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: notFound
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;