/**
 * Created by 123 on 2016/7/29.
 */
import { createAction } from 'redux-actions';
import listViewActionEnum from '../constants/listViewActionEnum'
import { api, callApi } from '../apis/api'
import { Actions } from "react-native-router-flux";

const articleInfoActions = {
    setArticleId:createAction(listViewActionEnum.SET_ARTICLEID_INFO),
    setArticleData:createAction(listViewActionEnum.SET_ARTICLEDATA),
    getArticleInfoById: (data)=> {
        return dispatch=> {
            callApi(
                api.getArticleInfo(data),
                (data)=>dispatch(articleInfoActions.getArticleInfoRequest(data)),
                (err)=>console.warn(err)
            );
        }
    },
    getArticleInfoRequest: (data)=> {
        return dispatch=> {
            dispatch(
                articleInfoActions.setArticleData(data)
            );
            dispatch(Actions.ArticleInfo());
        }
    },
    updateArticleInfoById: (data)=> {
        return dispatch=> {
            callApi(
                api.updateArticleInfo(data),
                (data)=>dispatch(articleInfoActions.getArticleInfoSusscesssRequest(data)),
                (err)=>console.warn(err)
            );
        }
    },
    getArticleInfoSusscesssRequest:(data)=>{
        return dispatch=>{
            console.log(data);
        }
    },
    addArticleInfoById: (data)=> {
        return dispatch=> {
            callApi(
                api.addArticleInfo(data),
                (data)=>dispatch(articleInfoActions.getArticleInfoSusscesssRequest(data)),
                (err)=>console.warn(err)
            );
        }
    }


}

export default articleInfoActions;