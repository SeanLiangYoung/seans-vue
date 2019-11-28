export default {
  error: {
    10001: 'Token expire',
    10002: 'Wrong request params',
    10003: 'Upload failed',
    10004: 'Error password format',
    10005: 'This user does not exist',

    10101: 'Wrong username or password',
    10102: 'User has been locked',

    10201: 'User name duplicated',
    10202: 'Dept name duplicated',
    10203: 'Role name duplicated',
    10204: 'Menu name duplicated',
    10206: 'Repetition of firstname or lastname',

    10401: 'Old password error',
    10208: 'The name already exists, please re-enter',
    10209: 'The number of task names that can be created by this department is full',
    10501: 'Tag exist already',
    10502: 'Tag not exist',
    10207: 'The mailbox already exists. Please re-enter it'
  },
  success: 'Operation success!',
  validation: {
    invalidContactName: 'This is not a valid username, please use uppercase and lowercase letters and spaces.',
    invalidEmail: 'This is not a valid Email',
    invalidEmailCaptcha: 'Please enter the valid email captcha',
    invalidEmailCaptchaNumberLength: 'Email captcha code should be 6 digits',
    invalidContactContent: 'This is not a valid feedback, the feedback content is limited to 0-250.',
    invalidUsername: 'Please enter the valid user name',
    invalidPassword: 'The password can not be less than 6 digits',
    invalidPasswordConfirm: 'Two input password must be consistent',
    invalidPhone: 'Please enter the valid phone',
    invalidPhoneNumberLength: 'The mobile phone number cannot be less than 11 digits',
    invalidPhoneCaptcha: 'Please enter the valid phone captcha',
    invalidPhoneCaptchaNumberLength: 'Phone captcha code should be 6 digits',
    invalidUrl: 'Please enter the correct url',
    invalidFacebookUrl: 'Please enter the correct Facebook Url',
    invalidTwitterUrl: 'Please enter the correct Twitter Url',
    invalidSystemUserId: 'Please enter the correct System User ID'
  }
}
