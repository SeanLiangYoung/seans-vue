<template>
  <el-form-item :label="labelContent">
    <el-row>
      <div class="upload-template">
        <slot name="template"/>
      </div>
    </el-row>
    <el-row>
      <el-col :span="8">
        <!-- <el-upload
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-change="handleChange"
          :on-exceed="handleExceed"
          :limit="limit"
          :file-list="fileList"
          :auto-upload="false"
          :http-request="httpRequest"
          class="upload-demo"
          action="/upload"
          multiple>
          <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip"><slot name="tip"/></div>
        </el-upload> -->
        <input type="file" name="file" multiple="multiple" @change="getFiles">
      </el-col>
      <el-col :span="16">
        <el-radio-group :disabled="showCorpusExtend" v-model="pattern">
          <el-row>
            <el-radio label="reuse">循环使用（上传数量少于购买数量）</el-radio>
          </el-row>
          <el-row>
            <el-radio label="sole">唯一使用（上传数量等于购买数量）</el-radio>
          </el-row>
        </el-radio-group>
      </el-col>
    </el-row>
  </el-form-item>
</template>

<script>
import Upload from './upload'

export default {
  name: 'CorpusUpload',
  components: {
    Upload
  },
  props: {
    label: {
      type: Object,
      default: function () {
        return {
          content: '上传舆材'
        }
      }
    },
    corpus: {
      type: Object,
      default: function () {
        return {
          limit: 1,
          fileList: [],
          pattern: 'none'
        }
      }
    }
  },
  data () {
    return {
      // tCorpus: this.corpus
      limit: this.corpus.limit,
      fileList: this.corpus.fileList,
      pattern: this.corpus.pattern
    }
  },
  computed: {
    labelContent: function () {
      return this.label.content
    },
    showCorpusExtend: function () {
      if ((this.pattern === 'reuse') || (this.pattern === 'sole')) {
        return false
      } else if (this.pattern === 'none') {
        return true
      } else {
        return true
      }
    }
  },
  watch: {
    pattern (val) {
      this.pattern = val
      this.$emit('on-corpus-pattern-change', val)
    },
    fileList: {
      handler (val) {
        this.fileList = val
        this.$emit('on-corpus-file-change', val)
      },
      deep: true
      // 监听外部对props属性result的变更，并同步到组件内的data属性myResult中
    }
  },
  methods: {
    handleChange (file, fileList) {
      this.fileList = fileList
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
      this.fileList = fileList
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    httpRequest () {
      console.log('upload request callback')
    },
    getFiles (e) {
      console.log(this.fileList, e.target.files)
      this.fileList = e.target.files
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
