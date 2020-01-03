import Mock from 'mockjs'

const Random = Mock.Random
export const getUserInfo = (options) => {
  let userInfo = []
  for (let i = 0; i < 2; i++) {
    let template = {
      'name': Random.cname(),
      'age': Random.natural(22, 40),
      'date': Random.date('yyyy-MM-dd'),
      'address': Random.county(true)
    }
    userInfo.push(template)
  }
  // let i = 3
  // let arr = []
  // while (i--) {
  //   arr.push(template)
  // }
  // return Mock.mock(userInfo)
  return userInfo
}