import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';



const Mode = ({dataTfl,handleNameVehicle,nameVehicle}) => {
   const [dataForMode,setDataForMode] = useState(0);
    // useEffect(()=> {})
    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/Line/Mode/${nameVehicle}`)
         .then(res => res.json())
         .then(data => {setDataForMode(data)})   
         .catch(() => "Can’t access  to the response.")
        })
return(
    <div className="form-group">
    <select 
    className="form-control my-4 mb-5 mx-auto"
    onChange={(event) => handleNameVehicle(event)}>
    <option> Mode of Transport...</option>  
    {dataForMode.map((eachVehicle,index) => {
    return(
    <option 
       key={index} 
       className="text-center"> 
    {eachVehicle.modeName}
    </option>
    )}
   )}
   </select>
    </div>
)
}


export default Mode;