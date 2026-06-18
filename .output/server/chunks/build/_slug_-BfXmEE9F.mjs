import { c as useRoute, u as useHead, _ as __nuxt_component_1 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useApi();
    const product = ref(null);
    const loading = ref(true);
    const activeImg = ref("");
    const selSize = ref("");
    const selFin = ref("");
    const allImgs = computed(() => {
      var _a, _b, _c;
      const a = [];
      if ((_a = product.value) == null ? void 0 : _a.thumbnail_url) a.push(product.value.thumbnail_url);
      if ((_c = (_b = product.value) == null ? void 0 : _b.images_url) == null ? void 0 : _c.length) a.push(...product.value.images_url);
      return a;
    });
    useHead(() => ({ title: product.value ? `${product.value.name} \u2014 HRY Printing` : "Product \u2014 HRY Printing" }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-20" }, _attrs))}><div class="wrap">`);
      if (unref(loading)) {
        _push(`<div class="grid lg:grid-cols-2 gap-16"><div class="skel aspect-square"></div><div class="space-y-5 pt-4"><div class="skel h-4 w-28"></div><div class="skel h-24 w-2/3"></div><div class="skel h-4 w-full"></div><div class="skel h-4 w-3/4"></div></div></div>`);
      } else if (unref(product)) {
        _push(`<div><nav class="flex items-center gap-2 mb-12 font-mono text-xs text-mist flex-wrap">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-cream-100 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="opacity-30">/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "hover:text-cream-100 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Products`);
            } else {
              return [
                createTextVNode("Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(product).category) {
          _push(`<span class="opacity-30">/</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).category) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/products?category=${unref(product).category.slug}`,
            class: "hover:text-cream-100 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(product).category.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(product).category.name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="opacity-30">/</span><span class="text-cream-200 truncate max-w-[200px]">${ssrInterpolate(unref(product).name)}</span></nav><div class="grid lg:grid-cols-2 gap-12 xl:gap-20"><div class="space-y-3"><div class="zoom aspect-square bg-ink-800 border border-white/[0.07]"><img${ssrRenderAttr("src", unref(activeImg))}${ssrRenderAttr("alt", unref(product).name)} class="w-full h-full object-cover"></div>`);
        if (unref(allImgs).length > 1) {
          _push(`<div class="flex gap-2.5 overflow-x-auto pb-1"><!--[-->`);
          ssrRenderList(unref(allImgs), (img, i) => {
            _push(`<button class="${ssrRenderClass([unref(activeImg) === img ? "border-blue-500" : "border-white/10 hover:border-white/30", "w-20 h-20 shrink-0 border-2 overflow-hidden transition-all duration-200"])}"><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `img-${i}`)} class="w-full h-full object-cover"></button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><div class="flex items-center gap-2.5 mb-5 flex-wrap">`);
        if (unref(product).category) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/products?category=${unref(product).category.slug}`,
            class: "lbl !text-[10px] hover:opacity-70 transition-opacity"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(product).category.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(product).category.name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(product).is_featured) {
          _push(`<span class="bg-blue-500 font-mono text-white text-[10px] uppercase tracking-widest px-2.5 py-0.5"> \u2605 Featured </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h1 class="font-display font-900 uppercase text-cream-100 leading-none tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] mb-6">${ssrInterpolate(unref(product).name)}</h1><div class="mb-8 pb-8 border-b border-white/[0.07]">`);
        if (unref(product).price) {
          _push(`<!--[--><span class="font-display font-900 text-5xl text-cream-100"> \u0E3F${ssrInterpolate(Number(unref(product).price).toLocaleString())}</span>`);
          if (unref(product).unit) {
            _push(`<span class="font-body text-mist ml-2">/ ${ssrInterpolate(unref(product).unit)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else if (unref(product).price_min) {
          _push(`<!--[--><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Price Range</div><span class="font-display font-900 text-5xl text-cream-100"> \u0E3F${ssrInterpolate(Number(unref(product).price_min).toLocaleString())}</span><span class="font-display font-900 text-3xl text-mist mx-2">\u2013</span><span class="font-display font-900 text-5xl text-cream-100"> \u0E3F${ssrInterpolate(Number(unref(product).price_max).toLocaleString())}</span><!--]-->`);
        } else {
          _push(`<span class="font-body text-xl text-mist">Price on request</span>`);
        }
        if (unref(product).min_quantity > 1) {
          _push(`<div class="font-mono text-xs text-mist mt-2"> Min. order: ${ssrInterpolate(unref(product).min_quantity)} ${ssrInterpolate(unref(product).unit || "units")}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(product).description) {
          _push(`<p class="font-body text-mist leading-relaxed text-lg mb-8">${ssrInterpolate(unref(product).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if ((_a = unref(product).size_options) == null ? void 0 : _a.length) {
          _push(`<div class="mb-6"><div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-3">Sizes</div><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(unref(product).size_options, (sz) => {
            _push(`<button class="${ssrRenderClass([unref(selSize) === sz ? "bg-blue-500 border-blue-500 text-white" : "border-white/15 text-mist hover:border-blue-500 hover:text-blue-400", "font-body text-sm px-3.5 py-1.5 border-2 transition-all duration-200"])}">${ssrInterpolate(sz)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = unref(product).finishing_options) == null ? void 0 : _b.length) {
          _push(`<div class="mb-8"><div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-3">Finishing</div><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(unref(product).finishing_options, (fin) => {
            _push(`<button class="${ssrRenderClass([unref(selFin) === fin ? "bg-blue-500 border-blue-500 text-white" : "border-white/15 text-mist hover:border-blue-500 hover:text-blue-400", "font-body text-sm px-3.5 py-1.5 border-2 transition-all duration-200"])}">${ssrInterpolate(fin)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-ink-800 border border-white/[0.07] p-6 mb-8"><div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-5">Specifications</div><div class="grid grid-cols-2 gap-x-8 gap-y-4">`);
        if (unref(product).material) {
          _push(`<div><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Material</div><div class="font-body text-sm text-cream-200">${ssrInterpolate(unref(product).material)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).turnaround_time) {
          _push(`<div><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Turnaround</div><div class="font-body text-sm text-cream-200">${ssrInterpolate(unref(product).turnaround_time)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).min_quantity) {
          _push(`<div><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Min Qty</div><div class="font-body text-sm text-cream-200">${ssrInterpolate(unref(product).min_quantity)} ${ssrInterpolate(unref(product).unit || "pcs")}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = unref(product).color_options) == null ? void 0 : _c.length) {
          _push(`<div><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Colors</div><div class="font-body text-sm text-cream-200">${ssrInterpolate(unref(product).color_options.join(", "))}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex flex-col sm:flex-row gap-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "btn-primary flex-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Request a Quote <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Request a Quote "),
                (openBlock(), createBlock("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="tel:02XXXXXXX" class="btn-outline px-6"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> Call Us </a></div></div></div></div>`);
      } else {
        _push(`<div class="text-center py-32"><div class="font-display font-900 text-[9rem] text-ink-800 leading-none select-none mb-6">404</div><p class="font-body text-mist mb-8">This product could not be found.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Products`);
            } else {
              return [
                createTextVNode("Back to Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BfXmEE9F.mjs.map
