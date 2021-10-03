import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'


const EmployeesList = ({data , onDelete , onToggleProp , onChangeSalary}) => {
    
    const element = data.map(el => {
        const {id , ...itemProps} = el
        return(
            <EmployeesListItem key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id,e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={(e) => onChangeSalary(id , e.target.value)}/>
        )
    })
    
    return(
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;
