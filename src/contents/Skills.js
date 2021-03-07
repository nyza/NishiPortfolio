import React, { Component } from 'react'
import SkillsCard from '../components/skillsCard'
import progressBar from '../components/progress-bar';
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'myskills':['HTML','CSS','JS','PHP','REACT JS','FIREBASE','MIT APP']
};
}

render() {
return (
<div className="condiv">
<h1 className="subtopic">My Skills</h1>
<progressBar bgcolor='' completed=''></progressBar>
<SkillsCard title= "Java" ></SkillsCard>
<SkillsCard title= "Python"></SkillsCard>
<SkillsCard title= "AWS Services"></SkillsCard>
<SkillsCard title= "mobile application development,"></SkillsCard>
<SkillsCard title= "TypeScript/ JavaScript"></SkillsCard>
<SkillsCard title= "DataStructure & Algorithms"></SkillsCard>
<SkillsCard title= "Git"></SkillsCard>
<SkillsCard title= "MY SQL"></SkillsCard>
</div>
)
}
}
export default Skills