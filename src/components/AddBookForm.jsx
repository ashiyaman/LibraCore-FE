import { useState } from "react"

const AddBookForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      author: '',
      publishedYear: '',
      genre: '',
      language: '',
      country: '',
      rating: '',
      summary: '',
      coverImageUrl: ''
    })

    const changeHandler = (event) => {
        const {name, value} = event.target
        event.preventDefault()
        setFormData((prevState) => ({
            ...prevState,
            [name]: (name === 'publishedYear' || name === 'rating') ? parseInt(value) : value
        }))
    }

    const submitHandler = async(event) => {
        event.preventDefault()
        try{
            const response = await fetch('https://libra-core-sigma.vercel.app/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify(formData)
            })
            if(!response.ok){
                throw 'Failed to add Book.'
            }
            const data =  await response.json()
            console.log('Book added.', data)
        }
        catch(error){
            throw error
        }
    }

    return(
        <div>
            <h2>Add Books</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor='title'>Title: </label><br/>
                <input type='text' name='title' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='author'>Author: </label><br/>
                <input type='text' name='author' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='publishedYear'>Published Year: </label><br/>
                <input type='number' name='publishedYear' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='genre'>Genre: </label><br/>
                <input type='text' name='genre' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='language'>Language: </label><br/>
                <input type='text' name='language' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='country'>Country: </label><br/>
                <input type='text' name='country' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='rating'>Rating: </label><br/>
                <input type='number' name='rating' onChange={changeHandler}/>
                <br/>
                <br/>
                <label htmlFor='summary'>Summary: </label><br/>
                <textarea type='text' name='summary' row='5' cols='50' onChange={changeHandler}></textarea>
                <br/>
                <br/>
                <label htmlFor='coverImageUrl'>CoverImageUrl: </label><br/>
                <input type='text' name='coverImageUrl' onChange={changeHandler}/>
                <br/>
                <br/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default AddBookForm