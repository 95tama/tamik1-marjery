import React from 'react';


function Header(props) {
    return (
        <div className='app-header'>
            {props.version}

            <hr/>
            {props.menu.map(el => <li key={el}>{el}</li>)}
            <img className="logo" src={process.env.PUBLIC_URL + "/ttt.jpeg"} />
            <h1>Marjery</h1>
            <h2>by Marzhana Kadyrova</h2>

        </div>
    );
}

export default Header;
