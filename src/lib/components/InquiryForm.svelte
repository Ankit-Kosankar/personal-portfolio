<script>
  let fullName = '';
  let email = '';
  let phone = '';
  let message = '';
</script>

<style lang="scss">
@use '../../styles/inquiryform.css' as *;

.contact-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.contact-form h3 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #007bff;
}

textarea {
  resize: none;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.optional {
  font-size: 12px;
  color: #888;
}
</style>
<div style="padding-bottom: 20px;">
  <h3>Have Something on Mind , Leave Me a Message</h3>
</div>
<form class="contact-form">
<div class="form-group">
  <label for="fullName">Full Name:</label>
  <input
    type="text"
    id="fullName"
    bind:value={fullName}
    placeholder="Enter your full name"
    required
  />
</div>
<div class="form-group">
  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    bind:value={email}
    placeholder="Enter your email address"
    required
  />
</div>
<div class="form-group">
  <label for="phone">Phone Number: <span class="optional">(Optional)</span></label>
  <input
    type="tel"
    id="phone"
    bind:value={phone}
    placeholder="Enter your phone number"
  />
</div>
<div class="form-group">
  <label for="message">Your Request or Message:</label>
  <textarea
    id="message"
    rows="5"
    bind:value={message}
    placeholder="Write your message here"
    required
  ></textarea>
</div>
<button type="submit" class="submit-button">Submit</button>
</form>


<!-- <script>
    let nameOrEmail = '';
    let message = '';
  </script>

<style lang="scss">
  @use '../../styles/inquiryform.css' as *;
  // @use '@fortawesome/fontawesome-free/css/all.min.css';
</style>


  
  <h3>Get in Touch</h3>
  <form class="contact-form">
    <div class="inquiry-form-container">
    <div>
      <label for="nameOrEmail">Your Name or Email:</label>
      <input type="text" id="nameOrEmail" bind:value={nameOrEmail} />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" rows="4" bind:value={message}></textarea>
    </div>
    <button type="submit" class="submit-button">Submit</button>
    </div>
  </form> -->