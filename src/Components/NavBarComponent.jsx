import { useNavigate } from "react-router-dom";
import '../styles/navbar.css';

function NavBarComponent() {
    const navigate = useNavigate()

    const navigateTo = (route) => {
        navigate(route)
    }

return <>
    <nav class ="navbar">
        <div class="logo" onClick={() => navigateTo('/')}>
            <img src="/assets/images/logo.png" alt="logo" />
        </div>
        <ul>
            <li onClick={() => navigateTo('/coach')}>Votre coach</li>
            <li onClick={() => navigateTo('/planning')}>Planning</li>
            <li onClick={() => navigateTo('/abonnements')}>Abonnements</li>
            <li onClick={() => navigateTo('/disciplines')}>Disciplines</li>
            <li onClick={() => navigateTo('/login')}><span class="material-symbols-outlined">account_circle</span></li>
        </ul>
    </nav>

</>
}

export default NavBarComponent;