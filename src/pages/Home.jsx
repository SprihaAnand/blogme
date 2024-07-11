import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center bg-black text-white">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Posts Found
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-black text-white">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full mb-4">
                        <HeaderWithQuote />
                    </div>
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

function HeaderWithQuote() {
    // Example quote related to blogging
    const quote = "Blogging is not just about publishing content, it's about sharing your expertise and passion.";

    return (
        <div className="bg-black text-white py-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Blogging Journey</h2>
            <p className="text-lg mb-6">{quote}</p>
            <Link to="/add-post" className="bg-white text-black py-2 px-4 rounded-full inline-block hover:bg-gray-200 transition duration-300">
                Start Blogging
            </Link>
        </div>
    );
}


export default Home;
