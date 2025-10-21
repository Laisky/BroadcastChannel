const _process = typeof require !== 'undefined' ? require('node:process') : undefined

export function getEnv(env, Astro, name) {
  return env?.[name]
    ?? Astro?.locals?.runtime?.env?.[name]
    ?? (_process ? _process.env?.[name] : undefined)
}
