const Header = (props) => {
    return (
        <header className='header'>
            <h1>Hello {props.name}</h1>
            <button className='btn'>Add</button>
        </header>
    )
        

}

export default Header