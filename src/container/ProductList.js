import axios from 'axios';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/Products-action';

function ProductList() {
    const products = useSelector(state=>state.product);
   
    const dispatch = useDispatch();
    const fetchproducts=async()=>{
        const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("error", err)
        });
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchproducts()
    } ,[]);
    

    return (
        <div>
           <ProductComponent/>
        </div>
    )
}

export default ProductList
