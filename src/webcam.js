import React, { Component } from 'react';
import  './clock';
import './weather';
import './advice';
import { firestore } from './firebase';
import './css/style.css';
import jQuery from 'jquery';
import { Link } from 'react-router-dom' 
window.$ = window.jQuery = jQuery;

class WebCam extends Component{
    constructor({match}) {

        super({match});

        this.state = {
            user_name : match.params.name , user_num : "",
            length : 0, items : []
          }
      }

    componentDidMount() {
        // this.state.user_name = this.props.loaction.state.name; /////// match값 가져와야됨 /////// 임시로
        
            this.state.user_name === "Lee, Jaejoon"
            ? this.state.user_num = "user1"
            : ( this.state.user_name === "Si, Minju" 
                ? this.state.user_num = "user2"
                : this.state.user_num = "user3"
            )

        firestore.collection("user")
        .doc(this.state.user_num)
        .get()
        .then(doc => {
        this.setState({
            length : doc.data().items.length,
            items : doc.data().items
            })
        })                                                           
    } 

    // printList() {
    //     var forArray = [];
    //     for (let i = 0; i < this.state.length; i++) {
    //         forArray.push(<div>{this.state.items[i]}</div>);
    //     }
    //     return forArray;
    // }


    render(){
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./css/list.css" />
          <title>Document</title>
          <style dangerouslySetInnerHTML={{__html: "\n    html{\n      height: 100%;\n    }\n    body{\n      height: 100%;\n      background-image: linear-gradient(\n    -225deg,\n    #5271c4 0%,\n    #b19fff 48%,\n    #eca1fe 100%\n  );\n    }\n    .webcam {\n      width : 90vh;\n      height: 50vh;\n      background-color: black;\n      border: 2px solid ghostwhite;\n      position:absolute;\n      top: 50%; \n      left: 60%; \n      margin: -25vh 0vh 0vh -45vh;\n    }\n    .title {\n      color: white;\n      font-size: 80px;\n      font-weight: lighter;\n      position: absolute;\n      top: 8%;\n    }\n    .bt{\n    appearance: none;\n\t\toutline: 0;\n\t\tbackground-color: white;\n\t\tborder: 0;\n\t\tpadding: 10px 15px;\n\t\tcolor: #5271c4;\n\t\tborder-radius: 3px;\n\t\twidth: 400px;\n\t\tcursor: pointer;\n\t\tfont-size: 40px;\n\t\ttransition-duration: 0.25s;\n    position: absolute;\n    top: 85%;\n\n    font-weight: lighter;\n    }\n  " }} />
          <div className="title">
            FOR {this.state.user_name}
          </div>
          <div style={{position: 'absolute', top: '18%', color: '#ffffff', fontSize: '40px'}}>Please check your itemlist</div>
          <div className="webcam">
            여기에 웹캠
          </div>
          <br />
          <br />
          <div id="checklist" style={{float: 'left', position: 'absolute', top: '50%', left: '45%', margin: '-25vh 0vh 0vh -50vh'}}>
        
          {this.state.items.map((item, index) => {
            return (
            <span>
            
            <input id ={"0" + index} type ="checkbox" name="r" value={index+1}></input> 
            <label for= {"0" +index}>{item}</label>

            </span>
          );
            })}
          </div> 
          <Link to = "/" >
          <div className="button2" style={{marginTop: '40%'}}> <span>Have a nice day!</span></div>
          </Link>
        </div>
      );
    }
}

export default WebCam;