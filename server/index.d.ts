declare module 'xss-clean'

declare var process: {
  env: {
    DB_URL: string,
    TEST_DB_URI: string,
    SERVER_SECRET: string,
    SESSION_SECRECT: string,
    AUTH0_CLIENT_ID: string,
    AUTH0_DOMAIN: string,
    AUTH0_CLIENT_SECRET: string,
    MOCK_EMAIL: string,
    NODE_ENV: 'development' | 'production';
    PORT?: string;
  }
}