import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
 class TableSkills extends Component {
  render() {
    return (
      <div className="TableSkills">
       
            <div className="framwork">
                <h3>Node.JS</h3>
                <LinearProgress color="secondary" variant="determinate" value={95} />
                <LinearProgress color="secondary" variant="determinate"value={95} />
                <LinearProgress color="secondary" variant="determinate"value={95} />
            </div>

            <div className="framwork">
                <h3>React.JS</h3>
                <LinearProgress color="secondary" variant="determinate" value={78} />
                <LinearProgress color="secondary" variant="determinate" value={78} />
                <LinearProgress color="secondary" variant="determinate" value={78} />
            </div>
            <div className="framwork">
                <h3>Angular</h3>
                <LinearProgress color="secondary" variant="determinate" value={70} />
                <LinearProgress color="secondary" variant="determinate" value={70} />
                <LinearProgress color="secondary" variant="determinate" value={70} />
            </div>
            <div className="framwork">
                <h3>javascript</h3>
                <LinearProgress color="secondary" variant="determinate" value={95} />
                <LinearProgress color="secondary" variant="determinate" value={95} />
                <LinearProgress color="secondary" variant="determinate" value={95} />
            </div>
            <div className="framwork">
                <h3>SCSS</h3>
                <LinearProgress color="secondary" variant="determinate" value={65} />
                <LinearProgress color="secondary" variant="determinate" value={65} />
                <LinearProgress color="secondary" variant="determinate" value={65} />
            </div>
            <div className="framwork">
                <h3>Linux</h3>
                <LinearProgress color="secondary" variant="determinate" value={85} />
                <LinearProgress color="secondary" variant="determinate" value={85} />
                <LinearProgress color="secondary" variant="determinate" value={85} />
            </div>
            <div className="framwork">
                <h3>Typescript</h3>
                <LinearProgress color="secondary" variant="determinate" value={70} />
                <LinearProgress color="secondary" variant="determinate" value={70} />
                <LinearProgress color="secondary" variant="determinate" value={70} />
            </div>
      </div>
    )
  }
}
export default TableSkills
