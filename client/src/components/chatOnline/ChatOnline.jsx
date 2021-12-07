import "./chatOnline.css";

const ChatOnline = () => {
	return (
		<div>
			<div className="chatOnline">
				<div className="chatOnlineFriend">
					<div className="chatOnlineImgContainer">
						<img
							className="chatOnlineImg"
							src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
						/>
						<div className="chatOnlineBadge"></div>
					</div>
					<span className="chatOnlineName">John Doe</span>
				</div>
				<div className="chatOnlineFriend">
					<div className="chatOnlineImgContainer">
						<img
							className="chatOnlineImg"
							src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
						/>
						<div className="chatOnlineBadge"></div>
					</div>
					<span className="chatOnlineName">John Doe</span>
				</div>
				<div className="chatOnlineFriend">
					<div className="chatOnlineImgContainer">
						<img
							className="chatOnlineImg"
							src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
						/>
						<div className="chatOnlineBadge"></div>
					</div>
					<span className="chatOnlineName">John Doe</span>
				</div>
			</div>
		</div>
	);
};

export default ChatOnline;
