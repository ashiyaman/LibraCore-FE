import useFetch from "../useFetch"

const Books = () => {
    const { data, loading, error } = useFetch('https://libra-core-sigma.vercel.app/books')
   
    return (
        <div>
            <h2>All Books</h2>
            <ul>
                {data?.map(book => (
                    <li key={book._id} >{book.title}</li>
                ))}
            </ul>
        </div>
    )
}


export default Books