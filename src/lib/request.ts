export interface RequestOptions {
  params?: Record<string, string | number | boolean | string[] | undefined | null>
  body?: string
  headers?: Record<string, string>
}

export async function request<T>(
  method: 'GET' | 'POST',
  path: string,
  options?: RequestOptions,
): Promise<T> {
  const searchParams = new URLSearchParams()
  if (options?.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value === undefined) continue
      if (Array.isArray(value)) {
        for (const item of value) {
          searchParams.append(key, item)
        }
      } else {
        searchParams.append(key, String(value))
      }
    }
  }

  const qs = searchParams.toString()
  const url = `/api${path}${qs ? `?${qs}` : ''}`

  const res = await fetch(url, {
    method,
    ...(options?.body !== undefined
      ? {
          headers: { 'Content-Type': 'text/plain', ...options.headers },
          body: options.body,
        }
      : options?.headers
        ? { headers: options.headers }
        : {}),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`${res.status} ${res.statusText}${errText ? `: ${errText}` : ''}`)
  }

  const text = await res.text()
  if (!text) return undefined as T
  try {
    return JSON.parse(text) as T
  } catch {
    return text as T
  }
}
