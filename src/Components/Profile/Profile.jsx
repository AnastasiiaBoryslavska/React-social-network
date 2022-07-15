import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return(
        <div>
            <div>
                <img src="https://static.gopro.com/assets/blta2b8522e5372af40/bltec583474bacd7ec6/611bd591e74bc3148654d955/pdp-subscription-hero-image-1920-2x.jpg" className={s.profile__img}></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;