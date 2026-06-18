import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useHead, a as _export_sfc } from "../server.mjs";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Contact — HRY Printing" });
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
    const files = ref([]);
    const submitting = ref(false);
    const sent = ref(false);
    const serviceOptions = [
      "Business Cards",
      "Banners & Signs",
      "Brochures & Flyers",
      "Stickers & Labels",
      "Packaging",
      "Large Format Printing",
      "Design Services",
      "Finishing Services",
      "Other / Custom"
    ];
    const contacts = [
      { label: "Phone", value: "02-XXX-XXXX", href: "tel:02XXXXXXX", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
      { label: "Email", value: "info@hryprinting.com", href: "mailto:info@hryprinting.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
      { label: "Address", value: "123 Printing St, Bangkok", href: "https://maps.google.com", icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" },
      { label: "LINE ID", value: "@hryprinting", href: "https://line.me", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 lg:py-20" }, _attrs))} data-v-23b2ee44><div class="wrap" data-v-23b2ee44><div class="lbl mb-6" data-v-23b2ee44>Get in Touch</div><div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16" data-v-23b2ee44><h1 class="font-display font-900 uppercase text-cream-100 leading-none text-[clamp(3rem,8vw,7rem)] tracking-tight" data-v-23b2ee44> LET&#39;S<br data-v-23b2ee44>PRINT </h1><p class="font-body text-mist max-w-sm leading-relaxed lg:pb-2" data-v-23b2ee44> Have a project in mind? Tell us the details and we&#39;ll get back to you within 2 hours on business days. </p></div><div class="hr mb-14" data-v-23b2ee44></div><div class="grid lg:grid-cols-3 gap-12 xl:gap-20" data-v-23b2ee44><div class="lg:col-span-2" data-v-23b2ee44><form class="space-y-6" data-v-23b2ee44><div class="grid sm:grid-cols-2 gap-5" data-v-23b2ee44><div data-v-23b2ee44><label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2" data-v-23b2ee44> Full Name * </label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Your name" required class="inp" data-v-23b2ee44></div><div data-v-23b2ee44><label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2" data-v-23b2ee44> Email Address * </label><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="you@company.com" required class="inp" data-v-23b2ee44></div></div><div class="grid sm:grid-cols-2 gap-5" data-v-23b2ee44><div data-v-23b2ee44><label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2" data-v-23b2ee44> Phone Number </label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="0812345678" class="inp" data-v-23b2ee44></div><div data-v-23b2ee44><label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2" data-v-23b2ee44> Company / Brand </label><input${ssrRenderAttr("value", unref(form).company)} type="text" placeholder="Company name" class="inp" data-v-23b2ee44></div></div><div data-v-23b2ee44><label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2" data-v-23b2ee44> Product / Service Interested In </label><select class="inp appearance-none" data-v-23b2ee44><option value="" data-v-23b2ee44${ssrIncludeBooleanAttr(Array.isArray(unref(form).service) ? ssrLooseContain(unref(form).service, "") : ssrLooseEqual(unref(form).service, "")) ? " selected" : ""}>Select…</option><!--[-->`);
      ssrRenderList(serviceOptions, (s) => {
        _push(`<option${ssrRenderAttr("value", s)} data-v-23b2ee44${ssrIncludeBooleanAttr(Array.isArray(unref(form).service) ? ssrLooseContain(unref(form).service, s) : ssrLooseEqual(unref(form).service, s)) ? " selected" : ""}>${ssrInterpolate(s)}</option>`);
      });
      _push(`<!--]--></select></div><div data-v-23b2ee44><label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2" data-v-23b2ee44> Project Details * </label><textarea rows="5" required placeholder="Describe your project — quantity, size, materials, deadline, any special requirements…" class="inp resize-none" data-v-23b2ee44>${ssrInterpolate(unref(form).message)}</textarea></div><div data-v-23b2ee44><label class="font-mono text-[11px] text-blue-500 uppercase tracking-widest block mb-2" data-v-23b2ee44> Attach Reference / Artwork Files </label><label class="block border-2 border-dashed border-white/15 hover:border-blue-500/50 rounded-xl p-8 text-center cursor-pointer transition-all duration-200 group" data-v-23b2ee44><input type="file" multiple accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.svg,.zip" class="hidden" data-v-23b2ee44><svg class="w-8 h-8 text-mist group-hover:text-blue-500 transition-colors mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-23b2ee44><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-23b2ee44></path></svg><p class="font-body text-sm text-mist group-hover:text-cream-200 transition-colors" data-v-23b2ee44>${ssrInterpolate(unref(files).length ? `${unref(files).length} file(s) selected` : "Click to upload or drag & drop")}</p><p class="font-mono text-[10px] text-mist/50 mt-1" data-v-23b2ee44>PDF, AI, EPS, PNG, JPG, SVG, ZIP — max 50 MB</p></label></div>`);
      if (unref(sent)) {
        _push(`<div class="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 flex items-center gap-4" data-v-23b2ee44><svg class="w-6 h-6 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-23b2ee44><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-23b2ee44></path></svg><div data-v-23b2ee44><div class="font-display font-extrabold text-lg uppercase text-cream-100" data-v-23b2ee44>Message Sent!</div><p class="font-body text-sm text-mist" data-v-23b2ee44>We&#39;ll get back to you within 2 hours on business days.</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""} class="btn-primary w-full !py-4 !text-xl" data-v-23b2ee44>`);
      if (unref(submitting)) {
        _push(`<svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" data-v-23b2ee44><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-23b2ee44></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" data-v-23b2ee44></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(submitting) ? "Sending…" : "Send Message")} `);
      if (!unref(submitting)) {
        _push(`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-23b2ee44><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-23b2ee44></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form></div><div class="space-y-5" data-v-23b2ee44><!--[-->`);
      ssrRenderList(contacts, (c) => {
        _push(`<div class="card p-6 flex items-start gap-5" data-v-23b2ee44><div class="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0" data-v-23b2ee44><svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-23b2ee44><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", c.icon)} data-v-23b2ee44></path></svg></div><div data-v-23b2ee44><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-1" data-v-23b2ee44>${ssrInterpolate(c.label)}</div><a${ssrRenderAttr("href", c.href)} class="font-body text-sm font-semibold text-cream-100 hover:text-blue-400 transition-colors" data-v-23b2ee44>${ssrInterpolate(c.value)}</a></div></div>`);
      });
      _push(`<!--]--><div class="card p-6" data-v-23b2ee44><div class="font-mono text-[10px] text-mist uppercase tracking-widest mb-4" data-v-23b2ee44>Business Hours</div><div class="space-y-2.5" data-v-23b2ee44><div class="flex justify-between" data-v-23b2ee44><span class="font-body text-sm text-mist" data-v-23b2ee44>Monday – Friday</span><span class="font-body text-sm font-semibold text-cream-100" data-v-23b2ee44>8:00 – 18:00</span></div><div class="flex justify-between" data-v-23b2ee44><span class="font-body text-sm text-mist" data-v-23b2ee44>Saturday</span><span class="font-body text-sm font-semibold text-cream-100" data-v-23b2ee44>9:00 – 15:00</span></div><div class="flex justify-between" data-v-23b2ee44><span class="font-body text-sm text-mist" data-v-23b2ee44>Sunday</span><span class="font-mono text-xs text-mist/50 italic" data-v-23b2ee44>Closed</span></div></div></div><div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 flex items-center gap-4" data-v-23b2ee44><div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0" data-v-23b2ee44><svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-23b2ee44><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-23b2ee44></path></svg></div><div data-v-23b2ee44><div class="font-display font-extrabold text-lg text-cream-100 uppercase" data-v-23b2ee44>2-Hour Response</div><div class="font-mono text-[10px] text-mist" data-v-23b2ee44>On all business day enquiries</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23b2ee44"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-C3eUiWxA.js.map
