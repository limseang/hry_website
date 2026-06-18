import { _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    p: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/products/${__props.p.slug}`,
        class: "group card flex flex-col overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="zoom aspect-[4/3] bg-ink-700 relative"${_scopeId}>`);
            if (__props.p.thumbnail_url) {
              _push2(`<img${ssrRenderAttr("src", __props.p.thumbnail_url)}${ssrRenderAttr("alt", __props.p.name)} loading="lazy" class="w-full h-full object-cover"${_scopeId}>`);
            } else {
              _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}><svg class="w-12 h-12 text-ink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg></div>`);
            }
            _push2(`<div class="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"${_scopeId}></div>`);
            if (__props.p.is_featured) {
              _push2(`<span class="absolute top-3 left-3 bg-blue-500 font-mono text-white text-[10px] uppercase tracking-widest px-2.5 py-1"${_scopeId}> ★ Featured </span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.p.category) {
              _push2(`<span class="absolute top-3 right-3 bg-ink-900/80 backdrop-blur font-mono text-mist text-[10px] uppercase tracking-widest px-2.5 py-1"${_scopeId}>${ssrInterpolate(__props.p.category.name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col flex-1 p-5 gap-3"${_scopeId}><h3 class="font-display font-extrabold text-xl uppercase text-cream-100 leading-tight group-hover:text-blue-400 transition-colors duration-200 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.p.name)}</h3>`);
            if (__props.p.short_description) {
              _push2(`<p class="font-body text-sm text-mist leading-relaxed line-clamp-2 flex-1"${_scopeId}>${ssrInterpolate(__props.p.short_description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-end justify-between pt-3 border-t border-white/[0.06] mt-auto"${_scopeId}><div${_scopeId}>`);
            if (__props.p.price) {
              _push2(`<!--[--><span class="font-display font-900 text-2xl text-cream-100"${_scopeId}>฿${ssrInterpolate(Number(__props.p.price).toLocaleString())}</span>`);
              if (__props.p.unit) {
                _push2(`<span class="font-mono text-xs text-mist ml-1.5"${_scopeId}>/ ${ssrInterpolate(__props.p.unit)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else if (__props.p.price_min) {
              _push2(`<!--[--><span class="font-mono text-xs text-mist block mb-0.5"${_scopeId}>From</span><span class="font-display font-900 text-2xl text-cream-100"${_scopeId}>฿${ssrInterpolate(Number(__props.p.price_min).toLocaleString())}</span><!--]-->`);
            } else {
              _push2(`<span class="font-body text-sm text-mist"${_scopeId}>Price on request</span>`);
            }
            _push2(`</div><div class="w-9 h-9 bg-ink-700 group-hover:bg-blue-500 border border-white/[0.07] group-hover:border-blue-500 flex items-center justify-center transition-all duration-300"${_scopeId}><svg class="w-4 h-4 text-mist group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "zoom aspect-[4/3] bg-ink-700 relative" }, [
                __props.p.thumbnail_url ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: __props.p.thumbnail_url,
                  alt: __props.p.name,
                  loading: "lazy",
                  class: "w-full h-full object-cover"
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "w-full h-full flex items-center justify-center"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-12 h-12 text-ink-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1",
                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    })
                  ]))
                ])),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" }),
                __props.p.is_featured ? (openBlock(), createBlock("span", {
                  key: 2,
                  class: "absolute top-3 left-3 bg-blue-500 font-mono text-white text-[10px] uppercase tracking-widest px-2.5 py-1"
                }, " ★ Featured ")) : createCommentVNode("", true),
                __props.p.category ? (openBlock(), createBlock("span", {
                  key: 3,
                  class: "absolute top-3 right-3 bg-ink-900/80 backdrop-blur font-mono text-mist text-[10px] uppercase tracking-widest px-2.5 py-1"
                }, toDisplayString(__props.p.category.name), 1)) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "flex flex-col flex-1 p-5 gap-3" }, [
                createVNode("h3", { class: "font-display font-extrabold text-xl uppercase text-cream-100 leading-tight group-hover:text-blue-400 transition-colors duration-200 line-clamp-2" }, toDisplayString(__props.p.name), 1),
                __props.p.short_description ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "font-body text-sm text-mist leading-relaxed line-clamp-2 flex-1"
                }, toDisplayString(__props.p.short_description), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-end justify-between pt-3 border-t border-white/[0.06] mt-auto" }, [
                  createVNode("div", null, [
                    __props.p.price ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("span", { class: "font-display font-900 text-2xl text-cream-100" }, "฿" + toDisplayString(Number(__props.p.price).toLocaleString()), 1),
                      __props.p.unit ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "font-mono text-xs text-mist ml-1.5"
                      }, "/ " + toDisplayString(__props.p.unit), 1)) : createCommentVNode("", true)
                    ], 64)) : __props.p.price_min ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("span", { class: "font-mono text-xs text-mist block mb-0.5" }, "From"),
                      createVNode("span", { class: "font-display font-900 text-2xl text-cream-100" }, "฿" + toDisplayString(Number(__props.p.price_min).toLocaleString()), 1)
                    ], 64)) : (openBlock(), createBlock("span", {
                      key: 2,
                      class: "font-body text-sm text-mist"
                    }, "Price on request"))
                  ]),
                  createVNode("div", { class: "w-9 h-9 bg-ink-700 group-hover:bg-blue-500 border border-white/[0.07] group-hover:border-blue-500 flex items-center justify-center transition-all duration-300" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 text-mist group-hover:text-white transition-colors",
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
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductCard-IwBZHbFU.js.map
