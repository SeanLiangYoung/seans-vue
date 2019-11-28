
import store from '@/store'

export default {
  async bind(el, binding, vnode, oldVnode) {
    let access = false
    // console.log(binding.value);
    // console.log(Array.isArray(binding.value));
    if (Array.isArray(binding.value) && binding.value.length > 0) {
      access = await store.dispatch('permission/checkHasOnePermission', binding.value)
    } else {
      access = await store.dispatch('permission/checkPermission', binding.value)
    }
    if (!access) {
      el.parentNode.removeChild(el)
    }
  }
}
