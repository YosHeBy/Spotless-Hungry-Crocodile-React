import React from 'react'

import { Helmet } from 'react-helmet'

import Question1 from '../components/question1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <span className="logo">LEZOR</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="bodySmall">Home</span>
              <span className="home-nav22 bodySmall">Posts</span>
              <span className="home-nav32 bodySmall">Socials</span>
              <span className="home-nav42 bodySmall">Login</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">LEZOR</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav121 bodySmall">Home</span>
                <span className="home-nav221 bodySmall">Posts</span>
                <span className="home-nav321 bodySmall">Socials</span>
                <span className="home-nav421 bodySmall">Login</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Benvenuti visitatori dell&apos;internet
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Watch live broadcasts and join the fun</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <a
                href="https://twitch.tv/lezor1612"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button1 buttonFilled"
              >
                Twitch
              </a>
              <a
                href="https://kick.com/lezor1612"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button11 buttonFilled"
              >
                Kick
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container featuresContainer"></div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container02">
            <span className="overline">
              <span>prezzi</span>
              <br></br>
            </span>
            <h2>
              <span className="heading2">Abbonamenti</span>
              <br></br>
            </h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>Unlock exclusive features with our premium plans</span>
              </span>
            </span>
          </div>
          <div className="home-container03">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container04">
                <span className="home-text21 heading3">Amazon prime</span>
              </div>
              <div className="home-container05">
                <span className="home-text22">
                  <span>
                    Bisogna avere un account
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>amazon prime</span>
                </span>
              </div>
              <div className="home-container06">
                <div className="home-container07">
                  <span className="home-text26">✔</span>
                  <span className="bodySmall">No ads</span>
                </div>
                <div className="home-container08">
                  <span className="home-text27">✔</span>
                  <span className="bodySmall">Stanze discord livello 1</span>
                </div>
                <div className="home-container09">
                  <span className="home-text28">✔</span>
                  <span className="bodySmall">Emote esclusive</span>
                </div>
                <div className="home-container10">
                  <span className="home-text29">✔</span>
                  <span>Gruppo telegram sub</span>
                </div>
              </div>
              <a
                href="https://www.twitch.tv/subs/lezor1612"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link buttonOutline"
              >
                Seleziona amazon prime
              </a>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container11">
                <span className="home-text30 heading3">tier 1</span>
                <span className="bodySmall">
                  Enhanced features for regular users
                </span>
              </div>
              <div className="home-container12">
                <span className="home-text31">€</span>
                <span className="home-basic-plan-pricing">4</span>
                <span className="home-text32">/ month</span>
              </div>
              <div className="home-container13">
                <div className="home-container14">
                  <div className="home-container15">
                    <span className="home-text33">✔</span>
                    <span className="bodySmall">No ads</span>
                  </div>
                  <div className="home-container16">
                    <span className="home-text34">✔</span>
                    <span className="bodySmall">Stanze discord livello 1</span>
                  </div>
                  <div className="home-container17">
                    <span className="home-text35">✔</span>
                    <span className="bodySmall">Emote esclusive</span>
                  </div>
                  <div className="home-container18">
                    <span className="home-text36">✔</span>
                    <span>Gruppo telegram sub</span>
                  </div>
                </div>
              </div>
              <button className="home-button buttonFilledSecondary">
                Selezione tier 1
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container19">
                <span className="home-text37 heading3">
                  <span>tier 2-3</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Premium features for power users
                </span>
              </div>
              <div className="home-container20">
                <span className="home-text40">€</span>
                <span className="home-pro-plan-pricing">8-20</span>
                <span className="home-text41">/ month</span>
              </div>
              <div className="home-container21">
                <div className="home-container22">
                  <span className="home-text42">✔</span>
                  <span>
                    <span>Tutti  i vantaggi precedenti</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-container23">
                  <span className="home-text46">✔</span>
                  <span className="bodySmall">Stanze discord private</span>
                </div>
                <div className="home-container24">
                  <span className="home-text47">✔</span>
                  <span>Accesso al gruppo Whatsapp</span>
                </div>
                <div className="home-container25">
                  <span className="home-text48">✔</span>
                  <span className="bodySmall">Notizie e post in anteprima</span>
                </div>
                <div className="home-container26">
                  <span className="home-text49">✔</span>
                  <span>
                    <span>Affetto-Più affetto</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Selezione tier 2-3
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container27">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text55 heading2">Domande frequenti</h2>
              <span className="home-text56 bodyLarge">
                <span>Le domane che mi fate più frequentemente</span>
                <br></br>
              </span>
            </div>
            <div className="home-container28">
              <Question1
                io="Mi chiamo Lorenzo"
                answer="You can watch the live broadcast on Twitch by visiting https://www.twitch.tv/lezor1612"
                question="Come ti chiami?"
              ></Question1>
              <Question1
                answer="I stream a variety of content including gaming, chatting, and creative streams."
                question="What type of content do you stream on Twitch?"
              ></Question1>
              <Question1
                io="Abito in Trentino-AltoAdige"
                answer="Yes, you can interact with me through the Twitch chat while watching the live broadcast."
                question="Dove abiti?"
              ></Question1>
              <Question1
                io="Sono un cyber security analyst"
                answer="I usually stream on specific days and times, which I announce on my social media channels."
                question="Che lavoro fai?"
              ></Question1>
              <Question1
                io="Mi piacerebbe far diventare lo streaming un lavoro a tempo pieno"
                answer="You can contact me through the messaging feature on my social media platforms or by sending an email to [email address]."
                question="Progetti futuri?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1 footerContainer">
          <div className="home-container29">
            <span className="bodySmall home-text59">
              © 2024 Lezor1612, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
