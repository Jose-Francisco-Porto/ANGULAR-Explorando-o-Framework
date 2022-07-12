import { Transferencia } from './../models/transferencia.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
 private ListaTransferencia: any[];
 private url = 'http://localhost:3000/transferencias';
// o HttpCleinte é importado para que o usário possa criar requisições api rest.
 constructor(private httpClient: HttpClient) {
   this.ListaTransferencia = [];
  }
get transferencias(){
  return this.ListaTransferencia;
}
//O get vai retornar não uma lista mas um observable de alguma coisa.
todas(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}
adicionar(transferencia: Transferencia): Observable<Transferencia>{
  this.hidratar(transferencia);

  //this.ListaTransferencia.push(transferencia);
 return this.httpClient.post<Transferencia>(this.url, transferencia);
}
private hidratar(transferencia: any){
transferencia.data = new Date();
}
}
