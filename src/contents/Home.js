import React, {Component} from 'react';

import profilepic from  '../images/profile-pic.jpg';
// import social from '../components/social';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import ReactTypingEffect from 'react-typing-effect';
class Home extends Component{
    render(){
        return(
            <div className="condiv">
                <div className="image">
                 <img src={profilepic}  style={{width: 200, height: 200, position:'justify', borderBlock:10, borderRadius:25 }} alt="profile pic"></img>
                 </div>
                 <h4 style={{top:10}}>Hey there,</h4>
                 <h1>I'm Nishitha Yza</h1>
                 <h3>   Technology Enthusiatic   |   Part Time Photographer  </h3>
                 <br></br>
                 <p>
                     I am a senior studying computer science at University Of North Carolina in the beautiful Charlotte city.
                     I love to learning new things, infact I built this website when trying to teach myself a new language. you can find me in 
                     my free time working out or napping( I've a super that I can sleep anywhere and anytime) or 
                     clicking some pictures of all kind of random things and  oh yes also,most probably scrolling 
                     through instagram or linkedin.
                 </p>
          
            </div>
           
        )
    }
}
export default Home