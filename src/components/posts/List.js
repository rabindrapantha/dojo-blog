import PostPreview from "./PostPreview";

const List = ({posts, title}) => {
    return (
        <div className="posts-list">
            <h2>{title}</h2>
            {posts.map((post) => (
                <PostPreview post={post} />
            ))}
        </div>
    )
}

export default List
