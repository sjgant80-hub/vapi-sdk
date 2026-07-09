/**
 * vapi-sdk · sovereign wrapper for Vapi
 * AI/Voice Agents
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://docs.vapi.ai/
 * Homepage: https://vapi.ai
 */

export class Vapi {
  constructor({ apiKey, baseURL = 'https://vapi.ai', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      'Authorization': apiKey ? 'Bearer ' + apiKey : '',
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://docs.vapi.ai/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('vapi ' + res.status);
    return res.json();
  }
}

export default Vapi;

// Metadata
export const meta = {
  "name": "Vapi",
  "category": "AI/Voice Agents",
  "homepage": "https://vapi.ai",
  "docs_url": "https://docs.vapi.ai/",
  "endpoints_count": 0
};
