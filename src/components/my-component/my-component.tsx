import { Component, Prop, h, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() refreshUrl: string='https://reqres.in/api/users'
  @State() token :string=  JSON.stringify({
    "name": "morpheus",
    "job": "leader"
})

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }


  render() {
    return (
      <div>
        {/* <div>Hello, World! I'm {this.getText()}</div> */}

        <logout-comp button-name='Log Out' refresh-url={this.refreshUrl} token={this.token}></logout-comp>
      </div>
    );
  }
}
