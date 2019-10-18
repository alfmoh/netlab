import { Message } from "./models/message";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messagesUrl = "api/messages";

  constructor(private http: HttpClient) { }

  public getMessages() {
    return this.http.get<Message[]>(this.messagesUrl);
  }

  public updateUser(user: Message) {
    return this.http.put<Message>(`${this.messagesUrl}/${user.id}`, user);
  }
}
