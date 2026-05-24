const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  return basePath + path;
}

export function href(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  return basePath + path;
}
