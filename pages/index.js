import Head from 'next/head'
import { server } from '../config'; // this is the file from the config file folder

import ArticleList from '../components/ArticleList';


const Home = (props) => {




  return (
    <div>

      <h1>The Home page</h1>

      <ArticleList articles={props.articles} />
    </div>
  )
}



// data fetching using get static props to get the static data for the post list

// export const getStaticProps = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//   const data = await response.json();

//   return {
//     props: {
//       articles: data,
//     }
//   }
// }


export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const data = await response.json();

  return {
    props: {
      articles: data,
    }
  }
}



export default Home;
