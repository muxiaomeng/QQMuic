import axios from 'axios'
import {commonParams} from './base'
// 获取歌单列表
export function getDiscList() {
    const url = '/api/getDiscList'
    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
//获取歌单信息 （包括歌单里的歌曲）
export function getCdInfo(disstid) {
    const url = '/api/getCdInfo'
    const data = Object.assign({}, commonParams, {
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        new_format: 1,
        disstid,
        loginUin: 0,
        hostUin: 0,
        needNewCode: 0
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        res = res.data
        res = res.slice(13,res.length-1)
        return Promise.resolve(JSON.parse(res))
    })
}

//获取歌曲token 用于播放音乐
export function getSongToken(songmid,filename) {
    const url = '/api/getSongToken'
    const data = Object.assign({}, commonParams, {
        format: "json205361747",
        platform:"yqq",
        cid:205361747,
        guid:1023110828,
        songmid,
        filename
    })

    return axios.get(url, {
        params: data
    }).then((res) => {

        return Promise.resolve(res.data)
    })
}

//取得音乐mp4文件
export function getSong(filename,vkey) {
    const url = '/api/getSong'
    const data = Object.assign({}, {
        fromtag:0,
        guid:1023110828,
        vkey,
        filename,
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res)
    })
}
//搜索音乐
export function searchSong(p,n,w) {
    const url = '/api/searchSong'
    const data = Object.assign({},{
        aggr:1,
        cr:1,
        flag_qc:0,
        p,
        n,
        w,
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        res = res.data
        res = res.slice(9,res.length-1)
        return Promise.resolve(JSON.parse(res))
    })
}

//获取热搜 全民k歌的榜单
export function getHotSearch() {
    const url = '/api/getHotSearch'
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data)
    })
}
//获取歌词
export function getLyric(musicid) {
    const url = '/api/getLyric'
    const data = Object.assign({},commonParams,{
        // songmid:"004Bpmqo4SDiYa",
        nobase64: 1,
        musicid
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        res = res.data
        res = res.slice(18,res.length-1)
        return Promise.resolve(JSON.parse(res))
    })
}
// https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?&notice=0&platform=yqq.json&needNewCode=0
/*
export function getUserList() {
    const url = '/api/getUserList'
    const data = Object.assign({}, commonParams, {
        hostuin: 1023110828,
        sin: 0,
        size: 40,
        g_tk: 5381,
        loginUin: 1023110828,
        hostUin: 0,
        needNewCode: 0
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
*/
