import useFetch from "../useFetch"

const Books = () => {
    const { data, loading, error } = useFetch('https://libra-core-sigma.vercel.app/books')

    const deleteHandler = async (bookId) => {
        try{
            const response = await fetch(`https://libra-core-sigma.vercel.app/books/${bookId}`, 
                {method: 'DELETE'}
            )
            if(!response.ok){
                throw 'Unable to delete Book.'
            }
            const data = await response.json()
            window.location.reload()
        }
        catch(error){
            console.log(error)
        }
    }
   
    return (
        <div>
            <h2>All Books</h2>
            <ul>
                {data?.map(book => (
                    <li key={book._id} >{book.title} <button onClick={() => deleteHandler(book._id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}


export default Books