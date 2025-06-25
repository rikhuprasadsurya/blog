import posts from '@/data/posts.json';

export async function getStaticPaths() {
    const paths = posts.map(post => ({
        params: { id: post.id }
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = posts.find(p => p.id === params.id);
    return { props: { post } };
}

export default function Post({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
