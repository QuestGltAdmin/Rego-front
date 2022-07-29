import React from 'react';


export const PublicRoutes = [
    {
        path: "/",
        name: "Home",
        // component: React.lazy(() => import("pages/public")),
    },
    {
        path:"/auth/login",
        name:"Login",
        // component: React.lazy(() => import("pages/public")),
    },
    {
        path:"/auth/signup",
        name:"Signup",
        // component: React.lazy(() => import("pages/public")),
    },
    {
        path:"/privacy-policy",
        name:"Privacy Policy",
        // component: React.lazy(() => import("pages/public")),
    },
    {
        path:"/terms-and-conditions",
        name:"Terms And Conditions",
        // component: React.lazy(() => import("pages/public")),
    },
    {
        path:"/about-us",
        name:"About Us",
        // component: React.lazy(() => import("pages/public")),
    },
    {
        path:"/contact-us",
        name:"Contact Us",
        // component: React.lazy(() => import("pages/public")),
    },
    {
        path:"/support",
        name:"Support",
        // component: React.lazy(() => import("pages/public")),
    },
];