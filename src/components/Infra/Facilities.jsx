import { useState } from "react"

const Factories = [
  { id: 1, label: "Unit I Bhiwadi", Component: Unit1 },
  { id: 2, label: "Unit II Bhiwadi", Component: Unit2 },
  { id: 3, label: "Unit III Khushkhera", Component: Unit3 },
]
export const Facilities = ()=>{
    const [Clicked,SetClicked] = useState(Factories[0].id);
    const CurrentComponent = Factories.find((Factory)=>(Factory.id===Clicked))?.Component
    const HandleClick = ()=>{
        SetClicked(id);
    }
    return(
        <div>

        </div>
    )
}