import todos from "../data/arr.json"
console.log(todos);

const Listitems = (props) => {
    return (
        <ul>
            <li>
                <p key={props.id}>Todos: {props.icon} {props.task} {props.emoticon}</p>
            </li>
        </ul>
    )
}

export default Listitems