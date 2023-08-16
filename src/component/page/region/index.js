import axios from 'axios'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import Swal from "sweetalert2";



let Region = () => {
    const [ data, setData ] = useState([{}])
    const [ show, setShow ] = useState(false)
    const [ id, setId ] = useState(0)
    const [ name, setName ] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ status, setStatus ] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8088/api/region"
        }).then((response) => {
            setData(response.data.data)
            console.log()
        }).catch((error)=> {
            console.log(error)
        })
    }, [])


    const onSubmit = () => {
        handleClose();

        let requestData = {
            "id" : id,
            "name": name
        }
        axios({
            method: editData ? "POST" : "POST", // Tetap menggunakan POST untuk keduanya
            headers: {
              'Content-Type': 'application/json',
            },
            url: "http://localhost:8088/api/region",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              setStatus(true);
            }
          }).catch((error) => {
            console.log(error);
          }).finally(() => {
            setStatus(false);
            setEditData(null);
          });
        
        
    }

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios({
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                url: "http://localhost:8088/api/region/"+ id,
            }).then((response) => {
                if(response.data.status === 200){
                    setStatus(true)
                }
            }).catch((error)=> {
                console.log(error)
            }).finally(()=>{
                setStatus(false)
            })
      
            Swal.fire("Deleted!", "Your data has been deleted.", "success");
          }
        });
      };

      const handleEdit = (rowData) => {
        setEditData(rowData);
        setId(rowData.id);
        setName(rowData.name);
        handleShow();
      }

    return (
    <div>
        <button onClick={handleShow}>CREATE</button>
        <table className="table">
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>ACTION</th>
            </thead>
            <tbody>
                {data.map(x => {
                    return (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td><button onClick={() => handleEdit(x)}>Edit</button> | <button onClick={() => handleDelete(x.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title><Modal.Title>
            {editData ? "Edit Region" : "Create Region"}
            </Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <label htmlFor="id">ID :</label>
            <input value = {id} type="text" id="id" name="id" onChange={e => setId(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="name">Region Name :</label>
            <input value = {name} type="text" id="name" name="name" onChange={e => setName(e.target.value)}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
            Save Changes
            </Button>
        </Modal.Footer>
</Modal>

    </div>
   

    
    )
}

export default Region;