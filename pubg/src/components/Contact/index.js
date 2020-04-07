import React from 'react';
import 'antd/dist/antd.css';
import { Row } from 'antd';

function Contact() {
  return (
    <div>
      <form action="mailto:sanjeet.kumar.engg@gmail.com" class="decor">
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <div class="form-inner">
          <h1>Contact us</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message..." rows="5"></textarea>
          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
