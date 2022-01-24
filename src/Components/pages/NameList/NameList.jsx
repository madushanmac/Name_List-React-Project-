import React ,{useEffect, useState} from "react";
import NameListItem from "./NameListItem";





function NameList(){

    const [loadData, setloadData]=useState(false);
    const [nameList, setNameList] = useState([
        {
            id:1,
        name: {
        title: "mr",first: "brad",last: "sanderson"},
        location: {street: "9278 new road",city: "kilcoole"},
        email: "brad.gibson@example.com",
        dob: {date: "1998-02-16",age: 22},
        picture:{medium: "https://randomuser.me/api/portraits/med/men/75.jpg"},
        },
        {
            id:2,
        name: {
        title: "mrs",first: "chamudyni",last: "hasanga"},
        location: {street: "81500 deniyaya road",city: "kiriwaldola"},email: "chamiduin@gmai.com",
        dob: {date: "1996-05-23",age: 26},
        picture:{medium: "https://randomuser.me/api/portraits/med/men/72.jpg"},
        },
        {
            id:3,
        name: {
        title: "mr",first: "kacholong",last: "samuwel"},
        location: {street: "new kandu road",city: "kiribathgoda"},email: "samuwel33@gmsil..com",
        dob: {date: "1999-10-12",age: 26},
        picture:{medium: "https://randomuser.me/api/portraits/med/men/70.jpg"},
        }
    

])

useEffect(()=>{
    fetch("https://randomuser.me/api").then((response)=>{
       return response.json();
    }).then((responseData) =>{
    setNameList(nameList=>[...nameList, responseData.results[0]]) // anonymus funtion
    })
},[loadData]);


const nameListComponent=()=>{
    return(
        nameList.map((aname =>{
            return(
            <NameListItem
            key={aname.id}
            name={aname.name.first}
            location={aname.location.city}
            avatar={aname.picture.medium}
            />
            );
        }))
        
    );
}
    const userHandler =()=>{

        setloadData(new Date());
     
}

    // const removeData = ()=>{
        
    // }

 

    return(
            <div>
                <div className="container mt-3">
                <button className="btn btn-primary mb-2" onClick={userHandler}> Add Name</button>
                    <li className="list-group">  
                       
                    {nameListComponent()}

                    </li>
                </div>
                   
               </div>
                    

    ); 

};


export default NameList;
