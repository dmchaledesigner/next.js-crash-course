import { articles } from '../../../data' // bring in the data


// use the sample code from the hello.js file
export default function handler(req, res) {
    res.status(200).json(articles)
}
