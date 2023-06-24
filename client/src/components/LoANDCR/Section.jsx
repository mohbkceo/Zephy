import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import Checking from "../Accsisoiris/Checking";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Hint from "../Accsisoiris/Hint";
import FoneInput from "../Accsisoiris/FoneNumber";
import { IconButton } from "@material-tailwind/react";
import {
  fetchPost,
  signUserSelect,
  status,
  error,
} from "../../features/SignIN/SignInSlice";
//import axios from "axios";
import { Message } from "../Accsisoiris";
//import { Fade } from "react-awesome-reveal";
import ReplayIcon from "@mui/icons-material/Replay";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Section = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const userresponce = useSelector(signUserSelect);
  const errorM = useSelector(error);
  const StatusC = useSelector(status);
  const dispatch = useDispatch();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [verification, setvervecation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [BgClolrMe, setBgClolrMe] = useState("bg-red-600");
  const [ControlleM, setControlleM] = useState("top-[-9rem]");
  const [Continue, setContinue] = useState(false);

  const data = {
    firstname,
    lastname,
    verification,
    email: "mohbk@gmail.com",
    password: "kdsqok",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (StatusC === "idle") {
      dispatch(fetchPost(data, navigate));
    }
    console.log(StatusC);
    if (StatusC === "loading") {
      const validation = Checking(firstname, lastname, verification);
      if (!validation.Continue) {
        setContinue(false);
        setControlleM(validation.ControlleM);
        setErrorMessage("Pending, just a moment");
        setBgClolrMe(validation.BgClolrMe);
      }
    }
    if (StatusC === "failed") {
      const validation = Checking(firstname, lastname, verification);
      console.log(errorM);
      if (validation.Continue === false) {
        setContinue(false);
        setControlleM(validation.ControlleM);
        setControlleM(validation.ControlleM);
        setErrorMessage(validation.ErrorMessage);
        setBgClolrMe(validation.BgClolrMe);
      }
    }
    //console.log(userresponce);
    if (StatusC === "succeeded") {
      console.log(userresponce);
      const validation = Checking(firstname, lastname, verification);
      if (!validation.Continue) {
        setContinue(true);
        console.log(userresponce);
      }
    }
  };

  const handelCheck = () => {
    const validation = Checking(firstname, lastname, verification);
    if (validation.Continue) {
      setContinue(true);
      setControlleM(validation.ControlleM);
    } else {
      setContinue(false);
      setControlleM(validation.ControlleM);
      setErrorMessage(validation.ErrorMessage);
      setBgClolrMe(validation.BgClolrMe);
    }
  };

  const cheacking = () => {
    const validation = Checking(firstname, lastname, verification);
    if (validation.Continue) {
      setContinue(true);
      setControlleM(validation.ControlleM);
    } else {
      setContinue(false);
    }
  };

  useEffect(() => {
    // if (StatusC === "idle") {
    //  dispatch(fetchPost(data, navigate));
    //}
  }, [StatusC]);

  useEffect(() => {
    cheacking();
  }, [firstname, lastname, verification]);

  return (
    <Wrap className="flex-col pt-[70px] w-[100vw] overflow-hidden flex justify-start items-center mb-[20px] fixed">
      <Message
        show={ControlleM}
        elemnt={<ErrorOutlineIcon className="p-[2px]" />}
        className="absolute text-white w-[340px] p-3 rounded-[3px] "
        text={errorMessage}
        bgcolor={BgClolrMe}
      />
      <div className="flex max-w-[431.61px] h-[720px]">
      <Containner className="pt-5 pr-4 shadow-md bg-white rounded-md pl-4 max-w-[325px] h-full mx-[5px]">
          <form onSubmit={handleSubmit}>
            <h3 className="font-semibold text-[15px]">Step 1 of 2</h3>
            <h1>Create Account</h1>

            <div className="flex gap-2 justify-between">
              <FaleInput>
                <h3>First name</h3>
                <input
                  className="px-4 hover:shadow-sm bg-[#F4F4F4] py-2 w-36 outline-none rounded-sm"
                  value={firstname}
                  placeholder="ex:Moh"
                  onChange={(task) => setfirstname(task.target.value)}
                />
              </FaleInput>
              <FaleInput>
                <h3>Family name</h3>
                <input
                   placeholder="ex:Bakelli"
                  className="px-4 bg-[#F4F4F4] hover:shadow-sm py-2 w-36 outline-none rounded-sm"
                  value={lastname}
                  
                  onChange={(task) => setlastname(task.target.value)}
                />
              </FaleInput>
            </div>
            <div className="pt-4 w-full grid justify-items-start">
              {/* <span>Email</span>
              <input
                value={email}
                placeholder="example@mail.com"
                className="outline-none bg-[#F4F4F4] w-full rounded-sm pl-4 pr-4 pt-2 pb-2 hover:shadow-md"
                onChange={(accont) => setemail(accont.target.value)}
                type="email"
              /> */}
               <div className="flex gap-2 justify-between">
              <FaleInput>
                <h3>Email</h3>
                <input
                  className="px-4 hover:shadow-sm bg-[#F4F4F4] py-2 w-36 outline-none rounded-sm"
                  value={firstname}
                  placeholder="ex:Moh"
                  onChange={(task) => setfirstname(task.target.value)}
                />
              </FaleInput>
              <FaleInput>
              <div className="z-50 w-full flex justify-items-start relative">
                <span>Password</span>
                <ErrorOutlineIcon className="z-[999] cursor-pointer pl-[9.5px] ml-[-5px] mb-1 text-2xl" />
                <Hint
                  className="transition-all right-12 top-10 hint"
                  message="Password must be at least 8 characters and includes at least one number and one letter"
                />
              </div>
                <input
                   placeholder="ex:Bakelli"
                  className="px-4 bg-[#F4F4F4] hover:shadow-sm py-2 w-36 outline-none rounded-sm"
                  value={lastname}
                  
                  onChange={(task) => setlastname(task.target.value)}
                />
              </FaleInput>
            </div>
              {/* <div className="pt-4 z-50 w-full flex justify-items-start relative">
                <span>Password</span>
                <ErrorOutlineIcon className="z-[999] cursor-pointer pl-[9.5px] ml-[-5px] mb-1 text-2xl" />
                <Hint
                  className="transition-all right-12 top-10 hint"
                  message="Password must be at least 8 characters and includes at least one number and one letter"
                />
              </div>
              <input
                value={password}
                onChange={(accont) => setpassword(accont.target.value)}
                className="outline-none hover:shadow-sm bg-[#F4F4F4] w-full rounded-sm pl-4 pr-4 pt-2 pb-2  "
                type="password"
              /> */}
              {/* <div className="pt-4 z-50 w-full flex justify-items-start relative">
                <span>Confirem Password</span>
              </div>
              <input
                value={password}
                onChange={(accont) => setpassword(accont.target.value)}
                className="outline-none hover:shadow-sm bg-[#F4F4F4] w-full rounded-sm pl-4 pr-4 pt-2 pb-2  "
                type="password"
              /> */}
            <div className="pt-4  grid justify-items-start ">
            <span>optional*</span>
            <FoneInput className="" />
            </div>
            </div>
            <Verfication className="py-4">
              <VerifieImage className=" w-full h-[70px] flex justify-center items-center mb-[24px] rounded-sm bg-[#eeee] relative py-[7.5px]">
                <ReplayIcond className="absolute right-[4px] z-30 top-[7px] cursor-pointer" />
                <img className="w-[150px] h-[60px]" alt="Img" src="" />
              </VerifieImage>
              <FaleInputd>
                <h3>Enter the characters in the image</h3>
                <InputD className="w-full h-[40px] flex justify-center items-center mt-[8px] rounded-sm bg-[#f4f4f4]">
                  <input
                    className="bg-[#f4f4f4] p-4 w-full h-[20px] border-none outline-none font-bold"
                    value={verification}
                    onChange={(task) => setvervecation(task.target.value)}
                  />
                </InputD>
              </FaleInputd>
            </Verfication>
            <p>
              By continuing, I understand and agree to Logix's
              <a
                className="underline-offset-2"
                target="_blank"
                href="facebook.com"
              >
                {" "}
                Privacy Notice
              </a>{" "}
              and{" "}
              <a target="_blank" href="facebook.com">
                Terms of Use
              </a>{" "}
              for creating a Logix Account
            </p>
            {Continue === true ? (
              <button
                type="submit"
                className="hover:bg-blue-800 bg-blue-700  cursor-pointer text-white rounded-sm w-full pt-1 pb-1 pl-6 pr-6 mb-[10px] mt-2"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => handelCheck()}
                className="bg-blue-300 cursor-not-allowed text-white rounded-sm w-full pt-1 pb-1 pl-6 pr-6 mt-2 mb-[10px]"
                type=""
              >
                Next
              </button>
            )}
          </form>
      </Containner>
      <SocialContainner className="bg-white h-[830.5px] pt-24 rounded-r-md max-w-[300px]">
           <h5 className="lg:text-[15px] px-2 text-gray-500 font-light sm:text-[10px] pb-5">Or Continue by</h5>
           <hr className="pt-5" />
          <div className="grid gap-4 justify-center mt-1 mx-4">
            <IconButton className="bg-white lg:px-20  text-red-500" >
              <i className="fab fa-google text-lg"></i>
            </IconButton>
            <IconButton className="bg-white lg:px-20 text-blue-500" >
              <i className="fab fa-facebook text-lg"></i>
            </IconButton>
            <IconButton className="bg-white lg:px-20 text-blue-500" >
              <i className="fab fa-twitter text-lg"></i>
            </IconButton>
            <IconButton className="bg-white lg:px-20 text-gray-900" >
              <i className="fab fa-github text-lg"></i>
            </IconButton>
          </div>
      </SocialContainner>
      </div>
      <BackGround className="fixed -z-20 top-0 w-full bottom-0 left-0 right-0 h-full">
        <img
          className="object-cover w-full opacity-10 h-full"
          src="./images/back2.png"
          alt=""
        />
      </BackGround>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  h1 {
    padding-top: 10px;
    padding-bottom: 8px;
    font-size: 28px;
    display: flex;
  }
`;
const Containner = styled.div`
  .relative {
    transition: all 0.9s;
    .hint {
      display: none;
      //transform: translateY(-50%);
      transition: all 250ms;
    }
    &:hover .hint {
      display: block;
      transition: 0.9s;
      //transform: translateY(0%);
    }
  }
  a {
    text-decoration: underline;
  }
  p {
    text-align: left;
    line-height: 20px;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;
const FaleInput = styled.div`
  padding-top: 16px;
`;
const InputD = styled.div``;
const Verfication = styled.div``;
const VerifieImage = styled.div``;
const ReplayIcond = styled(ReplayIcon)``;
const FaleInputd = styled.div``;
const BackGround = styled.div``;
const Contain2 = styled.div``;
const SocialContainner = styled.div``;
