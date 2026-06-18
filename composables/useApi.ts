// composables/useApi.ts — public read-only API
export const useApi = () => {
  const { apiBase } = useRuntimeConfig().public

  const $get = <T>(path: string, params?: Record<string, any>) =>
    $fetch<{ success: boolean; data: T }>(`${apiBase}${path}`, { params })

  return {
    // Banners
    getActiveBanners: ()              => $get<any[]>('/banners/active'),

    // Categories
    getCategories:    ()              => $get<any[]>('/categories'),

    // Products
    getProducts:      (p?: Record<string, any>) => $get<any>('/products', p),
    getFeatured:      ()              => $get<any[]>('/products/featured'),
    getProduct:       (slug: string)  => $get<any>(`/products/${slug}`),

    // Services
    getServices:      ()              => $get<any[]>('/services'),
    getService:       (slug: string)  => $get<any>(`/services/${slug}`),

    // Testimonials
    getTestimonials:  ()              => $get<any[]>('/testimonials'),

    // Settings
    getSettings:      ()              => $get<Record<string,string>>('/settings'),
  }
}
