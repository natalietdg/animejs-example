import logo from './logo.svg';
import './App.css';
import ReactAnime from 'react-animejs';
import React, {useState} from 'react';


function App() {
  const [control, setControl ] = useState(null);

  const [meta, setMeta] = useState({
    control: control,
    progress: 0,
    currentTime: 0,
    duration: 0
  });
 
  const { Anime, stagger } = ReactAnime;
  return (
    <div>
      <Anime
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
      </Anime>
      <Anime
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
      </Anime>
    </div>
   
  );
}

export default App;
