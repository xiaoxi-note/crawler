const request = require('superagent');
const cheerio = require('cheerio');
const config  = require('./config');
const event   = new (require('events').EventEmitter)();   //事件实例
const path    = require('path');
const async   = require('async');
const phantom = require('phantom');     //提供一个js的runtime
const mysql = require('mysql');
const util  = require('util');           //Node自身提供的一些方法
const https = require('https');
//const md5Str = require('./md5.js');


const connection = mysql.createConnection(config.db);

connection.connect();


//phantom添加不加载图片的设置
//http://www.oschina.net/translate/web-scraping-with-node-js

//phantomInit构造实例
var phantomInit = function (url, cb1, cb2) {
    var phInstance = null,
        sitePage   = null;
    phantom.create().then(instance => {
        "use strict";
        phInstance = instance;
        return instance.createPage();
    }).then(page => {
        "use strict";
        sitePage = page;
        return page.open(url);
    }).then(status => {
        "use strict";
        sitePage.evaluate(cb1).then(cb2)
        return sitePage.property('content');
    }).then(content => {
        "use strict";
        sitePage.close();   //页面关闭
        phInstance.exit();  //ph进程退出
    });
};

//抓取所有的大区数据
request.get(config.web[0].baseUrl)
    .end((err, res) => {
        "use strict";
        let $          = cheerio.load(res.text, {decodeEntities: false}),
            optionList = $('ul.house-lst li'),
            $$         = function (str) {
                var obj  = document.querySelector(str);
                obj.text = function () {
                    return this.innerText;
                };
                obj.html = function () {
                    return this.innerHTML;
                }
            },
            configItem = {origin_id: 0};

        function hex_md5(d) {
            return binl2hex(core_md5(str2binl(d), d.length * chrsz))
        }

        function b64_md5(d) {
            return binl2b64(core_md5(str2binl(d), d.length * chrsz))
        }

        function str_md5(d) {
            return binl2str(core_md5(str2binl(d), d.length * chrsz))
        }

        function hex_hmac_md5(d, r) {
            return binl2hex(core_hmac_md5(d, r))
        }

        function b64_hmac_md5(d, r) {
            return binl2b64(core_hmac_md5(d, r))
        }

        function str_hmac_md5(d, r) {
            return binl2str(core_hmac_md5(d, r))
        }

        function md5_vm_test() {
            return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
        }

        function core_md5(d, r) {
            d[r >> 5] |= 128 << r % 32, d[(r + 64 >>> 9 << 4) + 14] = r;
            for (var _ = 1732584193, m = -271733879, n = -1732584194, h = 271733878, f = 0; f < d.length; f += 16) {
                var t = _, i = m, c = n, e = h;
                _ = md5_ff(_, m, n, h, d[f + 0], 7, -680876936), h = md5_ff(h, _, m, n, d[f + 1], 12, -389564586), n = md5_ff(n, h, _, m, d[f + 2], 17, 606105819), m = md5_ff(m, n, h, _, d[f + 3], 22, -1044525330), _ = md5_ff(_, m, n, h, d[f + 4], 7, -176418897), h = md5_ff(h, _, m, n, d[f + 5], 12, 1200080426), n = md5_ff(n, h, _, m, d[f + 6], 17, -1473231341), m = md5_ff(m, n, h, _, d[f + 7], 22, -45705983), _ = md5_ff(_, m, n, h, d[f + 8], 7, 1770035416), h = md5_ff(h, _, m, n, d[f + 9], 12, -1958414417), n = md5_ff(n, h, _, m, d[f + 10], 17, -42063), m = md5_ff(m, n, h, _, d[f + 11], 22, -1990404162), _ = md5_ff(_, m, n, h, d[f + 12], 7, 1804603682), h = md5_ff(h, _, m, n, d[f + 13], 12, -40341101), n = md5_ff(n, h, _, m, d[f + 14], 17, -1502002290), m = md5_ff(m, n, h, _, d[f + 15], 22, 1236535329), _ = md5_gg(_, m, n, h, d[f + 1], 5, -165796510), h = md5_gg(h, _, m, n, d[f + 6], 9, -1069501632), n = md5_gg(n, h, _, m, d[f + 11], 14, 643717713), m = md5_gg(m, n, h, _, d[f + 0], 20, -373897302), _ = md5_gg(_, m, n, h, d[f + 5], 5, -701558691), h = md5_gg(h, _, m, n, d[f + 10], 9, 38016083), n = md5_gg(n, h, _, m, d[f + 15], 14, -660478335), m = md5_gg(m, n, h, _, d[f + 4], 20, -405537848), _ = md5_gg(_, m, n, h, d[f + 9], 5, 568446438), h = md5_gg(h, _, m, n, d[f + 14], 9, -1019803690), n = md5_gg(n, h, _, m, d[f + 3], 14, -187363961), m = md5_gg(m, n, h, _, d[f + 8], 20, 1163531501), _ = md5_gg(_, m, n, h, d[f + 13], 5, -1444681467), h = md5_gg(h, _, m, n, d[f + 2], 9, -51403784), n = md5_gg(n, h, _, m, d[f + 7], 14, 1735328473), m = md5_gg(m, n, h, _, d[f + 12], 20, -1926607734), _ = md5_hh(_, m, n, h, d[f + 5], 4, -378558), h = md5_hh(h, _, m, n, d[f + 8], 11, -2022574463), n = md5_hh(n, h, _, m, d[f + 11], 16, 1839030562), m = md5_hh(m, n, h, _, d[f + 14], 23, -35309556), _ = md5_hh(_, m, n, h, d[f + 1], 4, -1530992060), h = md5_hh(h, _, m, n, d[f + 4], 11, 1272893353), n = md5_hh(n, h, _, m, d[f + 7], 16, -155497632), m = md5_hh(m, n, h, _, d[f + 10], 23, -1094730640), _ = md5_hh(_, m, n, h, d[f + 13], 4, 681279174), h = md5_hh(h, _, m, n, d[f + 0], 11, -358537222), n = md5_hh(n, h, _, m, d[f + 3], 16, -722521979), m = md5_hh(m, n, h, _, d[f + 6], 23, 76029189), _ = md5_hh(_, m, n, h, d[f + 9], 4, -640364487), h = md5_hh(h, _, m, n, d[f + 12], 11, -421815835), n = md5_hh(n, h, _, m, d[f + 15], 16, 530742520), m = md5_hh(m, n, h, _, d[f + 2], 23, -995338651), _ = md5_ii(_, m, n, h, d[f + 0], 6, -198630844), h = md5_ii(h, _, m, n, d[f + 7], 10, 1126891415), n = md5_ii(n, h, _, m, d[f + 14], 15, -1416354905), m = md5_ii(m, n, h, _, d[f + 5], 21, -57434055), _ = md5_ii(_, m, n, h, d[f + 12], 6, 1700485571), h = md5_ii(h, _, m, n, d[f + 3], 10, -1894986606), n = md5_ii(n, h, _, m, d[f + 10], 15, -1051523), m = md5_ii(m, n, h, _, d[f + 1], 21, -2054922799), _ = md5_ii(_, m, n, h, d[f + 8], 6, 1873313359), h = md5_ii(h, _, m, n, d[f + 15], 10, -30611744), n = md5_ii(n, h, _, m, d[f + 6], 15, -1560198380), m = md5_ii(m, n, h, _, d[f + 13], 21, 1309151649), _ = md5_ii(_, m, n, h, d[f + 4], 6, -145523070), h = md5_ii(h, _, m, n, d[f + 11], 10, -1120210379), n = md5_ii(n, h, _, m, d[f + 2], 15, 718787259), m = md5_ii(m, n, h, _, d[f + 9], 21, -343485551), _ = safe_add(_, t), m = safe_add(m, i), n = safe_add(n, c), h = safe_add(h, e)
            }
            return Array(_, m, n, h)
        }

        function md5_cmn(d, r, _, m, n, h) {
            return safe_add(bit_rol(safe_add(safe_add(r, d), safe_add(m, h)), n), _)
        }

        function md5_ff(d, r, _, m, n, h, f) {
            return md5_cmn(r & _ | ~r & m, d, r, n, h, f)
        }

        function md5_gg(d, r, _, m, n, h, f) {
            return md5_cmn(r & m | _ & ~m, d, r, n, h, f)
        }

        function md5_hh(d, r, _, m, n, h, f) {
            return md5_cmn(r ^ _ ^ m, d, r, n, h, f)
        }

        function md5_ii(d, r, _, m, n, h, f) {
            return md5_cmn(_ ^ (r | ~m), d, r, n, h, f)
        }

        function core_hmac_md5(d, r) {
            var _ = str2binl(d);
            _.length > 16 && (_ = core_md5(_, d.length * chrsz));
            for (var m = Array(16), n = Array(16), h = 0; 16 > h; h++)m[h] = 909522486 ^ _[h], n[h] = 1549556828 ^ _[h];
            var f = core_md5(m.concat(str2binl(r)), 512 + r.length * chrsz);
            return core_md5(n.concat(f), 640)
        }

        function safe_add(d, r) {
            var _ = (65535 & d) + (65535 & r), m = (d >> 16) + (r >> 16) + (_ >> 16);
            return m << 16 | 65535 & _
        }

        function bit_rol(d, r) {
            return d << r | d >>> 32 - r
        }

        function str2binl(d) {
            for (var r = Array(), _ = (1 << chrsz) - 1, m = 0; m < d.length * chrsz; m += chrsz)r[m >> 5] |= (d.charCodeAt(m / chrsz) & _) << m % 32;
            return r
        }

        function binl2str(d) {
            for (var r = "", _ = (1 << chrsz) - 1, m = 0; m < 32 * d.length; m += chrsz)r += String.fromCharCode(d[m >> 5] >>> m % 32 & _);
            return r
        }

        function binl2hex(d) {
            for (var r = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", _ = "", m = 0; m < 4 * d.length; m++)_ += r.charAt(d[m >> 2] >> m % 4 * 8 + 4 & 15) + r.charAt(d[m >> 2] >> m % 4 * 8 & 15);
            return _
        }

        function binl2b64(d) {
            for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _ = "", m = 0; m < 4 * d.length; m += 3)for (var n = (d[m >> 2] >> 8 * (m % 4) & 255) << 16 | (d[m + 1 >> 2] >> 8 * ((m + 1) % 4) & 255) << 8 | d[m + 2 >> 2] >> 8 * ((m + 2) % 4) & 255, h = 0; 4 > h; h++)_ += 8 * m + 6 * h > 32 * d.length ? b64pad : r.charAt(n >> 6 * (3 - h) & 63);
            return _
        }

        var hexcase = 0, b64pad = "", chrsz = 8;

        //async.mapSeries(optionList, function (itemObj) {
        [].forEach.call(optionList, function (itemObj) {
            var data    = {
                    icon_img: $('.pic-panel img', itemObj).attr('data-img'),
                },
                infoObj = $('.info-panel', itemObj);

            data.title = $('a', infoObj).html();
            var urlStr = $('.info-panel h2 a', itemObj).attr('href');

            data.origin     = configItem.origin_id;
            data.price      = +($('.col-3 span.num', itemObj).text());
            data.updateTime = $('.col-3 span.num', itemObj).text();

            data.md5 = hex_md5(urlStr);
            data.url = urlStr;
            connection.query('insert into house (origin_id,title,md5,price,description,icon_img)' +
                ' values (?,?,?,?,?,?)',
                [data.origin, data.title, data.md5, data.price, data.title, data.icon_img]
                , function (err, result) {
                    if (err) {
                    }
                    console.log('insert pageDataId : ', result.insertId);

                    event.emit('getHouseInfo', data.url, result.insertId);

                });
        })

    });

event.addListener('getHouseInfo', function (url, houseId) {
    "use strict";
    request.get(url).end((err, res)=> {

            String.prototype.trim = function () {
                return this.replace(/(^\s*)|(\s*$)/g, "");
            }
            let $                 = cheerio.load(res.text, {decodeEntities: false});
            const baiduAppKey     = 'f963u7fuPFOs3tBUopTNvI9uRTdwzF3u';
            let attrRegion        = $('.zf-room');
            let pList             = attrRegion.children();
            let houseData         = {
                house_id:     houseId,
                area_measure: $(pList[0]).text().split('：')[1].trim(),
                layout:       $(pList[1]).text().split('：')[1].trim(),
                floor:        $(pList[2]).text().split('：')[1].trim(),
                direction:    $(pList[3]).text().split('：')[1].trim(),
                metro:        $(pList[5]).text().split('：')[1].trim(),
                community:    $(pList[6]).text().split('：')[1].trim().split('\n')[0],
                public_date:  $(pList[8]).text().split('：')[1].trim()
            }

            let contentList        = $('#introduction .content li').children();
            houseData.lease_type   = $(contentList[0]).text().split('：')[1].trim();
            houseData.pay_type     = $(contentList[1]).text().split('：')[1].trim();
            houseData.heating_type = $(contentList[3]).text().split('：')[1].trim();

            var urlArray = [];

            urlArray.push('https://api.map.baidu.com/geocoder/v2/?address=');
            urlArray.push(encodeURIComponent(houseData.community));
            urlArray.push('&output=json&ak=');
            urlArray.push(baiduAppKey);

            https.get(urlArray.join(''), function (res) {
                console.log(res.statusCode);

                res.on('data', function (resData) {

                    var data      = JSON.parse(resData);
                    houseData.lat = data.result.location.lat.toString();
                    houseData.lng = data.result.location.lng.toString();

                    connection.query('insert into house_attr (house_id, area_measure, layout, floor, direction, metro, community, lease_type, heating_type, pay_type, state, public_date , lat, lng)' +
                        ' values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                        [houseData.house_id, houseData.area_measure, houseData.layout,
                            houseData.floor, houseData.direction, houseData.metro,
                            houseData.community, houseData.lease_type, houseData.heating_type,
                            houseData.pay_type, houseData.state, houseData.public_date,
                            houseData.lat, houseData.lng],
                        function (err, result) {
                            if (err) return console.log(err);

                            console.log('insert page attr data', result.insertId);

                        });
                })
            }).on('error', function (e) {
                console.log(e);
            })

        //图片入库
        var imgList = $('li .thumbnail').children();

        [].forEach.call(imgList, function (imgObj) {

        })

        }
    )
})


return;

//抓取大区对应的小区数据
event.addListener('bigArea', function (areaList) {
    areaList = areaList || [];
    var url  = config.web[0].rootUrl;

    areaList.forEach(function (item, index) {
        item.url = url + item.url
    });

    //控制并发抓取小区数据
    async.mapSeries(areaList, function (item, cb) {
        "use strict";

        item.locationList = [];

        request.get(item.url)
            .end((err, res) => {
                let $          = cheerio.load(res.text),
                    optionList = $('[data-index=0] .sub-option-list a');

                for (let key in optionList) {
                    if (typeof Number(key) === 'number' && Number(key)) {
                        let area = optionList[key],
                            _obj = {
                                name: '',
                                url:  ''
                            };

                        if (area.children) {
                            _obj.name = area.children[0].data;
                            _obj.url  = url + area.attribs.href;
                            item.locationList.push(_obj);
                        }
                    }
                }
                cb(null, item);
            });
    }, function (err, results) {
        "use strict";
        event.emit('smallArea', results);
    });
});




