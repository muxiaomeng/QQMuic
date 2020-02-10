const express = require('express')
const axios = require('axios')
const app = express()
const apiRoutes = express.Router()
app.use('./api',apiRoutes)


module.exports={
    configureWebpack:{
        resolve:{
            //配置别名 默认配置了'src':'@'
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            },
        }
    },
    devServer: {
        port:8081,
        before (app) {
            app.get('/api/getDiscList', function (req, res) {
                const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
                axios.get(url, {
                    headers: {
                        referer: 'https://c.y.qq.com/',
                        host: 'c.y.qq.com'
                    },
                    params: req.query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
            app.get('/api/getCdInfo', function (req, res) {
                const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
                axios.get(url, {
                    headers: {
                        referer: 'https://c.y.qq.com/',
                        host: 'c.y.qq.com'
                    },
                    params: req.query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
            app.get('/api/getSongToken', function (req, res) {
                const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
                axios.get(url, {
                    headers: {
                        referer: 'https://c.y.qq.com/',
                        host: 'c.y.qq.com'
                    },
                    params: req.query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
            app.get('/api/getSong', function (req, res) {
                const url = 'http://ws.stream.qqmusic.qq.com/'+req.query.filename
                req.query.filename = undefined
                axios.get(url, {
                    params: req.query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
            app.get('/api/searchSong', function (req, res) {
                const url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp'
                axios.get(url, {
                    params: req.query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
            app.get('/api/getHotSearch', function (req, res) {
                const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
                axios.get(url).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
            app.get('/api/getLyric', function (req, res) {
                const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
                axios.get(url, {
                    headers: {
                        referer: 'https://c.y.qq.com/',
                        host: 'c.y.qq.com'
                    },
                    params: req.query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            })
        }
    }
}
