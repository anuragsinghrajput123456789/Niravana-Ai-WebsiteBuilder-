import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import { ImNewTab } from "react-icons/im";
import { MdDownloadForOffline } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import Editor from '@monaco-editor/react';
import { RiComputerLine } from "react-icons/ri";
import { FaTabletAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { API_KEY } from './helper';

const App = () => {

  const [prompt, setPrompt] = useState("")
  const [isShowCode, setisShowCode] = useState(false)
  const [isInNewTab, setIsNewTab] = useState(false)
  const [code, setCode] = useState(
    `  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-[10px]">
  <h1 class="text-[30px] font-[700]">Welcome to WebBuilder</h1>
</body>
</html>
       
      

    `)
const ai = new GoogleGenAI({API_KEY});
 
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: ``,
  });
  console.log(response.text);
}



  return (
    <>
      <div class="absolute inset-0 -z-10 h-[100vw] w-[100vw] items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">


        <Navbar />
        <div className="container flex items-center justify-center">
          <h3 className='text-3xl font-semibold bg-gradient-to-br from-rose-600
via-violet-600
to-indigo-600
bg-clip-text
text-transparent'>Create Beautiful Webistes with Nirvana-Ai</h3>

          <p className='text-[16px] bg-gradient-to-br from-rose-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent '>Describe your website and ai will code for you...</p>
          <div className="inputBox">
            <textarea onChange={(e) => { setPrompt(e.target.value) }} value={prompt} name="" id="" placeholder='Write your discription...'></textarea>
            {
              prompt !== "" ?
                <>
                  <i className='sendIcon text-[20px] w-[30px] flex items-center justify-center  bg-purple-500 rounded-[40%] cursor-pointer'><FaArrowUp /></i>
                </>
                : ""
            }
          </div>


          <p className='text-[20px] font-[700] mt-[10vh]'>Your Ai-Generated Website will appear here...</p>

          <div className="preview ">
            <div className="header w-full h-[70px]">
              <h3 className='font-bold text-xl'>Live preview</h3>

              <div className="icons flex items-center gap-[15px]">
                <div onClick={() => { setIsNewTab(true) }} className="icon !w-[auto] !p-[12px] flex items-center">Open in new Tab <i><ImNewTab /></i></div>
                <div className="icon !w-[auto] !p-[12px] flex items-center">Download <MdDownloadForOffline /></div>
                <div className="icon !w-[auto] !p-[12px] flex items-center" onClick={() => { setisShowCode(!isShowCode) }}>{isShowCode ? "Hide code" : "Show code"} {isShowCode ? <FaEyeSlash /> : <FaEye />}</div>
              </div>
            </div>
            {
              isShowCode ? <>
                <Editor height="100%" theme='vs-dark' defaultLanguage="html" value={code} />;
              </>
                :
                <>
                  <iframe srcDoc={code} className='w-full h-full bg-white rounded-3xl '></iframe>

                </>
            }

          </div>




        </div>

        {/* <Footer /> */}
        <>
          {isInNewTab && (
            <div className="modelContainer ">
              <div className="modelBox text-black">
                <div className="header w-full h-[70px] flex items-center justify-between">
                  <h3 className='font-bold'>Preview</h3>
                  <div className="icons flex items-center gap-[15px]">
                    <div className="icon"><RiComputerLine /></div>
                    <div className="icon"><FaTabletAlt /></div>
                    <div className="icon"><FaMobileAlt /></div>
                  </div>

                  <div className="icons">
                    <div className='icon' onClick={() => setIsNewTab(false)}>
                      <IoMdClose />
                    </div>
                  </div>
                </div>

                {/* put your iframe/code editor preview inside modal if you want */}
                <iframe
                  srcDoc={code}
                  className="w-full h-[80vh] bg-white rounded-3xl"
                ></iframe>
              </div>
            </div>
          )}
        </>

      </div>
    </>
  )
}

export default App
