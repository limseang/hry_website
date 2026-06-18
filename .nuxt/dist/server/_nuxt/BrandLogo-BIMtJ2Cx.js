import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
const logoSrc = "" + __buildAssetsURL("logo.DR9oTmRB.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BrandLogo",
  __ssrInlineRender: true,
  props: {
    variant: { default: "header" }
  },
  setup(__props) {
    const props = __props;
    const imgClass = computed(
      () => props.variant === "auth" ? "h-10 sm:h-11" : "h-9"
    );
    const subtitleClass = computed(
      () => props.variant === "auth" ? "text-[9px] tracking-widest mt-0.5" : "text-[9px] tracking-[0.3em] mt-0.5"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3 shrink-0" }, _attrs))}><img${ssrRenderAttr("src", unref(logoSrc))} alt="HRY Printing" class="${ssrRenderClass([unref(imgClass), "object-contain shrink-0 w-auto"])}" width="120" height="80"><div class="leading-none"><div class="${ssrRenderClass([unref(subtitleClass), "font-mono text-mist uppercase leading-none"])}"> Printing </div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=BrandLogo-BIMtJ2Cx.js.map
