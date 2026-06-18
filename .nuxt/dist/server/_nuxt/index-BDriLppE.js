import { u as useHead, _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
    useHead({ title: "My Orders — HRY Printing" });
    useApi();
    const auth = useAuthStore();
    const orders = ref([]);
    const loading = ref(true);
    const statusClass = (s) => ({
      pending: "badge bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
      confirmed: "badge bg-blue-500/15 text-blue-400 border border-blue-500/30",
      in_production: "badge bg-purple-500/15 text-purple-400 border border-purple-500/30",
      quality_check: "badge bg-indigo-500/15 text-indigo-400 border border-indigo-500/30",
      ready: "badge bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
      shipped: "badge bg-orange-500/15 text-orange-400 border border-orange-500/30",
      delivered: "badge bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      cancelled: "badge bg-red-500/15 text-red-400 border border-red-500/30",
      refunded: "badge bg-gray-500/15 text-gray-400 border border-gray-500/30"
    })[s] || "badge-mist";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-20" }, _attrs))}><div class="hry-container max-w-4xl"><div class="lbl mb-5">Account</div><h1 class="font-display font-900 uppercase text-cream-100 text-[clamp(2.5rem,6vw,5rem)] leading-none mb-12"> MY ORDERS </h1>`);
      if (!unref(auth).isLoggedIn) {
        _push(`<div class="text-center py-20"><div class="font-display font-900 text-6xl text-ink-700 mb-6 select-none uppercase">Access Denied</div><p class="font-body text-mist mb-8">Please sign in to view your orders.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth/login",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign In`);
            } else {
              return [
                createTextVNode("Sign In")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        if (unref(loading)) {
          _push(`<div class="space-y-4"><!--[-->`);
          ssrRenderList(3, (i) => {
            _push(`<div class="skel h-28 rounded-2xl"></div>`);
          });
          _push(`<!--]--></div>`);
        } else if (!unref(orders).length) {
          _push(`<div class="text-center py-20"><div class="w-20 h-20 rounded-full bg-ink-800 flex items-center justify-center mx-auto mb-6"><svg class="w-9 h-9 text-mist" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg></div><div class="font-display font-900 text-3xl uppercase text-cream-100 mb-3">No orders yet</div><p class="font-body text-mist mb-8">Your orders will appear here after you place them.</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/products",
            class: "btn-primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Browse Products`);
              } else {
                return [
                  createTextVNode("Browse Products")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="space-y-4"><!--[-->`);
          ssrRenderList(unref(orders), (o) => {
            _push(`<div class="card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"><div class="flex-1 min-w-0"><div class="flex items-center gap-3 flex-wrap mb-2"><span class="font-mono font-500 text-sm text-cream-100">${ssrInterpolate(o.order_number)}</span><span class="${ssrRenderClass([statusClass(o.status), "badge text-[10px] uppercase tracking-wider"])}">${ssrInterpolate(o.status.replace(/_/g, " "))}</span></div><div class="font-body text-mist text-sm mb-1">${ssrInterpolate(o.items?.length || 0)} item${ssrInterpolate(o.items?.length !== 1 ? "s" : "")} `);
            if (o.customer_name) {
              _push(`<span> · ${ssrInterpolate(o.customer_name)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="font-mono text-xs text-mist/60">${ssrInterpolate(new Date(o.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }))}</div></div><div class="text-right shrink-0"><div class="font-display font-900 text-2xl text-cream-100"> ฿${ssrInterpolate(Number(o.total).toLocaleString())}</div><div class="font-mono text-[10px] text-mist uppercase tracking-widest mt-0.5">Total</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BDriLppE.js.map
