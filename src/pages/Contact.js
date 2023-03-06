import styled from "styled-components";

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.5704667830664!2d77.83593211443963!3d29.905474932080384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3872a2effed%3A0x2ff01f463246d556!2sRoorkee%20Institute%20of%20Technology%20(RIT)!5e0!3m2!1sen!2sin!4v1677996540651!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xrgvkroy"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="Username"
              id="username"
              placeholder="Name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <input
              type="tel"
              name="Contact"
              id="contact"
              placeholder="Contact Number"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
              required
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
