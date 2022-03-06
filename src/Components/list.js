import Listitems from "./listItems";
import todos from "../data/arr.json";

const ListSection = () => {
    return (
        <section>
            {todos.map((singleTodo) =>
                < Listitems
                    item={singleTodo.item}
                    task={singleTodo.task}
                    emoticon={singleTodo.emoticon}

                />
            )}
        </section>
    )
}

export default ListSection