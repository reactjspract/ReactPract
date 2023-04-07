<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content=
		"width=device-width, initial-scale=1.0">
	<title>HTML Web Storage API</title>
	
	<style>
		#container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		#btnDiv {
			width: 20vw;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
		}

		.btn {
			cursor: pointer;
		}
	</style>
</head>

<body>
	<div id="container">
		<h1>Hey Geek,</h1>
		<h2 id="heading"></h2>
		<h3 id="desc"></h3>
		<div id="btnDiv">
			<button class="btn" onclick="getContent()">
				Get stored Data
			</button>
			
			<button class="btn" onclick="remContent()">
				Remove stored Data
			</button>
		</div>
	</div>

	<script>
		var head = document.getElementById('heading');
		var desc = document.getElementById("desc");
		function getContent() {
			if (typeof (Storage) !== "undefined") {

				// setItem() will set store the passed attribute
				// and value in localStorage
				localStorage.setItem('heading', 'Welcome to GeeksforGeek!');
				localStorage.setItem('description',
					'A computer science portal for Geeks.');
				
				// This is the way of accessing the items
				// stored in the storage
				head.innerText = localStorage.heading;
				desc.innerText = localStorage.description;
			}
			else {
				head.innerText =
					"Your browser does not support web storage API.";
			}
		}

		function remContent() {

			// removeItem() will remove the passed attribute
			// and value from localStorage.
			localStorage.removeItem('heading');
			localStorage.removeItem('description');
			head.innerText = localStorage.heading;
			desc.innerText = localStorage.description;
		}
	</script>
</body>

</html>
