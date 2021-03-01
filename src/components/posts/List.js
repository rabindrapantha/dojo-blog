import PostPreview from "./PostPreview";

const List = ({posts, title, handleRemove}) => {
    return (
        <div className="posts-list">
            <h2>{title}</h2>
            {posts.map((post) => (
                <PostPreview key={post.id} post={post} handleRemove={handleRemove} />
            ))}
        </div>
    )
}

export default List
