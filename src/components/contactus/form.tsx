import React from 'react';
import formbg from '../../assets/formbg.mp4';

export const Form = () => {
  return (
    <section style={styles.container}>
      {/* Background video */}
      <video
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
          style={styles.formIframe}
          title="Athena Contact"
        ></iframe>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
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