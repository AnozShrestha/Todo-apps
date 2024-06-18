import LogoImage from "../../assets/image/logo.jpg";
import Headline from "../../assets/image/headline.jpeg";
import Laptop from "../../assets/image/laptop.webp";
import Temple from "../../assets/image/temple.webp";
import User from "../../assets/image/user.webp";
export default function About() {
  return (
    <div>
      <nav className="px-3 py-3 flex justify-around">
        <div>
          <a href="/">
            <img src={LogoImage} alt="" />
          </a>
        </div>
        <div>
          <ul className="flex gap-10">
            <li className="px-3 py-2">
              <a href="/">Home</a>
            </li>
            <li className="px-3 py-2">
              <a href="/">About Us</a>
            </li>
            <li className="px-3 py-2">
              <a href="/">Product</a>
            </li>
            <li className="px-3 py-2">
              <a href="/">Services</a>
            </li>
            <li className="px-3 py-2">
              <a href="/">FAQ</a>
            </li>
            <li className="px-3 py-2">
              <a href="/">Blogs</a>
            </li>
            <button className="px-3 py-2 text-center bg-blue-700 text-white rounded">
              Download App
            </button>
          </ul>
        </div>
      </nav>
      <header>
        <img src={Headline} alt="Books" />
        <h3>
          <a href="/">Home</a>
        </h3>
        /
        <h3>
          <a href="/">About Us</a>
        </h3>
      </header>
      <main>
        <section>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <h6>About RoboGENCE</h6>
                      <p>
                        We enable customers to expand their online presence by
                        leveraging our top-tier technology and services. Our aim
                        is to assist businesses in listing their products on
                        popular online marketplaces like Google Shopping,
                        Amazon, and Facebook, making it easier for them to reach
                        a broader audience and maximize their online sales
                        potential.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={Laptop} alt="laptop" />
                      <img src={Temple} alt="Temple" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <img src={Laptop} alt="Laptop" />
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Our Objective</h6>
                    <p>
                      Robogence was founded with the vision of developing the
                      foremost feed platform in the industry. From the outset,
                      we have held the belief that optimized feeds yield
                      superior results. Our founders encountered numerous
                      challenges with conventional feed platforms while
                      overseeing feeds at prominent advertising agencies. Our
                      initial focus was on addressing our own needs, and it soon
                      became evident that other advertising agencies and online
                      retailers faced identical challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h6>Meet our team</h6>
              <h5>Our team</h5>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <img src={User} alt="User" />
                        <div>
                          <p>John Wick</p>
                          <span>Founder/Ceo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <img src={User} alt="User" />
                        <div>
                          <p>John Wick</p>
                          <span>Founder/Ceo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <img src={User} alt="User" />
                        <div>
                          <p>John Wick</p>
                          <span>Founder/Ceo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <img src={User} alt="User" />
                        <div>
                          <p>John Wick</p>
                          <span>Founder/Ceo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <img src={User} alt="User" />
                        <div>
                          <p>John Wick</p>
                          <span>Founder/Ceo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <img src={User} alt="User" />
                        <div>
                          <p>John Wick</p>
                          <span>Founder/Ceo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
            <h6>Meet our board members</h6>
            <h5>Advisory Board Members</h5>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <img src={User} alt="User" />
                                </div>
                                <div>
                                    <p>John Wick</p>
                                    <span>Founder/CEO</span>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <img src={User} alt="User" />
                                </div>
                                <div>
                                    <p>John Wick</p>
                                    <span>Founder/CEO</span>
                                </div>

                            </div><div>
                                <div>
                                    <img src={User} alt="User" />
                                </div>
                                <div>
                                    <p>John Wick</p>
                                    <span>Founder/CEO</span>
                                </div>

                            </div><div>
                                <div>
                                    <img src={User} alt="User" />
                                </div>
                                <div>
                                    <p>John Wick</p>
                                    <span>Founder/CEO</span>
                                </div>

                            </div><div>
                                <div>
                                    <img src={User} alt="User" />
                                </div>
                                <div>
                                    <p>John Wick</p>
                                    <span>Founder/CEO</span>
                                </div>

                            </div><div>
                                <div>
                                    <img src={User} alt="User" />
                                </div>
                                <div>
                                    <p>John Wick</p>
                                    <span>Founder/CEO</span>
                                </div>

                            </div>  
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
