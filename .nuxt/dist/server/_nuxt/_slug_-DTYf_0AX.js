import { c as useRoute, u as useHead, _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { u as useApi } from "./useApi-CodjRgBC.js";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/defu/dist/defu.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/ufo/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/@unhead/vue/dist/index.mjs";
const fallback = "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useApi();
    const service = ref(null);
    const all = ref([]);
    const loading = ref(true);
    const related = computed(() => all.value.filter((s) => s.slug !== route.params.slug).slice(0, 3));
    useHead(() => ({
      title: service.value ? `${service.value.name} — HRY Printing` : "Service — HRY Printing",
      meta: [{ name: "description", content: service.value?.short_description }]
    }));
    const icons = {
      printer: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
      zap: "M13 10V3L4 14h7v7l9-11h-7z",
      maximize: "M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3",
      "pen-tool": "M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
      package: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    };
    const getIcon = (k) => icons[k] || fallback;
    const iconD = computed(() => getIcon(service.value?.icon));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-20" }, _attrs))}>`);
      if (unref(loading)) {
        _push(`<div class="wrap space-y-6"><div class="skel h-4 w-48 rounded-full"></div><div class="skel h-28 w-2/3 rounded-xl"></div></div>`);
      } else if (unref(service)) {
        _push(`<div><div class="relative overflow-hidden mb-20"><div class="absolute inset-0 opacity-[0.07]" style="${ssrRenderStyle({ backgroundColor: unref(service).color || "#3B82F6" })}"></div><div class="absolute inset-0 bg-gradient-to-b from-transparent to-ink-950"></div><div class="wrap relative z-10 py-20"><nav class="flex items-center gap-2 mb-10 font-mono text-xs text-mist flex-wrap">`);
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
        _push(`<span class="opacity-40">/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "hover:text-cream-100 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Services`);
            } else {
              return [
                createTextVNode("Services")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="opacity-40">/</span><span class="text-cream-200">${ssrInterpolate(unref(service).name)}</span></nav><div class="grid lg:grid-cols-2 gap-14 items-end"><div><div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-8" style="${ssrRenderStyle({ background: (unref(service).color || "#3B82F6") + "1A" })}"><svg class="w-8 h-8" style="${ssrRenderStyle({ color: unref(service).color || "#3B82F6" })}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", unref(iconD))}></path></svg></div><h1 class="font-display font-900 uppercase text-cream-100 leading-none tracking-tight text-[clamp(2.8rem,7vw,6rem)] mb-5">${ssrInterpolate(unref(service).name)}</h1><p class="font-body text-mist text-lg leading-relaxed max-w-lg">${ssrInterpolate(unref(service).short_description)}</p></div><div class="bg-ink-800/80 backdrop-blur border border-white/[0.08] rounded-2xl p-8">`);
        if (unref(service).price_starting_from) {
          _push(`<div class="pb-5 mb-5 border-b border-white/[0.07]"><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Starting From</div><div class="font-display font-900 text-5xl text-cream-100"> ฿${ssrInterpolate(Number(unref(service).price_starting_from).toLocaleString())}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-2 gap-5 mb-6">`);
        if (unref(service).turnaround_time) {
          _push(`<div><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Turnaround</div><div class="font-body text-sm font-semibold text-cream-200">${ssrInterpolate(unref(service).turnaround_time)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1">Status</div><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow"></span><span class="font-body text-sm font-semibold text-cream-200">Available Now</span></div></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "btn-primary w-full justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Get a Quote <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(" Get a Quote "),
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
        _push(`</div></div></div></div><div class="wrap"><div class="grid lg:grid-cols-3 gap-14"><div class="lg:col-span-2 space-y-14">`);
        if (unref(service).description) {
          _push(`<div><div class="lbl mb-5">About This Service</div><p class="font-body text-cream-200/85 text-lg leading-relaxed whitespace-pre-line">${ssrInterpolate(unref(service).description)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(service).images_url?.length) {
          _push(`<div><div class="lbl mb-5">Gallery</div><div class="grid grid-cols-2 gap-4"><!--[-->`);
          ssrRenderList(unref(service).images_url, (img, i) => {
            _push(`<div class="${ssrRenderClass([i === 0 ? "col-span-2 aspect-video" : "aspect-square", "img-zoom rounded-xl overflow-hidden bg-ink-800"])}"><img${ssrRenderAttr("src", img)}${ssrRenderAttr("alt", `${unref(service).name} ${i + 1}`)}></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<div class="bg-ink-800 border border-white/[0.07] rounded-2xl aspect-video flex items-center justify-center overflow-hidden"><div class="font-display font-900 select-none leading-none text-[clamp(4rem,10vw,8rem)]" style="${ssrRenderStyle({ color: (unref(service).color || "#3B82F6") + "15" })}">${ssrInterpolate(unref(service).name.split(" ")[0].toUpperCase())}</div></div>`);
        }
        _push(`</div><div class="space-y-5">`);
        if (unref(service).features?.length) {
          _push(`<div class="bg-ink-800 border border-white/[0.07] rounded-2xl p-7"><div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-5"> What&#39;s Included </div><ul class="space-y-3.5"><!--[-->`);
          ssrRenderList(unref(service).features, (f) => {
            _push(`<li class="flex items-start gap-3"><span class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5" style="${ssrRenderStyle({ background: (unref(service).color || "#3B82F6") + "1A" })}"><svg class="w-3 h-3" style="${ssrRenderStyle({ color: unref(service).color || "#3B82F6" })}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></span><span class="font-body text-sm text-cream-200/80 leading-relaxed">${ssrInterpolate(f)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border border-blue-500/20 rounded-2xl p-7"><div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-3"> Need Help? </div><p class="font-body text-mist text-sm leading-relaxed mb-5"> Our team is ready to advise on the best options for your project. </p><div class="space-y-3"><a href="tel:02XXXXXXX" class="flex items-center gap-3 font-body text-sm text-cream-200 hover:text-blue-400 transition-colors"><svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> 02-XXX-XXXX </a><a href="mailto:info@hryprinting.com" class="flex items-center gap-3 font-body text-sm text-cream-200 hover:text-blue-400 transition-colors"><svg class="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> info@hryprinting.com </a></div></div>`);
        if (unref(related).length) {
          _push(`<div><div class="font-mono text-[11px] text-blue-500 uppercase tracking-widest mb-4"> Other Services </div><div class="space-y-2"><!--[-->`);
          ssrRenderList(unref(related), (r) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: r.id,
              to: `/services/${r.slug}`,
              class: "flex items-center gap-3 p-4 bg-ink-800 rounded-xl border border-white/[0.06] hover:border-blue-500/30 transition-all duration-200 group"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style="${ssrRenderStyle({ background: (r.color || "#3B82F6") + "15" })}"${_scopeId}><svg class="w-4 h-4" style="${ssrRenderStyle({ color: r.color || "#3B82F6" })}" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", getIcon(r.icon))}${_scopeId}></path></svg></div><span class="font-body text-sm text-cream-200 group-hover:text-blue-400 transition-colors flex-1"${_scopeId}>${ssrInterpolate(r.name)}</span><svg class="w-4 h-4 text-mist group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                      style: { background: (r.color || "#3B82F6") + "15" }
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4",
                        style: { color: r.color || "#3B82F6" },
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "1.5",
                          d: getIcon(r.icon)
                        }, null, 8, ["d"])
                      ], 4))
                    ], 4),
                    createVNode("span", { class: "font-body text-sm text-cream-200 group-hover:text-blue-400 transition-colors flex-1" }, toDisplayString(r.name), 1),
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
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<div class="wrap text-center py-32"><div class="font-display font-900 text-[10rem] text-ink-800 leading-none select-none mb-6">404</div><p class="font-body text-mist mb-8">Service not found.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back to Services`);
            } else {
              return [
                createTextVNode("Back to Services")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DTYf_0AX.js.map
