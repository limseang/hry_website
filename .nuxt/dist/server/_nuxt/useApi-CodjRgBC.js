import { d as useRuntimeConfig } from "../server.mjs";
const useApi = () => {
  const { apiBase } = useRuntimeConfig().public;
  const $get = (path, params) => $fetch(`${apiBase}${path}`, { params });
  return {
    // Banners
    getActiveBanners: () => $get("/banners/active"),
    // Categories
    getCategories: () => $get("/categories"),
    // Products
    getProducts: (p) => $get("/products", p),
    getFeatured: () => $get("/products/featured"),
    getProduct: (slug) => $get(`/products/${slug}`),
    // Services
    getServices: () => $get("/services"),
    getService: (slug) => $get(`/services/${slug}`),
    // Testimonials
    getTestimonials: () => $get("/testimonials"),
    // Settings
    getSettings: () => $get("/settings")
  };
};
export {
  useApi as u
};
//# sourceMappingURL=useApi-CodjRgBC.js.map
