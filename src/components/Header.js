function Header(props) {
    console.log(props.Header);
    return(
        <div>
            <h1>{props.titulo}</h1>
        </div>
    );
}

export default Header;