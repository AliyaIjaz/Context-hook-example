import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

// class AuthContextProvider extends Component {
//     state = {
//         isAuthenticated: true
//     }
//     toggleAuth = () => {
//         this.setState({ isAuthenticated: !this.state.isAuthenticated })
//     }
//     render() { 
//         return (
//             <AuthContext.Provider value = {{...this.state, toggleAuth: this.toggleAuth }}> 
//             { this.props.children }
//             </AuthContext.Provider>
//         );
//     }
// }

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    }
    return ( 
        <AuthContext.Provider value = {{isAuthenticated, toggleAuth}}> 
            { props.children }
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
 