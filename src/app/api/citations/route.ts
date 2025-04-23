import { NextResponse } from 'next/server'
import { load } from 'cheerio'

/**
 * ⬇️  Force this route to run in a Node.js Serverless Function.
 *     Google blocks most “edge / datacenter” IPs, so a Node function
 *     plus realistic headers works more reliably.
 */
export const runtime = 'nodejs'

/** Disable ISR / static caching for the upstream HTML (optional) */
export const revalidate = 0          // or:  export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const resp = await fetch(
      'https://scholar.google.com/citations?user=agHWQhEAAAAJ&hl=en',
      {
        /** 🕵️‍♂️ Mimic a real Chrome request */
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        cache: 'no-store',           // don’t let fetch cache Google’s HTML
      },
    )

    if (!resp.ok) {
      // Propagate upstream errors (useful for Vercel logs)
      return NextResponse.json(
        { error: `Scholar returned ${resp.status}` },
        { status: 502 },
      )
    }

    const html = await resp.text()
    const $ = load(html)
    const countText = $('#gsc_rsb_st td.gsc_rsb_std').first().text()

    if (!countText) {
      // Probably hit Google’s CAPTCHA / block page
      return NextResponse.json(
        { error: 'Unable to parse citation count (selector empty)' },
        { status: 503 },
      )
    }

    const count = parseInt(countText.replace(/,/g, ''), 10) || 0
    return NextResponse.json({ count })
  } catch (err) {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 })
  }
}
