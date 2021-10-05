import './app-info.css'


const AppInfo = ({employees , increased}) => {
    return (
        <div className="app-info">
            <img src='/img/hades.png' width="400px"></img>
            <div>
                <h2>Учет сотрудников в компании</h2>
                <h4>Общее число сотрудников: {employees}</h4>
                <h4>Премию получат: {increased}</h4>
            </div>
        </div>
    )
}


export default AppInfo;
