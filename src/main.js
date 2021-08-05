import React, { Component } from 'react';
import  './clock';
import './weather';
import './advice';
import { firestore } from './firebase';
import './css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
window.$ = window.jQuery = jQuery;

class Main extends Component {
  
  state = {
    name1 : "", role1 : "", img1 : "",
    name2 : "", role2 : "", img2 : "",
    name3 : "", role3 : "", img3 : ""
  }

  componentDidMount(){
    firestore.collection("user")
    .doc("user1")
    .get()
    .then(doc => {
      this.setState({
        name1 : doc.data().name,
        role1 : doc.data().role,
        img1 : doc.data().img,
        item1 : doc.data().items.length
      })
    })

    firestore.collection("user")
    .doc("user2")
    .get()
    .then(doc => {
      this.setState({
        name2 : doc.data().name,
        role2 : doc.data().role,
        img2 : doc.data().img
      })
    })

    firestore.collection("user")
    .doc("user3")
    .get()
    .then(doc => {
      this.setState({
        name3 : doc.data().name,
        role3 : doc.data().role,
        img3 : doc.data().img
      })
    })

    function fnMove(seq){
      var offset = $("#" + seq).offset();
      $('#app').animate({scrollTop : offset.top}, 400);
  }

  };

  render(){
    return (
      
      <div className="app">
      <header className="header">
        <div className="header__left">
          <span>LG WebOS Team 11</span>
        </div>
        <div className="header__right">
          <p className="clock">날짜 및 시간</p>
        </div>
      </header>
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__item">
            <a href="#vienna" className="nav__link" data-scroll-to>
              <div className="media">
                <img src={this.state.img1} alt="" className="media__img" />
                <p className="media__content">
                  <strong>{this.state.name1}</strong><br />
                  {this.state.role1}
                </p>
                
              </div>
            </a>
          </li>
          <li className="nav__item">
            <a href="#lisbon" className="nav__link" data-scroll-to>
              <div className="media">
                <img src={this.state.img2} alt="" className="media__img" />
                <p className="media__content">
                  <strong>{this.state.name2}</strong><br />
                  {this.state.role2}
                </p>
              </div>
            </a>
          </li>
          <li className="nav__item">
            <a href="#newyork" className="nav__link" data-scroll-to>
              <div className="media">
                <img src={this.state.img3} alt="" className="media__img" />
                <p className="media__content">
                  <strong>{this.state.name3}</strong><br />
                  {this.state.role3}
                </p>
              </div>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link" data-scroll-to>
              <div className="media">
                <img src="https://img.icons8.com/ios/96/000000/add--v1.png" alt="" className="media__img" />
                <p className="media__content">
                  <strong>Add members</strong><br />
                  
                </p>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">


        {/* 1번째 */}

        <article className="section" id="vienna" data-section>
          <header className="section__header" style={{backgroundImage: 'url("https://lonelyplanetimages.imgix.net/mastheads/stock-photo-st-stephens-church-112868985.jpg?sharp=10&w=2000")'}}>
            {/* <p class="section__subtitle">Today's advice</p> */}
            {/* <header className="subtitle">LG SMART DOOR PAD</header> */}
            <h1 className="section__title advice" />
            <div className="section__controls">
              <button className="btn btn--prev" title="Previous" >
                <span className="arrow arrow--left" />
              </button>
              <button className="btn btn--next" title="Next">
                <span className="arrow arrow--right"/>
              </button>
              <div className="user">
                <img src={this.state.img1} className="user__img" alt="" />
                <span className="user__name">{this.state.name1}</span>
              </div>
            </div>
          </header>
          <div className="section__content">
            <ul className="boxgrid">
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--weather">
                  <p>
                  </p><p>Temp<br /></p><div className="text--large"><p className="now" /></div><p />
                  <br /> &nbsp; &nbsp; &nbsp;
                  <p>Chance of showers<br /></p><div className="text--large"><p className="cprobability" /></div><p />
                  <p />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--locations">
                  <p>TODAY<br /></p><div className="text--large"><p className="date">오늘의 날짜</p></div><p />
                </a>
              </li>
              <li>

              </li>
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--image">
                  <img src="https://t1.daumcdn.net/cfile/tistory/16747C3F4E31F6161D" className="box__img" alt="" />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--wide2">
                <a href="#" className="box box--time">
                  <p>NOW<br /></p><div className="text--large"><p className="clock">현재 시간</p></div><p />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--push">
                <a href="#" className="box box--image">
                  <img src="https://lh3.googleusercontent.com/proxy/17OA7OmH7wCFTP5uuJms_F6QaY3YtOJ3FDR9WN9R7YEkObFNNP3I9uzqZ5w_43xkbqkeC2i_Bz37UQDhDCkossymBJCZ-XAVbjTJ125Ql9N0O3FuDh5cqdStAs9ELctpxVkU2KlD4ClLCpDX" className="box__img" alt="" />
                </a>
              </li>
              <li />
              <li className="boxgrid__item boxgrid__item--wide">
                {/* <Router> */}
                <Link to = {"/webcam/" + this.state.name1} >
                <a className="box box--cost">
                  <p><span className="text--large2">Make sure<br />you don't leave anything behind.</span></p>
                </a>
                </Link>
                {/* </Router> */}
              </li>
            </ul>
          </div>
        </article>

        {/* 2번째 */}

        <article className="section" id="lisbon" data-section>
          <header className="section__header" style={{backgroundImage: 'url("https://lonelyplanetimages.imgix.net/mastheads/54989636.jpg?sharp=10&vib=20&w=2000")'}}>
            {/* <header className="section__subtitle"><u>Thought of the day</u></header> */}
            <h1 className="section__title advice" />
            <div className="section__controls">
              <button className="btn btn--prev" title="Previous" onclick="fnMove('vienna')">
                <span className="arrow arrow--left" />
              </button>
              <button className="btn btn--next" title="Next">
                <span className="arrow arrow--right" />
              </button>
              <div className="user">
                <img src={this.state.img2} className="user__img" alt="" />
                <span className="user__name">{this.state.name2}</span>
              </div>
            </div>
          </header>
          <div className="section__content">
            <ul className="boxgrid">
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--weather">
                  <p>
                  </p><p>Temp<br /></p><div className="text--large"><p className="now" /></div><p />
                  <br /> &nbsp; &nbsp; &nbsp;
                  <p>Chance of showers<br /></p><div className="text--large"><p className="cprobability" /></div><p />
                  <p />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--locations">
                  <p>TODAY<br /></p><div className="text--large"><p className="date">오늘의 날짜</p></div><p />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--push">
                <a href="#" className="box box--image">
                  <img src="https://media-exp3.licdn.com/dms/image/C560BAQHvADhcRhmAaw/company-logo_200_200/0/1519893843961?e=2159024400&v=beta&t=0ugdprvY0ZmyF75F-ePhR8mlHDsOGIWwd-scpDU6WPY" className="box__img" alt="" />
                </a>
              </li>
              <li>
                
              </li>
              <li className="boxgrid__item boxgrid__item--wide2">
                <a href="#" className="box box--time">
                  <p>NOW<br /></p><div className="text--large"><p className="clock">현재 시간</p></div><p />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--push">
                <a href="#" className="box box--image">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Knuemblem00.jpg" className="box__img" alt="" />
                </a>
              </li>
              <li />
              <li className="boxgrid__item boxgrid__item--wide">
              
                <Link to = {"/webcam/" + this.state.name2} >
                <a className="box box--cost">
                  <p><span className="text--large2">Make sure<br />you don't leave anything behind.</span></p>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </article>

        {/* 3번째 */}

        
        <article className="section" id="newyork" data-section>
          <header className="section__header" style={{backgroundImage: 'url("https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=2000")'}}>
            {/* <header className="section__subtitle">Thought of the day</header> */}
            <h1 className="section__title advice" />
            <div className="section__controls">
              <button className="btn btn--prev" title="Previous" href = '#lisbon' data-scroll-to>
                <span className="arrow arrow--left" />
              </button>
              <button className="btn btn--next" title="Next">
                <span className="arrow arrow--right" />
              </button>
              <div className="user">
                <img src={this.state.img3} className="user__img" alt="" />
                <span className="user__name">{this.state.name3}</span>
              </div>
            </div>
          </header>
          <div className="section__content">
            <ul className="boxgrid">
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--weather">
                  <p>
                  </p><p>Temp<br /></p><div className="text--large"><p className="now" /></div><p />
                  <br /> &nbsp; &nbsp; &nbsp;
                  <p>Chance of showers<br /></p><div className="text--large"><p className="cprobability" /></div><p />
                  <p />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--locations">
                  <p>TODAY<br /></p><div className="text--large"><p className="date">오늘의 날짜</p></div><p />
                </a>
              </li>
              <li></li>
              <li></li>
              <li className="boxgrid__item boxgrid__item--wide">
                <a href="#" className="box box--image">
                  <img src="https://img.hankyung.com/photo/202102/AD.25372333.1.jpg" className="box__img" alt="" />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--wide2">
                <a href="#" className="box box--time">
                  <p>NOW<br /></p><div className="text--large"><p className="clock">현재 시간</p></div><p />
                </a>
              </li>
              <li className="boxgrid__item boxgrid__item--push">
                <a href="#" className="box box--image">
                  <img src="http://fresheropenings.com/wp-content/uploads/2021/01/LG.png" className="box__img" alt="" />
                </a>
              </li>
              <li />
              <li className="boxgrid__item boxgrid__item--wide">
              
                <Link to = {"/webcam/" + this.state.name3} >
                <a className="box box--cost">
                  <p><span className="text--large2">Make sure<br />you don't leave anything behind.</span></p>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </article>

      </main>
      {/* <button className="scrollctrl scrollctrl--prev" data-scroll-dir="prev" onClick = "window.scrollTo({top:-100px, behavior:'smooth'})">
        <span className="arrow arrow--large arrow--up" />
      </button>
      <button className="scrollctrl scrollctrl--next" data-scroll-dir="next">
        <span className="arrow arrow--large arrow--down" />
      </button> */}
      <footer className="footer">
        <p>by <a href>@Lee, Si, Ahn, An</a></p>
        <p>TEAM 11</p>
        <p className="footer__more">
          <a href="https://mxb.at/blog/layouts-of-tomorrow/">lg webos</a>
        </p>
      </footer>
    </div>

    );
  }
}


export default Main;
