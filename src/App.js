import logo from './logo.svg';
import './App.css';
import ReactAnime from 'react-animejs';
import React, { useState, useEffect } from 'react';


function App() {
  const [control, setControl ] = useState(null);
  var string1 = 'Hello there!';
  var string2 = 'My name is Natalie';
 
  // const [ loadStatus, setLoadstatus ] = useState(true);
  // var textWrapper1 = '';
  // var textWrapper2 ='';

  // useEffect(()=>{
  //   textWrapper1 = document.querySelector('.h3');
  //   console.log("textWrapper1",textWrapper1);
  //   if(textWrapper1.textContent){
  //     textWrapper1.innerHTML = textWrapper1.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='h3'>$&</span>")
  //   }
    
  //   textWrapper2 = document.querySelector('.para');
  //   console.log("textWrapper2",textWrapper2);
  //   if(textWrapper2.textContent){
  //     textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='para'>$&</span>")
  //   }
  //   setLoadstatus(false);
  // },[])

  const [meta, setMeta] = useState({
    control: control,
    progress: 0,
    currentTime: 0,
    duration: 0
  });

  const { Anime, stagger } = ReactAnime;
  // if(loadStatus==false) {
  //   var textWrapper1 = document.querySelector('.h3')?document.querySelector('.h3'):<span  class='h3' >Hello There!</span>;
  //   console.log("textWrapper1",textWrapper1);
  //   if(textWrapper1.textContent){
  //     textWrapper1.innerHTML = textWrapper1?.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='h3'>$&</span>")
  //   }
    
  //   var textWrapper2 = document.querySelector('.para')?document.querySelector('.para'):<span  class='para'>My name is Natalie</span>;
  //   console.log("textWrapper2",textWrapper2);
  //   if(textWrapper2.textContent){
  //     textWrapper2.innerHTML = textWrapper2?.textContent?.replace(/([^\x00-\x80]|\w)/g, "<span class='para'>$&</span>")
  //   }
  // }
  

  
  
  return (
    <div>
    <Anime
        initial={[
          {
            targets: '.h3',
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
          },
          {
            targets: '.h3',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1000
          },
          {
            targets: '.para',
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
          },
          {
            targets: '.para',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1000
          },
        ]}>
        <span>{Array.from(string1).map((element) => {
          return <span class='h3'>{element}</span>
        })}</span>
         <span>{Array.from(string2).map((element) => {
          return <span class='para'>{element}</span>
        })}</span>
        
      </Anime>
      
      {/* <Anime
        initial={[
          {
            targets: '#Box',
            translateX: 100,
            easing: 'spring',
            keyframes: [
              {
                translateX: 50
              },
              {
                translateY: 50
              },
              {
                translateX: 0
              },
              {
                translateY: 0
              }
            ],
            duration: 3500,
            loop: true
          }
        ]}
      >
          <div id="Box" style={{height: 50, width: 50, background: '#d3d'}}>
            HELLO
            </div>
      </Anime> */}
      {/* <Anime
        control={control}
        setMeta={setMeta}
        animeConfig={{
          autoplay: false,
          duration: 1500,
          easing: 'easeInOutSine'
        }}
        initial={[
          {
            targets: '.tl_square',
            translateX: 250
          },
          {
            targets: '.tl_circle',
            translateX:250
          },
          {
            targets: '.tl_triangle',
            translateX: 250
          }
        ]}
      >
        <div
          className="tl_square"
          style={{height: 50, width: 50, background: '#d3f454'}}
        >
          <div
            className='tl_circle'
            style={{
              height: 50,
              width: 50,
              background: '#d3f454',
              clipPath:"polygon(50% 0, 0 100%, 100%, 100%)"
            }}
          />
          <div 
            className="tl_triangle"
            style={{
              height: 50,
              width: 50,
              background: '#d3f454',
              clipPath: 'polygon(50% 0, 0 100%, 100%, 100%)'
            }}
          />
          <div
            className="button"
            onClick={()=>{
              setControl("play")
            }}
            >
              Play
            </div>
            <div className="button"
            onClick={()=>{
              setControl('pause')
            }}>
              Pause
            </div>
            <div
              className="button"
              onClick={()=>{
                setControl('restart');
              }}
            >
              Restart
            </div>
            <input type="range"
              min='1'
              max='100'
              value={meta.progress || 0}
              className='slider'
              id="myRange"
              onChange={e => console.log(setControl(['seek', e.currentTarget.value]))}
              />
        </div>
      </Anime> */}
    </div>
   
  );
}

export default App;
