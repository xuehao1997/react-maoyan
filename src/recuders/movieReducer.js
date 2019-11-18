import { GET_MOVIES } from '../actions/actionType'

const initState = {//先给数据赋一个初始值
    movies:null
}

//Reducer 函数最重要的特征是，它是一个纯函数
const movieReducer = (state = initState , action) => {
    const newState = { ...state }
    //reducer接收到action并根据标识信息判断之后返回了新的state
    switch ( action.type ) {
        case GET_MOVIES:
            //修改数据
            newState.movies = action.payload;
        break;
    }
    return newState
}
export default movieReducer;

