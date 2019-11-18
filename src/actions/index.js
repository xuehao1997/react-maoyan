import request from './request'
// import { GET_MOVIES } from './actionType'
//这个是数据请求的方法，最终要在movies组件中调用
export const getMovies = () => {
    return async dispatch => {
        //数据请求
        const result = await request({
            url:'/ajax/movieOnInfoList',
            params:{
                token:''
            }
        })
        console.log(result);
        //发送action
        dispatch({
            type:"GET_MOVIES",
            payload:result.data.movieList
        })
    }
}