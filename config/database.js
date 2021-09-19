module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi_blog"),
        username: env("DATABASE_USERNAME", "*****"),
        password: env("DATABASE_PASSWORD", "*****"),
      },
      options: {},
    },
  },
});
