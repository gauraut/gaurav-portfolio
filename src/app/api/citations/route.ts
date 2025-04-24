import { NextResponse } from 'next/server'

export const runtime = 'edge'      // or 'nodejs'
export const revalidate = 0

const AUTHOR_ID = 'agHWQhEAAAAJ'

export async function GET() {
  const url = new URL('https://serpapi.com/search.json')
  url.searchParams.set('engine', 'google_scholar_author')
  url.searchParams.set('author_id', AUTHOR_ID)
  url.searchParams.set('hl', 'en')
  url.searchParams.set('api_key', process.env.SERPAPI_KEY!)

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    return NextResponse.json({ error: `SerpApi ${res.status}` }, { status: 502 })
  }

  const data = await res.json()

  // ----- robust parsing -----
  let count = 0
  const table = data?.cited_by?.table
  if (Array.isArray(table) && table[0]?.citations?.all !== undefined) {
    count = Number(table[0].citations.all)
  } else if (table?.citations?.all !== undefined) {
    count = Number(table.citations.all)
  }

  return NextResponse.json({ count })
}
