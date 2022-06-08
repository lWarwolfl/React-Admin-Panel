import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "./data";
import "./home.css";

export default function Home() {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart title="Users analytics" data={userData} dataKey="user" grid />
		</div>
	);
}
