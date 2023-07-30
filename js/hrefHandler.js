const url = window.location.href;
const href = url.substring(url.indexOf("#") + 1);
const dailyGrowth = href.substring(
    href.search("dailyGrowth=") === -1 ? 0 :
    href.search("dailyGrowth=") + 12
);
globalThis.dg = dailyGrowth === href ? href :
    dailyGrowth.substring(0, dailyGrowth.search("&") === -1 ?
    dailyGrowth.length : dailyGrowth.search("&"));
const absEursAt1970 = href.substring(
    href.search("absEursAt1970=") === -1 ? 0 :
    href.search("absEursAt1970=") + 14
);
globalThis.ae70 = absEursAt1970 === href ? href :
    absEursAt1970.substring(0, absEursAt1970.search("&") === -1 ?
    absEursAt1970.length : absEursAt1970.search("&"));
const birthDay = href.substring(
    href.search("birthDay=") === -1 ? 0 :
    href.search("birthDay=") + 9
);
globalThis.bd = birthDay === href ? href :
    birthDay.substring(0, birthDay.search("&") === -1 ?
    birthDay.length : birthDay.search("&"));
