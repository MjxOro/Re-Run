import { SendBirdProvider, ChannelList, Channel } from 'sendbird-uikit'
import 'sendbird-uikit/dist/index.css'
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import './Chat.scss'
import { FaArrowLeft } from 'react-icons/fa'


const myColorSet = {
    '--sendbird-light-primary-500': '#00487c',
    '--sendbird-light-primary-400': '#00222D',
    '--sendbird-light-primary-300': '#3e6680',
    '--sendbird-light-primary-200': '#0496ff',
    '--sendbird-light-primary-100': '#027bce',
};

const Chat = (props) => {
    return (
        <SendBirdProvider
						appId={process.env.REACT_APP_SENDBIRD_API}    // Specify your Sendbird application ID.
						userId={props.currentUser._id}    // Specify your user ID.
						colorSet={myColorSet}
						nickname={props.currentUser.username}
        >
					<main className='chat'>
							<div className={!props.show ? 'chat__list' : 'chat__list chat__list--hidden'}>
									<ChannelList
									onChannelSelect={(channel) => { props.getUrl(channel.url) }}
									/>
							</div>
							<div className={props.show ? 'chat__app' : 'chat__app chat__app--hidden'}>
								<div className='chat__header'>
									<FaArrowLeft onClick={props.handleGoback}className='chat__goback'/>
								</div>
								<Channel channelUrl={props.channelLink}/>
							</div>
					</main>
        </SendBirdProvider>
  );
};
export default Chat
