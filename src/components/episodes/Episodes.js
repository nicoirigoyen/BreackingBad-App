import React, { useEffect, useState } from "react";
import "./Episodes.css";
import Spinner from "../Spinner";
import {addEpisodes} from "../../actions";
import {connect} from "react-redux";


function Episodes(props) {

  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    
    props.addEpisodes(query)
    setIsLoading(false);
    },[query])
  

  const handleChange = (q) => {
    setQuery(q)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }




  return (
    <div className="Episodes">
      <h1>Episodes List</h1>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <input
            className='inputSearch'
            type= 'text'
            placeholder='Search'
            onChange={((e)=> handleChange(e.target.value))}/> */}
      </form>

      <ul className="Episodes__list">
      {isLoading ? (
          <Spinner />
        ) : (
          
            props.episodes && props.episodes.map((i) =>
            <li className='list'>{i.title} - Season {i.season}</li>)

        )}
        
      </ul>  
    </div>
  );
}

function mapStateToProps(state){
  return {
    episodes : state.episodes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEpisodes: () => dispatch(addEpisodes())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
