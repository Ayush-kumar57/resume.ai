import { Dice1 } from 'lucide-react';
import React from 'react'

const ProjectForm = ({data, onChange}) => {
     const addProject=()=>{
            const newProject = {
               name:"",
               type:"",

            };
            onChange([...data,newEducation])

    }
    const removeProject =(index)=>{
        const updated = data.filter((_,i)=> i !== index);
        onChange(updated)

    }
     const updateProject =(index,field,value)=>{
        const updated = [...data];
        updated[index] ={...updated[index],[field]:value}
        onChange(updated)

    }

  return (
<div></div>
    
  )
}

export default ProjectForm