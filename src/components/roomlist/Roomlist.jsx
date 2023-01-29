import React,{useState,useEffect} from 'react';

const Roomlist = () => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    
    fetch('http://127.0.0.1:5000/api/hotels/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
       
      });
  }, []);

	return (
		<div>

		 <div id="rooms">
            <div className="container">
                <div className="section-header">
                    <h2>Our Rooms</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                 {data.map(item => (
                    <div className="col-md-12" key={item.id}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="room-img">
                                    <div className="box12">
                                        <img src="img/room/room-1.jpg"/>
                                        <div className="box-content">
                                            <h3 className="title">Standard Single</h3>
                                            <ul className="icon">
                                                <li><a href="#" data-toggle="modal" data-target="#modal-id"><i className="fa fa-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="room-des">
                                    <h3><a href="#" data-toggle="modal" data-target="#modal-id">Standard Single</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <ul className="room-size">
                                        <li><i className="fa fa-arrow-right"></i>Size: 260 sq ft </li>
                                        <li><i className="fa fa-arrow-right"></i>Beds: 2 Single(s) </li>
                                    </ul>
                                    <ul className="room-icon">
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
                                    <h3>From</h3>
                                    <h1>$150</h1>
                                    <a href="#">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                     ))}
                    
                </div>
            </div>
        </div>

		</div>
	)
}

export default Roomlist;