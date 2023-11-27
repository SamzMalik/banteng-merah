const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'github.com'

        }, {
            hostname: 'randomuser.me'
        }],
    }
}

module.exports = nextConfig
