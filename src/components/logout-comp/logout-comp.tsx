import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'logout-comp',
  styleUrl: 'logout-comp.css',
  shadow: true,
})
export class LogoutComp {

  @Prop() buttonName: string;
  @Prop() refreshUrl: string
  @Prop() token: string


  logOut(): void {
    console.log({ regreshurl: this.refreshUrl, data: this.token, buttonName: this.buttonName });
    fetch('https://reqres.in/api/users', {
      method: "POST",
      body: JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      // Converting to JSON
      .then(response => response.json())
      // Displaying results to console
      .then(json => console.log(json));

  }

  render() {
    return (
      <div>
        <button onClick={this.logOut}>{this.buttonName}</button>
      </div>
    );
  }

}
