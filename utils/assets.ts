export const getPublicUrl = (path: string) => {
  const config = useRuntimeConfig()
  return `${config?.public?.publicUrl || ''}${path}?ignoreCache=1&r=${Math.random()}`;
}
