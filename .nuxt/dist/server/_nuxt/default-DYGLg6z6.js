import { c as useRoute, _ as __nuxt_component_1, a as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$3 } from "./BrandLogo-BIMtJ2Cx.js";
import { unref, getCurrentScope, onScopeDispose, ref, computed, watch, defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext, mergeProps } from "vue";
import { ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/defu/dist/defu.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/ufo/dist/index.mjs";
import "/Users/popcorn/Desktop/hry webiste/hry-nuxt/node_modules/@unhead/vue/dist/index.mjs";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useWindowScroll(options = {}) {
  const { window: window2 = defaultWindow, behavior = "auto" } = options;
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const internalX = ref(window2.scrollX);
  const internalY = ref(window2.scrollY);
  const x = computed({
    get() {
      return internalX.value;
    },
    set(x2) {
      scrollTo({ left: x2, behavior });
    }
  });
  const y = computed({
    get() {
      return internalY.value;
    },
    set(y2) {
      scrollTo({ top: y2, behavior });
    }
  });
  useEventListener(
    window2,
    "scroll",
    () => {
      internalX.value = window2.scrollX;
      internalY.value = window2.scrollY;
    },
    {
      capture: false,
      passive: true
    }
  );
  return { x, y };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useWindowScroll();
    const scrolled = computed(() => y.value > 40);
    const open = ref(false);
    watch(useRoute(), () => {
      open.value = false;
    });
    const links = [
      { to: "/", label: "Home" },
      { to: "/products", label: "Products" },
      { to: "/services", label: "Services" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_BrandLogo = _sfc_main$3;
      _push(`<!--[--><header class="${ssrRenderClass([unref(scrolled) ? "bg-ink-950/95 backdrop-blur-md border-b border-white/[0.06] py-0" : "bg-transparent py-2", "fixed top-0 inset-x-0 z-50 transition-all duration-300"])}" data-v-54cfb71c><div class="wrap flex items-center justify-between h-[68px] lg:h-20" data-v-54cfb71c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group shrink-0 opacity-95 hover:opacity-100 transition-opacity",
        "aria-label": "HRY Printing Home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BrandLogo, { variant: "header" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BrandLogo, { variant: "header" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-1" data-v-54cfb71c><!--[-->`);
      ssrRenderList(links, (l) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: l.to,
          to: l.to,
          class: "relative px-4 py-2 font-display font-700 text-[15px] uppercase tracking-wide text-mist hover:text-cream-100 transition-colors duration-200 group",
          "active-class": "!text-cream-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(l.label)} <span class="absolute bottom-1 left-4 right-4 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" data-v-54cfb71c${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(l.label) + " ", 1),
                createVNode("span", { class: "absolute bottom-1 left-4 right-4 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="flex items-center gap-3" data-v-54cfb71c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hidden lg:inline-flex btn-primary btn-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get a Quote <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-54cfb71c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-54cfb71c${_scopeId}></path></svg>`);
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
      _push(`<button class="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"${ssrRenderAttr("aria-label", unref(open) ? "Close menu" : "Open menu")} data-v-54cfb71c><span class="${ssrRenderClass([unref(open) ? "rotate-45 translate-y-[7px]" : "", "w-5 h-0.5 bg-cream-100 transition-all duration-300 origin-center"])}" data-v-54cfb71c></span><span class="${ssrRenderClass([unref(open) ? "opacity-0 scale-x-0" : "", "w-5 h-0.5 bg-cream-100 transition-all duration-300"])}" data-v-54cfb71c></span><span class="${ssrRenderClass([unref(open) ? "-rotate-45 -translate-y-[7px]" : "", "w-5 h-0.5 bg-cream-100 transition-all duration-300 origin-center"])}" data-v-54cfb71c></span></button></div></div>`);
      if (unref(open)) {
        _push(`<div class="lg:hidden fixed inset-0 top-[68px] bg-ink-950/98 backdrop-blur-xl flex flex-col px-6 pt-10 pb-8 gap-2 z-40" data-v-54cfb71c><!--[-->`);
        ssrRenderList(links, (l) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: l.to,
            to: l.to,
            onClick: ($event) => open.value = false,
            class: "font-display font-900 text-5xl uppercase text-cream-100/60 hover:text-cream-100 py-3 border-b border-white/[0.05] transition-colors duration-200",
            "active-class": "!text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(l.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(l.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="mt-auto pt-8" data-v-54cfb71c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          onClick: ($event) => open.value = false,
          class: "btn-primary w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Get a Quote `);
            } else {
              return [
                createTextVNode(" Get a Quote ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="h-[68px] lg:h-20" data-v-54cfb71c></div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-54cfb71c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = [
      { name: "Facebook", abbr: "Fb", href: "#" },
      { name: "Instagram", abbr: "Ig", href: "#" },
      { name: "LINE", abbr: "Ln", href: "#" }
    ];
    const productLinks = [
      { label: "Business Cards", to: "/products?category=business-cards" },
      { label: "Banners & Signs", to: "/products?category=banners-signs" },
      { label: "Brochures", to: "/products?category=brochures-flyers" },
      { label: "Stickers", to: "/products?category=stickers-labels" },
      { label: "Packaging", to: "/products?category=packaging" }
    ];
    const serviceLinks = [
      { label: "Offset Printing", to: "/services/offset-printing" },
      { label: "Digital Printing", to: "/services/digital-printing" },
      { label: "Large Format", to: "/services/large-format-printing" },
      { label: "Design Services", to: "/services/design-services" },
      { label: "Finishing", to: "/services/finishing-services" }
    ];
    const contacts = [
      { label: "Phone", value: "02-XXX-XXXX", href: "tel:02XXXXXXX", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
      { label: "Email", value: "info@hryprinting.com", href: "mailto:info@hryprinting.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
      { label: "Address", value: "123 Printing St, Bangkok", href: "#", icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BrandLogo = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-ink-900 border-t border-white/[0.07] pt-16 pb-8" }, _attrs))}><div class="wrap"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.07]"><div class="lg:col-span-1"><div class="mb-5">`);
      _push(ssrRenderComponent(_component_BrandLogo, { variant: "footer" }, null, _parent));
      _push(`</div><p class="font-body text-mist text-sm leading-relaxed mb-6"> Premium printing services for businesses and brands across Thailand since 2009. </p><div class="flex gap-2"><!--[-->`);
      ssrRenderList(socials, (s) => {
        _push(`<a${ssrRenderAttr("href", s.href)} target="_blank" rel="noopener"${ssrRenderAttr("aria-label", s.name)} class="w-9 h-9 bg-white/[0.05] hover:bg-blue-500/20 border border-white/[0.07] hover:border-blue-500/40 flex items-center justify-center transition-all duration-200"><span class="font-mono text-[11px] text-mist">${ssrInterpolate(s.abbr)}</span></a>`);
      });
      _push(`<!--]--></div></div><div><h4 class="font-display font-extrabold text-sm uppercase tracking-widest text-cream-100 mb-5">Products</h4><ul class="space-y-2.5"><!--[-->`);
      ssrRenderList(productLinks, (l) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: l.to,
          class: "font-body text-sm text-mist hover:text-blue-400 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(l.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(l.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="font-display font-extrabold text-sm uppercase tracking-widest text-cream-100 mb-5">Services</h4><ul class="space-y-2.5"><!--[-->`);
      ssrRenderList(serviceLinks, (l) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: l.to,
          class: "font-body text-sm text-mist hover:text-blue-400 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(l.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(l.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="font-display font-extrabold text-sm uppercase tracking-widest text-cream-100 mb-5">Contact</h4><ul class="space-y-4"><!--[-->`);
      ssrRenderList(contacts, (c) => {
        _push(`<li class="flex items-start gap-3"><svg class="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", c.icon)}></path></svg><div><div class="font-mono text-[10px] text-mist/60 uppercase tracking-widest mb-0.5">${ssrInterpolate(c.label)}</div><a${ssrRenderAttr("href", c.href)} class="font-body text-sm text-cream-200 hover:text-blue-400 transition-colors">${ssrInterpolate(c.value)}</a></div></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"><p class="font-mono text-mist text-xs">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} HRY Printing. All rights reserved.</p><div class="flex gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "font-mono text-mist text-xs hover:text-cream-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "font-mono text-mist text-xs hover:text-cream-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader = __nuxt_component_0;
  const _component_LayoutFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-ink-950" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
  _push(`<main class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-DYGLg6z6.js.map
