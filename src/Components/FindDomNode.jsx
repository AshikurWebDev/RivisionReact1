import React, { Component } from 'react';
import reactDom from 'react-dom';


export class FindDomNode extends Component {
    changeIMG() {
        let imgId = document.getElementById('img');
        reactDom.findDOMNode(imgId).src =
          "https://studypoint.academy/wp-content/uploads/2020/12/Why-study-pointAsset-1.jpg";
    }
    render() {
        return (
          <div>
            <button className="btn btn-info text-light" onClick={this.changeIMG}>Click Me</button><br/><br/>
            <img id="img"
              src="https://studypoint.academy/wp-content/uploads/2020/12/studypointlogo-2.png"
              alt=""
            />
          </div>
        );
    }
}

export default FindDomNode
