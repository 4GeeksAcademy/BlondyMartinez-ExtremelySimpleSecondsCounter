import React from "react";
import { Helmet } from 'react-helmet';



const Card = (props) => {
	return(
		<div className="card">
			<h1>{props.digit}</h1>
		</div>
	)
}
//create your first component
const Home = (props) => {
	let numbers = props.numbers;
	return (
		<div className="d-flex">
			<Helmet>
        		<script src="https://kit.fontawesome.com/a20bb7d309.js" crossorigin="anonymous" defer />
      		</Helmet>
			<Card digit={<i class="fa-regular fa-clock"></i>} />
			<Card digit={numbers[0]} />
			<Card digit={numbers[1]} />
			<Card digit={numbers[2]} />
			<Card digit={numbers[3]} />
			<Card digit={numbers[4]} />
			<Card digit={numbers[5]} />
		</div>
	);
};

export default Home;
