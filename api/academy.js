// ============================================================
//  NIEEE Academy — Vercel Serverless Function
//  This runs on Vercel's servers (not the browser), so
//  CORS and mobile restrictions do not apply at all.
//  Your website calls /api/academy, this calls Google Sheets.
// ============================================================

// ← Paste your Google Apps Script URL here (same one as before)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx7LbWoiCC9EBSI1Pz4EnVSpj4kvMaM57OeVKiVYDkQqEWRjfzGCtRCQWZL6qEdCQU9/exec';

export default async function handler(req, res) {
  // Allow requests from your website
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = req.body;

    // Build query string to forward to Apps Script
    const params = new URLSearchParams(body);
    params.set('_t', Date.now()); // cache buster

    const url = `${APPS_SCRIPT_URL}?${params.toString()}`;

    // Call Google Apps Script from the server — no CORS issues
    const response = await fetch(url);
    const text = await response.text();

    // Apps Script returns JSON directly (no JSONP needed server-side)
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      // Sometimes Apps Script wraps in JSONP even without callback param
      const match = text.match(/\{.*\}/s);
      data = match ? JSON.parse(match[0]) : { success: false, error: 'Invalid response from server' };
    }

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ success: false, error: 'Server error: ' + err.message });
  }
}
