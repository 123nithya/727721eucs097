import { React } from 'react'
import data from "./ListData.json"

function List(props) {
    if (props.input === '') {
        return null;
    }
    const filteredData = data.filter((el) => {
        return el.text.toLowerCase().includes(props.input);
    });
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text} - {item.category}</li>
            ))}
        </ul>
    )
}

export default List
