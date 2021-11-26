
// this is the file we create to conditionally change our url
// we import it where we are calling our fetch as an import
// import {server} from '../config'
// then in the fetch call we simply chage the abolute url to 
// export const getStaticProps = async () => {
//     const response = await fetch(`${server}/api/articles`);
//     const data = await response.json();

//     return {
//       props: {
//         articles: data,
//       }
//     }
//   }


const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'http:mysite.com';
