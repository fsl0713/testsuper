// 热门搜素词
 import {getHotKeywords} from '../../../api/search'
export default{
    namespaced: true, //命名空间
    state: {
       historykeywords:localStorage["historykeywords"] ? JSON.parse(localStorage["historykeywords"]):[],  //用来存储搜索历史
       Hotkeywords:[] //热门搜素词
    },
    mutations: {
        ["SET_KEYWOEDS"](state,payload){ //增加历史记录
            state.historykeywords=payload.historykeywords; //把他存入到state里面
            localStorage["historykeywords"]=JSON.stringify(state.historykeywords); //存储到本地缓存中，vuex存储刷新会消失
        },
        ["REMOVE_KEYWORDS"](state,payload){ //删除历史记录
            state.historykeywords=[];
            localStorage.removeItem("historykeywords");
        },
        ["SET_HOTKEYWORDS"](state,payload){ //热门搜素关键词
            state.Hotkeywords=payload.Hotkeywords;
        }

    },
    actions: {
        getHotKeywords(conText){
            getHotKeywords().then(res=>{
                if(res.code===200){
                   conText.commit("SET_HOTKEYWORDS",{Hotkeywords:res.data})
                }
            })
        }
    }
}