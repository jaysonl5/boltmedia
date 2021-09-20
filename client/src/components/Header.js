import React from 'react';


function Header(props){

    // const selections = [
    //     {label: '3 Days', value: 3},
    //     {label: '5 Days', value: 5},
    //     {label: '7 Days', value: 7},
    // ]

    // const forecastButtons = selections.map((item) => (
    //     <Button 
    //         key={item.value} 
    //         onClick={() => {props.setForecastDays(item.value); props.setActiveScreen(SCREENS.ForecastPage)}}
    //     >
    //             {item.label}
    //     </Button>
    // ))

    const linkArr = ['web', 'brand', 'production'];

    return(
        <div>
            <img src='./images/logo.jpg' alt="Bolt Media Logo" />

            <ul className="projectNav">
                {linkArr.map(item => (
                    <button onClick={() => { props.setProjectType(item)}}>{item}</button>
                    
                ))}
            </ul>
        </div>
    )
}

export default Header;