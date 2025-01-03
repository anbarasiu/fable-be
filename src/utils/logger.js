const { createLogger, format, transports } = require('winston');
const caller = require('caller');

const level = process.env.LOG_LEVEL || 'error';

const logger = createLogger({
    level: level,
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            const callingFile = caller();
            return `${timestamp} [${level}] [${callingFile}]: ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;