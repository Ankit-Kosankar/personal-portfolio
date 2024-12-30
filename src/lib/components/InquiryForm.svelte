<script>
    let nameOrEmail = '';
    let message = '';
  </script>
  
  <h3>Get in Touch</h3>
  <form class="contact-form">
    <div>
      <label for="nameOrEmail">Your Name or Email:</label>
      <input type="text" id="nameOrEmail" bind:value={nameOrEmail} />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" rows="4" bind:value={message}></textarea>
    </div>
    <button type="submit" class="submit-button">Submit</button>
  </form>
  
  <style>
    .contact-form {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    .submit-button {
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  
    .submit-button:hover {
      background-color: #555;
      transform: translateY(-2px);
    }
  </style>