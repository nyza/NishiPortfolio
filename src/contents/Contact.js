import React, { Component } from 'react';

class Contact extends Component {
     openInTab=(url)=>{
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
        if(newWindow) newWindow.opener=null
    }
    render() {
        return (
            <div className="condiv">
<h1 className="subtopic">Contact Me</h1>
<h3 > Email : nishiyza@gmail.com</h3>
<h3 onClick={()=> this.openInTab('https://www.linkedin.com/in/nishitha-yza-6bb729148')}> LinkedIn : Nishitha Yza</h3>
<h3 onClick={()=> this.openInTab('https://github.com/nyza')}> Github : nyza</h3>
<h3>Instagram   :   @yza.reddy</h3>
<h3 onClick={()=> this.openInTab('https://drive.google.com/file/d/1Scj7_Z6Nwfsf2VUdYu_NVqCgH-K-qDhQ/view')}> Resume : Open</h3>
</div>
)
}
}
export default Contact