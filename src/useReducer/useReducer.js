import React , {useReducer, useEffect, useState}from 'react';
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from '../component/Navbar';

const initialState = {
    posts : []
}

const reducer= (state,action)=>{
    switch(action.type){
        case 'GET_DATA':
            return{
                ...state,
                posts:action.payload
            }
        default:
            return state
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const compName = 'UseReducer '
    const fetchDetails = ()=>{
        fetch('https://api.punkapi.com/v2/beers')
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:'GET_DATA',payload:data})
        })
        .catch(err=>console.log(err))
    }


    useEffect(()=>{
       fetchDetails()
    },[])

    return (
        <div>
            <Header name={compName}/>
                        {state.posts.length!==0? 
            <div style={{padding:'2px 4px 2px 4px'}}>
                 <Table striped bordered hover variant="dark">
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
                            {state.posts.map(data=>{
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

        </div>
      );
}

export default UseReducer;