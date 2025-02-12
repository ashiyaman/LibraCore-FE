import Books from "./components/Books"
import BooksByAuthor from "./components/BooksByAuthor"
import AddBookForm from "./components/AddBookForm"

export default function App(){
  return (
    <main>
      <AddBookForm/>
      <Books/>
      <BooksByAuthor author={'Sheryl Sandberg'}/>
      <BooksByAuthor author={'Phil Knight'}/>
    </main>
  )
}