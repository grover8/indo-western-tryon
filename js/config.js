// js/config.js
const CONFIG = {
  // Your n8n webhook URLs
  API_BASE: 'https://n8n.srv1163004.hstgr.cloud',
  
  ENDPOINTS: {
    main: '/webhook/tryon-main',
    batch: '/webhook/tryon-batch',
    poses: '/webhook/tryon-poses',
    lighting: '/webhook/tryon-lighting'
  },
  
  // Optional: Add API key for security
  API_KEY: '', // Leave empty for now, add later if needed
  
  // Feature flags
  FEATURES: {
    enableBatch: true,
    enablePoses: true,
    enableLighting: true,
    maxBatchSize: 20
  },
  
  // UI Settings
  UI: {
    showProcessingTime: true,
    showCostEstimate: true,
    enableHistory: true
  }
};

// Make config globally available
window.APP_CONFIG = CONFIG;
