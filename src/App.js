import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import './App.css';
import aboutimg from './Assests/aboutimg.png';
import americano from './Assests/americano.jpg';
import capuchino from './Assests/capuchino.jpg';
import coffeeicecream from './Assests/coffeeicecream.avif';
import coffeelogo from './Assests/coffeelogo.png';
import coldcoffee from './Assests/coldcoffee.avif';
import facebook from './Assests/facebook.png';
import homecoffee from './Assests/homecoffee.png';
import instagram from './Assests/instagram.png';
import lattemachiato from './Assests/lattemachiato.jpg';
import linkedln from './Assests/linkedln.png';
import mochalatte from './Assests/mochalatte.jpg';
import sandwich from './Assests/sandwich.jpg';
import vanila from './Assests/vanila-latte.jpeg';
import waffle from './Assests/waffle.jpg';

export default function App() {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')

  const emailforward = ()=> {
    window.open(`mailto:${email}`)
  }

  useEffect(()=>{
    let a = 'Enjoy your coffee before your activity!!!'
    let temp = ''
    for(let i=0;i<a.length;i++){
      // eslint-disable-next-line
        setTimeout(() => {
          temp += a[i]
          setname(temp)
      }, i*100);
      }
    },[])

    const { ref : ref1, inView : visible1} = useInView();
    const { ref : ref2, inView : visible2} = useInView();
    const { ref : ref3, inView : visible3} = useInView();
    const { ref : ref4, inView : visible4} = useInView();
    // const { ref : ref5, inView : visible5} = useInView();

  return (
    <>  
      <div className='body'>
        <div className='navbar'>
          <div className='logoside'>
            <div className='logo'>
              <img src={coffeelogo} width={100} alt='coffeelogo'></img>
            </div>
            <div className='logoname'>
              <h1>Coffee Cafe</h1>
            </div>
          </div>
          <div className='linkgroup'>

              <Link to='home' smooth={true} className='links'>Home</Link>
              <Link to='service' smooth={true} className='links'>Service</Link>
              <Link to='about' smooth={true} className='links'>About</Link>
              <Link to='menu' smooth={true} className='links'>Menu</Link>
              <Link to='contact' smooth={true} className='links'>Contact</Link>
              
          </div>
        </div>
        {/* navbar ends */}
        <div className='home' id='home' ref={ref1}>
          <div className='homecontent'>
            <div >
              <h3>{name}</h3>
            </div>
            <p>Boost your productivity and build your <br/> mood with a glass of coffee in the morning</p>
          </div>
          <div className={visible1 ? 'homeimage homeimagevisible': 'homeimage '}>
            <img src={homecoffee} className='spin' alt='homeimage' width={575} height={575}></img>
          </div>
        </div>
        {/* home ends */}
        <div className='service' id='service' >
          <h1>Best Coffee for you</h1>
          <div className='servicelist' ref={ref2}>

            <div className={visible2 ? 'serviceitemnovisible serviceitem' : 'serviceitemnovisible'}>
              <div style={{height:'250px'}}>
                <img className='serviceimg' src={capuchino} width={400} height={250} alt='cappuchino'></img>
              </div>
                <h1>Cappuccino</h1>
                <p>A cappuccino is like a morning hug in a cupwarm, frothy, and just the right balance of espresso kick and creamy comfort</p>
            </div>

            <div className={visible2 ? 'serviceitemnovisible serviceitem' : 'serviceitemnovisible'}>
              <div style={{height:'250px'}}>
                <img className='serviceimg' src={americano} width={400} height={250} alt='americano'></img>
              </div>
                <h1>Americano</h1>
                <p>An Americano is the sunrise of coffee bold, smooth, and refreshingly balanced.</p>
            </div>

            <div className={visible2 ? 'serviceitemnovisible serviceitem' : 'serviceitemnovisible'}>
              <div style={{height:'250px'}}>
                <img className='serviceimg' src={vanila} width={400} height={250} alt='vanila latte'></img>
              </div>
                <h1>Vanilla Latte</h1>
                <p>A vanilla latte is a cozy delight—creamy, sweet, and perfectly infused with a hint of vanilla warmth</p>
            </div>
            
          </div>
        </div>
          {/* service ends */}
        <div className='about' id='about' ref={ref3}>
          <div className='aboutimg'>
            <img className={visible3 ? 'aboutimgvisible' : 'aboutimgnotvisible'} src={aboutimg} width={850} height={500} alt='coffeeimg' style={{borderRadius:'20px'}}></img>
          </div>
          <div className='aboutmsg'>
            <h1>About us</h1>
            <h2>We provide quality coffee,<br/>
            and ready to deliver</h2>
            <p>We are a company that makes and distributes<br/>delicious drinks.our main product is made with a <br/>secret recipe and available in stores worldwide</p>
          </div>
        </div>
        {/* about ends */}
        <div className='menu' id='menu' ref={ref4}>
          <h1 style={{color:'#270c03',fontSize:'40px',fontWeight:'bold',fontFamily:'cursive',padding:'10px'}}>Special Menu for You</h1>
          <div className='menulist' >
            <div className={visible4 ? 'menuitem' : 'menuitemleft'}>
              <img src={sandwich} width={360} height={280} alt='sandwich'></img>
              <h1>Sandwich</h1>
              <h3>bread with meat and vegetables</h3>
            </div>
            <div className={visible4 ? 'menuitem' : 'menuitemup'}>
              <img src={lattemachiato} width={360} height={280} alt='latte Macchiato'></img>
              <h1>Latte Macchiato</h1>  
              <h3>Hot Milk with less Sugar</h3>
            </div>
            <div className={visible4 ? 'menuitem' : 'menuitemright'}>
              <img src={coffeeicecream} width={360} height={280} alt='coffee ice cream'></img>
              <h1>Coffee Ice Cream</h1>
              <h3>Coffee with ice cream vanila</h3>
            </div>
          </div>

          <div className='menulist' >
            <div className={visible4 ? 'menuitem' : 'menuitemleft'}>
              <img src={mochalatte} width={360} height={280} alt='MochaLatte'></img>
              <h1>Mocha Latte</h1>
              <h3>Hot Mocha Latte</h3>
            </div>
            <div className={visible4 ? 'menuitem' : 'menuitemdown'}>
              <img src={coldcoffee} width={360} height={280} alt='Cold Coffee'></img>
              <h1>Cold Coffee</h1>  
              <h3>Cold Iced Coffee</h3>
            </div>
            <div className={visible4 ? 'menuitem' : 'menuitemright'}>
              <img src={waffle} width={360} height={280} alt='coffee ice cream'></img>
              <h1>Waffle Ice Cream</h1>
              <h3>Waffle with ice cream</h3>
            </div>
          </div>
        </div>
        {/* menu ends */}
        <div className='contact' id='contact' >
          <h1 style={{color:'#270c03',fontSize:'40px',fontWeight:'bold',fontFamily:'cursive'}}>Contact</h1>
          <div className='contactinfo'>
              <input type='email' className='contactemail' placeholder='Email' onChange={(event)=>{setemail(event.target.value)}}></input>
              <button className='contactbutton' onClick={emailforward}>Contact</button>
          </div>
        </div>
        {/* contact ends */}
        <div className='footer'>
          <div className='footercafename'>
          <Link to='home' smooth={true} style={{fontSize:'55px',fontWeight:'bold',fontFamily:'cursive',cursor:'pointer',color:'white'}}>Coffee Cafe</Link>
          <h3 >Crafted Coffee, Cozy Vibes, Unforgettable Moments Your Perfect Expresso Escape</h3>
          </div>
          <div className='footerlinks'>
            <h2 style={{fontSize:'30px',fontWeight:'bold',fontFamily:'cursive',color:'white',padding:'30px'}}>Links</h2>
              <Link to='home' smooth={true} style={{fontSize:'25px',fontWeight:'500',color:'white',cursor:'pointer'}}>Home</Link>
              <Link to='service' smooth={true} style={{fontSize:'25px',fontWeight:'500',color:'white',cursor:'pointer'}}>Service</Link>
              <Link to='about' smooth={true} style={{fontSize:'25px',fontWeight:'500',color:'white',cursor:'pointer'}}>About</Link>
              <Link to='menu' smooth={true} style={{fontSize:'25px',fontWeight:'500',color:'white',cursor:'pointer'}}>Menu</Link>
              <Link to='contact' smooth={true} style={{fontSize:'25px',fontWeight:'500',color:'white',cursor:'pointer'}}>Contact</Link>
          </div>
          <div className='footeraddress'>
            <h2 style={{fontSize:'30px',fontWeight:'bold',fontFamily:'cursive',color:'white',padding:'30px'}}>Address</h2>
            <h3 style={{fontSize:'25px',fontWeight:'500',color:'white'}}>Hosur,India</h3>
            <h3 style={{fontSize:'25px',fontWeight:'500',color:'white'}}>+91 123456789</h3>
            <div className='social'>
              <img src={instagram} width={50} height={50} alt='instagram' style={{cursor:'pointer'}}></img>
              <img src={facebook} width={50} height={50} alt='facebook' style={{cursor:'pointer'}}></img>
              <img src={linkedln} width={50} height={50} alt='linkedln' style={{cursor:'pointer'}}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
