const env = process.env;

export default {
  host: env.HOST || 'localhost',
  port: env.PORT || 3000,
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
