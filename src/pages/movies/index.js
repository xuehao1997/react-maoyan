import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { getMovies } from '../../actions'
import '../../assets/style/movies.scss'
//引入better-scroll
import BScroll from 'better-scroll';



class Movies extends Component {
    componentDidMount () {
        //getMovies();
        //getMovies方法是在props上面的
        this.props.getMovies();
        
        // const bs = new BScroll('.container');
        // bs.finishPullUp();
    }

    //写一个渲染的方法
    xuanran  = () => {
        return this.props.movies.map( item => <li key = {item.id} >
            <img src = { item.img.replace('w.h','128.180') }></img>
            <div>
                <p>{ item.nm }</p>
                <h5>观众评分：{ item.sc }</h5>
                <i>主演：</i><span>{ item.star }</span>
                <h6>{ item.showInfo }</h6>
            </div>
            
            </li> )
    }
    //第三方库better-scroll的使用必须要有真是DOM存在
   
    render() {
       const {movies} = this.props;
        return (
            <div className = "container">
                
                {/* 配合better-scroll使用 */}
                <ul>
                    {/* 调用渲染列表的方法 */}
                    {/* movies有数据时再执行方法 */}
                    {movies && this.xuanran() }
                </ul>
            </div>
        )
    }
}
export default connect(//连接React组件和Redux store
    state => state.movieReducer,
    dispatch => bindActionCreators({ getMovies } , dispatch)
)( Movies )