import React, { useState } from 'react'
import HomeStyle from './Home.module.css'
import bg from '../../images/background-desktop.png'
import line from '../../images/pattern-lines.svg'
import lineTop from '../../images/pattern-squiggly-line-top.svg'
import lineBottom from '../../images/pattern-squiggly-line-bottom-desktop.svg'
import iconMark from '../../images/logo-mark.svg'
import ticket from '../../images/pattern-ticket.svg'
function Home() {
    const [image ,setimage]=useState(null)
    const [name ,setname]=useState('')
    const [githup ,setgithup]=useState('')
    const [email ,setemail]=useState('')
    const [story,setstory]=useState(false)
    const handleform=(e)=>{
e.preventDefault();

     setstory(true)   
    }
  return (
<>
<section className={HomeStyle.section}>

 <img   className={HomeStyle.imgFixed} src={bg} alt='bg'/>
 <img  className={HomeStyle.imgFixed} src={line} alt='line'/>
<img  className={HomeStyle.lineTop}  src={lineTop} alt='lineTop'/>
<img  className={HomeStyle.lineBottom}  src={lineBottom} alt='lineBottom'/>
{



<form className={HomeStyle.form} onSubmit={handleform}>

<span> <img src={iconMark} alt='icon' style={{width:'30px'}}/> Coding conf</span>
<div>


<h2> {story?`congrat,s ${name}`:'your jounery to coding conf' }</h2>
<h2>{ story?'your ticket is ready':'2025 starts there!'}</h2>
</div>
<p>{story?`we,ve emailed your ticket to ${email} and will send updates in  the run up  to the event`:'secure  your spot  at next year,s biggest coding conference.'}</p>
{
story?undefined:
<>
<label>upload avatr</label>
<input type='file' accept='image/*'  onChange={(e)=>{
    
    const file=e.target.files[0]
    setimage(URL.createObjectURL(file))
}} />


<label>Full name</label>
<input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
<label>Email address</label>
<input type='email' placeholder='example@email.com' value={email} onChange={(e)=>setemail(e.target.value)} />
<label>githup username</label>
<input type='text' placeholder='@userName' value={githup} onChange={(e)=>setgithup(e.target.value)}  />
<button>Generate MY Ticket</button>
</>
}
</form>
}
{

story&&
<div className={HomeStyle.tazkrte}>
<img src={ticket} alt='ticket'/>
<div>

<p> <img src={iconMark} alt='mark'/>coding conf</p>

</div>

<div>
<img src={image} alt='img'/>
<div>
<h2>{name}</h2>
<h2>{githup}</h2>
</div>
</div>

</div>

}
</section>


</> 
)
}

export default Home