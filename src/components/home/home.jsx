import React, { useEffect, useState } from 'react';
import ShortenButton from '../ui/button';
import TextBar from '../ui/textBar';
import './home.css';
import Shortener from '../util/shortener';

const Home = () => {
  let cta = 'SHORTEN'
  const [isShortened, setIsShortened] = useState(false);
  const [shortenedUrl , setShortenedUrl] = useState(null)
  const [url , setUrl] = useState('')
  const placeholder = 'Enter your URL here';

  const [shortenClick, setShortenClick] = useState(false)
  useEffect(() => {
    if (shortenClick) {
      let newUrl = Shortener(url).key
      setIsShortened(true);
      setShortenedUrl(window.location.href + newUrl);
    }
  }, [shortenClick, url]);

  let text = (isShortened) ? shortenedUrl : url
  let TextProps = {
    text: text,
    isShortened: isShortened,
    textUpdate:t => setUrl(t),
    placeholder: placeholder
  }
  let ButtonProps = {cta: cta, click:() => setShortenClick(true)}
  let CustomTextProps = {
    text: '',
    isShortened: isShortened,
    textUpdate:t => console.log(t),
    placeholder: 'Use any characters and numbers'
  }

  // If not shortened, show the button
  return (
    <div className="home-container">
      <TextBar {...TextProps} />
      <div className="custom-url-container">
        <p className="custom-text">Custom url</p>
        <TextBar {...CustomTextProps} />
      </div>
      {!isShortened && <ShortenButton {...ButtonProps}/>}
    </div>
  );
}

export default Home;
