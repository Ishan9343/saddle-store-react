import React,{useState} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Categories from "../productData/productPage";
import setData from "./product";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import Home from "./Home";
import About  from './about';
import Contact from "./Contact";
import Enquiry from "./Enquiry";
import Navbar from './navbar';
import Product from "./product";
import {Routes,Route} from "react-router-dom"


const Appj=()=>{
  const [filterValue, setFilterValue] = useState('');

    // Callback function to handle filter changes
    const handleFilterChange = (selectedType) => {
        // Update the filter value in the state
        setFilterValue(selectedType);
    };
  
  
   // Call the callback function from props
   // on filter change is a prop
  
   
    return (
        <>
       
        <Navbar  onFilterChange={handleFilterChange}/>
        <Routes>
        
            <Route exact path="/" Component={Home}/>
            <Route exact path="/product" element={<Product filterValue={filterValue} />} />
            
            <Route exact path="/about" component={About}/>
            <Route exact path="/enquiry" component={Enquiry}/>
            <Route exact path="/contact" component={Contact}/>
      
        </Routes>
      </>



    );




};
export default Appj;