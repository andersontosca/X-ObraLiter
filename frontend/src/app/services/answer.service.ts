import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  url = '/api/resposta'
  constructor(private http: HttpClient) { }

  getAnswers() {
    return this.http.get(this.url)
  }

  getAnswer(id: string) {
    return this.http.get(this.url + '/' + id)
  }

  registerAnswer(answer: Answer) {
    return this.http.post(this.url, answer);
  }

  deleteAnswer(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateAnswer(id: string, answer: Answer) {
    return this.http.put(this.url + '/' + id, answer);
  }

}

export interface Answer {
  idResposta:'',
  idPergunta:'',
  resposta: [],
  status: []
}