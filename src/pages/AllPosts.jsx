import {useState, useEffect} from 'react'
import { PostCard, Container } from '../components'
import appwriteService from "../appwrite/config"

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })} , [])
    

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <PostCard key={post.$id} post={post}/>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts