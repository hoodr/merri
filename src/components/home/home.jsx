import React, { useEffect, useState } from 'react';
import ShortenButton from '../ui/button';
import TextBar from '../ui/textBar';
import './home.css';
import Shortener from '../util/shortener';

const Home = () => {
  let cta = 'Shorten!'
  const [isShortened, setIsShortened] = useState(false);
  const [shortenedUrl , setShortenedUrl] = useState(null)
  const [url , setUrl] = useState('')

  const [shortenClick, setShortenClick] = useState(false)
  useEffect(() => {
    if (shortenClick) {
      let newUrl = Shortener(url)
      setIsShortened(true);
      setShortenedUrl(newUrl);
    }
  }, [shortenClick, url]);

  let text = (isShortened) ? shortenedUrl : url
  let TextProps = {text: text, isShortened: isShortened, textUpdate:t => setUrl(t) }
  let ButtonProps = {cta: cta, click:() => setShortenClick(true)}

  // If not shortened, show the button
  return (
    <div className="flex-container">
      <div className="home-container">
        <TextBar {...TextProps} />
        {!isShortened && <ShortenButton {...ButtonProps}/>}
      </div>
    </div>
  );
}

export default Home;
