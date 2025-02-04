import { Link } from "react-router-dom";
const Dropdown = ({ items,onClick }) =>{
    return(
        <div className="bg-white rounded-xl">
            <ul className="flex flex-col list-none justify-start whitespace-nowrap cursor-pointer">
                {items ? items.map(item => (
                    <Link key={ item.id } to={item.route} onClick={onClick} className="hover:bg-gray-50 hover:text-gray-900 p-0.5">{ item.label }</Link>
                )):"null"}
            </ul>
        </div>
    )
}
export default Dropdown;