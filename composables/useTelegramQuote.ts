/**
 * Builds the Telegram deep links used by every "Ask price" button on the site.
 * Opens a chat with HRY Printing and pre-fills a message carrying the item
 * name, any chosen options, and the absolute URL of the page it came from.
 */
export const TELEGRAM_USER = 'Hryprintingshop'

interface QuoteOptions {
  size?: string
  finishing?: string
  qty?: number | string
}

type ItemKind = 'products' | 'services'

export function useTelegramQuote () {
  const reqUrl = useRequestURL()

  /** Absolute, shareable URL of a product or service page */
  const itemUrl = (kind: ItemKind, slug?: string) =>
    slug ? `${reqUrl.origin}/${kind}/${slug}` : reqUrl.origin

  const productUrl = (slug?: string) => itemUrl('products', slug)
  const serviceUrl = (slug?: string) => itemUrl('services', slug)

  const buildMessage = (kind: ItemKind, item: any, opts: QuoteOptions = {}) => {
    if (!item?.name) return ''
    const noun = kind === 'services' ? 'service' : 'product'
    const l: string[] = [
      `Hello HRY Printing, I would like a quote for this ${noun}.`,
      '',
      `${noun === 'service' ? 'Service' : 'Product'}: ${item.name}`,
    ]
    if (item.category?.name) l.push(`Category: ${item.category.name}`)
    if (opts.size)           l.push(`Size: ${opts.size}`)
    if (opts.finishing)      l.push(`Finishing: ${opts.finishing}`)
    if (opts.qty)            l.push(`Quantity: ${opts.qty} ${item.unit || 'pcs'}`)
    l.push('', itemUrl(kind, item.slug))
    return l.join('\n')
  }

  const link = (text: string) =>
    text
      ? `https://t.me/${TELEGRAM_USER}?text=${encodeURIComponent(text)}`
      : `https://t.me/${TELEGRAM_USER}`

  /* Products */
  const quoteMessage = (product: any, opts: QuoteOptions = {}) => buildMessage('products', product, opts)
  const quoteLink    = (product: any, opts: QuoteOptions = {}) => link(quoteMessage(product, opts))

  /* Services */
  const serviceMessage = (service: any) => buildMessage('services', service)
  const serviceLink    = (service: any) => link(serviceMessage(service))

  /* Plain "talk to us" link, no message attached */
  const contactLink = link('')

  return {
    TELEGRAM_USER,
    productUrl, serviceUrl,
    quoteMessage, quoteLink,
    serviceMessage, serviceLink,
    contactLink,
  }
}