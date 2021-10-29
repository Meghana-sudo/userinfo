import "./App.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";

function App() {

  const [users, setUser] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  

  const getUser = async () => {
    const response = await fetch("https://reqres.in/api/users/");
    const json = await response.json();
    setUser(json.data);
  };


  


  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2 className="heading">Welcome to the list of Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">

        
          {users.length &&
            users.map((item) => {
              console.log(item)
              return (
                <div className="col-10 col-md-10 mt-5" key={item.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        {" "}
                        <img
                          src={item.avatar}
                          className="rounded"
                          width="155"
                        />{" "}
                      </div>

                      <div className="p-2 mt-2  bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <strong>
                            {item.first_name} {item.last_name}
                          </strong>
                        </div>
                      </div>

                      <div className="d-flex flex-column">
                        <button
                          type="button"
                          onClick={() => setModalIsOpen(true)}
                          class="btn btn-secondary  btn-sm"
                        >
                          Know More
                        </button>
                        
                        <Modal
                        
                          isOpen={modalIsOpen}
                          shouldcloseonOverlay={false}
                          ariaHideApp={false}
                          onRequestClose={() => setModalIsOpen(false)}
                        >
                        <div className="flex">
                        <table align="center">
                        <tr>
                        <td>Id</td>
 <td>Fullname</td>
 <td>Email</td>
 <td>Image</td>
 
 </tr>
 <tr>
   <td>{item.id}</td>
   <td>{item.first_name}{item.last_name}</td>
   <td>{item.email}</td>
   <td><div className="d-flex flex-column">
                      <div className="image">
                        {" "}
                        <img
                          src={item.avatar}
                          className="rounded-detail"
                          width="155"
                        />{" "}
                      </div>
                      </div></td>
   
 </tr>
 </table>
                     
       <div>
       <button  className="mbtn" onClick={()=>setModalIsOpen(false)}>Close</button>
       </div>
      </div>
                          
                        </Modal>




                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
     
    </div>
   
   
    
    
  );
}
export default App;


