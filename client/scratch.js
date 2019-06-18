<div class="main_content">
			<p id=game3Head>Stakes: .01 ETH Status: </p>
			<button onclick="accordion('game3')">Expand/Collapse</button>
			
			
			<div id=game3 class="w3-container w3-hide">
				<header>
					<h2 style="text-align: center"><b>Daily</b></h2>
				</header>
				<div class="main_box">
					<div class="my_box">
						<p id="game3_total_eth_staked" style="font-size: 20px; font-weight: bold">Pending...</p>				
					</div>
					<h3 style="text-align: center"><b>Total Eth Staked</b></h3>
					
				</div>
				<div class="main_box">
					<div class="my_box">
						<p id=game3_status style="font-size: 20px; font-weight: bold">pending...</p>				
					</div>
					<h3 style="text-align: center"><b>Status</b></h3>
				</div>
				
	
				<div class="main_box_half">
					<div class="my_box">
						<p id=game3_settlement_price style="font-size: 20px; font-weight: bold">pending...</p>				
					</div>
					<h3 style="text-align: center"><b>Settlement Price</b></h3>
	
				</div>
				<div class="main_box_half">
					<div class="my_box">
						<p id=game3_winning_prediction style="font-size: 20px; font-weight: bold">pending...</p>				
					</div>
					<h3 style="text-align: center"><b>Winning Prediction</b></h3>
	
				</div>
				<div class="main_box_alt">
					<div class="input_box">
						<input type="text" name="predict" id="predict" value="" style="background-color: white" placeholder="Predicted Price" />
					</div>
					<div class="input_box">
						<button id="predict_it" class="button primary fit">Predict</button>
					</div>
					<div class="main_box_half_alt">
	
						<button id="claim_winning_predictions" class="button primary fit">Claim Winning Prediction</button>
					</div>
					<div class="main_box_half_alt">
						
						<button id="collect_winnings" class="button primary fit">Collect Winnings</button>
						
					</div>
					<div class="main_box" style="border-style: groove; background-color: rgb(87, 87, 87);color: white">
						<h3 style="text-align: center;"><b style="color:white">Player Predictions</b></h3>
						<button id="refresh_positions">Refresh Positions</button>
						<div class="my_box">
							<p id="player_predictions" style="color: black; font-size: 20px; font-weight: bold">Player has made no predictions...</p>				
						</div>
					</div>      
				</div>
			</div>
			  
			
		</div>