import useFetch from "../useFetch"

const BooksByAuthor = ({author}) => {
    const { data, loading, error } = useFetch(`https://libra-core-sigma.vercel.app/books/author/${author}`)
    console.log(data)

    return (
        <div>
            {data ? (
                <div>
                    <h2>{author}</h2>
                    {data.map(book => <li key={book._id}>{book.title}</li>)}
                </div>
            ) : (
                loading && <p>Loading....</p>
            )}
        </div>
    )
}

export default BooksByAuthor