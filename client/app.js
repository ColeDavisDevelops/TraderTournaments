var web3 = window.web3;
window.addEventListener('load', function() {
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

	var tournament_abi = web3.eth.contract([
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
			"constant": false,
			"inputs": [],
			"name": "the_game_broke",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "prediction_cost",
					"type": "uint256"
				},
				{
					"name": "fee_rate",
					"type": "uint8"
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
		}
	]);
	// Tournament_1
	var tournament_address = "0x02edd697771d54909391e2b1b2bf05d0039475e6";
	var tournament_instance_1 = tournament_abi.at(tournament_address);
	// Tournament_2
	var tournament_address = "0xbc3fcfc565fb271af858b8f32ba7caf2e4b9a4c2";
	var tournament_instance_2 = tournament_abi.at(tournament_address);
	// Tournament_3
	var tournament_address = "0xc778df0b0aa2d90b83414a0b12af1856aed0bfdf";
	var tournament_instance_3 = tournament_abi.at(tournament_address);

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
	};

	// Init Tournaments
	var Tournament_1 = new Game(tournament_instance_1);
	var Tournament_2 = new Game(tournament_instance_2);
	var Tournament_3 = new Game(tournament_instance_3);



	function populate(game, div, stakes, duration) {
		if (web3.eth.accounts[0] !== account) {
			account = web3.eth.accounts[0];
		}
		game.tournament_instance.cost_to_predict.call(function(err, result) {
			if (!err) {
				game.cost = (10 ** result.e);
			}
		});
		game.tournament_instance.resolution_period.call(function(err, result) {
			if (!err) {
				var time = result.c;
				var _time = new Date(time*1000);
				game.resolution_period = _time
			}
		});
		game.tournament_instance.competition_duration.call(function(err, result) {
			if (!err) {
				var time = result.c;
				var _time = new Date(time*1000);
				game.competition_duration = _time;
			}
		});
		game.tournament_instance.price_prediction_period.call(function(err, result) {
			if (!err) {
				var time = result.c;
				var _time = new Date(time*1000);
				game.prediction_period = _time;

			}
		});	
		game.tournament_instance.prediction_number.call(account, function(err, result) {
			if (!err) {
				game.num_predictions = result.c[0];
			}
		});
		
		
		var accountInterval = setInterval(function() {

			if (web3.eth.accounts[0] !== account) {
				account = web3.eth.accounts[0];
			}
			


			game.tournament_instance.total_prediction_stake_pool.call(function(err, result) {
				if (!err) {
					var node = document.getElementById(div + "total_eth_staked");
					while (node.firstChild) {
						node.removeChild(node.firstChild);
					}
					node.appendChild(document.createTextNode(result.c[0] + " ETH"));
				}
			});
			game.tournament_instance.ETHUSD.call(function(err, result) {
				if (!err) {
					game.settlement_price = result;
					var node = document.getElementById(div + "settlement_price");
					while (node.firstChild) {
						node.removeChild(node.firstChild);
					}
					node.appendChild(document.createTextNode(result + " ETH/USD"));
				}
			});
			game.tournament_instance.winning_prediction.call(function(err, result) {
				if (!err) {
			
					var node = document.getElementById(div + "winning_prediction");
					while (node.firstChild) {
						node.removeChild(node.firstChild);
					}
					node.appendChild(document.createTextNode(result.c[0] + " ETH/USD"));
				}
			});
			game.tournament_instance.prediction_number.call(account, function(err, result) {
				if (!err) {
					game.num_predictions = result.c[0];
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
				
				$("#" + div).html(duration + " || Tournament has not started || Starts: " + game.prediction_period.toUTCString() + " || " + stakes);
				
			}
			if (now >= game.prediction_period && now < game.competition_duration) {
				// status = tournament has started
				var node = document.getElementById(div + "status");
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(document.createTextNode("Tournament has started || Ends: " + game.competition_duration.toUTCString()));
				
				$("#" + div).html(duration + " || Tournament has started || Ends: " + game.competition_duration.toUTCString() + " || " + stakes);
				
			}
			if (now >= game.competition_duration && now < game.resolution_period) {
				// status = resolution period
				var node = document.getElementById(div + "status");
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(document.createTextNode("Tournament is in resolution || End Time: " + game.resolution_period.toUTCString()));
				
				$("#" + div).html(duration + " || Tournament is in resolution || End Time: " + game.resolution_period.toUTCString() + " || " + stakes);
				
			}
			if (now >= game.resolution_period) {
				// status = torunament is over!
				var node = document.getElementById(div + "status");
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(document.createTextNode("Tournament has ended"));
		
				
				$("#" + div).html(duration + " || Tournament has ended || " + stakes);
				
			}
			for (var i=0;i<game.num_predictions;i++) {
				game.tournament_instance.positions.call(account, i, function(err, result) {
					if (!err) {
						game.differences.push(Math.abs(result.c[0] - game.settlement_price));
						
					}
				});
				continue;
			}
			game._difference = Math.min.apply(null, game.differences);
			


		}, 200);
	
		$('#' + div + 'predict_it').on('click', function () {
			game.tournament_instance.predict(document.getElementById(div + "predict").value, {value: game.cost, gas: 3000000}, function (err, result) {
				if (!err) {
					console.log(result);
				}
				console.log(err);
			});
		});
		$('#' + div + 'refresh_positions').on('click', function () {
			var node = document.getElementById("player_predictions");
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
				}
			});
		});
	
		$('#' + div + 'collect_winnings').on('click', function() {
			game.tournament_instance.collect_my_winnings(function (err, result) {
				if (!err) {
					console.log(result);
				}
			});
		});
	}

	populate(Tournament_1, "game1_", ".01 ETH", "Daily");
	populate(Tournament_2, "game2_", ".1 ETH", "Weekly")
	populate(Tournament_3, "game3_", "1 ETH", "Monthly");



});

$('select').change(function() {
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








