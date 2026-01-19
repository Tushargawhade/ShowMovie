import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./Loading";
import HorizontalCads from "../components/Templates/HorizontalCards";


const PersonDetail = () => {

    const { info } = useSelector((state) => state.person);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { id } = useParams();
  
    console.log(info);
  
    useEffect(() => {
      dispatch(asyncloadperson(id));
  
      return () => {
        dispatch(removeperson());
      };
    }, [id]);
  





  return  info ? (

    <div>

      <h1 className="text-zinc-100">
        Person Details
      </h1>
     
    </div>

    ): 

    <Loading />
  ;
   
}

export default PersonDetail
