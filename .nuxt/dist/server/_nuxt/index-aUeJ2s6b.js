import { _ as _sfc_main$1 } from "./ServiceCard-DRXJDV-f.js";
import { u as useHead, _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Services — HRY Printing" });
    useApi();
    const services = ref([]);
    const loading = ref(true);
    const steps = [
      { title: "Consult", desc: "Share your requirements. We advise on the best approach for your project.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
      { title: "Design", desc: "Upload your artwork or let our team create print-ready files.", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
      { title: "Produce", desc: "Your job runs on precision presses with quality control at every step.", icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" },
      { title: "Deliver", desc: "Pick up in-store or have your prints delivered anywhere in Thailand.", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiServiceCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-20" }, _attrs))}><div class="wrap"><div class="lbl mb-5">What We Offer</div><div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"><h1 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(3rem,8vw,7rem)]"> OUR SERVICES </h1><p class="font-body text-mist max-w-sm leading-relaxed lg:pb-2"> End-to-end printing solutions from concept to delivery. Whatever you need printed, we deliver it perfectly. </p></div><div class="hr mb-14"></div>`);
      if (unref(loading)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="skel h-80"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"><!--[-->`);
        ssrRenderList(unref(services), (s) => {
          _push(ssrRenderComponent(_component_UiServiceCard, {
            key: s.id,
            s
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="bg-ink-900 border border-white/[0.07] p-10 lg:p-14 mb-10"><div class="lbl mb-5">How It Works</div><h2 class="font-display font-900 uppercase text-cream-100 text-[clamp(2rem,5vw,4rem)] leading-none mb-12"> SIMPLE PROCESS </h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="relative"><div class="font-display font-900 text-7xl text-ink-700 leading-none mb-4 select-none">${ssrInterpolate(String(i + 1).padStart(2, "0"))}</div><div class="absolute top-5 left-5 w-10 h-10 bg-blue-500/10 flex items-center justify-center"><svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", step.icon)}></path></svg></div><h3 class="font-display font-900 text-2xl uppercase text-cream-100 mb-2">${ssrInterpolate(step.title)}</h3><p class="font-body text-sm text-mist leading-relaxed">${ssrInterpolate(step.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-500/10 border border-blue-500/20 px-10 py-8"><div><h3 class="font-display font-900 text-3xl uppercase text-cream-100 mb-1">Need something custom?</h3><p class="font-body text-mist text-sm">Tell us your project — we&#39;ll make it happen.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Our Team <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Contact Our Team "),
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-aUeJ2s6b.js.map
