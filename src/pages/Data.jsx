// import useStore from "../store/store"
// export default function Data(){
//     const {username}=useStore();
//     // const {sub1,sub2,sub3,sub4,sub5} = Data()
//     const handletable=(e)=>{
//         (e).preventDefault();
//         if(sub1&&sub2&&sub3&&sub4&&sub5){
//             <table>
//                 <tr>
//                     <th></th>
//                 </tr>
//             </table>
//         }
//     }
//     return (<><h1>Welcome {username}</h1>
//     <form onSubmit={handletable}>
//     <div>
//         <div><input type="number" placeholder="subject1" value={sub1} onChange={(e)=>setsub1(e.target.value)}/></div>
//         <br />
//         <div><input type="number" placeholder="subject2" value={sub2} onChange={(e)=>setsub1(e.target.value)}/></div>
//         <br />
//         <div><input type="number" placeholder="subject3" value={sub3} onChange={(e)=>setsub1(e.target.value)}/></div>
//         <br />
//         <div><input type="number" placeholder="subject4" value={sub4} onChange={(e)=>setsub1(e.target.value)}/></div>
//         <br />
//         <div><input type="number" placeholder="subject5" value={sub5} onChange={(e)=>setsub1(e.target.value)}/></div>
//         <br />
//         <button type="submit">Submit</button>
//     </div>
//     </form></>
//     )

// } 
import { useState } from "react";
import useStore from "../store/store";
import "../styles/Data.css";
export default function Data() {
    const { username } = useStore();
    const [sub1, setSub1] = useState("");
    const [sub2, setSub2] = useState("");
    const [sub3, setSub3] = useState("");
    const [sub4, setSub4] = useState("");
    const [sub5, setSub5] = useState("");
    const [marks, setMarks] = useState([]);

    const handleTable = (e) => {
        e.preventDefault();
        
        if (sub1 && sub2 && sub3 && sub4 && sub5) {
            setMarks([
                { subject: "Subject 1", marks: sub1 },
                { subject: "Subject 2", marks: sub2 },
                { subject: "Subject 3", marks: sub3 },
                { subject: "Subject 4", marks: sub4 },
                { subject: "Subject 5", marks: sub5 }
            ]);
            setSub1("");
            setSub2("");
            setSub3("");
            setSub4("");
            setSub5("");
        } else {
            alert("Please enter all subject marks.");
        }
    };

    return (
        <>
            <h1>Welcome {username}</h1>
            <form onSubmit={handleTable}>
                <div>
                    <input type="number" placeholder="Subject 1" value={sub1} onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setSub1(value);
            }} />
                    <br />
                    <input type="number" placeholder="Subject 2" value={sub2} onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setSub2(value);
            }}/>
                    <br />
                    <input type="number" placeholder="Subject 3" value={sub3} onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setSub3(value);
            }}/>
                    <br />
                    <input type="number" placeholder="Subject 4" value={sub4} onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setSub4(value);
            }}/>
                    <br />
                    <input type="number" placeholder="Subject 5" value={sub5} onChange={(e) => {
                const value = Math.max(0, Math.min(100, e.target.value));
                setSub5(value);
            }}/>
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>

            {marks.length > 0 && (
                <table border="1" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marks.map((item, index) => (
                            <tr key={index}>
                                <td>{item.subject}</td>
                                <td>{item.marks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
