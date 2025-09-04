import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import athenadash from "../../assets/AthenaDash.png";
import interactive from "../../assets/interactive.mp4";

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
            display: flex;
            align-items: center;
            justify-content: flex-start;
            box-sizing: border-box;
          }
          .hero-bg-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 102, 255, 0.35);
            z-index: 1;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 1200px;
            margin-left: 3rem;
            padding: 0 1.5rem;
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
            flex-wrap: wrap;
            gap: 12px 18px;
            align-items: center;
            color: #fff;
            font-family: 'Neue Montreal', Arial, sans-serif;
            font-size: 1.05em;
            line-height: 1.5;
            opacity: 0.92;
            width: 100%;
          }
          .hero-desc {
            font-size: 1.02em;
            opacity: 0.91;
            flex: 1 1 320px;
          }
          .hero-action {
            margin-left: 0;
            display: flex;
            align-items: center;
            gap: 12px;
            justify-content: flex-end;
            flex: 1 1 320px;
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
              padding: 0 1rem;
            }
            .hero-heading {
              font-size: 7vw;
            }
            .hero-heading img {
              height: 55px;
            }
            .hero-sub-links {
              font-size: 0.98em;
            }
            .hero-desc {
              font-size: 0.98em;
            }
          }
          @media (max-width: 600px) {
            .hero-content {
              margin-left: 0.2rem;
              padding: 0 0.6rem;
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
              gap: 10px;
              font-size: 0.95em;
            }
            .hero-action {
              margin-left: 0;
              margin-top: 14px;
              width: 100%;
              justify-content: flex-start;
            }
          }
        `}
      </style>

      <video className="hero-bg-video" autoPlay muted loop playsInline src={interactive} />
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
