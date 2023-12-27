import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/site/MainPage";
import Games from "@/pages/site/GamesPage";
import About from "@/pages/site/AboutPage";
import Event from "@/pages/site/EventsPage";
import Rules from "@/pages/site/RulesPage";
import Admin from "@/pages/admin/AdminPage";
import notFound from "@/pages/NotFound";
import adminGame from "@/pages/admin/game/AdminGame";
import gameCreate from "@/pages/admin/game/GameCreate";
import gameUpdate from "@/pages/admin/game/GameUpdate";
import gameView from "@/pages/admin/game/GameView";
import adminRoom from "@/pages/admin/room/AdminRoom";
import roomUpdate from "@/pages/admin/room/RoomUpdate";
import roomCreate from "@/pages/admin/room/RoomCreate";

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
            path: 'games',
            name: 'ad-game',
            component: adminGame,
            },
            {
                path: 'game-create',
                name: 'ag-create',
                component: gameCreate
            },
            {
                path: 'game-view/:id',
                name: 'ag-view',
                component: gameView
            },
            {
                path: 'game-update/:id',
                name: 'ag-update',
                component: gameUpdate
            },
            {
            path: 'rooms',
            name: 'ad-room',
            component: adminRoom,
                children: [
                    {
                        path: 'create',
                        name: 'ar-create',
                        component: roomCreate
                    },
                    {
                        path: 'update',
                        name: 'ar-update',
                        component: roomUpdate
                    },
                ]
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