import React from "react";

function App() {
  const studentsjson='[
    {
      "student_id":101,
      "student_name":"Priya",
      "department":"computer science",
      "year":3
    },
    {
      "student_id":102,
      "student_name":"Dharshini",
      "department":"English",
      "year":2

    },
    {
    "student_id":103,
    "student_name":"Riya",
    "department":"Maths",
    "year":3
    },
    {
      "student_id":104,
      "student_name":"Ramya",
      "department":"computer science",
      "year":3
    },
    {
      "student_id":105,
      "student_name":"Abinaya",
      "department":"Maths",
      "year":3
    }
  ]';


//Parse the JSON string

const students=JSON.parse(studentsjson);


return(
  <div className='App' style{{padding:'20px',fontFamily:'Arial'}}>
  <h1>Student List</h1>
  <ul style={{liststyle:'none',padding:0}}>
    {students.map(student => (
      <li key={(student.id} style={{
        margin:'10px 0',
        padding:'10px',
        backgroundcolor:'#f0f0f0',
        borderRadios:'5px'
      }}>
      {student.student_name}
    
    ))}
  </ul>
  </div>
);
}
export default App;

