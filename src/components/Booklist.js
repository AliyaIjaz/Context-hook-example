import { useContext } from "react";
import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// class Booklist extends Component {
//     static contextType = ThemeContext;
//     render() { 
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//         <div className = 'book-list' style = {{ color: theme.syntax, background: theme.bg }}> 
//             <ul>
//                 <li style = {{ background: theme.ui }}>the ways of king</li>
//                 <li style = {{ background: theme.ui }}>the final empire</li>
//                 <li style = {{ background: theme.ui }}>against the wind</li>
//             </ul>
//         </div>
//         );
//     }
// }

const Booklist = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
        return ( 
        <div className = 'book-list' style = {{ color: theme.syntax, background: theme.bg }}> 
            <ul>
               {books.map(book => {
                   return(
                    <li key = {book.id} style = {{ background: theme.ui }}>{ book.title }</li> 
                   )
               })}
           </ul>
       </div>
     );
}
 
export default Booklist;
 