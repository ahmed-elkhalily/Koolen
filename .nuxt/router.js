import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _df3a57a4 = () => interopDefault(import('../src/pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _7b5d2110 = () => interopDefault(import('../src/pages/home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _82d0fa50 = () => interopDefault(import('../src/pages/offcanvas-cart.vue' /* webpackChunkName: "pages/offcanvas-cart" */))
const _390a0d01 = () => interopDefault(import('../src/pages/account/addresses/index.vue' /* webpackChunkName: "pages/account/addresses/index" */))
const _0d6162f0 = () => interopDefault(import('../src/pages/account/dashboard.vue' /* webpackChunkName: "pages/account/dashboard" */))
const _5a0a7745 = () => interopDefault(import('../src/pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _94bd8d08 = () => interopDefault(import('../src/pages/account/orders/index.vue' /* webpackChunkName: "pages/account/orders/index" */))
const _6dd56f6f = () => interopDefault(import('../src/pages/account/password.vue' /* webpackChunkName: "pages/account/password" */))
const _0712def6 = () => interopDefault(import('../src/pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _566be14e = () => interopDefault(import('../src/pages/blog/category-classic.vue' /* webpackChunkName: "pages/blog/category-classic" */))
const _b26ee38c = () => interopDefault(import('../src/pages/blog/category-grid.vue' /* webpackChunkName: "pages/blog/category-grid" */))
const _1feed68a = () => interopDefault(import('../src/pages/blog/category-left-sidebar.vue' /* webpackChunkName: "pages/blog/category-left-sidebar" */))
const _37ef70dc = () => interopDefault(import('../src/pages/blog/category-list.vue' /* webpackChunkName: "pages/blog/category-list" */))
const _3f660b70 = () => interopDefault(import('../src/pages/blog/post-classic.vue' /* webpackChunkName: "pages/blog/post-classic" */))
const _41e23221 = () => interopDefault(import('../src/pages/blog/post-full.vue' /* webpackChunkName: "pages/blog/post-full" */))
const _62a212d7 = () => interopDefault(import('../src/pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _692e99b5 = () => interopDefault(import('../src/pages/shop/catalog/index.vue' /* webpackChunkName: "pages/shop/catalog/index" */))
const _72eb63d3 = () => interopDefault(import('../src/pages/shop/category-grid-3-columns-sidebar.vue' /* webpackChunkName: "pages/shop/category-grid-3-columns-sidebar" */))
const _4833c847 = () => interopDefault(import('../src/pages/shop/category-grid-4-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-4-columns-full" */))
const _0cc5aa66 = () => interopDefault(import('../src/pages/shop/category-grid-5-columns-full.vue' /* webpackChunkName: "pages/shop/category-grid-5-columns-full" */))
const _48f97434 = () => interopDefault(import('../src/pages/shop/category-list.vue' /* webpackChunkName: "pages/shop/category-list" */))
const _44c2be13 = () => interopDefault(import('../src/pages/shop/category-right-sidebar.vue' /* webpackChunkName: "pages/shop/category-right-sidebar" */))
const _cf38a180 = () => interopDefault(import('../src/pages/shop/checkout/index.vue' /* webpackChunkName: "pages/shop/checkout/index" */))
const _63e9777e = () => interopDefault(import('../src/pages/shop/compare.vue' /* webpackChunkName: "pages/shop/compare" */))
const _450e857a = () => interopDefault(import('../src/pages/shop/ctegories.vue' /* webpackChunkName: "pages/shop/ctegories" */))
const _286ae848 = () => interopDefault(import('../src/pages/shop/product-columnar.vue' /* webpackChunkName: "pages/shop/product-columnar" */))
const _42b5dcd2 = () => interopDefault(import('../src/pages/shop/product-sidebar.vue' /* webpackChunkName: "pages/shop/product-sidebar" */))
const _f01204dc = () => interopDefault(import('../src/pages/shop/product-standard.vue' /* webpackChunkName: "pages/shop/product-standard" */))
const _6f372ee5 = () => interopDefault(import('../src/pages/shop/track-order.vue' /* webpackChunkName: "pages/shop/track-order" */))
const _0391cb7c = () => interopDefault(import('../src/pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _6dba1538 = () => interopDefault(import('../src/pages/site/about-us.vue' /* webpackChunkName: "pages/site/about-us" */))
const _756967c8 = () => interopDefault(import('../src/pages/site/components.vue' /* webpackChunkName: "pages/site/components" */))
const _0f0c35f1 = () => interopDefault(import('../src/pages/site/contact-us.vue' /* webpackChunkName: "pages/site/contact-us" */))
const _580f7c66 = () => interopDefault(import('../src/pages/site/contact-us-alt.vue' /* webpackChunkName: "pages/site/contact-us-alt" */))
const _733c5e00 = () => interopDefault(import('../src/pages/site/faq.vue' /* webpackChunkName: "pages/site/faq" */))
const _9350b91c = () => interopDefault(import('../src/pages/site/not-found.vue' /* webpackChunkName: "pages/site/not-found" */))
const _1091a271 = () => interopDefault(import('../src/pages/site/terms.vue' /* webpackChunkName: "pages/site/terms" */))
const _0586ec96 = () => interopDefault(import('../src/pages/site/typography.vue' /* webpackChunkName: "pages/site/typography" */))
const _9d062f1e = () => interopDefault(import('../src/pages/shop/checkout/success.vue' /* webpackChunkName: "pages/shop/checkout/success" */))
const _66095ba9 = () => interopDefault(import('../src/pages/account/addresses/_id.vue' /* webpackChunkName: "pages/account/addresses/_id" */))
const _61e76ae4 = () => interopDefault(import('../src/pages/account/orders/_id.vue' /* webpackChunkName: "pages/account/orders/_id" */))
const _6777f86d = () => interopDefault(import('../src/pages/shop/catalog/_slug.vue' /* webpackChunkName: "pages/shop/catalog/_slug" */))
const _2b94f6d4 = () => interopDefault(import('../src/pages/shop/products/_slug.vue' /* webpackChunkName: "pages/shop/products/_slug" */))
const _c92dc0e0 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _df3a57a4,
    name: "account"
  }, {
    path: "/home-two",
    component: _7b5d2110,
    name: "home-two"
  }, {
    path: "/offcanvas-cart",
    component: _82d0fa50,
    name: "offcanvas-cart"
  }, {
    path: "/account/addresses",
    component: _390a0d01,
    name: "account-addresses"
  }, {
    path: "/account/dashboard",
    component: _0d6162f0,
    name: "account-dashboard"
  }, {
    path: "/account/login",
    component: _5a0a7745,
    name: "account-login"
  }, {
    path: "/account/orders",
    component: _94bd8d08,
    name: "account-orders"
  }, {
    path: "/account/password",
    component: _6dd56f6f,
    name: "account-password"
  }, {
    path: "/account/profile",
    component: _0712def6,
    name: "account-profile"
  }, {
    path: "/blog/category-classic",
    component: _566be14e,
    name: "blog-category-classic"
  }, {
    path: "/blog/category-grid",
    component: _b26ee38c,
    name: "blog-category-grid"
  }, {
    path: "/blog/category-left-sidebar",
    component: _1feed68a,
    name: "blog-category-left-sidebar"
  }, {
    path: "/blog/category-list",
    component: _37ef70dc,
    name: "blog-category-list"
  }, {
    path: "/blog/post-classic",
    component: _3f660b70,
    name: "blog-post-classic"
  }, {
    path: "/blog/post-full",
    component: _41e23221,
    name: "blog-post-full"
  }, {
    path: "/shop/cart",
    component: _62a212d7,
    name: "shop-cart"
  }, {
    path: "/shop/catalog",
    component: _692e99b5,
    name: "shop-catalog"
  }, {
    path: "/shop/category-grid-3-columns-sidebar",
    component: _72eb63d3,
    name: "shop-category-grid-3-columns-sidebar"
  }, {
    path: "/shop/category-grid-4-columns-full",
    component: _4833c847,
    name: "shop-category-grid-4-columns-full"
  }, {
    path: "/shop/category-grid-5-columns-full",
    component: _0cc5aa66,
    name: "shop-category-grid-5-columns-full"
  }, {
    path: "/shop/category-list",
    component: _48f97434,
    name: "shop-category-list"
  }, {
    path: "/shop/category-right-sidebar",
    component: _44c2be13,
    name: "shop-category-right-sidebar"
  }, {
    path: "/shop/checkout",
    component: _cf38a180,
    name: "shop-checkout"
  }, {
    path: "/shop/compare",
    component: _63e9777e,
    name: "shop-compare"
  }, {
    path: "/shop/ctegories",
    component: _450e857a,
    name: "shop-ctegories"
  }, {
    path: "/shop/product-columnar",
    component: _286ae848,
    name: "shop-product-columnar"
  }, {
    path: "/shop/product-sidebar",
    component: _42b5dcd2,
    name: "shop-product-sidebar"
  }, {
    path: "/shop/product-standard",
    component: _f01204dc,
    name: "shop-product-standard"
  }, {
    path: "/shop/track-order",
    component: _6f372ee5,
    name: "shop-track-order"
  }, {
    path: "/shop/wishlist",
    component: _0391cb7c,
    name: "shop-wishlist"
  }, {
    path: "/site/about-us",
    component: _6dba1538,
    name: "site-about-us"
  }, {
    path: "/site/components",
    component: _756967c8,
    name: "site-components"
  }, {
    path: "/site/contact-us",
    component: _0f0c35f1,
    name: "site-contact-us"
  }, {
    path: "/site/contact-us-alt",
    component: _580f7c66,
    name: "site-contact-us-alt"
  }, {
    path: "/site/faq",
    component: _733c5e00,
    name: "site-faq"
  }, {
    path: "/site/not-found",
    component: _9350b91c,
    name: "site-not-found"
  }, {
    path: "/site/terms",
    component: _1091a271,
    name: "site-terms"
  }, {
    path: "/site/typography",
    component: _0586ec96,
    name: "site-typography"
  }, {
    path: "/shop/checkout/success",
    component: _9d062f1e,
    name: "shop-checkout-success"
  }, {
    path: "/account/addresses/:id",
    component: _66095ba9,
    name: "account-addresses-id"
  }, {
    path: "/account/orders/:id",
    component: _61e76ae4,
    name: "account-orders-id"
  }, {
    path: "/shop/catalog/:slug",
    component: _6777f86d,
    name: "shop-catalog-slug"
  }, {
    path: "/shop/products/:slug?",
    component: _2b94f6d4,
    name: "shop-products-slug"
  }, {
    path: "/",
    component: _c92dc0e0,
    name: "index"
  }, {
    path: "/:lang/account",
    component: _df3a57a4,
    name: "lang-account"
  }, {
    path: "/:lang/home-two",
    component: _7b5d2110,
    name: "lang-home-two"
  }, {
    path: "/:lang/offcanvas-cart",
    component: _82d0fa50,
    name: "lang-offcanvas-cart"
  }, {
    path: "/:lang/account/addresses",
    component: _390a0d01,
    name: "lang-account-addresses"
  }, {
    path: "/:lang/account/dashboard",
    component: _0d6162f0,
    name: "lang-account-dashboard"
  }, {
    path: "/:lang/account/login",
    component: _5a0a7745,
    name: "lang-account-login"
  }, {
    path: "/:lang/account/orders",
    component: _94bd8d08,
    name: "lang-account-orders"
  }, {
    path: "/:lang/account/password",
    component: _6dd56f6f,
    name: "lang-account-password"
  }, {
    path: "/:lang/account/profile",
    component: _0712def6,
    name: "lang-account-profile"
  }, {
    path: "/:lang/blog/category-classic",
    component: _566be14e,
    name: "lang-blog-category-classic"
  }, {
    path: "/:lang/blog/category-grid",
    component: _b26ee38c,
    name: "lang-blog-category-grid"
  }, {
    path: "/:lang/blog/category-left-sidebar",
    component: _1feed68a,
    name: "lang-blog-category-left-sidebar"
  }, {
    path: "/:lang/blog/category-list",
    component: _37ef70dc,
    name: "lang-blog-category-list"
  }, {
    path: "/:lang/blog/post-classic",
    component: _3f660b70,
    name: "lang-blog-post-classic"
  }, {
    path: "/:lang/blog/post-full",
    component: _41e23221,
    name: "lang-blog-post-full"
  }, {
    path: "/:lang/shop/cart",
    component: _62a212d7,
    name: "lang-shop-cart"
  }, {
    path: "/:lang/shop/catalog",
    component: _692e99b5,
    name: "lang-shop-catalog"
  }, {
    path: "/:lang/shop/category-grid-3-columns-sidebar",
    component: _72eb63d3,
    name: "lang-shop-category-grid-3-columns-sidebar"
  }, {
    path: "/:lang/shop/category-grid-4-columns-full",
    component: _4833c847,
    name: "lang-shop-category-grid-4-columns-full"
  }, {
    path: "/:lang/shop/category-grid-5-columns-full",
    component: _0cc5aa66,
    name: "lang-shop-category-grid-5-columns-full"
  }, {
    path: "/:lang/shop/category-list",
    component: _48f97434,
    name: "lang-shop-category-list"
  }, {
    path: "/:lang/shop/category-right-sidebar",
    component: _44c2be13,
    name: "lang-shop-category-right-sidebar"
  }, {
    path: "/:lang/shop/checkout",
    component: _cf38a180,
    name: "lang-shop-checkout"
  }, {
    path: "/:lang/shop/compare",
    component: _63e9777e,
    name: "lang-shop-compare"
  }, {
    path: "/:lang/shop/ctegories",
    component: _450e857a,
    name: "lang-shop-ctegories"
  }, {
    path: "/:lang/shop/product-columnar",
    component: _286ae848,
    name: "lang-shop-product-columnar"
  }, {
    path: "/:lang/shop/product-sidebar",
    component: _42b5dcd2,
    name: "lang-shop-product-sidebar"
  }, {
    path: "/:lang/shop/product-standard",
    component: _f01204dc,
    name: "lang-shop-product-standard"
  }, {
    path: "/:lang/shop/track-order",
    component: _6f372ee5,
    name: "lang-shop-track-order"
  }, {
    path: "/:lang/shop/wishlist",
    component: _0391cb7c,
    name: "lang-shop-wishlist"
  }, {
    path: "/:lang/site/about-us",
    component: _6dba1538,
    name: "lang-site-about-us"
  }, {
    path: "/:lang/site/components",
    component: _756967c8,
    name: "lang-site-components"
  }, {
    path: "/:lang/site/contact-us",
    component: _0f0c35f1,
    name: "lang-site-contact-us"
  }, {
    path: "/:lang/site/contact-us-alt",
    component: _580f7c66,
    name: "lang-site-contact-us-alt"
  }, {
    path: "/:lang/site/faq",
    component: _733c5e00,
    name: "lang-site-faq"
  }, {
    path: "/:lang/site/not-found",
    component: _9350b91c,
    name: "lang-site-not-found"
  }, {
    path: "/:lang/site/terms",
    component: _1091a271,
    name: "lang-site-terms"
  }, {
    path: "/:lang/site/typography",
    component: _0586ec96,
    name: "lang-site-typography"
  }, {
    path: "/:lang/shop/checkout/success",
    component: _9d062f1e,
    name: "lang-shop-checkout-success"
  }, {
    path: "/:lang/account/addresses/:id",
    component: _66095ba9,
    name: "lang-account-addresses-id"
  }, {
    path: "/:lang/account/orders/:id",
    component: _61e76ae4,
    name: "lang-account-orders-id"
  }, {
    path: "/:lang/shop/catalog/:slug",
    component: _6777f86d,
    name: "lang-shop-catalog-slug"
  }, {
    path: "/:lang/shop/products/:slug?",
    component: _2b94f6d4,
    name: "lang-shop-products-slug"
  }, {
    path: "/:lang/",
    component: _c92dc0e0,
    name: "lang-index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
