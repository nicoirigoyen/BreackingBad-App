import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./CharacterDetail.css";
import {connect} from 'react-redux';
import {getCharacterDetails} from "../../actions";

function CharacterDetail(props) {
   const {id} = useParams();
   useEffect(() =>{
    props.getCharacterDetails(id);
   },[id])
   



  return (
    <div className="CharacterDetail">
      <h1>Character Detail</h1>
      
      <h3>{props.charactersdetail.name}</h3>
      <h4>{props.charactersdetail.category}</h4>

      <img className="CharacterDetail__Photo" src={props.charactersdetail.img} alt='' />
   
    </div>
  );
}

function mapStateToProps(state){
  return {
    charactersdetail : state.characterdetail
  
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getCharacterDetails:(id)  => dispatch(getCharacterDetails(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
