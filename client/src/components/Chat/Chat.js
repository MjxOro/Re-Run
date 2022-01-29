import "sendbird-uikit/dist/index.css";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import "./Chat.scss";

const myColorSet = {
  "--sendbird-light-primary-500": "#00487c",
  "--sendbird-light-primary-400": "#00222D",
  "--sendbird-light-primary-300": "#3e6680",
  "--sendbird-light-primary-200": "#0496ff",
  "--sendbird-light-primary-100": "#027bce",
};

const Chat = (props) => {
  return (
    <div className="chat">
      <SendBirdApp
        appId={process.env.REACT_APP_SENDBIRD_APP_KEY} // Specify your Sendbird application ID.
        userId={props.currentUser._id} // Specify your user ID.
        colorSet={myColorSet}
        nickname={props.currentUser.username}
      />
    </div>
  );
};
export default Chat;
