import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Chat GPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              porro magnam voluptate officiis id pariatur libero aliquid natus
              accusamus ut?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem atque, molestias beatae, aliquid nulla veritatis
              tenetur quis officia molestiae doloribus facilis. Nemo quibusdam
              libero quidem animi rerum at quia, minus similique aspernatur
              nesciunt necessitatibus inventore accusamus, debitis consequuntur
              quis obcaecati, ex sunt ad et! Accusantium voluptatibus totam
              facilis laboriosam illum porro, fugiat rem iste facere non, magni
              perferendis aperiam, reiciendis eos obcaecati ad assumenda
              corrupti culpa? Autem cum molestiae iusto fugit magni ex, sint
              esse aut labore dolor quis id accusantium corrupti incidunt,
              similique quisquam voluptate assumenda qui nostrum officia veniam,
              omnis molestias doloremque? Quam rem perspiciatis repellat
              voluptas labore!
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message..." />
            <button className="send">
              <img src={sendBtn} alt="send" />
            </button>
          </div>
          <p>ChatGPT may produce incorrect results</p>
        </div>
      </div>
    </div>
  );
}

export default App;
