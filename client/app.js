var web3 = window.web3;
window.addEventListener('load', function() {

	function Game(_tournament_instance) {
		this.tournament_instance = _tournament_instance
		this.settlement_price;
		this.position_num;
		this.counter;
		this.positions = [];
		this._difference;
		this.differences = [];
		this.num_predictions;
		this.resolution_period;
		this.prediction_period;
		this.competition_duration;
		this.cost;
		this.settled_price;
		this.name;
		this.tournament_start;
		this.resolution;
		this.duration;
		this.total_eth;
	};

	// WEB3 CONNECTION
	if (typeof web3 !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
	} else {
		// set the provider you want from Web3.providers
		web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	}
	var account = web3.eth.accounts[0];

	// WEB3 TESTS
	console.log(web3.isConnected());
	var version = web3.version.api;
	console.log(version); 

	var factory_abi = web3.eth.contract([
		{
			"constant": false,
			"inputs": [
				{
					"name": "_name",
					"type": "string"
				},
				{
					"name": "_asset",
					"type": "string"
				},
				{
					"name": "_prediction_cost",
					"type": "uint256"
				},
				{
					"name": "time_to_start_minutes",
					"type": "uint256"
				},
				{
					"name": "duration_minutes",
					"type": "uint256"
				}
			],
			"name": "createToken",
			"outputs": [
				{
					"name": "tokenAddress",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "newAddress",
					"type": "address"
				}
			],
			"name": "contractCreated",
			"type": "event"
		}
	]);
	var factory_address = "0x92771DF50b5F23931E562c386e2a253Dff636e67";
	var factory_instance = factory_abi.at(factory_address);

	var tournament_abi = web3.eth.contract([
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "prediction_number",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "competition_duration",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "collect_fees",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "collect_my_winnings",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "the_game_broke",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "myid",
					"type": "bytes32"
				},
				{
					"name": "result",
					"type": "string"
				}
			],
			"name": "__callback",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_myid",
					"type": "bytes32"
				},
				{
					"name": "_result",
					"type": "string"
				},
				{
					"name": "_proof",
					"type": "bytes"
				}
			],
			"name": "__callback",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "asset",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "pos_number",
					"type": "uint256"
				}
			],
			"name": "claim_winning_prediction",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "price_has_settled",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_prediction_price",
					"type": "uint256"
				}
			],
			"name": "predict",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "fee_collected",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "ETHUSD",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "is_winner",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "winning_prediction",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "predicted_price",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "winners",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "player_has_withdrew",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "resolution_period",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				},
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "positions",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "price_prediction_period",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "winning_distance",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "players_total_stake",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "cost_to_predict",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "total_prediction_stake_pool",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "test",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "_name",
					"type": "string"
				},
				{
					"name": "_asset",
					"type": "string"
				},
				{
					"name": "prediction_cost",
					"type": "uint256"
				},
				{
					"name": "time_to_start_minutes",
					"type": "uint256"
				},
				{
					"name": "duration_minutes",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"payable": true,
			"stateMutability": "payable",
			"type": "fallback"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "price",
					"type": "string"
				}
			],
			"name": "LogPriceUpdated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "description",
					"type": "string"
				}
			],
			"name": "LogNewOraclizeQuery",
			"type": "event"
		}
	]);



	$("#test").on('click', function() {
		var address = factory_instance.createToken(document.getElementsByName("Tournament_name")[0].value, document.getElementById("Tournament_asset").value, document.getElementsByName("prediction_cost")[0].value, document.getElementsByName("Tournament_start")[0].value, document.getElementById("tournament_duration").value, function(err, result) {
			if (!err) {
				console.log(result);
			}
		});
	});
	
	factory_instance.contractCreated({}, {fromBlock: 0, toBlock: 'latest'}).get(function(err, result) {
		if (!err) {
			console.log(result[0].args.newAddress);
			console.log(result.length);
			for (var i=0;i<result.length;i++) {
				console.log(result[i].args.newAddress);
				var address = result[i].args.newAddress;
				var instance = tournament_abi.at(address);
				var Tournament = new Game(instance);

				var name;
				var stakes;
				var duration;
				var asset;

				console.log(`game${i}_`);
				
				$("div.tournaments").append(`
				<ul id="my_list">
					<li>
						<button id="game${i}_" class="accordion" onclick="accordion('Game${i}')">Stakes: .0${i} ETH Status:</button>
								
						<div id="Game${i}" class="w3-container w3-hide">

						
							<div class="main_content">
								
								
								<div>
									<header>
										<h2 style="text-align: center;border-bottom: solid white;margin-bottom: 50px"><b id=game${i}_name style="color:white">Daily</b></h2>
									</header>
									<div class="main_box">
										<h3 style="text-align: center"><b style="color:white">Total Eth Staked</b></h3>
										<div class="my_box">
											<p id="game${i}_total_eth_staked" style="font-size: 20px; font-weight: bold">Pending...</p>				
										</div>
										
										
									</div>
									<div class="main_box">
										<h3 style="text-align: center"><b style="color:white">Status</b></h3>
										<div class="my_box">
											<p id=game${i}_status style="font-size: 20px; font-weight: bold">pending...</p>				
										</div>
										
									</div>
									
						
									<div class="main_box">
										<h3 style="text-align: center"><b style="color:white">Settlement Price</b></h3>	
										<div class="my_box">
											<p id=game${i}_settlement_price style="font-size: 20px; font-weight: bold">pending...</p>				
										</div>
										
						
									</div>
									<div class="main_box">
										<h3 style="text-align: center"><b style="color:white">Winning Prediction</b></h3>
										<div class="my_box">
											<p id=game${i}_winning_prediction style="font-size: 20px; font-weight: bold">pending...</p>				
										</div>
										
						
									</div>
									<div class="main_box" style="color: white">
										<h3 style="text-align: center;"><b style="color:white">Player Predictions</b></h3>
										<button id="game${i}_refresh_positions" class="button primary fit" style="width:28%;margin: 0 auto;display:block;position:relative;float:none">Refresh</button>
										<div class="my_box">
											<p id="game${i}_player_predictions" style="color: black; font-size: 20px; font-weight: bold">Player has made no predictions...</p>				
										</div>
									</div>
									<div class="main_box_alt">
										<div class="input_box">
											<input type="text" name="predict" id="game${i}_predict" value="" style="background-color: white; width:80%;margin:auto" placeholder="Predicted Price" />
										</div>
										<div class="input_box">
											<button id="game${i}_predict_it" class="button primary fit" style="width:80%;margin: 0 auto;display:block;position:relative;float:none">Predict</button>
										</div>
										<div class="input_box">
						
											<button id="game${i}_claim_winning_predictions" class="button primary fit" style="width:80%;margin: 0 auto;display:block;position:relative;float:none">Claim Winning Prediction</button>
										</div>
										<div class="input_box">
											
											<button id="game${i}_collect_winnings" class="button primary fit" style="width:80%;margin: 0 auto;display:block;position:relative;float:none">Collect Winnings</button>
									
										</div>			
									</div>
								</div>
							</div>
						</div>
					</li>`);
				populate(Tournament, `game${i}_`);

			}
		}
	});
	

	function populate(game, div) {
		if (web3.eth.accounts[0] !== account) {
			account = web3.eth.accounts[0];
		}
		game.tournament_instance.cost_to_predict.call(function(err, result) {
			if (!err) {
				game.cost = (10 ** result.e) / (10 ** 18);
			} else {
				console.log(err);
			}
		});
		game.tournament_instance.name.call(function(err, result) {
			if (!err) {
				game.name = result;
				var node = document.getElementById(div + "name");
					while (node.firstChild) {
						node.removeChild(node.firstChild);
					}
					node.appendChild(document.createTextNode(game.name));
			} else {
				console.log(err);
			}
		});
		game.tournament_instance.asset.call(function(err, result) {
			if (!err) {
				game.asset = result;
			} else {
				console.log(err);
			}
		});
		game.tournament_instance.resolution_period.call(function(err, result) {
			if (!err) {
				var time = result.c;
				var _time = new Date(time*1000);
				game.resolution_period = _time
			} else {
				console.log(err);
			}
		});
		game.tournament_instance.competition_duration.call(function(err, result) {
			if (!err) {
				var time = result.c;
			
				var _time = new Date(time*1000);
				console.log(time);
				
				game.competition_duration = _time;
			} else {
				console.log(err);
			}
		});
		game.tournament_instance.price_prediction_period.call(function(err, result) {
			if (!err) {
				var time = result.c;
				var _time = new Date(time*1000);
				game.prediction_period = _time;

			} else {
				console.log(err);
			}
		});	
		game.tournament_instance.prediction_number.call(account, function(err, result) {
			if (!err) {
				game.num_predictions = result.c[0];
			} else {
				console.log(err);
			}
		});
		
		var tournament_starts = setInterval(function() {

			// Get today's date and time
			var now = new Date().getTime();
		  
			// Find the distance between now and the count down date
			var distance = game.prediction_period - now;
			
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  
			// Display the result in the element with id="demo"
			game.tournament_start = days + "d " + hours + "h "
			+ minutes + "m " + seconds + "s ";
		  
			// If the count down is finished, write some text 
			if (distance < 0) {
			  clearInterval(tournament_starts);
			  game.tournament_start = "Tournament has started!";
			}
		}, 1000);
		var price_settles = setInterval(function() {

			// Get today's date and time
			var now = new Date().getTime();
		  
			// Find the distance between now and the count down date
			var distance = game.competition_duration - now;
			
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  
			// Display the result in the element with id="demo"
			game.duration = days + "d " + hours + "h "
			+ minutes + "m " + seconds + "s ";
		  
			// If the count down is finished, write some text 
			if (distance < 0) {
			  clearInterval(price_settles);
			  game.duration = "Price settled:";
			}
		}, 1000);
		var resolution_period_ends = setInterval(function() {

			// Get today's date and time
			var now = new Date().getTime();
		  
			// Find the distance between now and the count down date
			var distance = game.resolution_period - now;
			
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  
			// Display the result in the element with id="demo"
			game.resolution = days + "d " + hours + "h "
			+ minutes + "m " + seconds + "s ";
		  
			// If the count down is finished, write some text 
			if (distance < 0) {
			  clearInterval(resolution_period_ends);
			  game.resolution = "Resolution is over";
			}
		}, 1000);
		var accountInterval = setInterval(function() {
			
			if (web3.eth.accounts[0] !== account) {
				account = web3.eth.accounts[0];
			}
			game.tournament_instance.total_prediction_stake_pool.call(function(err, result) {
				if (!err) {

					var wei = (result.c[0] / 10) * (10 ** result.e);
					game.total_eth = wei / (10 ** 18);
					var node = document.getElementById(div + "total_eth_staked");
					while (node.firstChild) {
						node.removeChild(node.firstChild);
					}
					node.appendChild(document.createTextNode(game.total_eth + " ETH"));
				} else {
					console.log(err);
				}
			});
			game.tournament_instance.ETHUSD.call(function(err, result) {
				if (!err) {
					game.settlement_price = result;
					game.settled_price = parseFloat(game.settlement_price).toFixed(2);
					var node = document.getElementById(div + "settlement_price");
					while (node.firstChild) {
						node.removeChild(node.firstChild);
					}
					node.appendChild(document.createTextNode(game.settled_price + " ETH/USD"));
				} else {
					console.log(err);
				}
			});
			game.tournament_instance.winning_prediction.call(function(err, result) {
				if (!err) {
			
					var node = document.getElementById(div + "winning_prediction");
					while (node.firstChild) {
						node.removeChild(node.firstChild);
					}
					node.appendChild(document.createTextNode(result.c[0] + " ETH/USD"));
				} else {
					console.log(err);
				}
			});
			game.tournament_instance.prediction_number.call(account, function(err, result) {
				if (!err) {
					game.num_predictions = result.c[0];
				} else {
					console.log(err);
				}
			});
			var now = new Date().getTime();
			if (now < game.prediction_period) {
				// status = prediction period
				var node = document.getElementById(div + "status");
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(document.createTextNode("Prediction Period || Starts: " + game.prediction_period.toUTCString()));
				$("#" + div).html(game.name + "<br>" + "Cost to Predict: " + game.cost + " ETH" + "<br>" + game.asset + " || " + "Starts: " + game.tournament_start + " || Price settles: " + game.duration + " || Prize Pool: " + game.total_eth + " ETH");
			}
			if (now >= game.prediction_period && now < game.competition_duration) {
				// status = tournament has started
				var node = document.getElementById(div + "status");
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(document.createTextNode("Tournament has started || Ends: " + game.competition_duration.toUTCString()));
				$("#" + div).html(game.name + "<br>" + "Cost to Predict: " + game.cost + " ETH" + "<br>" + game.asset + " || Tournament has started || Price settles: " + game.duration + " || Prize Pool: " + game.total_eth + " ETH");
			}
			if (now >= game.competition_duration && now < game.resolution_period) {
				// status = resolution period
				var node = document.getElementById(div + "status");
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(document.createTextNode("Tournament is in resolution || End Time: " + game.resolution_period.toUTCString()));
				$("#" + div).html(game.name + "<br>" + "Cost to Predict: " + game.cost + " ETH" + "<br>" + game.asset + " || Resolution Period || End Time: " + game.resolution + " ||  " + game.settled_price + " || Prize Pool: " + game.total_eth + " ETH");
			}
			if (now >= game.resolution_period) {
				// status = torunament is over!
				var node = document.getElementById(div + "status");
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(document.createTextNode("Tournament has ended"));
				$("#" + div).html(game.name + "<br>" + "Cost to Predict: " + game.cost + " ETH" + "<br>" + game.asset + " || Tournament has ended || " + game.resolution + " || " + game.settled_price + " || Prize Pool: " + game.total_eth + " ETH");
			}
			if (isFinite(game._difference) == false) {
				for (var i=0;i<game.num_predictions;i++) {
					game.tournament_instance.positions.call(account, i, function(err, result) {
						if (!err) {
							game.differences.push(Math.abs(result.c[0] - game.settled_price));
							
						} else {
							console.log(err);
						}
					});
					
				}
				
				game._difference = Math.min.apply(Math, game.differences);
				
			}
			
		}, 200);
		$("#" + div + "predict_it").on('click', function () {
			game.tournament_instance.predict(document.getElementById(div + "predict").value, {value: game.cost, gas: 3000000}, function (err, result) {
				if (!err) {
					console.log(result);
				}
				console.log(err);
			});
		});
		$('#' + div + 'refresh_positions').on('click', function () {
			var node = document.getElementById(div + "player_predictions");
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			for (var i=0;i<=game.num_predictions;i++) {
				game.tournament_instance.positions.call(account, i, function(err, result) {
					if (!err) {
					
						console.log(result.c[0]);
						node.appendChild(document.createTextNode(result.c[0] + " ETH/USD "));
						node.appendChild(document.createElement("br"));
					}
				});
			}
		});
		$('#' + div + 'claim_winning_predictions').on('click', function() {
			
			
			console.log(game._difference);
			game.position_num = game.differences.indexOf(game._difference);
			console.log(game.position_num)
			game.tournament_instance.claim_winning_prediction(game.position_num, {gas: 3000000}, function(err, result) {
				if (!err) {
					console.log(result);
				} else {
					console.log(err);
				}
			});
		});
	
		$('#' + div + 'collect_winnings').on('click', function() {
			game.tournament_instance.collect_my_winnings(function (err, result) {
				if (!err) {
					console.log(result);
				} else {
					console.log(err);
				}
			});
		});
	}
});

$('select').change(function() {
	var value = $(this).val().toLowerCase();
	$('#my_list li').filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	});
});
$('.search_name').change(function() {
	var value = $(this).val().toLowerCase();
	$('#my_list li').filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	});
});



function accordion(id) {
	var x = document.getElementById(id);
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else { 
		x.className = x.className.replace(" w3-show", "");
	}
}







