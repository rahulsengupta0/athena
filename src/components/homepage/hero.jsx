import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import athenadash from "../../assets/AthenaDash.png";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Internal CSS Styles */}
      <style>
        {`
          .hero-section {
            position: relative;
            width: 100vw;
            height: 100vh;
            background: url('/your-background-image.jpg') center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            box-sizing: border-box;
          }
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(23, 35, 61, 0.40);
            z-index: 0;
          }
          .hero-content {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 900px;
            margin-left: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
          }
          .hero-heading {
            font-family: 'Founders Grotesk', Arial, sans-serif;
            font-size: 4.7vw;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
            line-height: 0.95;
            letter-spacing: -2px;
          }
          .hero-heading .inline-img {
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
            margin: 0 8px;
          }
          .hero-heading img {
            height: 90px;
            object-fit: cover;
            border-radius: 6px;
            margin-top: 0.5rem;
            margin-right: 12px;
          }
          .hero-sub-links {
            margin-top: 2.2em;
            padding-top: 32px;
            border-top: 1.5px solid rgba(255,255,255,0.35);
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            font-family: 'Neue Montreal', Arial, sans-serif;
            font-size: 1.27em;
            opacity: 0.92;
          }
          .hero-desc {
            font-size: 1.22em;
            opacity: 0.91;
          }
          .hero-action {
            margin-left: 2.2em;
            display: flex;
            align-items: center;
            gap: 14px;
          }
          .start-btn {
            background: rgba(255,255,255,0.13);
            border: 1.3px solid rgba(255,255,255,0.63);
            color: #fff;
            padding: 7px 26px;
            border-radius: 40px;
            font-size: 1.09em;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-family: 'Neue Montreal', Arial, sans-serif;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s, color 0.2s;
          }
          .start-btn:hover {
            background: #fff;
            color: #18326b;
          }
          .arrow-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 6px;
            border: 1.3px solid rgba(255,255,255,0.63);
            border-radius: 100%;
            width: 35px;
            height: 35px;
            background: rgba(255,255,255,0.11);
          }
          .arrow-icon svg {
            color: #fff;
            transition: color 0.2s;
          }
          .start-btn:hover + .arrow-icon svg {
            color: #18326b;
          }
          @media (max-width: 900px) {
            .hero-content {
              margin-left: 1rem;
              max-width: 98vw;
            }
            .hero-heading {
              font-size: 7vw;
            }
            .hero-heading img {
              height: 55px;
            }
          }
          @media (max-width: 600px) {
            .hero-content {
              margin-left: 0.2rem;
            }
            .hero-heading {
              font-size: 11vw;
            }
            .hero-heading img {
              height: 30px;
            }
            .hero-sub-links {
              flex-direction: column;
              align-items: flex-start;
              gap: 14px;
              font-size: 0.97em;
            }
            .hero-action {
              margin-left: 0;
              margin-top: 14px;
            }
          }
        `}
      </style>

      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-heading">
          Transform Your Learning
          <br/>
          <span className="inline-img">
            <img src={athenadash} alt="Athena Logo" />
          </span>
          Skill Enhancing
          <br/>
          Experience
        </h1>
        <div className="hero-sub-links">
          <span className="hero-desc">For students, educators, and lifelong learners</span>
          <div className="hero-action">
            <span className="hero-desc">From first lesson to mastery</span>
            <a href="/contact" className="start-btn">
              Start Learning
            </a>
            <span className="arrow-icon">
              <ArrowUpRight size={22} strokeWidth={1.35} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
