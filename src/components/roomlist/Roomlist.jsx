import React,{useState} from 'react';
import useFetch from '../../hooks/useFetch.js';
import {Link} from 'react-router-dom';

const Roomlist = (props) => {
    const data = props.data

    const loading = props.loading
  //const {data, loading ,error} = useFetch("http://127.0.0.1:3001/api/rooms");

console.log(data)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

   const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 

  // useEffect(() => {
    
  //   fetch('http://127.0.0.1:5000/api/rooms')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => {
       
  //     });
  // }, []);

	return (
		<div>

        {loading.loading ? (
            "Please Wait"

            ) : (


        <>
		 <div id="rooms">
            <div className="container">
                <div className="section-header">
                    <h2>Our Rooms</h2>
                    <p>
                       Book Rooms from Us
                    </p>
                </div>
                <div className="row">
                 {currentItems.map(item => (
                    <div className="col-md-12" key={item.id}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="room-img">
                                    <div className="box12">
                                        <img src={item.photos}/>
                                        <div className="box-content">
                                            <h3 className="title">Standard Single</h3>
                                            <ul className="icon">
                                                <li><a href="#" data-toggle="modal" data-target="#modal-id"><i className="fa fa-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" key={item.id}>
                                <div className="room-des">
                                    <h3><a href="#" data-toggle="modal" data-target="#modal-id">{item.title}</a></h3>
                                    <p>{item.desc}</p>
                                    <ul className="room-size" key={item.id}>
                                        <li><i className="fa fa-arrow-right"></i>Max Persons: {item.maxPeople} </li>
                                    </ul>
                                    <ul className="room-icon" key={item.id}>
                                        <li className="icon-1"></li>
                                        <li className="icon-2"></li>
                                        <li className="icon-3"></li>
                                        <li className="icon-4"></li>
                                        <li className="icon-5"></li>
                                        <li className="icon-6"></li>
                                        <li className="icon-7"></li>
                                        <li className="icon-8"></li>
                                        <li className="icon-9"></li>
                                        <li className="icon-10"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="room-rate">
                                    <h3>Price</h3>
                                    <h1>${item.price}</h1>
                                    <Link to={`/room-details/${item._id}`}>Book Now</Link>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                     ))}
                    
                </div>
                 <ul className="pagination">
                {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
                  (pageNumber) => (
                    <li key={pageNumber}>
                      <a
                        href="#"
                        onClick={() => {
                          paginate(pageNumber + 1);
                        }}
                        className={currentPage === pageNumber + 1 ? "active" : ""}
                      >
                        {pageNumber + 1}
                      </a>
                    </li>
                  )
                )}
      </ul>
            </div>
        </div>
        </>

        )}

		</div>
	)
}

export default Roomlist;