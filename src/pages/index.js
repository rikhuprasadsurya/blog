import posts from '@/data/posts.json';
import Link from 'next/link';

export async function getStaticProps() {
    return { props: { posts } };
}

export default function Home({ posts }) {
    return (
        <div>
            <h1>My Blog</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
}
