import React, { useState } from 'react'
import {useHarperDB} from 'use-harperdb'

import classes from './Wishes.module.css'
const Wishes = () =>{

    const [wishId, setWishId] = useState(0)
    const [fromCandidate,setCandidate] = useState(true)
// eslint-disable-next-line
    let [data,loading,error,refresh] = useHarperDB({
        query : {
            operation : 'sql',
            sql : 'select * from project.wishes'
        },
        // interval : 
    })
    
    const studentWishIdHandler = () => {
        let wishNum = Math.floor(Math.random() * 30);
        setWishId(wishNum)
        setCandidate(true)
    }
    const candidateWishIdHandler = () => {
        let wishNum = Math.floor(Math.random() * 30);
        setWishId(wishNum)
        setCandidate(false)
    }
    
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        console.log('[error]' + error)
    }
    if(data && data.length>0){
        return(
            <div className ={classes.Container}>
                
                <button className = {classes.studentButton} onClick ={() => studentWishIdHandler()}>Exam 📝</button>
                <button className = {classes.candidateButton} onClick ={() => candidateWishIdHandler()}>Interview 💼</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 className = {classes.Wish}>{fromCandidate ? data[wishId].student_wishes : data[wishId].candidate_wishes}</h2>
            </div>
        )
    }
    else{
        return <div>{error}</div>
    }
}

export default Wishes


/*
  if(loading){
        return <div>Loading...</div>
    }
    if(data && data.length>0){
        return(
            <div>
            <table>
                <thead>
                    <tr>
                        <id>Wish Id</id>
                        <td>wishes for students</td>
                        <td>Wishes for candidates</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((wish,index) =>{
                        return(
                            <tr>
                                <td>{wish.id}</td>
                                <td>{wish.student_wishes}</td>
                                <td>{wish.candidate_wishes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick = {refresh}>Refresh</button>
        </div>
        )
    }
    else{
        return <div>{error}</div>
    }


*/