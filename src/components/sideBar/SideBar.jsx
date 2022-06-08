import React from 'react'
import "./sideBar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export default function SideBar() {
  return (
		<div className="sideBar">
			<div className="sideBarWrapper">
				<div className="sideBarMenu">
					<div className="sideBarTitle">Dashboard</div>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
							<LineStyleIcon className="sideBarIcon" />
							Home
						</li>
						<li className="sideBarListItem">
							<TimelineIcon className="sideBarIcon" />
							Analytics
						</li>
						<li className="sideBarListItem">
							<TrendingUpIcon className="sideBarIcon" />
							Sales
						</li>
					</ul>
				</div>

				<div className="sideBarMenu">
					<div className="sideBarTitle">Quick Menu</div>
					<ul className="sideBarList">
						<li className="sideBarListItem">
							<PersonOutlineIcon className="sideBarIcon" />
							Users
						</li>
						<li className="sideBarListItem">
							<StorefrontIcon className="sideBarIcon" />
							Products
						</li>
						<li className="sideBarListItem">
							<AttachMoneyIcon className="sideBarIcon" />
							Transactions
						</li>
						<li className="sideBarListItem">
							<BarChartIcon className="sideBarIcon" />
							Reports
						</li>
					</ul>
				</div>

				<div className="sideBarMenu">
					<div className="sideBarTitle">Notifications</div>
					<ul className="sideBarList">
						<li className="sideBarListItem">
							<MailOutlineIcon className="sideBarIcon" />
							Mail
						</li>
						<li className="sideBarListItem">
							<DynamicFeedIcon className="sideBarIcon" />
							Feedback
						</li>
						<li className="sideBarListItem">
							<ChatBubbleOutlineIcon className="sideBarIcon" />
							Messages
						</li>
					</ul>
				</div>

				<div className="sideBarMenu">
					<div className="sideBarTitle">Staff</div>
					<ul className="sideBarList">
						<li className="sideBarListItem">
							<WorkOutlineIcon className="sideBarIcon" />
							Manage
						</li>
						<li className="sideBarListItem">
							<TimelineIcon className="sideBarIcon" />
							Analytics
						</li>
						<li className="sideBarListItem">
							<ReportGmailerrorredIcon className="sideBarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
