import { _ as _sfc_main$1 } from './ProductCard-IwBZHbFU.mjs';
import { u as useHead, c as useRoute, b as useRouter, _ as __nuxt_component_1 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useApi } from './useApi-CodjRgBC.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Products \u2014 HRY Printing" });
    useApi();
    const route = useRoute();
    useRouter();
    const products = ref([]);
    const categories = ref([]);
    const loading = ref(true);
    const total = ref(0);
    const totalPages = ref(1);
    const page = ref(1);
    const view = ref("grid");
    const cat = ref(route.query.category || "");
    const q = ref("");
    const pageNums = computed(() => {
      const a = [], s = Math.max(1, page.value - 2), e = Math.min(totalPages.value, page.value + 2);
      for (let i = s; i <= e; i++) a.push(i);
      return a;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiProductCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-20" }, _attrs))}><div class="wrap"><div class="lbl mb-5">Catalogue</div><div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"><h1 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(3rem,8vw,7rem)]"> ALL PRODUCTS </h1><p class="font-body text-mist max-w-sm leading-relaxed lg:pb-2"> Browse our full range of professional printing products. Filter by category or search below. </p></div><div class="hr mb-10"></div><div class="flex flex-wrap gap-2 mb-7"><button class="${ssrRenderClass([unref(cat) === "" ? "bg-blue-500 border-blue-500 text-white" : "border-white/15 text-mist hover:border-blue-500 hover:text-blue-400", "font-display font-700 text-sm uppercase tracking-wide px-4 py-2 border-2 transition-all duration-200"])}">All</button><!--[-->`);
      ssrRenderList(unref(categories), (c) => {
        _push(`<button class="${ssrRenderClass([unref(cat) === c.slug ? "bg-blue-500 border-blue-500 text-white" : "border-white/15 text-mist hover:border-blue-500 hover:text-blue-400", "font-display font-700 text-sm uppercase tracking-wide px-4 py-2 border-2 transition-all duration-200"])}">${ssrInterpolate(c.name)}</button>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-3 mb-7"><div class="relative flex-1 max-w-md"><svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mist" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><input${ssrRenderAttr("value", unref(q))} type="text" placeholder="Search products\u2026" class="inp !pl-11"></div><div class="flex gap-1.5"><!--[-->`);
      ssrRenderList(["grid", "list"], (v) => {
        _push(`<button class="${ssrRenderClass([unref(view) === v ? "bg-blue-500 border-blue-500 text-white" : "border-white/15 text-mist hover:border-white/30", "w-9 h-9 border-2 flex items-center justify-center transition-all duration-200"])}">`);
        if (v === "grid") {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><rect x="1" y="1" width="6" height="6"></rect><rect x="9" y="1" width="6" height="6"></rect><rect x="1" y="9" width="6" height="6"></rect><rect x="9" y="9" width="6" height="6"></rect></svg>`);
        } else {
          _push(`<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="3"></rect><rect x="1" y="7" width="14" height="3"></rect><rect x="1" y="12" width="14" height="3"></rect></svg>`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div></div><p class="font-mono text-xs text-mist mb-8">${ssrInterpolate(unref(loading) ? "Loading\u2026" : `${unref(total)} product${unref(total) === 1 ? "" : "s"} found`)}</p>`);
      if (!unref(loading) && unref(products).length && unref(view) === "grid") {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(unref(products), (p) => {
          _push(ssrRenderComponent(_component_UiProductCard, {
            key: p.id,
            p
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (!unref(loading) && unref(products).length && unref(view) === "list") {
        _push(`<div class="flex flex-col gap-3"><!--[-->`);
        ssrRenderList(unref(products), (p) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: p.id,
            to: `/products/${p.slug}`,
            class: "group card flex items-center gap-5 p-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a, _b;
              if (_push2) {
                _push2(`<div class="zoom w-20 h-20 bg-ink-700 shrink-0"${_scopeId}>`);
                if (p.thumbnail_url) {
                  _push2(`<img${ssrRenderAttr("src", p.thumbnail_url)}${ssrRenderAttr("alt", p.name)} loading="lazy"${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}><svg class="w-6 h-6 text-ink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16"${_scopeId}></path></svg></div>`);
                }
                _push2(`</div><div class="flex-1 min-w-0"${_scopeId}><div class="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1"${_scopeId}>${ssrInterpolate((_a = p.category) == null ? void 0 : _a.name)}</div><h3 class="font-display font-extrabold text-lg text-cream-100 uppercase truncate group-hover:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(p.name)}</h3><p class="font-body text-sm text-mist truncate mt-0.5"${_scopeId}>${ssrInterpolate(p.short_description)}</p></div><div class="text-right shrink-0"${_scopeId}>`);
                if (p.price) {
                  _push2(`<div class="font-display font-900 text-xl text-cream-100"${_scopeId}>\u0E3F${ssrInterpolate(Number(p.price).toLocaleString())}</div>`);
                } else {
                  _push2(`<div class="font-body text-sm text-mist"${_scopeId}>On request</div>`);
                }
                if (p.unit) {
                  _push2(`<div class="font-mono text-xs text-mist"${_scopeId}>/ ${ssrInterpolate(p.unit)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><svg class="w-4 h-4 text-mist group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
              } else {
                return [
                  createVNode("div", { class: "zoom w-20 h-20 bg-ink-700 shrink-0" }, [
                    p.thumbnail_url ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: p.thumbnail_url,
                      alt: p.name,
                      loading: "lazy"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full h-full flex items-center justify-center"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-6 h-6 text-ink-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "1",
                          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16"
                        })
                      ]))
                    ]))
                  ]),
                  createVNode("div", { class: "flex-1 min-w-0" }, [
                    createVNode("div", { class: "font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1" }, toDisplayString((_b = p.category) == null ? void 0 : _b.name), 1),
                    createVNode("h3", { class: "font-display font-extrabold text-lg text-cream-100 uppercase truncate group-hover:text-blue-400 transition-colors" }, toDisplayString(p.name), 1),
                    createVNode("p", { class: "font-body text-sm text-mist truncate mt-0.5" }, toDisplayString(p.short_description), 1)
                  ]),
                  createVNode("div", { class: "text-right shrink-0" }, [
                    p.price ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "font-display font-900 text-xl text-cream-100"
                    }, "\u0E3F" + toDisplayString(Number(p.price).toLocaleString()), 1)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "font-body text-sm text-mist"
                    }, "On request")),
                    p.unit ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "font-mono text-xs text-mist"
                    }, "/ " + toDisplayString(p.unit), 1)) : createCommentVNode("", true)
                  ]),
                  (openBlock(), createBlock("svg", {
                    class: "w-4 h-4 text-mist group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M9 5l7 7-7 7"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(8, (i) => {
          _push(`<div><div class="skel aspect-[4/3]"></div><div class="bg-ink-800 p-5 space-y-2.5"><div class="skel h-5 w-3/4"></div><div class="skel h-3.5 w-full"></div><div class="skel h-3.5 w-2/3"></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-24"><div class="font-display font-900 text-[7rem] text-ink-800 leading-none select-none mb-6 uppercase">Empty</div><p class="font-body text-mist mb-8">No products match your search.</p><button class="btn-outline">Clear Filters</button></div>`);
      }
      if (unref(totalPages) > 1) {
        _push(`<div class="flex items-center justify-center gap-2 mt-14"><button${ssrIncludeBooleanAttr(unref(page) === 1) ? " disabled" : ""} class="w-10 h-10 border-2 border-white/15 flex items-center justify-center text-mist hover:border-white/30 disabled:opacity-30 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><!--[-->`);
        ssrRenderList(unref(pageNums), (n) => {
          _push(`<button class="${ssrRenderClass([n === unref(page) ? "bg-blue-500 border-blue-500 text-white" : "border-white/15 text-mist hover:border-white/30", "w-10 h-10 border-2 font-mono text-sm transition-all duration-200"])}">${ssrInterpolate(n)}</button>`);
        });
        _push(`<!--]--><button${ssrIncludeBooleanAttr(unref(page) === unref(totalPages)) ? " disabled" : ""} class="w-10 h-10 border-2 border-white/15 flex items-center justify-center text-mist hover:border-white/30 disabled:opacity-30 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CLqANDO3.mjs.map
