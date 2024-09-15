"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/card/[cardId]/cardlogs/route";
exports.ids = ["app/api/card/[cardId]/cardlogs/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&page=%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute.ts&appDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&page=%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute.ts&appDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_pchan_OneDrive_Desktop_final_year_project_INTEGRATED_PROJECT_TRACKING_AND_COORDINATION_HUB_src_app_api_card_cardId_cardlogs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/card/[cardId]/cardlogs/route.ts */ \"(rsc)/./src/app/api/card/[cardId]/cardlogs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/card/[cardId]/cardlogs/route\",\n        pathname: \"/api/card/[cardId]/cardlogs\",\n        filename: \"route\",\n        bundlePath: \"app/api/card/[cardId]/cardlogs/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\pchan\\\\OneDrive\\\\Desktop\\\\final year project\\\\INTEGRATED PROJECT TRACKING AND COORDINATION HUB\\\\src\\\\app\\\\api\\\\card\\\\[cardId]\\\\cardlogs\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_pchan_OneDrive_Desktop_final_year_project_INTEGRATED_PROJECT_TRACKING_AND_COORDINATION_HUB_src_app_api_card_cardId_cardlogs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/card/[cardId]/cardlogs/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjYXJkJTJGJTVCY2FyZElkJTVEJTJGY2FyZGxvZ3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNhcmQlMkYlNUJjYXJkSWQlNUQlMkZjYXJkbG9ncyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNhcmQlMkYlNUJjYXJkSWQlNUQlMkZjYXJkbG9ncyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNwY2hhbiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q2ZpbmFsJTIweWVhciUyMHByb2plY3QlNUNJTlRFR1JBVEVEJTIwUFJPSkVDVCUyMFRSQUNLSU5HJTIwQU5EJTIwQ09PUkRJTkFUSU9OJTIwSFVCJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNwY2hhbiU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q2ZpbmFsJTIweWVhciUyMHByb2plY3QlNUNJTlRFR1JBVEVEJTIwUFJPSkVDVCUyMFRSQUNLSU5HJTIwQU5EJTIwQ09PUkRJTkFUSU9OJTIwSFVCJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRHO0FBQ3pMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSU5URUdSQVRFRCBQUk9KRUNUIFRSQUNLSU5HIEFORCBDT09SRElOQVRJT04gSFVCLz85M2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHBjaGFuXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcZmluYWwgeWVhciBwcm9qZWN0XFxcXElOVEVHUkFURUQgUFJPSkVDVCBUUkFDS0lORyBBTkQgQ09PUkRJTkFUSU9OIEhVQlxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjYXJkXFxcXFtjYXJkSWRdXFxcXGNhcmRsb2dzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jYXJkL1tjYXJkSWRdL2NhcmRsb2dzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2FyZC9bY2FyZElkXS9jYXJkbG9nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2FyZC9bY2FyZElkXS9jYXJkbG9ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHBjaGFuXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcZmluYWwgeWVhciBwcm9qZWN0XFxcXElOVEVHUkFURUQgUFJPSkVDVCBUUkFDS0lORyBBTkQgQ09PUkRJTkFUSU9OIEhVQlxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjYXJkXFxcXFtjYXJkSWRdXFxcXGNhcmRsb2dzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NhcmQvW2NhcmRJZF0vY2FyZGxvZ3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&page=%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute.ts&appDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/card/[cardId]/cardlogs/route.ts":
/*!*****************************************************!*\
  !*** ./src/app/api/card/[cardId]/cardlogs/route.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _providers_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/providers/connection */ \"(rsc)/./src/providers/connection.ts\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\n\nconst GET = async (req, { params })=>{\n    try {\n        const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getAuthSession)();\n        if (!session) {\n            return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Unauthorized\", {\n                status: 401\n            });\n        }\n        const audit = await _providers_connection__WEBPACK_IMPORTED_MODULE_1__.prismaDB.audLog.findMany({\n            where: {\n                tableId: params.cardId,\n                tableType: _prisma_client__WEBPACK_IMPORTED_MODULE_2__.TABLE_TYPE.CARD\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json(audit);\n    } catch (error) {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Internat server error\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jYXJkL1tjYXJkSWRdL2NhcmRsb2dzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNNO0FBQ047QUFDRDtBQUVwQyxNQUFNSSxNQUFNLE9BQ2pCQyxLQUNBLEVBQUVDLE1BQU0sRUFBa0M7SUFFMUMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTVAseURBQWNBO1FBRXBDLElBQUksQ0FBQ08sU0FBUztZQUNaLE9BQU8sSUFBSUosa0ZBQVlBLENBQUMsZ0JBQWdCO2dCQUFFSyxRQUFRO1lBQUk7UUFDeEQ7UUFDQSxNQUFNQyxRQUFRLE1BQU1SLDJEQUFRQSxDQUFDUyxNQUFNLENBQUNDLFFBQVEsQ0FBQztZQUMzQ0MsT0FBTztnQkFBRUMsU0FBU1AsT0FBT1EsTUFBTTtnQkFBRUMsV0FBV2Isc0RBQVVBLENBQUNjLElBQUk7WUFBQztZQUM1REMsU0FBUztnQkFBRUMsV0FBVztZQUFPO1FBQy9CO1FBRUEsT0FBT2Ysa0ZBQVlBLENBQUNnQixJQUFJLENBQUNWO0lBQzNCLEVBQUUsT0FBT1csT0FBTztRQUNkLE9BQU8sSUFBSWpCLGtGQUFZQSxDQUFDLHlCQUF5QjtZQUFFSyxRQUFRO1FBQUk7SUFDakU7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSU5URUdSQVRFRCBQUk9KRUNUIFRSQUNLSU5HIEFORCBDT09SRElOQVRJT04gSFVCLy4vc3JjL2FwcC9hcGkvY2FyZC9bY2FyZElkXS9jYXJkbG9ncy9yb3V0ZS50cz8wYTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEF1dGhTZXNzaW9uIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcclxuaW1wb3J0IHsgcHJpc21hREIgfSBmcm9tIFwiQC9wcm92aWRlcnMvY29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBUQUJMRV9UWVBFIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jIChcclxuICByZXE6IFJlcXVlc3QsXHJcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgY2FyZElkOiBzdHJpbmcgfSB9XHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0QXV0aFNlc3Npb24oKTtcclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGF1ZGl0ID0gYXdhaXQgcHJpc21hREIuYXVkTG9nLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgdGFibGVJZDogcGFyYW1zLmNhcmRJZCwgdGFibGVUeXBlOiBUQUJMRV9UWVBFLkNBUkQgfSxcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oYXVkaXQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkludGVybmF0IHNlcnZlciBlcnJvclwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImdldEF1dGhTZXNzaW9uIiwicHJpc21hREIiLCJUQUJMRV9UWVBFIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxIiwicGFyYW1zIiwic2Vzc2lvbiIsInN0YXR1cyIsImF1ZGl0IiwiYXVkTG9nIiwiZmluZE1hbnkiLCJ3aGVyZSIsInRhYmxlSWQiLCJjYXJkSWQiLCJ0YWJsZVR5cGUiLCJDQVJEIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/card/[cardId]/cardlogs/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getAuthSession: () => (/* binding */ getAuthSession)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _providers_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/providers/connection */ \"(rsc)/./src/providers/connection.ts\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_providers_connection__WEBPACK_IMPORTED_MODULE_3__.prismaDB),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ]\n};\nconst getAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNXO0FBQ0g7QUFDSDtBQUUzQyxNQUFNSSxjQUFtQjtJQUM5QkMsU0FBU0gsbUVBQWFBLENBQUNDLDJEQUFRQTtJQUMvQkcsV0FBVztRQUNUTCxzRUFBY0EsQ0FBQztZQUNiTSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztLQUNEO0FBQ0gsRUFBRTtBQUVLLE1BQU1DLGlCQUFpQixJQUFNYiwyREFBZ0JBLENBQUNJLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JTlRFR1JBVEVEIFBST0pFQ1QgVFJBQ0tJTkcgQU5EIENPT1JESU5BVElPTiBIVUIvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgcHJpc21hREIgfSBmcm9tIFwiQC9wcm92aWRlcnMvY29ubmVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBhbnkgPSB7XHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWFEQiksXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQgYXMgc3RyaW5nLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQgYXMgc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoU2Vzc2lvbiA9ICgpID0+IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYURCIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImdldEF1dGhTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/providers/connection.ts":
/*!*************************************!*\
  !*** ./src/providers/connection.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prismaDB: () => (/* binding */ prismaDB)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaDB = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalThis.prisma = prismaDB;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvcHJvdmlkZXJzL2Nvbm5lY3Rpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTXZDLE1BQU1DLFdBQVdDLFdBQVdDLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRztBQUVoRSxJQUFJSSxJQUFxQyxFQUFFO0lBQ3pDRixXQUFXQyxNQUFNLEdBQUdGO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSU5URUdSQVRFRCBQUk9KRUNUIFRSQUNLSU5HIEFORCBDT09SRElOQVRJT04gSFVCLy4vc3JjL3Byb3ZpZGVycy9jb25uZWN0aW9uLnRzPzk1OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hREIgPSBnbG9iYWxUaGlzLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWFEQjtcclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hREIiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/providers/connection.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/@auth","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&page=%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcard%2F%5BcardId%5D%2Fcardlogs%2Froute.ts&appDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cpchan%5COneDrive%5CDesktop%5Cfinal%20year%20project%5CINTEGRATED%20PROJECT%20TRACKING%20AND%20COORDINATION%20HUB&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();