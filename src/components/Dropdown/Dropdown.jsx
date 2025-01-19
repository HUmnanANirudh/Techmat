const Dropdown = ({ items }) =>{
    return(
        <div className="bg-white rounded-xl">
            <ul className="flex flex-col list-none justify-start whitespace-nowrap cursor-pointer">
                {items ? items.map(item => (
                    <li key={ item.id } className="hover:bg-gray-50 hover:text-gray-900 p-0.5">{ item.label }</li>
                )):"null"}
            </ul>
        </div>
    )
}
export default Dropdown;