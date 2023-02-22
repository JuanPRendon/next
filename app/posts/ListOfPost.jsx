import { LikeButton } from "./likeButton.jsx"
import Link from "next/link"
//cache : 'no-store' = es para que cuando lanze la apliacion a desarrollo no me cree esta lista como un elemento estatico
//next:{revalidate:} = es para que en el tiempo de revalidate se regenere la api
const fetchPosts=()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate:10
        }
    })
        .then(res => res.json())
}

export async function ListOfPosts(){
    const posts = await fetchPosts()
    
    return posts.map(post =>(
        <article key={post.id}>
            <Link href={`/posts/${post.id}`}>  
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton />
            </Link>
        </article>
    ))
}