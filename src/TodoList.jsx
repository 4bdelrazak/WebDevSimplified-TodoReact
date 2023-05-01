import TodoITem from "./TodoItem";



export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "NO todos"}
            {todos.map(todo => {
                return (<TodoITem  {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
            })}

        </ul>
    );
}