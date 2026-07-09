/**
 * vapi-sdk TypeScript declarations
 */
export interface VapiOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Vapi {
  constructor(options?: VapiOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Vapi;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
