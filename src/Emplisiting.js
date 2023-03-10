import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./component/Pagination"

function Emplisiting() {
  const [post,setPost]=useState([]);
  const navigate=useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(25);
  useEffect(()=>{
    axios.get('http://localhost:8000/post')
    .then((res)=>{
      setPost(res.data)
    })
  },[])
  console.log(post)


  const loadEdit=(id)=>{
    navigate(`/Edit/${id}`)
  }    
  const remove=(id)=>{
    if(window.confirm('Do You Want Remove This Element?')){
      axios.delete(`http://localhost:8000/post/${id}`,).then((res)=>{
            alert('Removed success')
            window.location.reload()
        })
    }
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = post.slice(indexOfFirstRecord, 
    indexOfLastRecord);
    const nPages = Math.ceil(post.length / recordsPerPage)
    

  return (
    <div>
      <h1>CRUD APPLICATION</h1>
      <table className="table responsive" id="sort">
          <thead>
              <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">body</th>
                  <th scope="col">action</th>
              </tr>
          </thead>
          <tbody>
                {currentRecords.map(ele=>(
                    <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.body}</td>
                        <td>
                          <a onClick={()=>{loadEdit(ele.id)}} className="btn btn-success">Edit</a>
                          <Link to='/Add' className="btn btn-danger">Add</Link>
                          <a onClick={()=>remove(ele.id)} className="btn btn-primary">Delete</a>
                        </td>
                    </tr>
                ))}
                
        </tbody>
      </table>
      <Pagination
          nPages = { nPages }
          currentPage = { currentPage } 
          setCurrentPage = { setCurrentPage }
      />
    </div>
  )
}

export default Emplisiting