import { Link } from "react-router-dom";
const MobileDropdown = ({items, onClick}) =>{
    return(
        <div className="bg-gray-50 rounded-xl w-full pl-40 pt-1">
            <ul className="flex flex-col list-none justify-start items-start text-[#1e3a8a]  whitespace-nowrap cursor-pointer ">
                {items ? items.map(item => (
                    <Link key={ item.id } to={item.route} onClick={onClick} className="hover:bg-[#f0ffff] hover:rounded-full hover:text-gray-900 p-1 text-sm">{ item.label }</Link>
                )):"null"}  
            </ul>
        </div>
    )
}
export default MobileDropdown;