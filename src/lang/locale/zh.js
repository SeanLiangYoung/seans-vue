export default {
  error: {
    10001: 'Token 过期',
    10002: '错误的请求参数',
    10003: '上传失败',
    10004: '密码不符合规则',
    10005: '该用户不存在',

    10101: '用户名或密码错误',
    10102: '用户已失效,请联系管理员',

    10201: '用户名已存在',
    10202: '部门名已存在',
    10203: '角色名已存在',
    10204: '菜单名已存在',
    10206: '姓氏或名字重复',

    10401: '旧密码错误',
    10208: '已有该任务名称',
    10209: '本部门可创建的任务名称数量已满',
    10501: '标签已存在',
    10502: '标签不存在',
    10207: '该邮箱已存在，请重新输入'
  },
  success: '操作成功!',
  validation: {
    invalidContactName: '这不是一个合法的用户名,请使用大小写字母和空格',
    invalidEmail: '这不是一个合法的邮箱',
    invalidEmailCaptcha: '请输入合法的邮箱验证码',
    invalidEmailCaptchaNumberLength: '邮箱验证码应该为6位数字',
    invalidContactContent: '这不是一个合法的反馈内容，反馈内容长度限制为0-250',
    invalidUsername: '请输入正确的用户名',
    invalidPassword: '密码不可以小于6位',
    invalidPasswordConfirm: '两次输入的内容不一致',
    invalidPhone: '请输入合法的手机号',
    invalidPhoneNumberLength: '手机号不可以小于11位',
    invalidPhoneCaptcha: '请输入合法的手机验证码',
    invalidPhoneCaptchaNumberLength: '手机验证码应该为6位数字',
    invalidUrl: '请输入正确的url',
    invalidFacebookUrl: '请输入正确的Facebook Url',
    invalidTwitterUrl: '请输入正确的Twitter Url',
    invalidSystemUserId: '请输入正确的用户系统ID'
  }
}
