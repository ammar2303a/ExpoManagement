import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function TicketsAdd() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [alltickets, setAllTickets]= useState([])


    const ticketSubmit = async (e) => {
        e.preventDefault();
        try {
            const ticketData = {
                name, price: Number(price), quantity: Number(quantity)
            }

            const token = localStorage.getItem('token')
           await axios.post("http://localhost:5000/api/ticket/create", ticketData, {
                headers: { Authorization: `Bearer ${token}` }
            
            })
            alert("Ticket Inserted")
            setName("")
            setPrice("")
            setQuantity("")
        } catch (error) {
        console.error(error);
         alert("Ticket creation failed");
        }
    }
    const fetchTickets = async ()=>{
     try {
       const res = await axios.get("http://localhost:5000/api/ticket/")
        setAllTickets(res.data.getTicket)
     } catch (error) {
      alert('Error fetching record Tickets:', error)
     }
    }
    useEffect(() =>{

            fetchTickets();
            
        },[])
  return (
    <div>
      <h2 className='text-center'>
        Manage Tickets
      </h2>
           {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Tickets
</button>

      <div className="container-fluid mt-4">
  <div className="card shadow-sm border-0 rounded-3">
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h5 className="mb-0 text-light">Table Title</h5>
      <span className="badge bg-light text-primary">Total Tickets: 0</span>
    </div>

    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table table-striped table-sm align-middle mb-0">
          <colgroup>
            <col style={{ minWidth: '150px' }} /> {/* Column 1 */}
            <col style={{ minWidth: '200px' }} /> {/* Column 2 */}
            <col style={{ minWidth: '150px' }} /> {/* Column 3 */}
            <col style={{ minWidth: '150px' }} /> {/* Column 4 */}
          </colgroup>

          <thead className="table-light">
            <tr>
              <th scope="col" className="text-nowrap">Name</th>
              <th scope="col" className="text-nowrap">Price</th>
              <th scope="col" className="text-nowrap">Quantity</th>
              <th scope="col" className="text-nowrap">Sold</th>
            </tr>
          </thead>

          <tbody>
            {alltickets.map((tic, index)=>(
              <tr key={index} >
              <td className="fw-semibold text-nowrap">{tic.name}</td>
              <td className="text-nowrap">{tic.price}</td>
              <td className="text-nowrap">{tic.quantity}</td>
              <td className="text-nowrap">{tic.sold}</td>
            </tr>
            ))}

            

            {/* No Data Message */}
            <tr>
              <td colSpan="4" className="text-center text-muted py-4">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <form onSubmit={ticketSubmit}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Speaker</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <div className="mb-3">
          <label className="form-label">Ticket Name</label>
          <input type="text" value={name} onChange={(e) =>setName(e.target.value)}  className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" value={price} onChange={(e) =>setPrice(e.target.value)}  className="form-control"  />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" value={quantity} onChange={(e) =>setQuantity(e.target.value)}  className="form-control"  />
        </div>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
    </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default TicketsAdd
