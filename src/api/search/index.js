import config from "../../assets/js/conf/config";
import {request} from "../../assets/js/utils/request";

// 热门搜素词
export function getHotKeywords(){
   return request(config.baseApi+"/home/public/hotwords?token="+config.token);
}