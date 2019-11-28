// import { decrypt, encrypt } from '@/utils/crypt'
/**
 * 用来获取和设置localStorage存储
 * 为 localstorge中的内容加密
 **/
export const local = {
  save(key, value) {
    // localStorage.setItem(key, encrypt(JSON.stringify(value)))
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch(key) {
    // let word = localStorage.getItem(key) ? JSON.parse(decrypt(localStorage.getItem(key))) : '{}'
    // return JSON.parse(word)
    return JSON.parse(localStorage.getItem(key)) || {}
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}
export function isTagsShow() { // 判断是否展示标签
  const doms = document.querySelectorAll('.el-table__row')
  doms.forEach(item => {
    const len = item.querySelector('.tagsLen').innerHTML
    const domCell = item
      .querySelector('.el-table__expand-column')
      .querySelector('.cell')
    if (len > 0) {
      domCell.style.display = 'block'
    } else {
      domCell.style.display = 'none'
    }
  })
}

// 字符串截取
export function strSlice(str, length) {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

// 开始结束区间判断赋值
export function startEndNum(form) {
  for (const key in form) {
    if (key.includes('start') && !key.includes('Time')) {
      const otherKey = key.replace('start', 'end')
      const startVal = form[key]
      const endVal = form[otherKey]
      if (startVal !== undefined && endVal === undefined) {
        form[otherKey] = startVal
      }
      if (endVal !== undefined && startVal === undefined) {
        form[key] = endVal
      }
    }
    if (key.includes('Start') && !key.includes('Time')) {
      const otherKey = key.replace('Start', 'End')
      const startVal = form[key]
      const endVal = form[otherKey]
      if (startVal !== undefined && endVal === undefined) {
        form[otherKey] = startVal
      }
      if (endVal !== undefined && startVal === undefined) {
        form[key] = endVal
      }
    }
  }
}
// 下划线转换驼峰
export function toHump(name) {
  return name.replace(/\_(\w)/g, function(all, letter) {
    return letter.toUpperCase()
  })
}
// 驼峰转换下划线
export function toLine(name) {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}

// 获取 obj 列表的 id，并以逗号隔开的字符串输出
export function getIdString(list, prop) {
  if (list.length === 0) {
    return ''
  }
  const ids = []
  list.forEach(obj => {
    if (obj.hasOwnProperty(prop)) {
      ids.push(obj[prop])
    }
  })
  return ids.join(',')
}
export function setFormValue(form, data) { // 渲染表单数据
  Object.keys(form).forEach(key => {
    if (data[key] || data[key] === 0) {
      form[key] = data[key]
    }
  })
}
// convert routes to Navbar
export function convertRoute2Nav(routes) {
  if (routes === undefined) {
    return []
  }
  if (Object.keys(routes).length === 0) {
    return []
  }
  if (routes.length === 0) {
    return []
  }
  const navbar = []
  routes[1].children.forEach(route => {
    // navbar.push(route)
    // route.index = route.menuId
    if (route.hasChildren && route.children.length === 1) {
      navbar.push(route.children[0])
    } else {
      navbar.push(route)
    }

    // if(route.parentId === '0'){
    //   if(route.hasChildren){
    //     route.children[0].children = []
    //   }
    //   navbar.push(route)
    // }
  })

  navbar.sort((a, b) => {
    return a.order - b.order
  })

  return navbar
}
