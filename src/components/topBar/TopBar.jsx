import React from "react";
import "./topBar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function TopBar() {
	return (
		<div className="topBar">
			<div className="topBarWrapper">
				<div className="topLeft">
					<span className="logo boldText">LOGO</span>
				</div>
				<div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="iconBadge mediumText">2</span>
                    </div>
				</div>
			</div>
		</div>
	);
}
