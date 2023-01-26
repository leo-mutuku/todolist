import * as React from "react";

export default function App() {

  // variable initialization
  const [inputValue, setInputValue] = React.useState({todoTitle:"", todoDescription:""});
  const [todoList, seTodoList] = React.useState([]);

  /* function to handle inputValue changes
   * note the use of spread operator (...) to capture the previous state
   * useState does not render the current input value hence ...preState
   * used setInputValue to update the state of inputValue
   */
  function handleChange(event){
    const {name , value} = event.target;
    setInputValue((prevState)=>({...prevState,[name]:value}))
    
  } 

  /* handleSubmit function
  * Used setTodoList function to update the state of todolist
  * Used setInputValue with empty string assignment to clear the previous 
  * values of the input fields.
  * Note: You can add logic to prevent an empty form submission
  */
 function  handleSubmit(event){
  event.preventDefault();
  seTodoList((prevState)=>[...prevState,inputValue])
  setInputValue({todoTitle:"", todoDescription:""})
 }

 /* Looped through each of the todoItem
 *  Here we do not need to use the key as we assign our todo to a jsx value
 */
 const todo = todoList.map((todoItem)=> <li>{`${todoItem.todoTitle}  ${todoItem.todo}`}</li>)
 
 return (
    <div>
      <h4>Add Todo</h4>
     <form>
      <input 
      placeholder="Todo Title"
      name="todoTitle"
      value={inputValue.todoTitle}
      onChange={handleChange}
      />
       <input 
      placeholder="Todo Description "
      name="todoDescription"
      value={inputValue.todoDescription}
      onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Todo </button> 
     </form>

     <h4>Todo List</h4>
     
     <ol >{todo}</ol>
    </div>
  );
}


