import { u as useHead, _ as __nuxt_component_1 } from './server.mjs';
import { _ as _sfc_main$1 } from './ProductCard-IwBZHbFU.mjs';
import { _ as _sfc_main$2 } from './ServiceCard-DRXJDV-f.mjs';
import { defineComponent, ref, computed, withCtx, createTextVNode, openBlock, createBlock, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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
    useHead({ title: "HRY Printing \u2013 Premium Printing Services Thailand" });
    useApi();
    const products = ref([]);
    const services = ref([]);
    const testimonials = ref([]);
    const banners = ref([]);
    const loadingProducts = ref(true);
    const loadingServices = ref(true);
    const heroBanner = computed(() => {
      var _a;
      return (_a = banners.value[0]) != null ? _a : null;
    });
    const trust = [
      { value: "15+", label: "Years" },
      { value: "5K+", label: "Clients" },
      { value: "50+", label: "Products" },
      { value: "24H", label: "Rush Jobs" }
    ];
    const features = [
      { title: "Premium Materials", desc: "Finest paper stocks, inks and substrates sourced globally.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
      { title: "Fast Turnaround", desc: "Same-day and rush orders available. We never miss a deadline.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Expert Design", desc: "In-house designers ensure your artwork is print-perfect.", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
      { title: "Best Pricing", desc: "Volume discounts and transparent pricing with no surprises.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UiProductCard = _sfc_main$1;
      const _component_UiServiceCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative min-h-[92vh] flex items-center overflow-hidden"><div class="absolute inset-0 bg-ink-950 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:52px_52px]"></div><div class="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full bg-blue-500/[0.06] blur-[130px] pointer-events-none animate-pulse-slow"></div><div class="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-red-600/[0.07] blur-[110px] pointer-events-none animate-pulse-slow" style="${ssrRenderStyle({ "animation-delay": "2s" })}"></div><div class="wrap relative z-10 w-full py-20 lg:py-0"><div class="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-12 lg:gap-20 items-center"><div><p class="lbl mb-7 animate-fade-in" style="${ssrRenderStyle({ "opacity": "0", "animation-fill-mode": "both" })}"> Premium Printing Services \u2014 Thailand </p><h1 class="font-display font-900 uppercase leading-none tracking-tight mb-8 text-[clamp(3.5rem,9vw,8.5rem)] animate-fade-up" style="${ssrRenderStyle({ "opacity": "0", "animation-fill-mode": "both", "animation-delay": ".1s" })}"> PRINT<br><span class="accent-text">THAT</span><br> SPEAKS </h1><p class="font-body text-mist text-lg leading-relaxed max-w-[440px] mb-10 animate-fade-up" style="${ssrRenderStyle({ "opacity": "0", "animation-fill-mode": "both", "animation-delay": ".2s" })}"> From razor-sharp business cards to building-scale banners \u2014 HRY delivers printing that commands attention and outlasts the competition. </p><div class="flex flex-wrap gap-3 animate-fade-up" style="${ssrRenderStyle({ "opacity": "0", "animation-fill-mode": "both", "animation-delay": ".3s" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browse Catalogue <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Browse Catalogue "),
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Our Services`);
          } else {
            return [
              createTextVNode("Our Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-8 mt-10 pt-10 border-t border-white/[0.07] animate-fade-in" style="${ssrRenderStyle({ "opacity": "0", "animation-fill-mode": "both", "animation-delay": ".5s" })}"><!--[-->`);
      ssrRenderList(trust, (t) => {
        _push(`<div class="text-center"><div class="font-display font-900 text-3xl text-cream-100">${ssrInterpolate(t.value)}</div><div class="font-mono text-[10px] text-mist tracking-widest uppercase mt-0.5">${ssrInterpolate(t.label)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden lg:block animate-fade-up" style="${ssrRenderStyle({ "opacity": "0", "animation-fill-mode": "both", "animation-delay": ".25s" })}">`);
      if (unref(heroBanner)) {
        _push(`<div class="relative aspect-[4/5] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)]"><img${ssrRenderAttr("src", unref(heroBanner).image_url)}${ssrRenderAttr("alt", unref(heroBanner).title)} class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent"></div><div class="absolute bottom-0 left-0 right-0 p-7">`);
        if (unref(heroBanner).subtitle) {
          _push(`<div class="font-mono text-[10px] text-blue-400 tracking-widest uppercase mb-1">${ssrInterpolate(unref(heroBanner).subtitle)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="font-display font-900 text-2xl text-cream-100 uppercase leading-tight">${ssrInterpolate(unref(heroBanner).title)}</div>`);
        if (unref(heroBanner).button_text) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(heroBanner).button_url || "/products",
            class: "mt-4 inline-flex items-center gap-2 font-mono text-xs text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(heroBanner).button_text)} <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(heroBanner).button_text) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "w-3 h-3",
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
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(banners)[1]) {
          _push(`<div class="absolute -top-5 -right-5 w-28 h-28 overflow-hidden border-2 border-blue-500/30 shadow-xl animate-float"><img${ssrRenderAttr("src", unref(banners)[1].image_url)}${ssrRenderAttr("alt", unref(banners)[1].title)} class="w-full h-full object-cover"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="relative aspect-[4/5] bg-ink-800 border border-white/[0.07] flex flex-col items-center justify-center shadow-[0_40px_100px_rgba(0,0,0,0.6)]"><div class="font-display font-900 text-[7rem] text-blue-500/10 leading-none select-none">HRY</div><div class="absolute bottom-8 left-8 right-8"><div class="bg-ink-700/80 backdrop-blur border border-white/[0.07] p-5"><div class="font-mono text-[10px] text-blue-400 tracking-widest uppercase mb-2">Ready to Print?</div><div class="font-display font-900 text-2xl text-cream-100 uppercase">Premium Quality,<br>Fast Delivery</div></div></div><div class="absolute -top-5 -left-5 bg-blue-500 p-5 animate-float"><div class="font-display font-900 text-4xl text-white leading-none">15+</div><div class="font-mono text-[10px] text-white/70 uppercase tracking-widest">Years</div></div></div>`);
      }
      _push(`</div></div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-40"><span class="font-mono text-[10px] text-mist tracking-[0.3em] uppercase">Scroll</span><div class="w-px h-10 bg-gradient-to-b from-mist to-transparent"></div></div></section><div class="bg-blue-500 py-3.5 select-none overflow-hidden"><div class="ticker-wrap"><div class="ticker-track"><!--[-->`);
      ssrRenderList(16, (i) => {
        _push(`<span class="inline-flex items-center gap-5 font-display font-900 text-white text-xl uppercase tracking-widest px-7"> HRY PRINTING <svg class="w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16z"></path></svg></span>`);
      });
      _push(`<!--]--></div></div></div><section class="py-24 lg:py-32"><div class="wrap"><div class="flex items-end justify-between mb-12 gap-6 flex-wrap"><div><div class="lbl mb-4">Our Products</div><h2 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(2.5rem,6vw,5.5rem)]">MOST POPULAR</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "btn-outline btn-sm shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View All "),
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
      _push(`</div>`);
      if (unref(loadingProducts)) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="skel aspect-[4/5]"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(products).length) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(unref(products), (p) => {
          _push(ssrRenderComponent(_component_UiProductCard, {
            key: p.id,
            p
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="font-body text-mist text-center py-16">No featured products available yet.</p>`);
      }
      _push(`</div></section><section class="py-24 lg:py-32 bg-ink-900"><div class="wrap"><div class="flex items-end justify-between mb-12 gap-6 flex-wrap"><div><div class="lbl mb-4">What We Do</div><h2 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(2.5rem,6vw,5.5rem)]">PRINT SERVICES</h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "btn-outline btn-sm shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` All Services <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" All Services "),
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
      _push(`</div>`);
      if (unref(loadingServices)) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="skel h-72"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
        ssrRenderList(unref(services).slice(0, 6), (s) => {
          _push(ssrRenderComponent(_component_UiServiceCard, {
            key: s.id,
            s
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section><section class="py-24 lg:py-32"><div class="wrap"><div class="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center"><div><div class="lbl mb-6">Why Choose HRY</div><h2 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(2.5rem,5.5vw,4.5rem)] mb-8"> CRAFTED FOR<br>EXCELLENCE </h2><p class="font-body text-mist text-lg leading-relaxed mb-5"> For over 15 years HRY Printing has been the trusted partner for businesses across Thailand. We combine cutting-edge technology with meticulous craftsmanship to deliver prints that truly make an impression. </p><p class="font-body text-mist leading-relaxed mb-10"> From the first proof to final delivery, every step is handled with precision and care. Your brand deserves nothing less. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our Story <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Our Story "),
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
      _push(`</div><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(features, (f) => {
        _push(`<div class="group card p-6 flex flex-col gap-4"><div class="w-11 h-11 bg-blue-500/10 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-300"><svg class="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", f.icon)}></path></svg></div><div><h4 class="font-display font-900 text-base uppercase text-cream-100 mb-1">${ssrInterpolate(f.title)}</h4><p class="font-body text-xs text-mist leading-relaxed">${ssrInterpolate(f.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      if (unref(testimonials).length) {
        _push(`<section class="py-24 lg:py-32 bg-ink-900"><div class="wrap"><div class="lbl mb-4">Client Stories</div><h2 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(2.5rem,6vw,5.5rem)] mb-12">WHAT THEY SAY</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(unref(testimonials), (t) => {
          var _a;
          _push(`<div class="card flex flex-col gap-5 p-7"><div class="flex gap-1"><!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<svg class="${ssrRenderClass([i <= (t.rating || 5) ? "text-blue-500" : "text-ink-600", "w-4 h-4"])}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
          });
          _push(`<!--]--></div><blockquote class="font-body text-sm text-cream-200/85 leading-relaxed italic flex-1">&quot;${ssrInterpolate(t.content)}&quot;</blockquote><div class="flex items-center gap-3 pt-4 border-t border-white/[0.06]"><div class="w-10 h-10 bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0 overflow-hidden">`);
          if (t.avatar_url) {
            _push(`<img${ssrRenderAttr("src", t.avatar_url)}${ssrRenderAttr("alt", t.name)} class="w-full h-full object-cover">`);
          } else {
            _push(`<span class="font-display font-900 text-xl text-blue-500">${ssrInterpolate((_a = t.name) == null ? void 0 : _a.charAt(0))}</span>`);
          }
          _push(`</div><div><div class="font-display font-extrabold text-sm text-cream-100 uppercase">${ssrInterpolate(t.name)}</div><div class="font-mono text-[10px] text-mist mt-0.5">`);
          if (t.position) {
            _push(`<span>${ssrInterpolate(t.position)}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (t.position && t.company) {
            _push(`<span>, </span>`);
          } else {
            _push(`<!---->`);
          }
          if (t.company) {
            _push(`<span class="text-blue-400">${ssrInterpolate(t.company)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]--></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="relative py-28 lg:py-40 overflow-hidden bg-blue-500"><div class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"><span class="font-display font-900 text-[clamp(5rem,18vw,16rem)] text-black/10 uppercase leading-none whitespace-nowrap select-none tracking-tight">GET STARTED</span></div><div class="wrap relative z-10 text-center"><h2 class="font-display font-900 uppercase text-white leading-none text-[clamp(2.5rem,7vw,6rem)] mb-6">READY TO PRINT?</h2><p class="font-body text-white/70 text-xl max-w-lg mx-auto mb-10"> Get a free quote today. Our team responds within 2 hours on business days. </p><div class="flex flex-wrap gap-4 justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-3 bg-ink-950 hover:bg-ink-900 text-cream-100 font-display font-900 text-xl uppercase tracking-wide px-10 py-4 transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Free Quote <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Get Free Quote "),
              (openBlock(), createBlock("svg", {
                class: "w-5 h-5",
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "inline-flex items-center gap-3 border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-display font-900 text-xl uppercase tracking-wide px-10 py-4 transition-all duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browse Catalogue `);
          } else {
            return [
              createTextVNode(" Browse Catalogue ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CCPARBC5.mjs.map
