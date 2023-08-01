"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
//using cors
app.use((0, cors_1.default)());
//cookie parser
app.use((0, cookie_parser_1.default)());
//body parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//test route
app.use((req, res) => {
    res.status(http_status_1.default.OK).json({
        success: true,
        message: 'Working perfectly !!!',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'Working perfectly !!!',
            },
        ],
    });
});
//application routes
app.use('/api/v1', routes_1.default);
//call global error handler
app.use(globalErrorHandler_1.default);
//handle not found error
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});
exports.default = app;
