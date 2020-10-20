import Mock from 'mockjs'

// baseURL
const domain = "/api/"

// 模拟getData接口
Mock.mock(domain + 'getData', () => {
    let result = {
        code: 200,
        message: "ok",
        data: 'test'
    }
    return result
})

