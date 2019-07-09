<script>
// import ajax from './ajax'
// import UploadDragger from './upload-dragger.vue'
export default {
  inject: ['uploader'],
  components: {
    // UploadDragger
  },
  props: {
    type: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    data: {
      type: Object,
      default: function () { return {} }
    },
    headers: {
      type: Object,
      default: function () { return {} }
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: ''
    },
    onStart: {
      type: Function,
      default: function () {}
    },
    onProgress: {
      type: Function,
      default: function () {}
    },
    onSuccess: {
      type: Function,
      default: function () {}
    },
    onError: {
      type: Function,
      default: function () {}
    },
    beforeUpload: {
      type: Function,
      default: function () {}
    },
    onPreview: {
      type: Function,
      default: function () {}
    },
    onRemove: {
      type: Function,
      default: function () {}
    },
    fileList: {
      type: Array,
      default: function () { return [] }
    },
    autoUpload: {
      type: Boolean,
      default: false
    },
    listType: {
      type: String,
      default: 'text'
    },
    httpRequest: {
      type: Function,
      default: function () {}
    //   default: ajax
    },
    limit: {
      type: Number,
      default: 1
    },
    onExceed: {
      type: Function,
      default: function () {}
    }
  },
  data () {
    return {
      mouseover: false,
      reqs: {}
    }
  },
  methods: {
    isImage (str) {
      return str.indexOf('image') !== -1
    },
    handleChange (ev) {
      const files = ev.target.files
      if (!files) return
      this.uploadFiles(files)
    },
    uploadFiles (files) {
      if (this.limit && this.fileList.length + files.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList)
        return
      }
      let postFiles = Array.prototype.slice.call(files)
      if (!this.multiple) { postFiles = postFiles.slice(0, 1) }
      if (postFiles.length === 0) { return }
      postFiles.forEach(rawFile => {
        this.onStart(rawFile)
        if (this.autoUpload) this.upload(rawFile)
      })
    },
    upload (rawFile) {
      this.$refs.input.value = null
      if (!this.beforeUpload) {
        return this.post(rawFile)
      }
      const before = this.beforeUpload(rawFile)
      if (before && before.then) {
        before.then(processedFile => {
          const fileType = Object.prototype.toString.call(processedFile)
          if (fileType === '[object File]' || fileType === '[object Blob]') {
            if (fileType === '[object Blob]') {
              processedFile = new File([processedFile], rawFile.name, {
                type: rawFile.type
              })
            }
            for (const p in rawFile) {
              if (rawFile.hasOwnProperty(p)) {
                processedFile[p] = rawFile[p]
              }
            }
            this.post(processedFile)
          } else {
            this.post(rawFile)
          }
        }, () => {
          this.onRemove(null, rawFile)
        })
      } else if (before !== false) {
        this.post(rawFile)
      } else {
        this.onRemove(null, rawFile)
      }
    },
    abort (file) {
      const { reqs } = this
      if (file) {
        let uid = file
        if (file.uid) uid = file.uid
        if (reqs[uid]) {
          reqs[uid].abort()
        }
      } else {
        Object.keys(reqs).forEach((uid) => {
          if (reqs[uid]) reqs[uid].abort()
          delete reqs[uid]
        })
      }
    },
    post (rawFile) {
      const { uid } = rawFile
      const options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.onProgress(e, rawFile)
        },
        onSuccess: res => {
          this.onSuccess(res, rawFile)
          delete this.reqs[uid]
        },
        onError: err => {
          this.onError(err, rawFile)
          delete this.reqs[uid]
        }
      }
      const req = this.httpRequest(options)
      this.reqs[uid] = req
      if (req && req.then) {
        req.then(options.onSuccess, options.onError)
      }
    },
    handleClick () {
      if (!this.disabled) {
        this.$refs.input.value = null
        this.$refs.input.click()
      }
    },
    handleKeydown (e) {
      if (e.target !== e.currentTarget) return
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.handleClick()
      }
    }
  },
  render (h) {
    const {
      handleClick,
      name,
      handleChange,
      multiple,
      accept,
      listType,
      handleKeydown
    } = this
    const data = {
      class: {
        'el-upload': true
      },
      on: {
        click: handleClick,
        keydown: handleKeydown
      }
    }
    data.class[`el-upload--${listType}`] = true
    return (
      <div {...data} tabindex='0' >
        {
          this.$slots.default
        }
        <input class='el-upload__input' type='file' ref='input' name={name} on-change={handleChange} multiple={multiple} accept={accept}></input>
      </div>
    )
  }
}
</script>
