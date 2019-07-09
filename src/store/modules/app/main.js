const main = {
  buy: 'system.buy',
  price: 'system.price',
  service: {
    image: '@/assets/banner/banner.png',
    name: 'banner.title',
    description: 'banner.desc',
    item: [{
      image: 'promoption',
      name: 'banner.item1.title',
      description: 'banner.item1.desc'
    }, {
      image: 'global',
      name: 'banner.item2.title',
      description: 'banner.item2.desc'
    }, {
      image: 'service',
      name: 'banner.item3.title',
      description: 'banner.item3.desc'
    }]
  },
  twitter: {
    image: '@/assets/twitter/twitter.png',
    name: 'twitter.name',
    service: 'twitter.service',
    description: 'twitter.desc',
    item: [{
      image: '@/assets/twitter/praise.png',
      name: 'twitter.praise.title',
      description: 'twitter.praise.desc',
      type: 'twitter_praise',
      site: 'twitter',
      price: '36',
      introduction: 'twitter.praise.introduction',
      minOperatorNum: 200
    }, {
      image: '@/assets/twitter/reply.png',
      name: 'twitter.reply.title',
      description: 'twitter.reply.desc',
      type: 'twitter_reply',
      site: 'twitter',
      price: '143',
      introduction: 'twitter.reply.introduction',
      minOperatorNum: 10
    }, {
      image: '@/assets/twitter/forward.png',
      name: 'twitter.forward.title',
      description: 'twitter.forward.desc',
      type: 'twitter_forward',
      site: 'twitter',
      price: '28',
      introduction: 'twitter.forward.introduction',
      minOperatorNum: 30
    }]
  },
  facebook: {
    image: '@/assets/facebook/facebook.png',
    name: 'facebook.name',
    service: 'facebook.service',
    description: 'facebook.desc',
    item: [{
      image: '@/assets/facebook/praise.png',
      name: 'facebook.praise.title',
      description: 'facebook.praise.desc',
      type: 'twitter_praise',
      site: 'facebook',
      price: '7',
      introduction: 'facebook.praise.introduction',
      minOperatorNum: 200
    }, {
      image: '@/assets/facebook/reply.png',
      name: 'facebook.reply.title',
      description: 'facebook.reply.desc',
      type: 'twitter_reply',
      site: 'facebook',
      price: '143',
      introduction: 'facebook.reply.introduction',
      minOperatorNum: 10
    }, {
      image: '@/assets/facebook/forward.png',
      name: 'facebook.forward.title',
      description: 'facebook.forward.desc',
      type: 'twitter_forward',
      site: 'facebook',
      price: '7',
      introduction: 'facebook.forward.introduction',
      minOperatorNum: 200
    }]
  }
}
export default main
