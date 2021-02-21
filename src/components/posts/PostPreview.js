const PostPreview = ({post}) => {
    return (
        <div key={post.id} className="post-preview">
            <h3>{post.title}</h3>
            <p>Witten by {post.author}</p>
        </div>
    )
}

export default PostPreview

