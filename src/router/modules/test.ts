export default {
  path: "/test",
  redirect: "/test",
  meta: {
    icon: "informationLine",
    title: "测试界面",
    // showLink: false,
    rank: 8
  },
  children: [
    {
      path: "/test/1",
      name: "1",
      component: () => import("@/views/test/1.vue"),
      meta: {
        title: "1"
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "404"
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "500"
      }
    }
  ]
} as RouteConfigsTable;
