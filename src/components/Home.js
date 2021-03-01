import { useState } from "react";
import List from "./posts/List";

function Home() {
    const [posts, setPosts] = useState([
        { title: 'ABC', body: 'Body 1', author: 'john', id: 1 },
        { title: 'DEF', body: 'Body 2', author: 'mario', id: 2 },
        { title: 'GHI', body: 'Body 3', author: 'john', id: 3 },
        { title: 'JKL', body: 'Body 4', author: 'john', id: 4 },
        { title: 'Any data', body: 'Body 5', author: 'okay', id: 5 }
    ]);

    const handleRemove = (id) => {
        let newPosts = posts.filter((post) => {
            return (id != post.id);
        });

        setPosts(newPosts);
    }

    return (
        <div className="wrapper">
            <List posts={posts} title="All posts!" handleRemove={handleRemove} />
        </div>
    )
}

export default Home
