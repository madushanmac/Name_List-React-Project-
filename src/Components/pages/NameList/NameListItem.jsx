import React from "react";
import moment from "moment";


function NameListItem(props){
    return(
        <div className="list-group-item ">

            <div className="row align-items-center">
                <div className="col-2">
                <img src={props.avatar} alt={props.name} className="border border-info rounded-circle"/>
                </div>
                <div className="col-3">
                <p>  <h5>{props.name}</h5></p>
                <p className="fst-italic"> {props.location}</p>
                <p className="fst-italic"> {props.email}</p> 
                <p className="fst-italic"> { moment(props.birthday).format('DD-MM-YYYY')}</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"/>
</svg>
        
                </div>
            </div>
            
        </div>
    
    );
};
export default NameListItem;