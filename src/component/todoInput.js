import React, {Component} from 'react';

export default class TodoInput extends Component{
    
    render(){
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return( <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book"></i>
                    </div>                
                </div>
                <input type="text" value={item} onChange={handleChange} className="form-control text-capitalize" placeholder="Add a Item"/>
            </div>
            <button type="submit" className=
                {editItem ? 'btn btn-success btn-block mt-4' : 'btn btn-primary btn-block mt-4'}
            >
            {editItem ? 'edit item':'add item'}
            </button>
        </form>
    </div>
        )
    }
}

