import { ToastType, toast } from 'vue3-toastify'
import * as StorageHelpers from '@/utils/storage'

export const toastify = (text: string, type: ToastType) => {
  toast(text, {
    theme: 'colored',
    containerId: 'main',
    type,
  })
}

export default { ...StorageHelpers }