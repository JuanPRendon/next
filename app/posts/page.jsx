import { ListOfPosts } from "./ListOfPost"
export default async function postsPage({params}) {
    return(
        <section> 
            <ListOfPosts />
        </section>  
    )
}