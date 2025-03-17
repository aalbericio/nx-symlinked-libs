module.exports = (config) => {
    // Modify Webpack's snapshot options
    config.snapshot = {
        ...config.snapshot,
        module: {
            // Use timestamps for module snapshots (default behavior)
            timestamp: true, // Set to false to disable timestamps entirely
            hash: true // Optionally use content hashes instead of timestamps
        }
    };

    // Optional: Log the config to inspect snapshot settings
    console.log('Webpack Snapshot Config:', config.snapshot);

    return config;
};