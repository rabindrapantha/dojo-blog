import { useState } from "react";
import List from "./posts/List";

function Home() {
    const [posts, setPosts] = useState([
        { title: 'ABC', body: 'Body 1', author: 'john', id: 1 },
        { title: 'DEF', body: 'Body 2', author: 'mario', id: 2 },
        { title: 'GHI', body: 'Body 3', author: 'john', id: 3 },
        { title: 'JKL', body: 'Body 4', author: 'john', id: 3 }
    ]);

    setPosts([]);

    return (
        <div className="wrapper">
            <List posts={posts} title="All posts!" />
        </div>
    )
}

export default Home
