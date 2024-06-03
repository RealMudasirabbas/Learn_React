import React from "react";

function ShowNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const mappedNumbers = numbers.map((number,index) => {
		return (
            
                <li key={index}>{number}</li>
            
        );
	})

    return (
		<div>
		<h2>A numbers list</h2>
		<ul>
			{mappedNumbers}

		</ul>
		
		
		</div>
	)
}

export default ShowNumbers;
