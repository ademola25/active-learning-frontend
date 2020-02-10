import React, { Component } from 'react';
import { bookService } from '../../services';
import { specialOfferService } from '../../services';
import sampleImage from '../../assets/book.png';
import './home.styles.scss';

class Home extends Component {
 

    constructor(props) {
      super(props);
  
      this.state = {
        booklist:[],
        specialofferlist:[]
       
      };
    }

    componentDidMount() {
     this.fetchBooks()
     this.fetchSpecialOffer()
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

 fetchSpecialOffer = async () => {
  try{
    const response = await bookService.fetchSpecialOffer();
     this.setState({specialofferlist:response.data})
     console.log(response)

  }catch(err){
    console.log(err)
  }
}
buyBook = async(e,id) => {
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
      //const { auth } = this.props
      var user = JSON.parse(localStorage.getItem('user'));
      const { booklist, specialofferlist } = this.state;
      let filteredBookList = booklist.filter(book => book.purchased === 0);
      filteredBookList.length = 3;
      specialofferlist.length = 3;
return (
  
  <div className="container">
  <div className="user">
  <h4> welcome, { user.name }</h4>
  </div>
    <div className="row">
       <div className="col-md-6"> 
      <h3>Recently Added</h3>
      {filteredBookList? filteredBookList.map(book => {
        return (
          <div className="card" key={book.id}>
          <div className="card-body">
            <img height="" src={sampleImage} className="card-title"/>
            <p className="card-text">{book.title}</p>
            <p className="card-text">{book.published_date}</p>
            <a href="#" className="btn btn-primary" onClick={(e) => this.buyBook(e,book.id)}>Buy</a>
          </div>
          </div>
        );
      }):
      null}
      {/* <div className="card">
      <div className="card-body">
        <h5 className="card-title">BOOK PICTURE</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">BOOK PICTURE</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">BOOK PICTURE</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div> */}
       </div>
      <div className="col-md-6">
      <h3>Special Offer</h3>
      {specialofferlist? specialofferlist.map(book => {
        return (
      <div className="card" key={book.special_offer}>
      <div className="card-body">
      <img height="" src={sampleImage} className="card-title"/>
            <p className="card-text">{book.title}</p>
            <p className="card-text">{book.published_date}</p>
            <a href="#" className="btn btn-primary"  onClick={(e) => this.buyBook(e,book.id)}>Buy</a>
      </div>
    </div>
     );
    }):
    null}
        
     {/* <div className="card">
      <div className="card-body">
        <h5 className="card-title">BOOK PICTURE</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">BOOK PICTURE</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div> */}
        
        
      </div>
    </div>
  </div>
  );
}
}
  
  export default Home;