"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}
// findGetParamete  r("ero_ref");
// ?total=[TRANSACTION-TOTAL] &id=[TRANSACTION-ID]&event=[EVENT-ID]";
function setTracking(data) {
  return __awaiter(this, void 0, void 0, function* () {
    const trackingUrl = "http://localhost:8080/";
    const eroRef = findGetParameter("ero_ref");
    const params =
      typeof data === "object"
        ? Object.keys(data)
            .map((key) => `${key}=${data[key]}`)
            .join("&")
        : `data=${data}`;
    const url = `${trackingUrl}?${params}${
      eroRef ? `&ero_ref=${eroRef}` : ""
    }`;
    console.log(url);
    const res = yield fetch(url);
    console.log(res);
  });
}
function eroTracking(data) {
  console.log("Get Started");
  setTracking(data).then(() => console.log("Done"));
}
