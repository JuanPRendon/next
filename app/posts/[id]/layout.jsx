import Link from "next/link"
//cache : 'no-store' = es para que cuando lanze la apliacion a desarrollo no me cree esta lista como un elemento estatico
//next:{revalidate:} = es para que en el tiempo de revalidate se regenere la api
const fetchSinglePost=(id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
            revalidate:10
        }
    })
        .then(res => res.json())
}

export default async function post({children, params}){
    const {id}=params
    const post = await fetchSinglePost(id)
    return(
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`}>ver comentarios</Link>
            {children}
        </article>
    )
}