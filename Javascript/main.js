"use strict";

const data = [
  // 1
  {
    sender: "Sadam",
    date: "Dec, 12",
    read: false,
    subject: "Subject for: New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 2
  {
    sender: "Twitter",
    date: "Dec, 22",
    read: false,
    subject: "Subject for: New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  //  3
  {
    sender: "Yahye",
    date: "Dec, 14",
    read: false,
    subject: "Subject for: New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 4
  {
    sender: "Sadam",
    date: "Jan, 11",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 5
  {
    sender: "Qadar",
    date: "Dec, 12",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 6
  {
    sender: "John",
    date: "Oct, 26",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 7
  {
    sender: "Slaf",
    date: "Dec, 21",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 8
  {
    sender: "Sadam",
    date: "Dec, 10",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 9
  {
    sender: "Farah",
    date: "May, 20",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 10
  {
    sender: "Alex",
    date: "Feb, 12",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 11
  {
    sender: "Alex",
    date: "Jun, 25",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 12
  {
    sender: "Moe",
    date: "Sep, 28",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 13
  {
    sender: "Jey",
    date: "Jan, 17",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 14
  {
    sender: "Adam",
    date: "Nov, 15",
    read: true,
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 15
  {
    sender: "Joe",
    date: "Apr, 23",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 16
  {
    sender: "Sadam",
    date: "Jul, 28",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 17
  {
    sender: "Slef",
    date: "Dec, 31",
    read: true,
    subject: "New mail content",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
];

renderPreview();
function renderPreview() {
  const templatecontainer = document.querySelector(".mail-container");

  const tempData = `            <section class="mails-list-header mobile-remove">
    <div class="mails-list-header-left">
     <div>
         <img src="./assets/SVG/box.svg" class="logo-hover logo-rect-hover"/>
         <img src="./assets/SVG/arrow-down.svg" class="logo-hover logo-rect-hover"/>
     </div>
     <img src="./assets/SVG/reload.svg" class="logo-hover"/>
     <img src="./assets/SVG/three-dots.svg" class="logo-hover"/>
    </div>
    <div class="mails-list-header-right">
     <span>1-17 of 17</span>
     <img src="./assets/SVG/left-arrow.svg" class="logo-hover"/>
     <img src="./assets/SVG/right-arrow.svg" class="logo-hover"/>
    </div>
 </section>
 <p class="mobile-text mobile-show">Primary</p>
 <section class="mails-list">

 </section>
 <footer class="mobile-show mobile-footer">
 <div class="logo-footer-hover">
 <img src="./assets/SVG/footer-mail.svg" class="logo-footer"/>
 <span class="mail-count">17+</span>
 </div>
 <div class="logo-footer-hover">
     <img src="./assets/SVG/footer-video.svg" class="logo-footer"/>
 </div>
 </footer>`;
  templatecontainer.innerHTML = tempData;
  const messages = document.querySelector(".mails-list");
  const render = function (data) {
    messages.innerHTML = data
      .map(
        (d) => `
   <div class="mail-list-preview" onClick="renderMail()">
   <div class="mail-preview-name-comp">
       <img src="./assets/SVG/drag-indicator.svg" class="logo-hover logo-rect-hover top-level-hover"/>
       <img src="./assets/SVG/box-light.svg" class="logo-hover logo-rect-hover tab-remove"/>
       <img src="./assets/SVG/star.svg" class="logo-hover logo-rect-hover tab-remove"/>
       <img src="./assets/SVG/preview-arrow.svg" class="logo-hover logo-rect-hover tab-remove"/>
       <img src = "./assets/png/profile.jpeg" class="logo-hover profile-image" alt="profile image"/>
       <span class="preview-name tab-remove">${
         d.read !== true ? `<b>${d.sender}</b>` : `${d.sender}`
       }</span>
   </div>
      <div class="preview-message">
      <span class="tab-show">${
        d.read !== true ? `<b>${d.sender}</b>` : `${d.sender}`
      }</span>
      <span class="tab-show">${
        d.read !== true ? `<b>${d.subject}</b>` : `${d.subject}`
      }</span>
      <span class="tab-show low-font">${d.message}</span>
        <span class="tab-remove">${
          d.read !== true ? `<b>${d.subject+'-'}</b>` : `${d.subject+'-'}`
        }${d.message}</span>
      </div>
      <div class="preview-date low-font">
          <span>${
            d.read !== true ? `<b>${d.date}</b>` : `${d.date}`
          }
          </span>
          <img src="./assets/SVG/star.svg" class="logo-hover logo-rect-hover tab-show"/>
      </div>
      <div class="preview-buttons">
      <img src="./assets/SVG/email-row.svg" class="logo-hover logo-rect-hover top-level-hover"/>
      <img src="./assets/SVG/delete-mail.svg" class="logo-hover logo-rect-hover top-level-hover"/>
      <img src="./assets/SVG/archive.svg" class="logo-hover logo-rect-hover top-level-hover"/>
      </div>
    </div>
      `
      )
      .join(" ");
  };

  render(data);
}

function renderMail(){
    const templatecontainer = document.querySelector(".mail-container");
    templatecontainer.innerHTML = ` <section class="mail-bar-top mail-bar-element">
    <div class="mail-bar-top-left">
        <img src="./assets/SVG/back.svg" alt="labels" class="logo-hover label-back" onClick="renderPreview()">
        <img src="./assets/SVG/save.svg" alt="labels" class="logo-hover">
        <img src="./assets/SVG/report.svg" alt="labels" class="logo-hover">
        <img src="./assets/SVG/delete-email.svg" alt="labels" class="logo-hover">
    </div>
    <div class="mail-bar-top-right">
        <img src="./assets/SVG/three-dots.svg" alt="three-dots" class="logo-hover mobile-show">
        <span class="mobile-remove">1-17 of 17</span>
        <img src="./assets/SVG/left-arrow.svg" class="logo-hover  mobile-remove"/>
        <img src="./assets/SVG/right-arrow.svg" class="logo-hover  mobile-remove"/>
    </div>
 </section>
 <section class="mail-bar-middle mail-bar-element">
    <div class="mail-bar-middle-left">
        <span class="email-subject">Email subject</span>
        <img src="./assets/SVG/mail-arrow.svg" class="logo-hover"/>
    </div>
    <div class="mail-bar-middle-right"></div>
 </section>
 <section class="mail-bar-below mail-bar-element">
    <div class="mail-bar-below-left">
        <img src="./assets/SVG/profile-blue.svg" alt="blue-profile-icon">
        <div class="email-mail-details">
            <span><b>Ajai S S</b> < ajaiss1713@gmail.com > </span>
            <span>to me</span>
        </div>
    </div>
    <div class="mail-bar-below-right mobile-remove">
        <img src="./assets/SVG/star.svg"/>
        <span>18 Jun 2023, 13:49</span>
    </div>
 </section>
 <section class="mail-content">
    main content comes here.!
 </section>`;
}



function openSidebar(app){
  if(app !== "navigations-app") document.getElementById("navigations-app").setAttribute('class', 'slide-out');
  if(app !== "calendar-app") document.getElementById("calendar-app").setAttribute('class', 'slide-in');
  if(app !== "contacts-app") document.getElementById("contacts-app").setAttribute('class', 'slide-in');
  var isOpen = document.getElementById(app).classList.contains('slide-in');
   document.getElementById(app).setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
}

setTimeout(()=>{
  document.getElementById("splash-screen").style.visibility = "hidden";
},100)