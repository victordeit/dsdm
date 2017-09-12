$(document).ready(function(){
	var Banco = function(g){
		this.clientes = [];
		this.gerente = g;
		this.abrirconta = function(n,c){
			this.nome = n;
			this.cpf = c;
			this.clientes.push(this.nome,this.cpf)
		}
		this.fecharconta = function(n,c){
			var i = 0;
			while(i >= clientes.lenght){
				if (clientes[i] == n,c) {
					delete this.clientes[i]
				}
			}
		}
		this.cliente = function(){
			this.saldo = 3;
			this.limite = 5;
			this.versaldo = function(){
				console.log("seu saldo eh:"+this.saldo)
			}
			this.depositar = function(depo){
				var d = (this.saldo);
				var g = (depo);
				this.saldo = d+g;
				console.log("Deposito concluido com sucesso.")
			}
			this.sacar = function(saque){
				var d = (this.saldo);
				var f = (this.limite);
				var g = (saque);
				var h = d + f;
				if ( g  > h ){
					console.log("Nao foi possivel sacar essa quantia, valor em caixa nao disponivel.");
				}
				else{this.saldo = d - h}
			}
			this.trasferir = function(tras,cp){
				if (this.cpf != cp) {
					var i = 0
					while (i >= clientes.lenght){
						clientes[i].split(",")
						if (cp == clientes[i][1]) {
							var d = (this.saldo);
							var g = (tras);
							if (g > d) {
								console.log("Nao foi possivel trasferir essa quantia, valor em caixa nao disponivel.");
							}
						}
					}
				}
				else{
					console.log("Nao eh possivel trasferir para si mesmo")
				}
			}
		}
	}
});
