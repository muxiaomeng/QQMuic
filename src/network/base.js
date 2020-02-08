import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL:"https://u.y.qq.com",
        timeout:5000
    })

    instance.interceptors.request.use(
        config => {
            return config
        },
        error => {
            console.log(error)
        }
    )

    return instance(config)
}

export const commonParams = {
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp',
    platform: "yqq.json",
}