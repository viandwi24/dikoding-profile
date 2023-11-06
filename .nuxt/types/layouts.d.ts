import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/viandwi24/projects/learn/dikoding-profile/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}