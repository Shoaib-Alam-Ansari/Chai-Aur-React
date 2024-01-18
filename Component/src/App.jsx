import { useState } from "react";
import "./App.css";
import Card from "./component";
import NavBar from "./navbar";

function App() {
  return (
    <>
    <NavBar/>
    <h1 className="mb-4">Macbook</h1>
    <div className="grid gap-4 grid-cols-3 grid-rows-4">
      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        }
      />
      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://th.bing.com/th/id/R.1ae823e85399db640e8ba887dab4d04a?rik=Bcxa2oHpx4X6dA&riu=http%3a%2f%2fwww.ilounge.com%2fwp-content%2fuploads%2f2019%2f03%2fMacbook-Air-2018.jpeg&ehk=9Eyu2JqD%2bnEQjeJEr2oBpVGoz8tssNrpaECZqVx9d%2bA%3d&risl=&pid=ImgRaw&r=0"
        }
      />

      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://i.ytimg.com/vi/OtUmS7R_gYo/maxresdefault.jpg"
        }
      />
      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://i.ytimg.com/vi/OtUmS7R_gYo/maxresdefault.jpg"
        }
      />
      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://i.ytimg.com/vi/OtUmS7R_gYo/maxresdefault.jpg"
        }
      />
      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://i.ytimg.com/vi/OtUmS7R_gYo/maxresdefault.jpg"
        }
      />
      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://i.ytimg.com/vi/OtUmS7R_gYo/maxresdefault.jpg"
        }
      />
      <Card
        string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum dolorem vel quasi dignissimos! Laudantium optio cumque temporibus accusamus porro."
        btnText={"See Details"}
        ImgSrc={
          "https://i.ytimg.com/vi/OtUmS7R_gYo/maxresdefault.jpg"
        }
      />
      </div>
    </>
  );
}

export default App;
