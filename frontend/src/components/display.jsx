import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "./topbar";
import axios from "axios";
const Display =()=>{
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState([]);
   
    
    const Items=[
        {
            id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
        },
        {
            id: 2,
    title: "Best Man",
    description: "The best man to host a show",
    completed: true,
        }


    ]
    
    const fetchTodos = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/todos/');
          setTodoList(response.data);
        } catch (error) {
          console.error(error);
          console.error("yoolw");
        }
      };
      const deleteItem = async(id)=>{
        try{
        await axios.delete(`http://localhost:8000/api/todos/${id}/`
        )
        .then(response => {
          // handle success
          alert("sucess")
          
          console.log(response);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
        }
        catch(error){
            alert(error);
        }

      }
      useEffect(()=>{
        fetchTodos();
      })
    
    return(
<div className="h-screen w-full  bg-black">
    <TopBar/>
   <div className="grid grid-cols-3 gap-4 mt-8">

 
    
    
    
        {todoList.map((item)=>(
            
                <div className="text-white h-36 rounded-2xl bg-blue-200    " key={item.id}>
            
                 <h2>
                    Title: {item.title}
                 </h2>
                <h1 >
                    {item.description}
                   
                </h1>
                <h3>
                    completed: {item.completed? "True":"False"}
                </h3>
                <button className="rounded-2xl bg-red-400 " onClick={()=>{deleteItem(item.id)}}>Del</button>

            
            </div>
        ))}
        

    

        </div>
</div>
    )
}
export default Display;