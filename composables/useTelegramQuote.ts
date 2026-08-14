/**
 * Builds the Telegram deep link used by every "Ask price" button on the site.
 * Opens a chat with HRY Printing and pre-fills a message that carries the
 * product name, the chosen options and the absolute product URL.
 */
export const TELEGRAM_USER = 'iampopcorn'

interface QuoteOptions {
  size?: string
  finishing?: string
  qty?: number | string
}

export function useTelegramQuote () {
  const reqUrl = useRequestURL()

  /** Absolute, shareable URL of a product page */
  const productUrl = (slug: string) => `${reqUrl.origin}/products/${slug}`

  /** Editable part of the Telegram message (no product URL) */
  const quoteBody = (product: any, opts: QuoteOptions = {}) => {
    if (!product) return ''
    const l: string[] = [
      'Hello HRY Printing, I would like a quote for this product.',
      '',
      `Product: ${product.name}`,
    ]
    if (product.category) l.push(`Category: ${product.category.name}`)
    if (opts.size)        l.push(`Size: ${opts.size}`)
    if (opts.finishing)   l.push(`Finishing: ${opts.finishing}`)
    if (opts.qty)         l.push(`Quantity: ${opts.qty} ${product.unit || 'pcs'}`)
    return l.join('\n')
  }

  const quoteMessage = (product: any, opts: QuoteOptions = {}) => {
    if (!product) return ''
    return `${quoteBody(product, opts)}\n\n${productUrl(product.slug)}`
  }

  const quoteLink = (product: any, opts: QuoteOptions = {}, body?: string) => {
    const text = body != null
      ? `${body}\n\n${productUrl(product.slug)}`
      : quoteMessage(product, opts)
    return `https://t.me/${TELEGRAM_USER}?text=${encodeURIComponent(text)}`
  }

  return { TELEGRAM_USER, productUrl, quoteBody, quoteMessage, quoteLink }
}
