{include file='common/header.tpl'}
	
	<section id="content" class="container">
	
		<div class="jumbotron">
			<div class="row">
				<div class="col-md-6">
					<h3>
						Disponível no Google Play
					</h3>
					<button type="button" class="btn btn-primary btn-lg btn-block" onclick="window.location.href='https://play.google.com/store/apps/details?id=com.vmorais.SPMI.guia'">
					<img  src="{$BASE_URL}img/android.png" style="width:200px;" />
					</button>

				</div>
				
				<div class="col-md-6">
					<h3>
						Visualizar versão de demonstração
					</h3>

					<button type="button" class="btn btn-primary btn-lg btn-block" onclick="window.location.href='{$BASE_URL}pages/frontpage/app.php'">
						Aceder à app
					</button>

					<button type="button" class="btn btn-primary btn-lg btn-block" onclick="window.location.href='{$BASE_URL}pages/frontpage/full_screen.php'">
						Visualizar versão de demonstração em full-screen
					</button>

				</div>
			</div>
		</div>
	
	</section>

{include file='common/footer.tpl'}