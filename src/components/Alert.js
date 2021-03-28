import Alerta from './Alerta'

const Alert = (props) => {
    return (
        <div className='alert_01'>
            <div className='alert' >Carry On {props.name} <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span></div>
            <Alerta />
        </div>
    )
}

export default Alert