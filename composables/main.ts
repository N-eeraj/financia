import { PageMeta } from 'nuxt/app'
import { ToastType, toast } from 'vue3-toastify'
import * as StorageHelpers from '@/utils/storage'

export const toastify = (text: string, type: ToastType) => {
  toast(text, {
    theme: 'colored',
    type,
  })
}

export const authDashboard: PageMeta = {
  layout: "dashboard",
  visitor: false,
  user: true,
}

export default { ...StorageHelpers }
