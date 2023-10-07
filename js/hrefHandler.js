const url = window.location.href;
const href = url.substring(url.indexOf("#") + 1);
const dailyGrowth = href.substring(
    href.search("dailyGrowth=") === -1 ? 0 :
    href.search("dailyGrowth=") + 12
);
globalThis.dg = dailyGrowth === href ? href :
    dailyGrowth.substring(0, dailyGrowth.search("&") === -1 ?
    dailyGrowth.length : dailyGrowth.search("&"));
const offsetAt1900 = href.substring(
    href.search("offsetAt1900=") === -1 ? 0 :
    href.search("offsetAt1900=") + 14
);
globalThis.oa00 = offsetAt1900 === href ? href :
    offsetAt1900.substring(0, offsetAt1900.search("&") === -1 ?
    offsetAt1900.length : offsetAt1900.search("&"));
const birthDay = href.substring(
    href.search("birthDay=") === -1 ? 0 :
    href.search("birthDay=") + 9
);
globalThis.bd = birthDay === href ? href :
    birthDay.substring(0, birthDay.search("&") === -1 ?
    birthDay.length : birthDay.search("&"));
