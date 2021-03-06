import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {bindActionCreators} from 'redux';


/*
 * 三类组件，公有组件无需用户权限，私有组件需要登陆状态，复用组件多条产品线复用。
 * 复用组件又分公有复用组件，和私有复用组件
 *
 * ***/

/*父级组件*/

//  const mapStateToProps = (state) =>{
//     return {
//         example: state.example.toJS()
//     }
// }
// const mapDispatchToProps = (dispatch,ownProps) =>{
//     return {
//         actions: bindActionCreators({example}, dispatch)
//     }
// }
// export default connect(
//     mapStateToProps, mapDispatchToProps
// )(Demo)
/*父级容器*/
export const PublicContainer = (function(mapStateToProps,mapDispatchToProps,Component) {
    return withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
});

/*容器化*/
export const Containerization = (mapStateToProps,mapDispatchToProps) =>(Component)=> {
    if(mapStateToProps && mapDispatchToProps ){
        return withRouter(connect(mapStateToProps,mapDispatchToProps)(Component))
    } else {
        return withRouter(Component);
    }

};
