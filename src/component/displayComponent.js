import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getDetails} from '../redux/Actions'
import {Table, Button} from 'react-bootstrap'
import Pagination from './Pagination';
import _ from 'lodash'
import { Link } from 'react-router-dom';
import Header from './Navbar';

function DisplayComponent() {

    const datas = useSelector(state=>state.details)
    const dispatch  = useDispatch()

    const [flag,setFlag] = useState(false)
    const [paginated, setPaginated] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const compName = 'Table Data'
    const fetchDetails = ()=>{
        fetch('https://api.punkapi.com/v2/beers')
        .then(res=>res.json())
        .then(data=>{
            dispatch(getDetails(data))
            setFlag(true)
            setPaginated(_(data).slice(0).take(pageSize).value())
        })
        .catch(err=>console.log(err))
    }


    useEffect(()=>{
       fetchDetails()
    },[flag])

    const pageSize = 10
    const pageCount= datas.length > 1 ? Math.ceil(datas.length/pageSize) : 0
    if(pageCount===1) return null
    const pages = _.range(1,pageCount+1)
  

    return (  
        <div>
            <Header name={compName}/>

            {flag? 
            <div style={{padding:'2px 4px 2px 4px'}}>
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr>
                            <th> Name</th>
                            <th>Description</th>
                            <th>Tagline</th>
                            {/* <th>Image</th> */}
                            <th>Food Pair 1</th>
                            <th>Food Pair 2</th>
                            <th>Food Pair 3</th>
                            <th>Contributer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map(data=>{
                                const short = String(data.description).slice(0,50)
                                const index = String(data.contributed_by).indexOf('<')
                                const contributer = String(data.contributed_by).slice(0,index)
                                return(
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{short+' ...'}</td>
                                    <td>{data.tagline}</td>
                                    {/* <td> <img src={data.image_url} alt="" border={3} height={100} width={100} /> </td> */}
                                    {data.food_pairing.slice(0,3).map(item=><td>{item}</td>)}
                                    <td>{contributer}</td>
                                </tr>
                                )
                            })}
                            
                            
                        </tbody>
                </Table>
                </div>
                : 'Loading ...'}

               <Pagination 
               setPaginated={setPaginated} 
               setCurrentPage={setCurrentPage}
               pages = {pages}
               currentPage= {currentPage}
               datas = {datas}
               pageSize= {pageSize}

               />
               
        </div>
    );
}

export default DisplayComponent;