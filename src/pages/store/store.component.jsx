import React from 'react';
import { bookService } from '../../services';
import sampleImage from '../../assets/book.png';
import './store.styles.scss';

class StorePage extends React.Component {
 

  constructor(props) {
    super(props);

    this.state = {
      booklist:[]
    };
  }

  componentDidMount() {
   this.fetchBooks()
     }

fetchBooks = async () => {
 try{
    const response = await bookService.fetchBooks();
    this.setState({booklist:response.data})
    console.log(response)

 }catch(err){
   console.log(err)
 }
}      

buyBook = async(e, id) => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem('user'));
  alert(`This is the user_id of user ${user.id} and id of book ${id}`)
    // try{
  //const payload = {user_id:user.id,book_id:id}
  //   const response = bookService.buyBooks(payload);
  //   console.log(response);
  // }catch(err){
  //   console.log(err)
  // }
}

render() {
  const { booklist} = this.state;
  let filteredBookList = booklist.filter(book => book.purchased === 0);
  
return (
    <div className="container">
    <div className="head">
    <h3>Book Store</h3>
    </div>
    <div class="row">
    {filteredBookList? filteredBookList.map(book => {
        return (
  <div class="col-sm-4">
 
    <div class="card" key={book.id}>
      <div class="card-body">
      <img height="" src={sampleImage} className="card-title"/>
      <p className="card-text">{book.title}</p>
            <p className="card-text">{book.published_date}</p>
            <a href="#" className="btn btn-primary" onClick={(e) => this.buyBook(e,book.id)}>Buy</a>
      </div>
    </div>
   
  </div>
 );
}):
null}
</div>
</div>
  );
}
}
  
  export default StorePage;