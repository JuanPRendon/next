import Link from "next/link"
//cache : 'no-store' = es para que cuando lanze la apliacion a desarrollo no me cree esta lista como un elemento estatico
//next:{revalidate:} = es para que en el tiempo de revalidate se regenere la api
const fetchComments=(id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next:{
            revalidate:10
        }
    })
        .then(res => res.json())
}

export default async function post({params}){
    const {id}=params
    const comments = await fetchComments(id)
    return(
        <ul>
            {comments.map(comment =>(
                <li key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}