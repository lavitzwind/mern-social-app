import "./message.css";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
	return (
		<div className={own ? "message own" : "message"}>
			<div className="messageTop">
				<img
					src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt=""
					className="messageImg"
				/>
				<p className="messageText">{message.text}</p>
			</div>
			<div className="messageBottom">{format(message.createdAt)}</div>
		</div>
	);
};

export default Message;
