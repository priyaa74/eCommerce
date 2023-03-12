import { useState } from "react";
import './CodeChPage.css';
import Navbar from "../components/Navbar";
const CodeChPage = () =>{
    

    const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
   
    
    check();
  };
 
const check = () =>{
   // console.log(updated);
    var arr=message.split(',');
    console.log(arr);
    var nums = arr.map(toNumber);
    console.log(nums);
    setUpdated(solution(nums));
}
   
function toNumber(value) {
    return Number(value);
 }

function solution(A)
{
    let n = A.length;
    
    let present = new Array(n+1);
     
     
    for(let i=0;i<n+1;i++)
    {
        present[i]=false;
    }
    
    for (let i = 0; i < n; i++)
    {
        
        if (A[i] > 0 && A[i] <= n)
        {
            present[A[i]] = true;
        }
    }
   

    for (let i = 1; i <= n; i++)
    {
        if (!present[i])
        {
            return i;
        }
    }
    
    return n + 1;
}


    return(
        <>
        <Navbar/>
        <div className="Container">
        <div className="head">
            <p><b>Code Challenge</b></p>
            <div className="desc">
                <div className="summary">
                <p>
                    Write a function :</p>
                   <p> function solution(A); </p>
                 <p>   That, given an array A of N integers, returns the smallest positive integer (greater than 0)</p>
                   <p> that does not occur in A.</p>
                   <p> For example, given A = [1,3,6,4,1,2], the function should return 5.</p>
                  <p>  Given A = [1,2,3], the function should return 4.</p>
                   <p> Given A = [-1,-3], the function should return 1.</p>
                   <p> Write an efficient algorithm for the following assumptions: </p>
                  <p>  N is an integer within the range [1..100,000]; </p>
                  <p>  each element of array A is an integer within the range [-1,000,000..1,000,000]. </p>

                  </div>

            </div>
        </div>


        <div className="DataCollection">
            <p><b>Data Collection</b></p>
        <div className="algo">
            <div className="algo-form">
                <div>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Input"
        onChange={handleChange}
        value={message}
      />
      <p>enter the values with comma(,)seperator eg: 1,3,6,4,1,2</p>
      </div>
        <button onClick={handleClick}>Print Result</button>
        </div>
     

      <h2> <b>Output</b>  </h2> <input id="output" type="text" value={updated} disabled/> 

      
        </div>
          
        </div>
        <div className="note-parent">
            <p><b>Note:</b></p>
        <div className="notes">
            <p>* you need to read the data from above input and convert that values into array eg: 1,3,6,4,1,2 will be [1,3,6,4,1,2].</p>
            <p> * use above converted array as a input  to tour solution function </p>
            <p>* Display the output result in above output section once you called solution function and get the result.</p>
        </div>
        </div>
        </div>
      
        </>
    )
}
export default CodeChPage;