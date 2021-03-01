import { useState, useEffect } from "react";
import List from "./posts/List";

function Home() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleRemove = (id) => {
        let newPosts = posts.filter((post) => {
            return (id !== post.id);
        });

        setPosts(newPosts);
    }

    useEffect(() => {
        fetch('http://localhost:8100/posts')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPosts(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="wrapper">
            { isLoading && <p className="loader">Loading...</p> }
            { !isLoading && <List posts={posts} title="All posts!" handleRemove={handleRemove} /> }
        </div>
    )
}

export default Home
