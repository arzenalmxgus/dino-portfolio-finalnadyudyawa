import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "THE BENEFIT OF THE DOUBT",
		description:
			"The mind",
		keywords: [
			"THE BENEFIT OF THE DOUBT",
			"Dino",
			"Dean Lauren",
			"Dean Lauren Dadivas",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"> </div>
					<img
						src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.15752-9/452331070_1199966521349165_8061409628060789476_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFWmB-569pZ5wFcQ1u1wQ0hJQ4T41nzxPAlDhPjWfPE8NBOHtaIpcS-Ku_0GsQuyzhkjHINy66Q2VeC2cg_kIm7&_nc_ohc=Z3w7FW8-4PAQ7kNvgE37StF&_nc_ht=scontent.fmnl4-3.fna&cb_e2o_trans=q&oh=03_Q7cD1QF3u2f3io5SeZC75uRz2iIKKf9fNhiVLZHmXDtaXMLA1g&oe=66E0FFFA"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "ONE'S LOVE",
		description:
			"The heart.",
		style: ``,
		keywords: [
			"ONE'S HEART",
			"Dino",
			"Dean Lauren",
			"Dean Lauren Dadivas",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"> </div>
					<img
						src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t1.15752-9/450367612_1455510168487793_7288453329662642098_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE6qNuAyw4K0ikwXl6S-bi7uA3hzx9VlMW4DeHPH1WUxT2elnEfzOhiwhEkF_xQwXAxUmF2pmapjM_svPL7tRuL&_nc_ohc=KlZGN9BM3nQQ7kNvgFfI2Wk&_nc_ht=scontent.fmnl4-7.fna&cb_e2o_trans=q&oh=03_Q7cD1QEHF8UBTBUVifhqljwP2N6Q_brfgfIoABrMdxCumF17aA&oe=66E116B3"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
