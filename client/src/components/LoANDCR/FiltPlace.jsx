import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import useQueryParam from "../useQueryParam";
import Hint from '../Accsisoiris/Hint';
import {Message} from '../Accsisoiris'
import axios from 'axios';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link, useNavigate  } from 'react-router-dom';
function FiltPlace() {
  const baseURL = 'http://localhost:3000/api';
  const paramsName = useQueryParam('vanluesname');
  const paramsID = useQueryParam('id');
  const ver = useQueryParam('ver');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirm, setconfirm] = useState('');
  const [Continue, setContinue] = useState(true)
  const [Continue2, setContinue2] = useState(false)
  const [errMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();
  const [BgClolrMe, setBgClolrMe] = useState('bg-red-600')
  const [ControlleM, setControlleM] = useState('top-[-15rem]');
  const [firstName, setfirstName] = useState('')

  const handlSubmit = async (event) => {
    event.preventDefault();
    if(Continue2){
    try {
        const token = localStorage.getItem('token')
        const response = await axios.put(`${baseURL}/${paramsID}`, {
          email,
          password,
          
        }, {headers:{
          Authorization: `Bearer ${token}`
        }})
        console.log(response.data.accounts)
        console.log(response.status)
        console.log(response.data.status)
        console.log(token);
        if(response.status !== 500){
          const {email, password, _id:accountID2} = response.data.accounts;
          const {firstname, verification} = response.data.decode
          //// urling responce ///
          const url = `/dashboard?name=${firstname}&ine=${accountID2}&lg=dz`;
          setControlleM('top-[-15rem]')
          /// cheacking the name /// 
          setfirstName(firstname);
          if(paramsName == firstname && ver == verification) {
            navigate(url); 
            setControlleM('top-[-15rem]');
          } else {
            console.log(response);
            setBgClolrMe('bg-red-600')
        setControlleM('top-[-15px]')
        setErrorMessage('You trying to do somthink illigal hommi!!')
          }
      }
      
    } catch (error) {
      console.log(error);
      setBgClolrMe('bg-red-600')
      setControlleM('top-[-15px]')
      setContinue(false)
      setErrorMessage('Somthing hapned please try again later')
    } 
    }
  }
  const checking = () => {
    if(password && confirm && email){
      setContinue2(true)
    } else if(email == '') {
      setContinue2(false)
      //setMessage('Please fill info to coutinue')
    }
    if(password !== confirm) {
      setContinue2(false);
     // setMessage('Password does not match!!')
    } else if(password == '' && confirm == ''){
      setContinue2(false);
     // setMessage('Password is empty!!')
    } else {
      setContinue2(true)
      setControlleM('top-[-15rem]')
    }
  } 

  const checking2 = () => {
    if(password && confirm && email){
      setContinue2(true)
      setControlleM('top-[-15rem]')
    } else {
      setContinue2(false)
      setErrorMessage('Please fill the gaps')
      setControlleM('top-[-15px]')
    setBgClolrMe('bg-orange-500')
    }
    if(password !== confirm) {
      setContinue2(false);
      setErrorMessage('Password does not match!!')
      setControlleM('top-[-15px]')
      setBgClolrMe('bg-orange-500')
    } else if(password == '' && confirm == ''){
      setContinue2(false);
      setControlleM('top-[-15px]')
      setBgClolrMe('bg-orange-500')
      setErrorMessage('Password is empty!!')
    } else {
      setContinue2(true)
      setControlleM('top-[-15rem]')
    }
  }

   useEffect(() => {
    checking()
  }, [email, password, confirm])
  
  useEffect(() => {
    handlSubmit()
  }, [Continue2])
  
  
  return (
    <>
    <form onSubmit={handlSubmit}>  
    <Containner className='w-[100%] relative grid justify-center items-center pt-[100px]'>
           <Message show={ControlleM} elemnt={<ErrorOutlineIcon className='right-6 relative' />} className=' relative text-white w-[340px] p-3 rounded-[3px] ' text={errMessage} bgcolor={BgClolrMe}/>
<h1 className='font-bold font text-4xl hover:text-slate-900 cursor-pointer pb-12'>Hi {paramsName}</h1>
{/*<p className='font-semibold pt-1 hover:text-slate-900 cursor-pointer'>You did great choice to create account at Logix</p>*/}
{/*<p className='font-semibold hover:text-slate-900  cursor-pointer'>lets continue working on project</p>*/}

<div className='flex justify-center items-center w-[332px]'>
<div className='pt-4 grid justify-items-start'>
  <span className='font-semibold text-[15px]'>Step 2 of 2</span>
  <h1 className='font-semibold text-black text-[35px]'>Create Account</h1>
  <Wrap className=''>
  <span>Email</span>
  <input value={email} onChange={(accont) => setemail(accont.target.value)} className='outline-none w-[300px] rounded-sm pl-4 pr-4 pt-2 pb-2' type="text" />
  </Wrap>
  <Wrap>
  <div className='relative'><span>Password</span><ErrorOutlineIcon className=' z-30 cursor-pointer pl-[9.5px] ml-[-5px] mb-1 text-2xl'/><Hint className= 'transition-all hint' message = 'Password must be at least 8 characters and includes at least one number and one letter' /></div> 
  <input value={password} onChange={(accont) => setpassword(accont.target.value)} className='outline-none w-[300px] rounded-sm pl-4 pr-4 pt-2 pb-2' type="password" />
  </Wrap>
  <Wrap>
  <span>Confirm Password</span>
  <input value={confirm} onChange={(accont) => setconfirm(accont.target.value)} className='outline-none w-[300px] rounded-sm pl-4 pr-4 pt-2 pb-2' type="password" />
  </Wrap>
 {Continue2 ? <button  className='mt-[12px] rounded-sm text-white font-semibold pt-2 pb-2 w-[300px] hover:bg-blue-700  bg-blue-500' type='submit'>Create Account</button> : 
  <button onClick={() => checking2()} className='cursor-not-allowed mt-[12px] rounded-sm text-white font-semibold pt-2 pb-2 w-[100%] bg-blue-300'>Create Account</button>
 }
</div>
</div>
</Containner></form> </>
  )
}

export default FiltPlace


const Containner = styled.div`

`
const Wrap =styled.div`
 padding-top: 12px;
 padding-bottom: 12px;
  display: grid;
  justify-items: start;
  span{
    font-weight: 600;
    color: #0000009a;
    padding-bottom: 5px;
  }
  .relative{
    transition: all 0.9s;
     .hint{
      //background:#000;
      display:none;
      transform: translateY(-50%);
      transition: all 250ms;
    }
    &:hover .hint{
      display:block;
      transition: 0.9s;
      transform: translateY(0%);
    }
  }

`
