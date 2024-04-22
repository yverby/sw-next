export function getURLSearchParam<T>(
  url: string | null,
  name: string,
  parse: (value: string | null) => T
) {
  return typeof url === 'string'
    ? parse(new URLSearchParams(new URL(url).search).get(name)) || null
    : null;
}
