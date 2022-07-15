import s from './Navbar.module.css'

const Navbar = () => {
    return(
        <div className={s.navbar}>
           <div>
               <a>Profile</a>
           </div>
           <div>
               <a>Messages</a>
           </div>
           <div>
               <a>News</a>
           </div>
           <div>
               <a>Music</a>
           </div>
           <div>
               <a>Settings</a>
           </div>
        </div>
    );
}

export default Navbar