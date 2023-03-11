import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-subscribe {
      .follow-btn {
        margin-left: 2rem;
      }
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>E-Commerce</h3>
            <p>
              E-commerce is the buying and selling of goods and services, or the
              transmitting of funds or data, over an electronic network,
              primarily the internet
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Follow our social accounts to get important updates</h3>
            <form action="">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your E-mail"
              />
              <input type="submit" value="Follow" className="follow-btn" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.facebook.com/mdabubakar804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://instagram.com/_mdabubakar_?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/md-abubakar-090aa2164/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/MdAbubakar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="footer-social">
              <div className="footer-social--icons">
                <div>
                  <a
                    href="tel:+917464053654"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPhone className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.me/message/65FDVS4BHJBVD1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom footer */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-three-column">
            <p>
              &#169; {new Date().getFullYear()} E-Commerce. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
            <div>
              <p>DEVELOPED BY:</p>
              <p>MD ABUBAKAR</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
