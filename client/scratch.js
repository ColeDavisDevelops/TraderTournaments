`
				<button id="game${i}_" class="accordion" onclick="accordion('game${i}_')">Stakes: .0${i} ETH Status:</button>
				<li>		
					<div id="game${i}_" class="w3-container w3-hide">

					
						<div class="main_content">
							
							
							<div>
								<header>
									<h2 style="text-align: center;border-bottom: solid white;margin-bottom: 50px"><b style="color:white">Daily</b></h2>
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
										<p id="player_predictions" style="color: black; font-size: 20px; font-weight: bold">Player has made no predictions...</p>				
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
				</li>`