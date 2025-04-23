import { NextResponse } from 'next/server'

export const runtime = 'edge'   // edge = tiny cold-start, no Node baggage
export const revalidate = 0     // always fetch fresh JSON

const AUTHOR_ID = 'agHWQhEAAAAJ'   // ← paste your author_id here

export async function GET() {
  // Build the SerpApi query
  const url = new URL('https://serpapi.com/search')
  url.searchParams.set('engine', 'google_scholar_author')
  url.searchParams.set('author_id', AUTHOR_ID)
  url.searchParams.set('api_key', process.env.SERPAPI_KEY!)
  url.searchParams.set('hl', 'en')

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    return NextResponse.json({ error: 'SerpApi request failed' }, { status: 502 })
  }

  const data = await res.json()
  // SerpApi returns citations like:  data.cited_by.table.citations.all
  const count = data?.cited_by?.table?.citations?.all ?? 0

  return NextResponse.json({ count })
}
