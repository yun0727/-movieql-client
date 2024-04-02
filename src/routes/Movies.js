import { useQuery, gql } from "@apollo/client";

const All_MOVIES = gql`
  query getMovies{
    allMovies{
      title
      id
    }
    allTweets{
      id
      text
      author{
        fullName
      }
    }
  }`

export default function Movies(){
  const {data, loading, error} = useQuery(All_MOVIES)
  if (loading){
    return <h1>Loading...</h1>
  }
  if (error){
    return <h1>Could not fetch</h1>
  }
  return(
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie)=>(
        <li key={movie.id}>{movie.title}</li>
      ))}
      <h1>Tweets</h1>
      {data.allTweets.map((tweet)=>(
        <li key={tweet.id}>
          {tweet.text}/by : {tweet.author.fullName}
        </li>
      ))}
    </ul>
  )

}