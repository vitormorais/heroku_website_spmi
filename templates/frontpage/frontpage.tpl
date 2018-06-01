{include file='common/header.tpl'}
	
	<section id="content" class="container">
	
		<div class="jumbotron">
			<div class="row">
				<div class="col-md-4">
					<h3>
						(Em desenvolvimento) para Android e IOS
					</h3><img  src="{$BASE_URL}img/ios-android.png" style="width:200px;"/>
				</div>
				<div class="col-md-4">
					<h3>
						Descarregar versão de desenvolvimento
					</h3><img  src="{$BASE_URL}img/qr_build.png" style="width:200px;" />
				</div>
				<div class="col-md-4">
					<h3>
						Visualizar versão de demonstração
					</h3>

					<button type="button" class="btn btn-primary btn-lg btn-block" onclick="window.location.href='{$BASE_URL}pages/frontpage/app.php'">
						Aceder à app
					</button>

				</div>
			</div>
		</div>
	
	</section>

{include file='common/footer.tpl'}