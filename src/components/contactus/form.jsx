import React from 'react';
import formbg from '../../assets/formbg.mp4';

export const Form = () => {
  return (
    <section className="contact-form-section" style={styles.container}>
      <style>{`
        /* Responsive tweaks scoped to the contact form section */
        .contact-form-section { padding: 40px 20px; }
        .contact-form-iframe { height: 1328px; }
        .contact-form-video { display: block; }

        @media (max-width: 1024px) {
          .contact-form-section { padding: 32px 16px; }
          .contact-form-iframe { height: 1100px; }
        }

        @media (max-width: 768px) {
          .contact-form-section { padding: 28px 14px; }
          .contact-form-iframe { height: 1250px; }
        }

        @media (max-width: 600px) {
          .contact-form-section { padding: 22px 12px; }
          /* Hide heavy background video on very small screens for performance */
          .contact-form-video { display: none; }
          .contact-form-iframe { height: 1400px; }
        }
      `}</style>
      {/* Background video */}
      <video
        className="contact-form-video"
        autoPlay
        loop
        muted
        playsInline
        style={styles.videoBackground}
      >
        <source src={formbg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light blue overlay */}
      <div style={styles.blueOverlay}></div>

      {/* Form content above overlay and video */}
      <div style={styles.formWrapper}>
        <iframe
          src="https://api.wonderengine.ai/widget/form/dCgUnKpQ6hAXUgj5doxe"
          className="contact-form-iframe"
          style={styles.formIframe}
          title="Athena Contact"
        ></iframe>
      </div>
    </section>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '40px 20px',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    pointerEvents: 'none',
  },
  blueOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#b3d9ff',
    opacity: 0.3,
    zIndex: 5,
    pointerEvents: 'none',
  },
  formWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
  },
  formIframe: {
    width: '100%',
    height: '1328px',
    border: 'none',
    borderRadius: '4px',
    background: 'transparent',
  },
};

export default Form;