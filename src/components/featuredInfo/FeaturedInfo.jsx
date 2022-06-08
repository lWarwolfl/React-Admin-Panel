import './featuredInfo.css';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FeaturedInfo() {
  return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revanue</span>
				<div className="featuredDataContainer">
					<span className="featuredData">2,780$</span>
					<span className="featuredDataRate">
						-10.5 <ArrowDownwardIcon className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredDescription">Compared to last Month</span>
			</div>

			<div className="featuredItem">
				<span className="featuredTitle">Revanue</span>
				<div className="featuredDataContainer">
					<span className="featuredData">4,320$</span>
					<span className="featuredDataRate">
						+5.2 <ArrowUpwardIcon className="featuredIcon positive" />
					</span>
				</div>
				<span className="featuredDescription">Compared to last Month</span>
			</div>

			<div className="featuredItem">
				<span className="featuredTitle">Revanue</span>
				<div className="featuredDataContainer">
					<span className="featuredData">10,651$</span>
					<span className="featuredDataRate">
						-20.5 <ArrowDownwardIcon className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredDescription">Compared to last Month</span>
			</div>
		</div>
	);
}
