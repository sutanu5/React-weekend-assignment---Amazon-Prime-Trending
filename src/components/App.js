import React, {Component, useState} from "react";
import '../styles/App.css';
import Slide from './Slide';
const App = (props) => {
  const [data, setdata] = useState(0);
  const slides = props.slides;
  const prev = () => {
    if (data >0) {
      setdata((prev) => prev - 1);
    }
  }
  const restart = () => {
    setdata(0);
  }
  const next = () => {
    if (data < slides.length - 1) {
      setdata((prev) => prev + 1);
    } else {
      setdata(slides.length-1);
    }
  }
  return (
    <>
      <div>
      <div className="container m-3">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <h1 data-testid="title">{slides[data].title}</h1>
              <p data-testid="text">{slides[data].text}</p>
          </div>
          <div className="d-flex" style={{marginTop:"10rem"}}>
            <button className="btn btn-secondary btn-sm me-1" data-testid="button-prev" onClick={prev} disabled={data===0?true:false}>Prev</button>
            <button className="btn btn-secondary btn-sm me-1" data-testid="button-restart" onClick={restart} disabled={data===0?true:false}>Restart</button>
              <button className="btn btn-secondary btn-sm me-1" data-testid="button-next" onClick={next} disabled={data===slides.length-1?true:false}>Next</button>

          </div>
        </div>
      </div>
      </div>
    </>
  )
}


export default App;
