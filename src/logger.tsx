import winston from "winston";

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

  logger.log({
    level: 'info',
    message: 'Hello distributed log files!'
  });
  
  logger.info('Hello again distributed logs');