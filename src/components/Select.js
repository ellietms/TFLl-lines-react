import React,{useEffect,useState} from 'react';
import Mode from './Mode';
import 'bootstrap/dist/css/bootstrap.css';



const Select = ({dataTfl,handleNameVehicle,nameVehicle}) => { 
    return(
    <div className="form-group">
    <select 
    className="form-control my-4 mb-5 mx-auto"
    onChange={(event) => handleNameVehicle(event)}>
    <option> Choose a Mode of Transport...</option>  
    {dataTfl.map((eachVehicle,index) => 
    <option 
       key={index} 
       className="text-center"> 
    {eachVehicle.modeName}
    </option>
   )
   }
   </select>   
    <Mode 
     handleNameVehicle = {handleNameVehicle}
     nameVehicle={nameVehicle}
     />
    </div> 
)
}


export default Select;