import React,{ useState } from "react";
import styled from "styled-components";


const Td = styled.td`
 padding : 0 15px;
`

const Question9 = ()=>{
    const [data,setData] = useState([{
        text:"",
        textarea:'',
        radio:' ',
        select:'op1',
        checkbox:false
    }])
    const [text,setText] = useState("")

    const insertRow = ()=>{
        setData((prevValue)=>{
            return [...prevValue,{
                text:'',
                textarea:'',
                radio:' ',
                select:'op1',
                checkbox:false
            }]
        })
    }

    const deleteRow = ()=>{
        setData([{
            text:' ',
            textarea:' ',
            radio:' ',
            select:'op1',
            checkbox:false
         }])
    }

    const updataData = (e,i)=>{
        // let val;
        // if(e.target.type === 'checkbox'){
        //     val = e.target.checked
            
        // }       
        // else{val = e.target.value}
        // const d = {...data[i],[e.target.name]:val} 
        // console.log(d)
        setText(e.target.value)
        let val= text
        const d = {...data[i],[e.target.name]:val}
        const dataCopy = [...data]
        setData(d)
    }

    const savedata = ()=>{
        console.log(data)
    }

    return (
        <>
            <table>
                <tbody>
                    {
                        data.map((detail,i) => {
                            return (
                                <tr key={i}>                                   
                                    <Td>
                                        <input type="text" name="text" value={text} onChange={(e)=>updataData(e,i)} />
                                    </Td>
                                    <Td>
                                        <textarea name="details" id="details" cols={15} rows={1}></textarea>
                                    </Td>
                                    <Td>
                                        rd1<input type="radio" name={`rd_${i}`} id={`rd1_${i}`} value="rd1"/>
                                        rd2<input type="radio" name={`rd_${i}`} id={`rd2_${i}`} value="rd2"/>
                                        rd3<input type="radio" name={`rd_${i}`} id={`rd3_${i}`} value="rd3"/>
                                    </Td>
                                    <Td>
                                        <select name="select" id="select" value={detail.select}>
                                            <option value="op1">op1</option>
                                            <option value="op2">op2</option>
                                            <option value="op3">op3</option>
                                        </select>
                                    </Td>
                                    <Td>
                                        <label htmlFor="check">checkbox</label>
                                        <input type="checkbox" name="check" id="check" checked={detail.checkbox} />
                                    </Td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            <button type="button" style={{margin:"10px"}} onClick={savedata} >Save</button>
            <button type="button" style={{margin:"10px"}} name="insert" onClick={insertRow}>Insert</button>
            <button type="button" style={{margin:"10px"}} name="populate">Populate</button>
            <button type="button" style={{margin:"10px"}} name="delete" onClick={deleteRow}>Delete</button>
            <button type="button" style={{margin:"10px"}} name="delete">Refresh</button>
            <br></br>
            <textarea name="result" cols={60} rows={4} style={{margin:"10px"}}></textarea>
        </>
    )
}
export default Question9;