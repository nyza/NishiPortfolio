import React, { Component } from 'react';
import Widecard from '../components/card';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import progressBar from '../components/progress-bar';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Education</h1>

<Widecard title="Bachelor Of Science in Computer Science" where="University Of North Carolina At Charlotte" from="August 2017" to="Present"/>
<h1 className="subtopic">Work Experiecnes </h1>
<Widecard title="Software Engineering Intern" where="Slalom Build" from="May 2020 " to="August 2020"/>
<Widecard title="Software Testing Intern" where="Bosch Rexroth" from="May 2019 " to="August 2019"/>
<Widecard title="Teaching Assistant" where="UNCC Charlotte" from="August 2019 " to="December 2019"/>
</div>
)
}
}
export default Education