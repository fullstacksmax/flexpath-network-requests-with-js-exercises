/*
	Values to use for multiple exercises
*/

const section1OutputDiv = document.getElementById("section-1-output");
const section2OutputDiv = document.getElementById("section-2-output");
const section3OutputDiv = document.getElementById("section-3-output");

/*
	Exercise 1: Making a Simple GET Request with Fetch

	Description: 

	Use the Fetch API to make a GET request to 
	`https://jsonplaceholder.typicode.com/posts/1`
	when the button with ID 'exercise-1-btn' is clicked. 

	Display the response data in the div with ID 'section-1-output'
*/

// Exercise 1
let ex1Button = document.getElementById('exercise-1-btn');
//let ex1URL = 'https://jsonplaceholder.typicode.com/posts/1'

ex1Button.addEventListener(
	"click",
	() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(response => response.json())
			.then(ex1data => JSON.stringify(ex1data, null, 2))
			.then(string => section1OutputDiv.textContent = string)
			.catch(error => console.error(`There was an error ${error}`))
	}
	
		
	
)

/*
	Exercise 2: Handling Text Responses

	Description: 


  Use the Fetch API to make a GET request to 
	`https://jsonplaceholder.typicode.com/posts/5`
	when the button with ID 'exercise-2-btn' is clicked. 

  During the fetch response chain, convert the response to text,
	and display the result in the #section-1-output div.
	
	
*/

// Exercise 2
let ex2button = document.getElementById('exercise-2-btn')

ex2button.addEventListener(
	"click",
	() => {
		fetch('https://jsonplaceholder.typicode.com/posts/5')
		.then(response => response.text())
		//.then(ex2data => ex2data.text())
		.then(string => section1OutputDiv.textContent = string)
		.catch(error => console.error(`There was an error ${error}`))
	}
)

/*
Exercise 3: Making a POST Request with Fetch

Description: 

Use the Fetch API to make a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'exercise-3-btn' is clicked.  

Display the response of this POST call in the #section-1-output div.
*/

// Exercise 3
let ex3button = document.getElementById('exercise-3-btn')

ex3button.addEventListener(
	"click",
	() => {
	const data = {
		title: "foo",
		body: "bar",
		userId: 1,
	};
	fetch(`https://jsonplaceholder.typicode.com/posts`,{
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(ex3data => section1OutputDiv.textContent = JSON.stringify(ex3data, null, 2))
	.catch(error => console.error(`There was an error ${error}`))

})

/*
Exercise 4: Understanding HTTP Status Codes

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-4-btn' is clicked. 

Modify the GET request to log the HTTP status code to the console. 

Handle the cases for status codes 200 (OK) and 
404 (Not Found) by displaying appropriate messages.

Display the response in the #section-1-output div.
*/

// Exercise 4
let ex4button = document.getElementById('exercise-4-btn')

ex4button.addEventListener(
	"click",
	() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/1`)
		.then(response => {
			if(response.status === 404) {
				console.log(`not ok`)
				console.log(`Status is not ok: ${response.status}`)
			}
			else if(response.status === 200) {
				console.log(`ok`)
				console.log(`Status is ok: ${response.status}`)
			}
		return response.json()})
		.then(ex4data => JSON.stringify(ex4data, null, 2))
		.then(string => section1OutputDiv.textContent = string)
		.catch(error => console.error(`There was an error ${error}`))

	})
		
		
	

		
	


/*
Exercise 5: Setting Custom HTTP Headers

Description: 

Use the Fetch API to make a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'exercise-5-btn' is clicked.  

Add a custom header X-Custom-Header: MyHeaderValue to the request.

Display the response in the #section-1-output div.

*/

// Exercise 5

let ex5button = document.getElementById('exercise-5-btn')

ex5button.addEventListener(
	"click",
	() => {
		const data = {
			title: "foo",
			body: "bar",
			userId: 1,
		}
		fetch(`https://jsonplaceholder.typicode.com/posts`,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"X-Custom-Header": "MyHeaderValue",
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(ex5data => section1OutputDiv.textContent = JSON.stringify(ex5data, null, 2))
		.catch(error => console.error(`there was an error ${error}`))
	}
)

/*
Exercise 6: Content Negotiation with Accept Header

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-6-btn' is clicked. 

Modify the GET request to set the 
'Accept' header to 'application/json' and log the 
response headers to the console.

Display the response data in the div with ID 'section-1-output'

*/

// Exercise 6
let ex6button = document.getElementById('exercise-6-btn')


ex6button.addEventListener(
	"click",
	() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/1`,
			{
				method: 'GET',
				headers: {Accept : "application/json"}
			}
		)
		.then(response => {
			if(response.status === 404) {
				console.log(`not ok`)
				console.log(`Status is not ok: ${response.status}`)
			}
			else if(response.status === 200) {
				console.log(`ok`)
				console.log(`Status is ok: ${response.status}`)
			}
		console.log(`response headers: ` , response.headers)
		return response.json()})
		.then(ex4data => JSON.stringify(ex4data, null, 2))
		.then(string => section1OutputDiv.textContent = string)
		.catch(error => console.error(`There was an error ${error}`))

	})

/*
Exercise 7: 

Using Try-Catch for Error Handling

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/5`
when the button with ID 'exercise-7-btn' is clicked. 

During the fetch response chain, convert the response to text.

Using async/await syntax to make this fetch call.

Wrap the Fetch call inside a try-catch block to handle any exceptions 
that may be thrown.

Display the result in the #section-1-output div.

*/

// Exercise 7
let ex7button = document.getElementById('exercise-7-btn')
async function fetchData(url) {
	const response = await fetch(url);
	const json = await response.json();
	string = JSON.stringify(json, null)
	section1OutputDiv.textContent = string
}



ex7button.addEventListener(
	"click",
	() => {
		try {
		fetchData(`https://jsonplaceholder.typicode.com/posts/5`);
		} catch (error) {
			console.error(`error has occurred ${error}`)
		}
	})


/*
Exercise 8: Handling Network Errors

Description: 

Simulate a network error by making a request to an invalid URL and 
handle the error gracefully by displaying a message in the 
#section-1-output div.

Have the request fire when the 'exercise-8-btn' btn is clicked.
*/

// Exercise 8 - Use the invalidUrl below
const invalidUrl = "https://invalid-url";

let ex8button = document.getElementById('exercise-8-btn')

ex8button.addEventListener(
	"click",
	async () => {
		try {
			await fetch(invalidUrl)
		} catch (error) {
			console.error(`There was an error ${error.message}`)
			section1OutputDiv.textContent = `There was an error ${error.message}`
		}
	}
)

/*
Exercise 9: Aborting a Fetch Request

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-9-btn' is clicked. 

Use AbortController to abort the Fetch request when the #exercise-9-abort-btn 
is clicked. 

Display a message in #section-1-output indicating that the request was aborted.

We have provided you with a method, `sleep`, that you can use to delay 
the return of your fetch call in time for you to abort it
*/

// Exercise 9



let ex9button = document.getElementById('exercise-9-fetch-btn')
let ex9abort = document.getElementById('exercise-9-abort-btn')
let controller;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sleepUsageExample() {
  sleep(5000).then(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1");
  });
}


ex9button.addEventListener(
	"click",
	() => {
		controller = new AbortController();
		sleep(5000).then(() => 
			fetch("https://jsonplaceholder.typicode.com/posts/1", { signal: controller.signal, })
				.then(response => response.json())
				.then(ex9data => JSON.stringify(ex9data, null, 2))
				.then(string => section1OutputDiv.textContent = string)
	)
			.catch((error) => {
				if (error.name === "AbortError") {
					console.log('aborted error')
					section1OutputDiv.textContent = "The request has been aborted"
				}
				else {
					console.error(`unknown error`)
				}
			})
	}

)




ex9abort.addEventListener(
	"click",
	() => {
		if(controller){
			controller.abort();
			console.log('Abort event')
		}
	}
)

/* let controllers = [];


function abort() {
	controller.forEach(element => {
		element.abort()
		
	});
}

ex9button.addEventListener(
	"click",
	async () => {
		let controller = new AbortController();
		
		sleep(5000).then(() => {
			fetch(`https://jsonplaceholder.typicode.com/posts/1`, {signal: controller.signal})
		})
		
	},
	ex9abort.addEventListener(
		"click",
		() => {
		let controller = new AbortController();
		controller;
		section1OutputDiv.textContent = "Request aborted"
		console.log('aborted')
		}
	)
	
) */




/*
Exercise 10: Understanding CORS Errors

Description: 

Make a Fetch request to an API that does not allow cross-origin requests 
when the #exercise-10-btn is clicked. Observe and log the CORS error out to 
#section-2-output.

*/

// Exercise 10 - Use the url below

const corsWorkUrl = "https://fsn1-speed.hetzner.com/100MB.bin";

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 11: Configuring a CORS Request

Description: 

Make a Fetch request to an API that does not allow cross-origin requests 
when the #exercise-11-btn is clicked. 

Modify the request to include the mode: 'no-cors' option and observe the 
changes in the response.
*/

// Exercise 11 - Use the corsWorkUrl provided in Exercise 10
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 12: Handling Preflight Requests

Description: 

Make a Fetch request with the method DELETE to the api endpoint:
`https://jsonplaceholder.typicode.com/posts/1` 
and observe the preflight OPTIONS request in the Network tab of your 
browser's developer tools.

Fire this fetch request when the #exercise-12-btn is clicked.
*/

// Exercise 12
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 13: Updating the UI Based on HTTP Responses

Description: 


Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/`
when the button with ID 'exercise-13-btn' is clicked. 

Update the UI by creating a list of titles from the fetched posts and display
them in #section-2-output

*/

// Exercise 13
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 14: Managing a Shopping Cart

Description: 

Implement functionality to add product ids to a shopping cart array when 
the buttons with class 'add-to-cart-button' are clicked. 

Rely on the buttons `data-product-id` html attributes to grab their product IDs

Display the list of product IDs in the #section-3-output div.
*/

// Exercise 14
placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 15: Persisting Cart Data with Session Storage

Description: 

Modify Exercise 15 to save the cart data in sessionStorage so that the 
cart persists across page reloads.
*/

// Exercise 15
// Load cart from sessionStorage
placeholder = `Delete this 
									block 
									and 
									code 
									here`;
