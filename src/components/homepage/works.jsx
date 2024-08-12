import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							
							<div className="work-title">Kilid Kilid Lang</div>
							<div className="work-subtitle">
								Tambay 
							</div>
							<div className="work-duration">2002 - Present</div>
						</div>

						<div className="work">
							
							<div className="work-title">Creative Media Productions</div>
							<div className="work-subtitle">
								Gunner / Graphic Designer 
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
