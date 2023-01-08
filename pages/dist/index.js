"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Form_1 = require("./Form");
var Form2_1 = require("./Form2");
var Form3_1 = require("./Form3");
var Home = function () {
    return (React.createElement("div", { className: "flex min-h-screen flex-col items-center justify-center py-2" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Lazy Time Management"),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("main", { className: "flex w-full flex-1 flex-col items-center justify-center px-20 text-center" },
            React.createElement("h1", { className: "text-6xl font-bold" },
                "Welcome to",
                ' ',
                React.createElement("a", { className: "text-blue-600" }, "Lazy Time Manager!")),
            React.createElement("p", { className: "my-4 text-2xl " },
                "Get started by adding your to-do",
                ' '),
            React.createElement("div", { className: "flex flex-nowrap" },
                React.createElement("div", { className: 'rounded-l-lg bg-gradient-to-r from-cyan-500 to-blue-500' },
                    React.createElement("div", { className: "flex-1 w-64 py-8" }, "Other"),
                    React.createElement("div", { className: 'pb-8' },
                        React.createElement(Form_1["default"], null))),
                React.createElement("div", { className: "bg-gradient-to-l  from-indigo-500 to-blue-500" },
                    React.createElement("div", { className: "flex-1 w-64 py-8" }, "Work"),
                    React.createElement(Form2_1["default"], null)),
                React.createElement("div", { className: "rounded-r-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " },
                    React.createElement("div", { className: "flex-1 w-64 py-8" }, "Hobby"),
                    React.createElement(Form3_1["default"], null))))));
};
exports["default"] = Home;
