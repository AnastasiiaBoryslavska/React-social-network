import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
};

export default MyPosts