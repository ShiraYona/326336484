import { useEffect, useState } from "react"
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import {Calendar} from "./primereact/fieldes"
import Date2 from "./Date2"

export default function Date  () {
    const Navigate=useNavigate();
    const[start,setStart] = useState();
    const[end,setEnd] = useState();
    const[date,setDate] = useState();

    useEffect(()=>{startDate();
    },[])

    const startDate = async()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        var dates;
        await  fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`,requestOptions)
        .then(response=>response.json())
        .then((result)=>{setDate(result)})
        console.log(dates)
    }
    
    return(<>  
        <div className="app"> 
        <h1>Hello</h1>
        <Calendar placeholder="DateStart" dateFormat="dd/mm/yy" value={date} onBlur={((e)=>setStart(e.target.value))}></Calendar>
        <Calendar placeholder="DateEnd" dateFormat="dd/mm/yy" value={date} onBlur={((e)=>setStart(e.target.value))}></Calendar>
        <input type="Date" placeholder="הכנס תאריך התחלה" onBlur={((e)=>setStart(e.target.value))}></input>
        <input type="Date" placeholder="הכנס תאריך סיום" onBlur={((e)=>setEnd(e.target.value))}></input>
        <button onClick={()=>{Navigate(`/Date2/${start}${end}`)}}>Date </button>
        <button onClick={()=>startDate()}>Date111 </button>

        {/*
        <button onClick={
            date && date.map((date,key)=>{
                return(
                      
                        <tr key={key}>
                        <td>
                             {date.title}
                        </td>
                        </tr>
                    
                )
            })}>פרשת שבוע </button> */}
        {date && date.map((date,key)=>{
            return(<>
                     key={key}
                    <button onClick={date.title}>פרשת שבוע</button>
                </>
            )
        })}
        </div>
        </>
    )
}