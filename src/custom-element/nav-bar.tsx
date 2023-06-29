import { StyleHTMLAttributes, useState } from "react";

export default function NavBar() {
  const [vertDisplay, setVertDisplay] = useState(false);

  //change the state and open/close the nav bar during vertical mode
  function vertDisplayHandleClick() {
    setVertDisplay(!vertDisplay);
  }

  const menuItems = [
    {
      page: "主頁",
      link: "/",
    },
    {
      page: "收費說明",
      link: "/fee-intro",
    },
    {
      page: "精選導師",
      link: "/tutors",
    },
  ];

  return (
    <>
      <nav className="flex flex-col md:flex-row h-25 md:h-20 bg-[#FFF4E2]  gap-4 text-[#9b6f39] font-bold text-xl">
        <a href="/" className="self-center flex h-20 w-20">
          <img src="../bin/logo.png" className="max-w-[80px]" alt="Logo" />
        </a>
        {menuItems.map((e, index) => {
          return (
            <a key={index}
              href={e.link}
              className="self-center hover:border-b-2 border-[#B48853]"
            >
              <button>{e.page}</button>
            </a>
          );
        })}
        <div className=" self-center flex-grow mr-2 rounded-lg items-end flex justify-end">
          <a
            className=""
            href="https://forms.gle/PyQufp352yzmygPD8"
            target="_blank"
          >
            <button className="mb-2 md:mb-0 text-white text-right bg-[#9F5C5C] rounded-lg p-2 hover:drop-shadow-lg">
              登記個案/導師
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}

// const navBarTemplate = document.createElement("template");
// navBarTemplate.innerHTML = `
// <nav class="h-20 bg-[#FFF4E2] flex gap-4 text-[#9b6f39] font-bold text-xl">
// <a href="./index.html" class="self-center flex h-20"
//   ><img src="../bin/logo.png" class=""
// /></a>
// <a class="self-center hover:border-b-2 border-[#B48853]"
//   ><button>主頁</button></a
// >
// <a class="self-center hover:border-b-2 border-[#B48853]"
//   ><button>收費說明</button>
// </a>
// <a class="self-center hover:border-b-2 border-[#B48853]"
//   ><button>精選導師</button>
// </a>
// <div
//   class="self-center flex-grow mr-2 rounded-lg items-end flex justify-end"
// >
//   <a class="" href="https://forms.gle/PyQufp352yzmygPD8" target="_blank">
//     <button
//       class="text-white text-right bg-[#9F5C5C] rounded-lg p-2 hover:drop-shadow-lg"
//     >
//       登記個案/導師
//     </button>
//   </a>
// </div>
// </nav>
//   `;
// //everything in slot, the style won't be affected outside
// //we can make multiple slot

// class navBarElement extends HTMLElement {
//   details: string;
//   constructor() {
//     super();
//     this.details = this.getAttribute("details") || "";
//     const shadow = this.attachShadow({ mode: "open" });
//     this.innerHTML = this.details;
//     shadow.append(navBarTemplate.content.cloneNode(true));
//   }

//   connectedCallBack() {
//     console.log("connectedCallBack");
//     // this.attachShadow({mode: "open"})
//     // const wrapper = document.createElement("span")
//     // this.details = this.getAttribute('details') || ''
//     // console.log(this.details || 'nth haha')
//     // wrapper.innerHTML = `${this.details}`
//     // this.shadowRoot?.append(wrapper)
//   }

//   render() {
//     // console.log(this.details || 'nth haha')
//   }
// }

// // function addPostElement(){
// customElements.define("nav-bar-element", navBarElement);
// //     console.log("Added Post element")
// // }

// // addPostElement()
