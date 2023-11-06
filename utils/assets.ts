export const getPublicUrl = (path: string) => {
  const config = useRuntimeConfig()
  return `${config?.public?.publicUrl || ''}${path}`;
}
