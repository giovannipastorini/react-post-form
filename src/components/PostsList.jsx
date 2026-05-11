export default function PostsList({posts, setPosts}){
    
    

    return(
        <div className="posts-list container">
            {
                posts.map((post, index) =>( 
                    
                    <div className="card my-3" key={index}>
                        <div className="card-body">
                            <h3>Post {index+1}</h3>
                            <ul className="list-unstyled">
                                <li>Author: <span><strong>{post.author}</strong></span></li>
                                <li>Title: <span><strong>{post.title}</strong></span></li>
                                <li>
                                    Body of the post:
                                    <p>
                                        <strong>
                                            {post.body}
                                        </strong>
                                    </p>
                                </li>
                                <li>Public: <span><strong>{post.public}</strong></span></li>
                            </ul>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}