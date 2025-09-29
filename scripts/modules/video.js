// ===== VIDEO ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', () => {
  // Set video playback speed to 2x
  const aiDemoVideo = document.querySelector('video[playbackRate="2"]');
  if (aiDemoVideo) {
    aiDemoVideo.addEventListener('loadedmetadata', () => {
      aiDemoVideo.playbackRate = 2.0;
    });
    
    // Add speed control indicator
    aiDemoVideo.addEventListener('play', () => {
      if (!document.querySelector('.speed-indicator')) {
        const speedIndicator = document.createElement('div');
        speedIndicator.className = 'speed-indicator';
        speedIndicator.textContent = '2x';
        speedIndicator.style.cssText = `
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
          z-index: 10;
        `;
        aiDemoVideo.parentElement.style.position = 'relative';
        aiDemoVideo.parentElement.appendChild(speedIndicator);
      }
    });
  }
});

