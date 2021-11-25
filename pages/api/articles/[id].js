import { articles } from '../../../data';


export default function handler(req, res) { // destructure the query => id from the req object


    const id = req.query.id;
    // or we could desctrucure the req object
    // (req, res) to ({query: {id}}, res)

    // filter the post into a new array if the iteration.id === to the query.id
    const filtered = articles.filter((article) => article.id === id)


    if (filtered.length > 0) { // if exists then convert to json data
        res.status(200).json(filtered[0]) // filtered is an array so we need [0] => first item
    } else { // if doesnt exist
        res
            .status(404)
            .json({ message: `Article with the id of ${id} is not found` })
    }
}


// check the url for post 1 (id of 1) => http://localhost:3000/api/articles/1
// check the irl for post 2 (id of 2) => http://localhost:3000/api/articles/2
//etc
