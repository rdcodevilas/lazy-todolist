"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var head_1 = require("next/head");
var DropdownButton_2 = require("./DropdownButton");
var Home = function () {
    var _a = react_2.useState([]), formData = _a[0], setFormData = _a[1];
    var _b = react_2.useState(""), inputValue = _b[0], setInputValue = _b[1];
    var handleSubmit = function (event) {
        event.preventDefault();
        // setFormData([...formData, inputValue])
        setInputValue("");
    };
    var handleChange = function (event) {
        setInputValue(event.target.value);
    };
    var handleDelete = function (dataToDelete) {
        setFormData(formData.filter(function (data) { return data !== dataToDelete; }));
    };
    var options = [
        { value: "option1", label: "Other" },
        { value: "option2", label: "Work" },
        { value: "option3", label: "Hobby" },
    ];
    function handleOptionClick(value) { }
    return (react_1["default"].createElement("div", { className: "flex min-h-screen flex-col items-center justify-center py-2" },
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, "Lazy Time Management"),
            react_1["default"].createElement("link", { rel: "icon", href: "/favicon.ico" })),
        react_1["default"].createElement("main", { className: "flex w-full flex-1 flex-col items-center justify-center px-20 text-center" },
            react_1["default"].createElement("h1", { className: "text-6xl font-bold" },
                "Welcome to ",
                react_1["default"].createElement("a", { className: "text-blue-600" }, "Lazy Time Manager!")),
            react_1["default"].createElement("p", { className: "my-4 text-2xl " }, "Get started by adding your to-do "),
            react_1["default"].createElement("form", { className: "flex inverted-colors:outline ..." },
                react_1["default"].createElement("label", { className: "block" },
                    react_1["default"].createElement("span", { className: "text-sm font-medium text-slate-700" }, "Add Your To-do"),
                    react_1["default"].createElement("input", { type: "text", className: "mt-8 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400\n                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500\n                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none\n                invalid:border-pink-500 invalid:text-pink-600\n                focus:invalid:border-pink-500 focus:invalid:ring-pink-500\n              " }),
                    react_1["default"].createElement(DropdownButton_2["default"], { options: options, onOptionClick: handleOptionClick }),
                    react_1["default"].createElement("p", { className: "mt-2 invisible peer-invalid:visible text-pink-600 text-sm" }, "Please provide a valid email address."))),
            react_1["default"].createElement("div", { className: "flex flex-nowrap" },
                react_1["default"].createElement("div", { className: "rounded-l-lg bg-gradient-to-r from-cyan-500 to-blue-500" },
                    react_1["default"].createElement("div", { className: "flex-1 w-64 py-8" }, "Other"),
                    react_1["default"].createElement("div", { className: "pb-8" })),
                react_1["default"].createElement("div", { className: "bg-gradient-to-l  from-indigo-500 to-blue-500" },
                    react_1["default"].createElement("div", { className: "flex-1 w-64 py-8" }, "Work")),
                react_1["default"].createElement("div", { className: "rounded-r-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " },
                    react_1["default"].createElement("div", { className: "flex-1 w-64 py-8" }, "Hobby"))))));
};
exports["default"] = Home;
