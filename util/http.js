import {config} from '/config.js'

class HTTP{
  request(params){
    if(!params.method){
      params.method = 'GET'
    }
    wx.request({
      url: config.api_base_url + params.url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      method: parmas.method,
      success: (res)=>{
        let code = res.statusCode
        if (code.startsWith('2')){

        }else{

        }
      },
      fail: (err)=>{

      }
    })
  }
  
}

export {HTTP}