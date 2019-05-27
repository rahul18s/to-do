import React, {Component} from 'react';
import TodoList from './component/todoList';
import TodoInput from './component/todoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state={
    items : [],
    item:"",
    id:uuid(),
    editItem:false
  }

  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }

   // console.log(newItem);

    const updatedItems = [...this.state.items, newItem]
    //console.log(updatedItems)

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })

  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id;
    })
      this.setState({
        items:filteredItems
      })
    
  }

  handleEdit = id => {
    //console.log(id)
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    const selectedItem = this.state.items.find(item => item.id === id)

    //console.log(selectedItem)

      this.setState({
        items:filteredItems,
        item:selectedItem.title,
        editItem:true,
        id:id
      })

  }


  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
        <h3>to do list</h3>
          <TodoInput editItem={this.state.editItem}  item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          />
        </div>
      </div>
    </div>
    
    
  );
}
}

export default App;
