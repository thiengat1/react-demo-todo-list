import React,{ Component } from 'react'
import classNames from 'classnames'
import './TodoItem.css'
import check from '../image/check.svg';
import checkCcomplete from '../image/check-complete.svg';
import PropTypes, { string } from 'prop-types';

class TodoItem extends Component{
 
    render(){
        const {item,onClick}=this.props;
        var checkImage=check;
        if(item.isComplete)
        {
            checkImage=checkCcomplete
        }
        return (
            <div className={classNames('TodoItem',{
                'TodoItem-complete':item.isComplete
            })}>
            <img onClick={onClick} src={checkImage} width={32} height={32}/>
            <p>{this.props.item.title}</p>
        </div>
        );
         
    }
}
TodoItem.PropTypes={
    item:PropTypes.shape({
        isComplete:PropTypes.bool.isRequired,
        title:string.isRequired
    }),
    onClick:PropTypes.func.isRequired
}
export default TodoItem;