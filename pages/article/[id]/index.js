import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '../../../config';
import Meta from '../../../components/Meta';

const articleTemplate = (props) => {

    const { id, title, body } = props.singlePost;

    const router = useRouter();
    console.log(router);



    return (
        <>
            <Meta title={title} />

            <h1>{title}</h1>
            <p>{body}</p>
            <Link href="/">Go back</Link>

        </>
    )
}




// getServerSideProps is used to make a call to return the specific post ID
export const getServerSideProps = async (context) => {
    const response = await fetch(`${server}/api/articles/${context.params.id}`);
    // console.log(context) => this will show in the vsCode terminal 
    // console.log(context.params.id)

    const article = await response.json();
    // console.log(article);

    if (!article) {
        return {
            notFound: true,
        }
    }


    return {
        props: {
            singlePost: article,
        }
    }
}

export default articleTemplate;
