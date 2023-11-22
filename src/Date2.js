import { useParams } from "react-router-dom";
import { Fieldset } from 'primereact/fieldset';


export default function Date2(){ 
    // const AddProduct = () => {
    //     navigate(`/Date`)
    const myParams=useParams();
    // alert("hello to: "+myParams.name);  
    return(<div>
        <h1>Hello</h1>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/fieldset/fieldset.min.js"></script>
        <Fieldset legend="Header">
        </Fieldset>
 
                 {/* <button onClick={
            date&&date.map((date,key)=>{
                return(
                    <table>   
                        <tr key={key}>
                        <td>
                             {date.title}
                        </td>
                        </tr>
                    </table>
                )
            })}>פרשת שבוע </button> */}
            </div>
    )

}


