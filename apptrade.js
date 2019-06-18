// WEB 3 VARIABLES
var web3 = window.web3;
var erc20_address = '0x072ceb7fd8a0487691925363bb8fd6572e5834b9';
var game_contract_address = '0x20b374517b9c1766de3cdefeeda6043a1afc1e37';

// WEB3 CONNECTION
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
   } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
   }

// WEB3 TESTS
console.log(web3.isConnected());
var version = web3.version.api;
console.log(version); 

//INSTANTIATE
var erc20 = web3.eth.contract([
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
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
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
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
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
		"name": "revenue_payed",
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
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
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
				"name": "tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
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
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
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
		"name": "revenue_owed",
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
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_profit_per_unit",
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
		"name": "withdraw_my_fee_revenue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_profit",
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
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
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
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferAnyERC20Token",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
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
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "string"
			},
			{
				"name": "_decimals",
				"type": "uint8"
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
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
]);
var erc20_instance = erc20.at(erc20_address);

var game_contract = web3.eth.contract([
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
	"name": "_units_to_buy",
	"type": "uint256"
	}
	],
	"name": "buy",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [],
	"name": "did_I_win",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [],
	"name": "end_game",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [],
	"name": "enter",
	"outputs": [],
	"payable": true,
	"stateMutability": "payable",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [
	{
	"name": "_units_to_sell",
	"type": "uint256"
	}
	],
	"name": "sell",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"constant": false,
	"inputs": [],
	"name": "updatePrice",
	"outputs": [],
	"payable": true,
	"stateMutability": "payable",
	"type": "function"
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
	"name": "_competition_end_time",
	"type": "uint256"
	}
	],
	"name": "log_competition_end_time",
	"type": "event"
	},
	{
	"anonymous": false,
	"inputs": [
	{
	"indexed": false,
	"name": "_competition_start_time",
	"type": "uint256"
	}
	],
	"name": "log_competition_start_time",
	"type": "event"
	},
	{
	"anonymous": false,
	"inputs": [
	{
	"indexed": false,
	"name": "_price_is_valid_time",
	"type": "uint256"
	}
	],
	"name": "log_price_is_valid_until",
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
	"name": "log_incorrect_entry",
	"type": "event"
	},
	{
	"anonymous": false,
	"inputs": [
	{
	"indexed": false,
	"name": "__competition_is_running",
	"type": "bool"
	}
	],
	"name": "log_competition_is_running",
	"type": "event"
	},
	{
	"anonymous": false,
	"inputs": [
	{
	"indexed": false,
	"name": "_competitors",
	"type": "uint256"
	}
	],
	"name": "log_number_of_competitors",
	"type": "event"
	},
	{
	"anonymous": false,
	"inputs": [
	{
	"indexed": false,
	"name": "_total_prize_pool",
	"type": "uint256"
	}
	],
	"name": "log_total_prize_pool",
	"type": "event"
	},
	{
	"anonymous": false,
	"inputs": [
	{
	"indexed": false,
	"name": "_resolution_end_time",
	"type": "uint256"
	}
	],
	"name": "log_resolution_end_time",
	"type": "event"
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
	"name": "_is_resolution_period",
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
	"name": "cannot_claim_tie",
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
	"name": "competition_has_finished",
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
	"name": "competition_is_running",
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
	"name": "competition_start_time",
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
	"name": "competitors",
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
	"name": "contractBalance",
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
	"name": "currentInventory",
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
	"name": "currentShortInventory",
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
	"name": "customer_account_value",
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
	"name": "erctoken",
	"outputs": [
	{
	"name": "",
	"type": "address"
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
	"name": "fee_rate",
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
	"name": "game_has_resolved",
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
	"name": "min_num_competitors",
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
	"name": "player_one",
	"outputs": [
	{
	"name": "",
	"type": "address"
	}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "player_two",
	"outputs": [
	{
	"name": "",
	"type": "address"
	}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "price_has_updated",
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
	"name": "required_stake_amount",
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
	"name": "time_to_end_competition",
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
	"name": "tokenBalance",
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
	"name": "total_prize_pool",
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
	"name": "url_price",
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
	"name": "valid_price_duration",
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
	"type": "uint256"
	}
	],
	"name": "winners",
	"outputs": [
	{
	"name": "",
	"type": "address"
	}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [],
	"name": "winning_account_value",
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
var game_contract_instance = game_contract.at(game_contract_address);

// DATA
var competition_end_countdown;
var valid_price_duration;
var resolution_period;
var account = web3.eth.accounts[0];
var latest_price ='aaa';
var tokenBalance = 0;
var currentInventory = 0;
var currentShortInventory = 0;
var estimate_callback = 0;
var _price_url_pre = "";
var _price_url = 0;

var events = game_contract_instance.allEvents({fromBlock: 0, toBlock: 'latest'});
events.watch(function(error, result) {
	console.log(result);
	console.log(error);
	if (result.args._competition_end_time) {
		var time = result.args._competition_end_time.c;
		var _time = new Date(time*1000);
		competition_end_countdown = _time;
		var node = document.getElementById("competition_ends");
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
		node.appendChild(document.createTextNode(_time.toUTCString()));
	}
	if (result.args._competition_start_time) {
		var time = result.args._competition_start_time.c;
		var _time = new Date(time*1000);
		var node = document.getElementById("competition_start_time");
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
		node.appendChild(document.createTextNode(_time.toUTCString()));
	}
	if (result.args._resolution_end_time) {
		var time = result.args._resolution_end_time.c;
		var _time = new Date(time*1000);
		resolution_period = _time;
		var node = document.getElementById("resolution_period");
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
		node.appendChild(document.createTextNode(_time.toUTCString()));
	}
});

events.get(function(error, result) {
	console.log(result);
	console.log(error);
	for (var i=0; i < result.length; i++) {
		if (result[i].args._competition_end_time) {
			var time = result[i].args._competition_end_time.c;
			var _time = new Date(time*1000);
			competition_end_countdown = _time;
			var node = document.getElementById("competition_ends");
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(document.createTextNode(_time.toUTCString()));
		}
		if (result[i].args._competition_start_time) {
			var time = result[i].args._competition_start_time.c;
			var _time = new Date(time*1000);
			var node = document.getElementById("competition_start_time");
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(document.createTextNode(_time.toUTCString()));
		}
		
		if (result[i].args._resolution_end_time) {
			var time = result[i].args._resolution_end_time.c;
			var _time = new Date(time*1000);
			resolution_period = _time;
			var node = document.getElementById("resolution_period");
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(document.createTextNode(_time.toUTCString()));
		}
	}
});
// Countdown
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();
  
	// Find the distance between now and the count down date
	var distance = competition_end_countdown - now;
	
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
	// Display the result in the element with id="demo"
	document.getElementById("competition_end_countdown").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";
  
	// If the count down is finished, write some text 
	if (distance < 0) {
	  clearInterval(x);
	  document.getElementById("competition_end_countdown").innerHTML = "EXPIRED";
	}
}, 1000);

var _x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();
  
	// Find the distance between now and the count down date
	var distance = valid_price_duration - now;
	
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
	// Display the result in the element with id="demo"
	document.getElementById("price_valid_countdown").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";
  
	// If the count down is finished, write some text 
	if (distance < 0) {
	  clearInterval(_x);
	  document.getElementById("price_valid_countdown").innerHTML = "EXPIRED";
	}
}, 1000);

var __x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	if (now > competition_end_countdown) {
		// Find the distance between now and the count down date
		var distance = resolution_period - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		document.getElementById("resolution_period").innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";

		// If the count down is finished, write some text 
		if (distance < 0) {
			clearInterval(_x);
			document.getElementById("resolution_period").innerHTML = "Resolution Period is over.";
		}
	}
}, 1000);

var accountInterval = setInterval(function() {
	var account_value = 0;
	var _latest_price = 0;
	var current_position = 0;
	if (web3.eth.accounts[0] !== account) {
		account = web3.eth.accounts[0];
	}
	game_contract_instance.tokenBalance.call(account, function(error, result) {
		if (!error) {
			tokenBalance = parseFloat(result.c[0]);
		}
	}); 
	game_contract_instance.currentInventory.call(account, function(error, result) {
		if (!error) {
			currentInventory = parseFloat(result.c[0]);
		}
	});
	game_contract_instance.currentShortInventory.call(account, function(error, result) {
		if (!error) {
			currentShortInventory = parseFloat(result.c[0]);
		}
	});
	game_contract_instance.url_price.call(function(error, result) {
		if (!error) {
			_price_url_pre = (result.c[0] * 10**14) + result.c[1];
			_price_url = parseFloat(_price_url_pre);
		}
	});
	game_contract_instance.ETHUSD.call(function(error, result) {
		if (!error) {
			var node = document.getElementById("lastQuote");
		  while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(document.createTextNode(result));
			latest_price = result;
		}
	});
	game_contract_instance.valid_price_duration.call(function(error, result) {
		if (!error) {
			var time = result.c;
			var _time = new Date(time*1000);
			valid_price_duration = _time;
			
		}
	});
	game_contract_instance.competitors.call(function(error, result) {
		if (!error) {
			var node = document.getElementById("number_of_competitors");
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(document.createTextNode(result));
		}
	});
	game_contract_instance.total_prize_pool.call(function(error, result) {
		if (!error) {
			var node = document.getElementById("total_prize_pool");
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(document.createTextNode(result));
		}
	});
	
	current_position = currentInventory - currentShortInventory;
	console.log(current_position);
	_latest_price = parseFloat(latest_price);
	account_value = tokenBalance + (currentInventory * _latest_price) - (currentShortInventory * _latest_price);

	document.getElementById("account_value").innerHTML = account_value;
	document.getElementById("current_position").innerHTML = current_position;
}, 1000);


$('#updatePrice').on('click', function () {
	console.log(_price_url);
	var _value = _price_url * 1.25;
	game_contract_instance.updatePrice.sendTransaction({value: _value, gas: 3000000}, function (err, result) {
		if (!err) {
			console.log(result);
		}
		console.log(err);
	});
});

$('#button_enter').on('click', function () {
	game_contract_instance.enter({value: 1000000000000000, gas: 3000000}, function (err, result) {
		if (!err) {
			console.log(result);
		}
		console.log(err);
	});
});

$('#buy').on('click', function () {
	game_contract_instance.buy(document.getElementById("buy_amount").value, function (err, result) {
		if (!err) {
			console.log(result);
		}
		console.log(err);
	});
});

$('#sell').on('click', function () {
	game_contract_instance.sell(document.getElementById("sell_amount").value, function (err, result) {
		if (!err) {
			console.log(result);
		}
		console.log(err);
	});	
});

$('#check_if_winner').on('click', function () {
	game_contract_instance.did_I_win(function (err, result) {
		if (!err) {
			console.log(result);
		}
		console.log(err);
	});
});

$('#claim_earnings').on('click', function () {
	game_contract_instance.end_game(function (err,result) {
		if (!err) {
			console.log(result);
		}
		console.log(err);
	});
});






