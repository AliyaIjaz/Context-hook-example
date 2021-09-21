import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

// class ThemeContextProvider extends Component {
//     state = {
//         isLightTheme: true,
//         light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
//         dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
//     }
//     toggleTheme= () => {
//         this.setState({ isLightTheme: !this.state.isLightTheme });
//     }

//     render() { 
//         return (
//         <ThemeContext.Provider value = {{...this.state, toggleTheme: this.toggleTheme }}>
//             {this.props.children}
//         </ThemeContext.Provider>
//         );
//     }
// }

const ThemeContextProvider = (props) => {

    const [isLightTheme, setIsLightTheme] = useState(true);
    // const [light, setLight] = useState(
    //     { syntax: '#555', ui: '#ddd', bg: '#eee'}
    // );
    // const [dark, setDark] = useState(
    //     { syntax: '#ddd', ui: '#333', bg: '#555'}
    // );

    const light = { syntax: '#555', ui: '#ddd', bg: '#eee'};
    const dark = { syntax: '#ddd', ui: '#333', bg: '#555'};
    
    const toggleTheme= () => {
        setIsLightTheme(!isLightTheme);
    }
    
    return ( 
        <ThemeContext.Provider value = {{isLightTheme, light, dark, toggleTheme}}>
            { props.children }
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;
 

