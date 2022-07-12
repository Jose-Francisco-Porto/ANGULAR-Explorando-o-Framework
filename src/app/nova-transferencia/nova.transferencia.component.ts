import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

 //CRIA um evento no botão para que ele faça a transferencia
 @Output() aoTransferir = new EventEmitter<any>();

 //variaveis que seja chamada no html dos campos input.
  valor: number;
  destino: number;
// metodo construtor.
constructor(private service: TransferenciaService, private router: Router){}
  //metodo de transferir a sim que clicar no botão transferir será invocado.
  transferir() {
    //exibe o valores no console
    console.log('Solicita nova transferencia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino:this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
    //chamo o metodo limpar campos.
    //this.limparCampos();
  }


  // metodo para limpar os campos
  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
