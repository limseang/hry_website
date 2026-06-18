import { _ as _sfc_main$1 } from "./BrandLogo-BIMtJ2Cx.js";
import { u as useHead, b as useRouter, _ as __nuxt_component_1 } from "../server.mjs";
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/hookable/dist/index.mjs";
import { u as useApi } from "./useApi-CodjRgBC.js";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/defu/dist/defu.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/ufo/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Sign In — HRY Printing" });
    useApi();
    const auth = useAuthStore();
    const router = useRouter();
    if (auth.isLoggedIn) router.replace("/");
    const form = reactive({ email: "", password: "" });
    const loading = ref(false);
    const error = ref("");
    const showPw = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BrandLogo = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[80vh] flex items-center justify-center py-16" }, _attrs))}><div class="w-full max-w-md px-5"><div class="flex justify-center mb-10">`);
      _push(ssrRenderComponent(_component_BrandLogo, { variant: "auth" }, null, _parent));
      _push(`</div><div class="card p-8 lg:p-10"><h1 class="font-display font-900 text-4xl uppercase text-cream-100 mb-2">Welcome back</h1><p class="font-body text-mist text-sm mb-8">Sign in to manage your orders and requests.</p>`);
      if (unref(error)) {
        _push(`<p class="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 font-mono text-sm text-red-400 mb-6">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-5"><div><label class="font-mono text-[11px] text-mist uppercase tracking-widest block mb-2">Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="you@company.com" class="inp" autocomplete="email"></div><div><div class="flex items-center justify-between mb-2"><label class="font-mono text-[11px] text-mist uppercase tracking-widest">Password</label><a href="#" class="font-mono text-[11px] text-blue-500 hover:text-blue-400 transition-colors"> Forgot password? </a></div><div class="relative"><input${ssrRenderDynamicModel(unref(showPw) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPw) ? "text" : "password")} required placeholder="••••••••" class="inp !pr-12" autocomplete="current-password"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-mist hover:text-cream-100 transition-colors p-1"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", unref(showPw) ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z")}></path></svg></button></div></div><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:!translate-y-0 disabled:!shadow-none">`);
      if (unref(loading)) {
        _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(loading) ? "Signing in…" : "Sign In")}</button></form><p class="font-body text-mist text-sm text-center mt-6"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/register",
        class: "text-blue-500 hover:text-blue-400 transition-colors font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create one → `);
          } else {
            return [
              createTextVNode(" Create one → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-8z9xCBCl.js.map
