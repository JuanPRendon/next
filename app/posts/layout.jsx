import { Counter } from "./Counter"
export default function PostsLayaoyt({children}){
    return(
        <div>
            <Counter />
            <small>Home &bull; Posts</small>
            {children}
        </div>
    )
}