import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

import $ from "jquery";
import "./style.css";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      data:[]
    };
    this.renderTemplate=this.renderTemplate.bind(this);
  }
  componentDidMount(){
    const gelenData=[
      {
        name:'ilyas',surname:'aktas',mail:'aktasilyas875@gmail.com'
      },
      {
        name:'beyza',surname:'gurocak',mail:'beyzagurocak@gmail.com'
      }, {
        name:'yahya',surname:'alatas',mail:'yahya@gmail.com'
      }, {
        name:'salim',surname:'akpolat',mail:'salim875@gmail.com'
      }
    ];

    this.setState({data:gelenData})
  }
 OturumAc=()=>{
  const username=$('#username').val();
  const password=$('#password').val();
  //console.log(this.state.username,this.state.password);
  this.state.data.map(item=>{
    console.log(item.name,item.surname,item.mail);
  })

 }
  onChangeUsername(val){
    this.setState({username:val.target.value})
 }
 onChangePassword(val){
  this.setState({password:val.target.value})
}
renderTemplate=()=>{
  return( 
     <div>
     {this.state.data.map(item=>{
    <tr>
      <td>{item.username}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>

    </tr>
  })}
  </div>
  )

}
  render() {
    return (
      <div className="content">
        <h5>
          Hesabınızda oturum açın! <hr></hr>
        </h5>
        <div className="sosyal">
          <div className="sosyallink">
            <i id="facebook" className="fa-brands fa-facebook"></i>
            <a href="https://www.facebook.com/"> Facebook ile devam et</a>
          </div>
          <div className="sosyallink">
            <i className="fa-brands fa-google"></i>
            <a href="https://www.google.com.tr/?hl=tr"> Google ile devam et</a>
          </div>
          <div className="sosyallink">
            <i id="apple" className="fa-brands fa-apple"></i>
            <a id="apple" href="https://appleid.apple.com/">
              Apple ile devam et
            </a>
          </div>
        </div>

        <div className="form-action">
          <div className="formflex">
            <i className="fa-solid fa-envelope"></i>
            <input id="username" onChange={this.onChangeUsername.bind(this)} typeof="email" placeholder="E-Posta"></input>
          </div>
          <div className="formflex">
            <i className="fa-solid fa-lock"></i>
            <input id="password" onChange={this.onChangePassword.bind(this)} typeof="password" placeholder="Şifre"></input>
          </div>
        </div>

        <div className="oturum" onClick={this.OturumAc}>
          <input
            id="btnoturum"
            typeof="submit"
            defaultValue={"Oturum Aç"}
          ></input>
          <br></br>
          <div className="sifre">
            <span> veya </span>
            <a href="#">Şifremi unuttum</a>
          </div>
        </div>
        <div>
          Hesabınız yok mu?
          <a id="kaydol" href="#">
            {" "}
            Kaydol
          </a>
        </div>
      </div>
    );
  }
}
export default Content;
