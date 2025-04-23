import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const revalidate = 0

const AUTHOR_ID = 'agHWQhEAAAAJ'   // your scholar user=

export async function GET() {
  const url = new URL('https://serpapi.com/search.json')   // ← FIXED
  url.searchParams.set('engine', 'google_scholar_author')
  url.searchParams.set('author_id', AUTHOR_ID)
  url.searchParams.set('api_key', process.env.SERPAPI_KEY!)
  url.searchParams.set('hl', 'en')

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    return NextResponse.json({ error: `SerpApi ${res.status}` }, { status: 502 })
  }

  const data = await res.json()
  const count = data?.cited_by?.table?.citations?.all ?? 0
  return NextResponse.json({ count })
}
