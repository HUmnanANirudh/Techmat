const MobileDropdown = ({items}) =>{
    return(
        <div className="bg-gray-50 rounded-xl w-full pl-40 pt-1">
            <ul className="flex flex-col list-none justify-start items-start text-[#1e3a8a]  whitespace-nowrap cursor-pointer ">
                {items ? items.map(item => (
                    <li key={ item.id } className="hover:bg-[#f0ffff] hover:rounded-full hover:text-gray-900 p-1 text-sm">{ item.label }</li>
                )):"null"}
            </ul>
        </div>
    )
}
export default MobileDropdown;