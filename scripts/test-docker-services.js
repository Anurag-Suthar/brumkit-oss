/**
 * Test script for local Redis and Mailhog integration
 *
 * Run: NODE_ENV=development node scripts/test-docker-services.js
 */

// Test Redis
console.log('🔴 Testing Redis...');
const Redis = require('ioredis');

const redis = new Redis('redis://localhost:6379');

redis
  .set('test:key', 'Hello Redis!', 'EX', 10)
  .then(() => redis.get('test:key'))
  .then((value) => {
    console.log('✅ Redis working! Got:', value);
    return redis.quit();
  })
  .catch((error) => {
    console.error('❌ Redis error:', error.message);
    process.exit(1);
  });

// Test Mailhog (via nodemailer)
console.log('📧 Testing Mailhog...');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false,
  ignoreTLS: true,
});

transporter
  .sendMail({
    from: 'test@brumkit.com',
    to: 'user@example.com',
    subject: 'Test Email from Brumkit',
    text: 'This is a test email to verify Mailhog integration!',
    html: '<h1>Hello from Brumkit!</h1><p>This is a test email to verify Mailhog integration.</p>',
  })
  .then((info) => {
    console.log('✅ Mailhog working! Email sent:', info.messageId);
    console.log('📮 View at: http://localhost:8025');
  })
  .catch((error) => {
    console.error('❌ Mailhog error:', error.message);
    process.exit(1);
  });

console.log('\n✨ All tests completed! Check results above.');
console.log('📮 Mailhog UI: http://localhost:8025');
