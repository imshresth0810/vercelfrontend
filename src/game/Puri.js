// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
// import v1 from "./images/v1.png"
import "./Puri.css"
import LazyLoad from 'react-lazyload';



export default function MB() {
  const [userIndex, setUserIndex] = useState(0);
  const userdeatils = async () => {
    const response1 = await fetch("http://bkvct-env.eba-mjuzg3tc.ap-south-1.elasticbeanstalk.com/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    const json = await response1.json();
    // console.log(json);
    const name01 = json.userRiddleIndex;
    setUserIndex(name01);
    // console.log(userIndex, "userIndex--mainB--")
  }
  useEffect(() => {
    userdeatils();
    document.title="TAdS || VCT"

    // eslint-disable-next-line
  }, [userIndex, setUserIndex]);

  // -************************

  const UserRiddleupdatecount = async (score) => {
    const response = await fetch("http://bkvct-env.eba-mjuzg3tc.ap-south-1.elasticbeanstalk.com/user/updatecount", {
      method: "PUT",
      headers: {
        "authToken": localStorage.getItem("usertoken"),
        "userScore": score
      },
    });
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json, "jiii");
  }
  // --------------------
  const navigate = useNavigate();
  const handlecorrect = () => {
    if (userIndex === 14) {
      toast.success("Kitne tejaswi facche hai hamare pass", {
        position: "top-center",
        autoClose: 1500
      });
      const score = userIndex + 1;
      // console.log("score---> ", score)
      UserRiddleupdatecount(score);
      setTimeout(() => {
        navigate("/game/map", { replace: true });
      }, 2000);
    }
    else {
      toast.error("Are you comedy me....", {
        position: "top-center",
        autoClose: 2000
      });
    }
  }
  // eslint-disable-next-line
  const handlewrong1 = () => {
    toast.error("Itna Galat Kaise ho sakte ho....", {
      position: "bottom-center",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong2 = () => {
    toast.error("Udi  baba... Mera 20 saal ka tajurba mei itna galat kabhi nhi dekha.", {
      position: "top-left",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong3 = () => {
    toast.error("Be Hermione, not be Ron, give a try more bcoz you are wrong", {
      position: "top-right",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong4 = () => {
    toast.error("Kacha badaam dada kacha badaam... Galti kar di hai tumnei sanam...", {
      position: "bottom-left",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong5 = () => {
    toast.error("Aise jawab ke liye aapko Hogwarts...jaadu aur tantr ke vidyalaya se nikala jata hai...", {
      position: "bottom-right",
      autoClose: 3000
    });
  }



  return (
    <>
      <ToastContainer />
      <LazyLoad><img src={"https://github.com/TAdS-VCT/Media/blob/main/BG%20images/Dark%20Images/entrance_gate%20horror%20f.png?raw=true"} alt="hii" className='puribg' /></LazyLoad>
      <h1 className='backbutton mx-3'>
        <FaChevronCircleLeft onClick={() => navigate("/game/map", { replace: true })} aria-hidden="true" style={{ cursor: "pointer" }} />
      </h1>
      <LazyLoad>
        <div className="xyz1">
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Puri%20Gate/Arrow.png?raw=true"} alt="hii" className='vectors puriv1' onClick={handlecorrect} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Puri%20Gate/Dog.png?raw=true"} alt="hii" className='vectors puriv2' onClick={handlewrong1} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Puri%20Gate/bird.png?raw=true"} alt="hii" className='vectors puriv3' onClick={handlewrong2} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Puri%20Gate/book.png?raw=true"} alt="hii" className='vectors puriv4' onClick={handlewrong3} aria-hidden="true" />
        </div>
      </LazyLoad>


    </>
  )
}
