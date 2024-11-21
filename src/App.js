import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Services />
      <Whyus />
      <Numbers />
      <Partners />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;

const Navigation = () => {
  const [background, setBackground] = useState('#ffffff00');
  const [translate, setTranslate] = useState('translateX(-100%)');

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackground('#ffff');
      } else {
        setBackground('#ffffff00');
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
    <nav className="nav" style={{ backgroundColor: `${background}` }}>
      <p className="name">AUTONO</p>
      <ul className="ul">
        <li className="link">Technology</li>
        <li className="link">About</li>
        <li className="link">Careers</li>
        <li className="link"><button className="btn">Subscribe</button></li>
      </ul>
      <img src="/hamburger.png" alt="menu" className="menu" loading="lazy" onClick={() => setTranslate('translateX(0px)')} />
    </nav>
    <div className="dropdown" style={{ transform: `${translate}` }}>
      <ul className="list">
        <li className="li_ele">Technology</li>
        <li className="li_ele">About</li>
        <li className="li_ele">Careers</li>
        <li className="li_ele"><button className="btn">Subscribe</button></li>
      </ul>
      <img src="/close.svg" className="close" alt="close" loading="lazy" onClick={() => setTranslate('translateX(-100%)')} />
    </div>
    </>
  );
}



const Home = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    const hiddenElementsLeft = document.querySelectorAll('.invisible');
    hiddenElementsLeft.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home">
      <div className="overlay invisible">
        <h1 className="h1">THE FUTURE OF <br />MOBILITY IS HERE</h1>
        <h2 className="h2">Discover the safest self-driving experience with Autono.</h2>
      </div>
    </div>
  );
}

const About = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-left');
        } else {
          entry.target.classList.remove('show-left');
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    const hiddenElementsLeft = document.querySelectorAll('.hide-left');
    hiddenElementsLeft.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about">
      <div className="box hide-left">
        <p className="header">VISION</p>
        <p className="heading">We're Changing the Way the World Thinks About Cars</p>
        <p className="para">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
        <div className="bar"></div>
      </div>
      <img src="car.webp" alt="" className="car" loading="lazy" />
    </div>
  );
}

const Whyus = () => {
  return (
    <div className="whyus">
      <div className="card">
      <div className="box bg_black">
        <p className="header">WHY AUTONO</p>
        <p className="heading">A different approach, using a new method of manufacturing.</p>
        <p className="para">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
        <button className="more">Show more</button>
        <div className="bar"></div>
      </div>
      </div>
    </div>
  );
}

const Numbers = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-right');
        } else {
          entry.target.classList.remove('show-right');
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    const hiddenElementsLeft = document.querySelectorAll('.hide-right');
    hiddenElementsLeft.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="numbers">
      <div className="left"></div>
      <div className="right">
        <p className="h">Autono In Numbers</p>
        <div className="container hide-right">
          <div className="num">
            <p className="h" style={{ fontWeight: '400' }}>200</p>
            <div className="horizontal"><div className="bar2"></div></div>
            <div className="designation">EMPLOYEES</div>
          </div>
          <div className="num">
            <p className="h" style={{ fontWeight: '400' }}>5</p>
            <div className="horizontal"><div className="bar2"></div></div>
            <div className="designation">CORE TEAM</div>
          </div>
          <div className="num">
            <p className="h" style={{ fontWeight: '400' }}>200 M$</p>
            <div className="horizontal"><div className="bar2"></div></div>
            <div className="designation">CAPITAL</div>
          </div>
          <div className="num">
            <p className="h" style={{ fontWeight: '400' }}>200</p>
            <div className="horizontal"><div className="bar2"></div></div>
            <div className="designation">PARTNERS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Services = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    const hiddenElementsLeft = document.querySelectorAll('.invisible');
    hiddenElementsLeft.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="services">
      <div className="container invisible">
        <div className="left">
          <p className="heading" style={{ color: '#000', fontWeight: '300' }}>AUTONOMOUS <br /> DRIVING</p>
          <p className="para" style={{ color: '#000' }}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
          <br /><br />
          <button className="more">Show more</button>
          </p>
        </div>
        <div className="right"><img src="/car1.webp" alt="" loading="lazy" /></div>
      </div>
      <div className="container invisible">
        <div className="right"><img src="/car2.webp" alt="" loading="lazy" className="car2" /></div>
        <div className="left">
          <p className="heading" style={{ color: '#000', fontWeight: '300' }}>REAL-TIME <br />INFORMATION</p>
          <p className="para" style={{ color: '#000' }}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
          <br /><br />
          <button className="more">Show more</button>
          </p>
        </div>
      </div>
      <div className="container invisible">
        <div className="left">
          <p className="heading" style={{ color: '#000', fontWeight: '300' }}>PERCEPTION <br />ENABLED</p>
          <p className="para" style={{ color: '#000' }}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
          <br /><br />
          <button className="more">Show more</button>
          </p>
        </div>
        <div className="right"><img src="/car3.webp" alt="" loading="lazy" /></div>
      </div>
    </div>
  );
}

const Partners = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-right');
        } else {
          entry.target.classList.remove('show-right');
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    const hiddenElementsLeft = document.querySelectorAll('.hide-right');
    hiddenElementsLeft.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about partners">
      <div className="box hide-left">
        <p className="header">INDUSTRY</p>
        <p className="heading">Our <br />Partners</p>
        <p className="para">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</p>
        <div className="bar"></div>
      </div>
      <div className="gallery hide-right">
        <img src="/GT.webp" alt="" loading="lazy" className="img" />
        <img src="/IDI.webp" alt="" loading="lazy" className="img" />
        <img src="/IC.webp" alt="" loading="lazy" className="img" />
        <img src="/TN.webp" alt="" loading="lazy" className="img" />
      </div>
    </div>
  );
}

const Footer = ()=> {
  return (
    <div className="footer">
      <div className="left">
        <ul>
          <li><p className="name">AUTONO</p></li>
          <li className="item">Technology</li>
          <li className="item">About</li>
          <li className="item">Career</li>
        </ul>
        <ul className="ul_footer">
          <li className="item">Tel: 123-456-7890</li>
          <li className="item">info@mywebsite.com</li>
          <li className="item">500 Terry Francine St <br />San Francisco, CA 94158</li>
        </ul>
      </div>
      <div className="right">
        <p className="p">SUBSCRIBE</p>
        <p className="item" style={{ margin: '0px' }}>Sign up to receive Autono news and updates.</p>
        <p className="item">Email*</p>
        <div className="input_div">
          <input type="text" className="text" spellCheck="false" />
          <button className="sub">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

const Copyright = () => {
  return (
    <div className="copyright" style={{ margin: '16px 0px' }}>© 2035 by Autono. Powered and secured by Wix</div>
  );
}