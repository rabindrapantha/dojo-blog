const PostPreview = ({post, handleRemove}) => {
    return (
        <div className="post-preview">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p class="author">Witten by {post.author}</p>
            <button type="button" className="btn" onClick={() => handleRemove(post.id)}>Remove</button>
        </div>
    )
}

export default PostPreview

