import { _ as __nuxt_component_1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    s: {}
  },
  setup(__props) {
    const props = __props;
    const iconMap = {
      printer: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
      zap: "M13 10V3L4 14h7v7l9-11h-7z",
      maximize: "M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3",
      "pen-tool": "M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
      package: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    };
    const iconPath = computed(
      () => {
        var _a;
        return iconMap[(_a = props.s) == null ? void 0 : _a.icon] || "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/services/${__props.s.slug}`,
        class: "group card flex flex-col p-7 gap-5 relative overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-[3px]" style="${ssrRenderStyle({ background: __props.s.color || "#3B82F6" })}"${_scopeId}></div><div class="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style="${ssrRenderStyle({ background: (__props.s.color || "#3B82F6") + "18" })}"${_scopeId}><svg class="w-6 h-6" style="${ssrRenderStyle({ color: __props.s.color || "#3B82F6" })}" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", unref(iconPath))}${_scopeId}></path></svg></div><div class="flex-1"${_scopeId}><h3 class="font-display font-900 text-xl uppercase text-cream-100 mb-2 group-hover:text-blue-400 transition-colors duration-200"${_scopeId}>${ssrInterpolate(__props.s.name)}</h3><p class="font-body text-sm text-mist leading-relaxed line-clamp-3"${_scopeId}>${ssrInterpolate(__props.s.short_description)}</p></div>`);
            if ((_a = __props.s.features) == null ? void 0 : _a.length) {
              _push2(`<ul class="space-y-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(__props.s.features.slice(0, 3), (f) => {
                _push2(`<li class="flex items-center gap-2.5"${_scopeId}><span class="w-1.5 h-1.5 shrink-0" style="${ssrRenderStyle({ background: __props.s.color || "#3B82F6" })}"${_scopeId}></span><span class="font-mono text-xs text-mist"${_scopeId}>${ssrInterpolate(f)}</span></li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-between pt-4 border-t border-white/[0.07]"${_scopeId}>`);
            if (__props.s.price_starting_from) {
              _push2(`<div${_scopeId}><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-0.5"${_scopeId}>From</div><div class="font-display font-900 text-xl text-cream-100"${_scopeId}>\u0E3F${ssrInterpolate(Number(__props.s.price_starting_from).toLocaleString())}</div></div>`);
            } else {
              _push2(`<span class="font-mono text-xs text-mist"${_scopeId}>Custom pricing</span>`);
            }
            _push2(`<span class="font-display font-700 text-sm uppercase text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all duration-200"${_scopeId}> Details <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg></span></div>`);
          } else {
            return [
              createVNode("div", {
                class: "absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-[3px]",
                style: { background: __props.s.color || "#3B82F6" }
              }, null, 4),
              createVNode("div", {
                class: "w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                style: { background: (__props.s.color || "#3B82F6") + "18" }
              }, [
                (openBlock(), createBlock("svg", {
                  class: "w-6 h-6",
                  style: { color: __props.s.color || "#3B82F6" },
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: unref(iconPath)
                  }, null, 8, ["d"])
                ], 4))
              ], 4),
              createVNode("div", { class: "flex-1" }, [
                createVNode("h3", { class: "font-display font-900 text-xl uppercase text-cream-100 mb-2 group-hover:text-blue-400 transition-colors duration-200" }, toDisplayString(__props.s.name), 1),
                createVNode("p", { class: "font-body text-sm text-mist leading-relaxed line-clamp-3" }, toDisplayString(__props.s.short_description), 1)
              ]),
              ((_b = __props.s.features) == null ? void 0 : _b.length) ? (openBlock(), createBlock("ul", {
                key: 0,
                class: "space-y-1.5"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.s.features.slice(0, 3), (f) => {
                  return openBlock(), createBlock("li", {
                    key: f,
                    class: "flex items-center gap-2.5"
                  }, [
                    createVNode("span", {
                      class: "w-1.5 h-1.5 shrink-0",
                      style: { background: __props.s.color || "#3B82F6" }
                    }, null, 4),
                    createVNode("span", { class: "font-mono text-xs text-mist" }, toDisplayString(f), 1)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "flex items-center justify-between pt-4 border-t border-white/[0.07]" }, [
                __props.s.price_starting_from ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "font-mono text-[10px] text-mist uppercase tracking-widest mb-0.5" }, "From"),
                  createVNode("div", { class: "font-display font-900 text-xl text-cream-100" }, "\u0E3F" + toDisplayString(Number(__props.s.price_starting_from).toLocaleString()), 1)
                ])) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "font-mono text-xs text-mist"
                }, "Custom pricing")),
                createVNode("span", { class: "font-display font-700 text-sm uppercase text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all duration-200" }, [
                  createTextVNode(" Details "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ServiceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ServiceCard-DRXJDV-f.mjs.map
