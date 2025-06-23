import {Link} from 'react-router-dom';
import './Header.css'

const Header = () =>{
    return(
        <div>
            <header>
            <div class="h">
            
            <s id="a">Vivekanand College</s>
            </div>
            <nav>
             <div class="w">
                        <Link to="/home">Home</Link>
                        <Link to= "/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="admission">
                        <button class="apply-btn">Apply Now!</button>
                        </Link>
                
                 </div>   

            </nav>        
            
            </header>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" href="style.css"></link>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            </head>
            
        </div>
    )
}
export default Header;