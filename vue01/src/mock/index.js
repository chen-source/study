import Mock from 'mockjs'
import { getUserInfo } from './response/user'
let data = Mock.mock(/\/getUser/, 'get', getUserInfo)

// 设置响应延时
// Mock.setup({
//   timeout: 5000
// })
export default data