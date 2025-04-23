import { NextResponse } from 'next/server'
import { load } from 'cheerio'

export async function GET() {
  const res = await fetch('https://scholar.google.com/citations?user=agHWQhEAAAAJ&hl=en')
  const html = await res.text()
  const $ = load(html)
  const countText = $('#gsc_rsb_st td.gsc_rsb_std').first().text()
  const count = parseInt(countText.replace(/,/g, ''), 10) || 0
  return NextResponse.json({ count })
}