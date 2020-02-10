
import React from 'react';
import './orders.styles.scss';

const Orders = () => (
    <div className='order '>
    <table>
  <tr>
    <th>ORDER ID</th>
    <th>DATE</th>
    <th>ACTION</th>
    <th>ACTION</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td><button class="btn btn-default add-to-cart"> edit </button></td>
    <td><button class="btn btn-default add-to-cart"> delete </button></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td><button class="btn btn-default add-to-cart"> edit </button></td>
    <td><button class="btn btn-default add-to-cart"> delete </button></td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td><button class="btn btn-default add-to-cart"> edit </button></td>
    <td><button class="btn btn-default add-to-cart"> delete </button></td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td><button class="btn btn-default add-to-cart"> edit </button></td>
    <td><button class="btn btn-default add-to-cart"> delete </button></td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td><button class="btn btn-default add-to-cart"> edit </button></td>
    <td><button class="btn btn-default add-to-cart"> delete </button></td>
  </tr>
  
</table>
</div>
    );


  export default Orders;

