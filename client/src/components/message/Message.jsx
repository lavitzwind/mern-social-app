import "./message.css";

const Message = ({ own }) => {
	return (
		<div className={own ? "message own" : "message"}>
			<div className="messageTop">
				<img
					src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt=""
					className="messageImg"
				/>
				<p className="messageText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi
					laborum, hic placeat eius quis debitis quaerat voluptate pariatur
					incidunt dolorum ducimus impedit amet! Fugit omnis fugiat pariatur
					blanditiis exercitationem!
				</p>
			</div>
			<div className="messageBottom">1 hour ago</div>
		</div>
	);
};

export default Message;
