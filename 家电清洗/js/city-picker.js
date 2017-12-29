// jshint ignore: start
+function($){

$.rawCitiesData = [
  {
    "name":"北京",
    "code":"110000",
    "sub": [
      {
        "name": "北京市",
        "code": "110000",
        "sub":[
            {
              "name":"东城区",
              "code":"110101"
            },
            {
              "name":"西城区",
              "code":"110102"
            },
            {
              "name":"朝阳区",
              "code":"110105"
            },
            {
              "name":"丰台区",
              "code":"110106"
            },
            {
              "name":"石景山区",
              "code":"110107"
            },
            {
              "name":"海淀区",
              "code":"110108"
            },
            {
              "name":"回龙观（昌平区）",
              "code":"110109"
            },
            {
              "name":"房山区",
              "code":"110111"
            },
            {
              "name":"通州区",
              "code":"110112"
            },
            {
              "name":"顺义区",
              "code":"110113"
            },
            {
              "name":"昌平区",
              "code":"110114"
            },
            {
              "name":"大兴区",
              "code":"110115"
            },
            {
              "name":"天通苑（昌平区）",
              "code":"110116"
            },
            {
              "name":"亦庄（大兴区）",
              "code":"110117"
            },
            {
              "name":"良乡（房山区）",
              "code":"110228"
            },
            {
              "name":"黄村（大兴区）",
              "code":"110229"
            }
        ]
      }
    ]
  },
  {
    "name":"天津",
    "code":"120000",
    "sub": [
      {
        "name": "天津市",
        "code": "120000",
        "sub":[
            {
              "name":"和平区",
              "code":"120101"
            },
            {
              "name":"河东区",
              "code":"120102"
            },
            {
              "name":"河西区",
              "code":"120103"
            },
            {
              "name":"南开区",
              "code":"120104"
            },
            {
              "name":"河北区",
              "code":"120105"
            },
            {
              "name":"红桥区",
              "code":"120106"
            },
            {
              "name":"东丽区",
              "code":"120110"
            },
            {
              "name":"西青区",
              "code":"120111"
            },
            {
              "name":"津南区",
              "code":"120112"
            },
            {
              "name":"北辰区",
              "code":"120113"
            },
            
            {
              "name":"环内（东丽区）",
              "code":"120223"
            },
            {
              "name":"环内（北辰区）",
              "code":"120225"
            }
        ]
      }
    ]
  },
  {
    "name":"上海",
    "code":"310000",
    "sub": [
      {
        "name":"上海市",
        "code": "310000",
        "sub":[
            {
              "name":"黄浦区",
              "code":"310101"
            },
            {
              "name":"徐汇区",
              "code":"310104"
            },
            {
              "name":"长宁区",
              "code":"310105"
            },
            {
              "name":"静安区",
              "code":"310106"
            },
            {
              "name":"普陀区",
              "code":"310107"
            },
            {
              "name":"闸北区",
              "code":"310108"
            },
            {
              "name":"虹口区",
              "code":"310109"
            },
            {
              "name":"杨浦区",
              "code":"310110"
            },
            {
              "name":"闵行区",
              "code":"310112"
            },
            {
              "name":"宝山区",
              "code":"310113"
            },
            {
              "name":"嘉定区",
              "code":"310114"
            },
            {
              "name":"浦东新区",
              "code":"310115"
            },
            {
              "name":"金山区",
              "code":"310116"
            },
            {
              "name":"松江区",
              "code":"310117"
            },
            {
              "name":"青浦区",
              "code":"310118"
            },
            {
              "name":"奉贤区",
              "code":"310120"
            },
            {
              "name":"崇明县",
              "code":"310230"
            }
        ]
      }
    ]
  },
  {
    "name":"浙江省",
    "code":"330000",
    "sub":[
      {
        "name":"杭州市",
        "code":"330100",
        "sub":[
          {
            "name":"市辖区",
            "code":"330101"
          },
          {
            "name":"上城区",
            "code":"330102"
          },
          {
            "name":"下城区",
            "code":"330103"
          },
          {
            "name":"江干区",
            "code":"330104"
          },
          {
            "name":"拱墅区",
            "code":"330105"
          },
          {
            "name":"西湖区",
            "code":"330106"
          },
          {
            "name":"滨江区",
            "code":"330108"
          },
          {
            "name":"萧山区",
            "code":"330109"
          },
          {
            "name":"余杭区",
            "code":"330110"
          },
          {
            "name":"富阳区",
            "code":"330111"
          },
          {
            "name":"桐庐县",
            "code":"330122"
          },
          {
            "name":"淳安县",
            "code":"330127"
          },
          {
            "name":"建德市",
            "code":"330182"
          },
          {
            "name":"临安市",
            "code":"330185"
          }
        ]
      }
    ]
  },
  {
    "name":"江苏省",
    "code":"320000",
    "sub":[
      {
        "name":"南京市",
        "code":"320100",
        "sub":[
          {
            "name":"市辖区",
            "code":"320101"
          },
          {
            "name":"玄武区",
            "code":"320102"
          },
          {
            "name":"秦淮区",
            "code":"320104"
          },
          {
            "name":"建邺区",
            "code":"320105"
          },
          {
            "name":"鼓楼区",
            "code":"320106"
          },
          {
            "name":"浦口区",
            "code":"320111"
          },
          {
            "name":"栖霞区",
            "code":"320113"
          },
          {
            "name":"雨花台区",
            "code":"320114"
          },
          {
            "name":"江宁区",
            "code":"320115"
          },
          {
            "name":"六合区",
            "code":"320116"
          },
          {
            "name":"溧水区",
            "code":"320117"
          },
          {
            "name":"高淳区",
            "code":"320118"
          }
        ]
      }
    ]
  },
  {
    "name":"湖北省",
    "code":"420000",
    "sub":[
      {
        "name":"武汉市",
        "code":"420100",
        "sub":[
          {
            "name":"市辖区",
            "code":"420101"
          },
          {
            "name":"江岸区",
            "code":"420102"
          },
          {
            "name":"江汉区",
            "code":"420103"
          },
          {
            "name":"硚口区",
            "code":"420104"
          },
          {
            "name":"汉阳区",
            "code":"420105"
          },
          {
            "name":"武昌区",
            "code":"420106"
          },
          {
            "name":"青山区",
            "code":"420107"
          },
          {
            "name":"洪山区",
            "code":"420111"
          },
          {
            "name":"东西湖区",
            "code":"420112"
          },
          {
            "name":"汉南区",
            "code":"420113"
          },
          {
            "name":"蔡甸区",
            "code":"420114"
          },
          {
            "name":"江夏区",
            "code":"420115"
          },
          {
            "name":"黄陂区",
            "code":"420116"
          },
          {
            "name":"新洲区",
            "code":"420117"
          }
        ]
      }
    ]
  },
  {
    "name":"广东省",
    "code":"440000",
    "sub":[
      {
        "name":"广州市",
        "code":"440100",
        "sub":[
          {
            "name":"市辖区",
            "code":"440101"
          },
          {
            "name":"荔湾区",
            "code":"440103"
          },
          {
            "name":"越秀区",
            "code":"440104"
          },
          {
            "name":"海珠区",
            "code":"440105"
          },
          {
            "name":"天河区",
            "code":"440106"
          },
          {
            "name":"白云区",
            "code":"440111"
          },
          {
            "name":"黄埔区",
            "code":"440112"
          },
          {
            "name":"番禺区",
            "code":"440113"
          },
          {
            "name":"花都区",
            "code":"440114"
          },
          {
            "name":"南沙区",
            "code":"440115"
          },
          {
            "name":"从化区",
            "code":"440117"
          },
          {
            "name":"增城区",
            "code":"440118"
          }
        ]
      },
      {
        "name":"韶关市",
        "code":"440200",
        "sub":[
          {
            "name":"市辖区",
            "code":"440201"
          },
          {
            "name":"武江区",
            "code":"440203"
          },
          {
            "name":"浈江区",
            "code":"440204"
          },
          {
            "name":"曲江区",
            "code":"440205"
          },
          {
            "name":"始兴县",
            "code":"440222"
          },
          {
            "name":"仁化县",
            "code":"440224"
          },
          {
            "name":"翁源县",
            "code":"440229"
          },
          {
            "name":"乳源瑶族自治县",
            "code":"440232"
          },
          {
            "name":"新丰县",
            "code":"440233"
          },
          {
            "name":"乐昌市",
            "code":"440281"
          },
          {
            "name":"南雄市",
            "code":"440282"
          }
        ]
      },
      {
        "name":"深圳市",
        "code":"440300",
        "sub":[
          {
            "name":"市辖区",
            "code":"440301"
          },
          {
            "name":"罗湖区",
            "code":"440303"
          },
          {
            "name":"福田区",
            "code":"440304"
          },
          {
            "name":"南山区",
            "code":"440305"
          },
          {
            "name":"宝安区",
            "code":"440306"
          },
          {
            "name":"龙岗区",
            "code":"440307"
          },
          {
            "name":"盐田区",
            "code":"440308"
          }
        ]
      },
      {
        "name":"珠海市",
        "code":"440400",
        "sub":[
          {
            "name":"市辖区",
            "code":"440401"
          },
          {
            "name":"香洲区",
            "code":"440402"
          },
          {
            "name":"斗门区",
            "code":"440403"
          },
          {
            "name":"金湾区",
            "code":"440404"
          }
        ]
      },
      {
        "name":"汕头市",
        "code":"440500",
        "sub":[
          {
            "name":"市辖区",
            "code":"440501"
          },
          {
            "name":"龙湖区",
            "code":"440507"
          },
          {
            "name":"金平区",
            "code":"440511"
          },
          {
            "name":"濠江区",
            "code":"440512"
          },
          {
            "name":"潮阳区",
            "code":"440513"
          },
          {
            "name":"潮南区",
            "code":"440514"
          },
          {
            "name":"澄海区",
            "code":"440515"
          },
          {
            "name":"南澳县",
            "code":"440523"
          }
        ]
      },
      {
        "name":"佛山市",
        "code":"440600",
        "sub":[
          {
            "name":"市辖区",
            "code":"440601"
          },
          {
            "name":"禅城区",
            "code":"440604"
          },
          {
            "name":"南海区",
            "code":"440605"
          },
          {
            "name":"顺德区",
            "code":"440606"
          },
          {
            "name":"三水区",
            "code":"440607"
          },
          {
            "name":"高明区",
            "code":"440608"
          }
        ]
      },
      {
        "name":"江门市",
        "code":"440700",
        "sub":[
          {
            "name":"市辖区",
            "code":"440701"
          },
          {
            "name":"蓬江区",
            "code":"440703"
          },
          {
            "name":"江海区",
            "code":"440704"
          },
          {
            "name":"新会区",
            "code":"440705"
          },
          {
            "name":"台山市",
            "code":"440781"
          },
          {
            "name":"开平市",
            "code":"440783"
          },
          {
            "name":"鹤山市",
            "code":"440784"
          },
          {
            "name":"恩平市",
            "code":"440785"
          }
        ]
      },
      {
        "name":"湛江市",
        "code":"440800",
        "sub":[
          {
            "name":"市辖区",
            "code":"440801"
          },
          {
            "name":"赤坎区",
            "code":"440802"
          },
          {
            "name":"霞山区",
            "code":"440803"
          },
          {
            "name":"坡头区",
            "code":"440804"
          },
          {
            "name":"麻章区",
            "code":"440811"
          },
          {
            "name":"遂溪县",
            "code":"440823"
          },
          {
            "name":"徐闻县",
            "code":"440825"
          },
          {
            "name":"廉江市",
            "code":"440881"
          },
          {
            "name":"雷州市",
            "code":"440882"
          },
          {
            "name":"吴川市",
            "code":"440883"
          }
        ]
      },
      {
        "name":"茂名市",
        "code":"440900",
        "sub":[
          {
            "name":"市辖区",
            "code":"440901"
          },
          {
            "name":"茂南区",
            "code":"440902"
          },
          {
            "name":"电白区",
            "code":"440904"
          },
          {
            "name":"高州市",
            "code":"440981"
          },
          {
            "name":"化州市",
            "code":"440982"
          },
          {
            "name":"信宜市",
            "code":"440983"
          }
        ]
      },
      {
        "name":"肇庆市",
        "code":"441200",
        "sub":[
          {
            "name":"市辖区",
            "code":"441201"
          },
          {
            "name":"端州区",
            "code":"441202"
          },
          {
            "name":"鼎湖区",
            "code":"441203"
          },
          {
            "name":"广宁县",
            "code":"441223"
          },
          {
            "name":"怀集县",
            "code":"441224"
          },
          {
            "name":"封开县",
            "code":"441225"
          },
          {
            "name":"德庆县",
            "code":"441226"
          },
          {
            "name":"高要市",
            "code":"441283"
          },
          {
            "name":"四会市",
            "code":"441284"
          }
        ]
      },
      {
        "name":"惠州市",
        "code":"441300",
        "sub":[
          {
            "name":"市辖区",
            "code":"441301"
          },
          {
            "name":"惠城区",
            "code":"441302"
          },
          {
            "name":"惠阳区",
            "code":"441303"
          },
          {
            "name":"博罗县",
            "code":"441322"
          },
          {
            "name":"惠东县",
            "code":"441323"
          },
          {
            "name":"龙门县",
            "code":"441324"
          }
        ]
      },
      {
        "name":"梅州市",
        "code":"441400",
        "sub":[
          {
            "name":"市辖区",
            "code":"441401"
          },
          {
            "name":"梅江区",
            "code":"441402"
          },
          {
            "name":"梅县区",
            "code":"441403"
          },
          {
            "name":"大埔县",
            "code":"441422"
          },
          {
            "name":"丰顺县",
            "code":"441423"
          },
          {
            "name":"五华县",
            "code":"441424"
          },
          {
            "name":"平远县",
            "code":"441426"
          },
          {
            "name":"蕉岭县",
            "code":"441427"
          },
          {
            "name":"兴宁市",
            "code":"441481"
          }
        ]
      },
      {
        "name":"汕尾市",
        "code":"441500",
        "sub":[
          {
            "name":"市辖区",
            "code":"441501"
          },
          {
            "name":"城区",
            "code":"441502"
          },
          {
            "name":"海丰县",
            "code":"441521"
          },
          {
            "name":"陆河县",
            "code":"441523"
          },
          {
            "name":"陆丰市",
            "code":"441581"
          }
        ]
      },
      {
        "name":"河源市",
        "code":"441600",
        "sub":[
          {
            "name":"市辖区",
            "code":"441601"
          },
          {
            "name":"源城区",
            "code":"441602"
          },
          {
            "name":"紫金县",
            "code":"441621"
          },
          {
            "name":"龙川县",
            "code":"441622"
          },
          {
            "name":"连平县",
            "code":"441623"
          },
          {
            "name":"和平县",
            "code":"441624"
          },
          {
            "name":"东源县",
            "code":"441625"
          }
        ]
      },
      {
        "name":"阳江市",
        "code":"441700",
        "sub":[
          {
            "name":"市辖区",
            "code":"441701"
          },
          {
            "name":"江城区",
            "code":"441702"
          },
          {
            "name":"阳东区",
            "code":"441704"
          },
          {
            "name":"阳西县",
            "code":"441721"
          },
          {
            "name":"阳春市",
            "code":"441781"
          }
        ]
      },
      {
        "name":"清远市",
        "code":"441800",
        "sub":[
          {
            "name":"市辖区",
            "code":"441801"
          },
          {
            "name":"清城区",
            "code":"441802"
          },
          {
            "name":"清新区",
            "code":"441803"
          },
          {
            "name":"佛冈县",
            "code":"441821"
          },
          {
            "name":"阳山县",
            "code":"441823"
          },
          {
            "name":"连山壮族瑶族自治县",
            "code":"441825"
          },
          {
            "name":"连南瑶族自治县",
            "code":"441826"
          },
          {
            "name":"英德市",
            "code":"441881"
          },
          {
            "name":"连州市",
            "code":"441882"
          }
        ]
      },
      {
        "name":"东莞市",
        "code":"441900",
        "sub":[

        ]
      },
      {
        "name":"中山市",
        "code":"442000",
        "sub":[

        ]
      },
      {
        "name":"潮州市",
        "code":"445100",
        "sub":[
          {
            "name":"市辖区",
            "code":"445101"
          },
          {
            "name":"湘桥区",
            "code":"445102"
          },
          {
            "name":"潮安区",
            "code":"445103"
          },
          {
            "name":"饶平县",
            "code":"445122"
          }
        ]
      },
      {
        "name":"揭阳市",
        "code":"445200",
        "sub":[
          {
            "name":"市辖区",
            "code":"445201"
          },
          {
            "name":"榕城区",
            "code":"445202"
          },
          {
            "name":"揭东区",
            "code":"445203"
          },
          {
            "name":"揭西县",
            "code":"445222"
          },
          {
            "name":"惠来县",
            "code":"445224"
          },
          {
            "name":"普宁市",
            "code":"445281"
          }
        ]
      },
      {
        "name":"云浮市",
        "code":"445300",
        "sub":[
          {
            "name":"市辖区",
            "code":"445301"
          },
          {
            "name":"云城区",
            "code":"445302"
          },
          {
            "name":"云安区",
            "code":"445303"
          },
          {
            "name":"新兴县",
            "code":"445321"
          },
          {
            "name":"郁南县",
            "code":"445322"
          },
          {
            "name":"罗定市",
            "code":"445381"
          }
        ]
      }
    ]
  },
  {
    "name":"广东省",
    "code":"440000",
    "sub":[
      {
        "name":"深圳市",
        "code":"440300",
        "sub":[
          {
            "name":"市辖区",
            "code":"440301"
          },
          {
            "name":"罗湖区",
            "code":"440303"
          },
          {
            "name":"福田区",
            "code":"440304"
          },
          {
            "name":"南山区",
            "code":"440305"
          },
          {
            "name":"宝安区",
            "code":"440306"
          },
          {
            "name":"龙岗区",
            "code":"440307"
          },
          {
            "name":"盐田区",
            "code":"440308"
          }
        ]
      }
    ]
  }
 
];
}($);
// jshint ignore: end

/* global $:true */
/* jshint unused:false*/

+ function($) {
  "use strict";

  var defaults;
  var raw = $.rawCitiesData;

  var format = function(data) {
    var result = [];
    for(var i=0;i<data.length;i++) {
      var d = data[i];
      if(/^请选择|市辖区/.test(d.name)) continue;
      result.push(d);
    }
    if(result.length) return result;
    return [];
  };

  var sub = function(data) {
    if(!data.sub) return [{ name: '', code: data.code }];  // 有可能某些县级市没有区
    return format(data.sub);
  };

  var getCities = function(d) {
    for(var i=0;i< raw.length;i++) {
      if(raw[i].code === d || raw[i].name === d) return sub(raw[i]);
    }
    return [];
  };

  var getDistricts = function(p, c) {
    for(var i=0;i< raw.length;i++) {
      if(raw[i].code === p || raw[i].name === p) {
        for(var j=0;j< raw[i].sub.length;j++) {
          if(raw[i].sub[j].code === c || raw[i].sub[j].name === c) {
            return sub(raw[i].sub[j]);
          }
        }
      }
    }
  };

  var parseInitValue = function (val) {
    var p = raw[0], c, d;
    var tokens = val.split(' ');
    raw.map(function (t) {
      if (t.name === tokens[0]) p = t;
    });

    p.sub.map(function (t) {
      if (t.name === tokens[1]) c = t;
    })

    if (tokens[2]) {
      c.sub.map(function (t) {
        if (t.name === tokens[2]) d = t;
      })
    }

    if (d) return [p.code, c.code, d.code];
    return [p.code, c.code];
  }

  $.fn.cityPicker = function(params) {
    params = $.extend({}, defaults, params);
    return this.each(function() {
      var self = this;
      
      var provincesName = raw.map(function(d) {
        return d.name;
      });
      var provincesCode = raw.map(function(d) {
        return d.code;
      });
      var initCities = sub(raw[0]);
      var initCitiesName = initCities.map(function (c) {
        return c.name;
      });
      var initCitiesCode = initCities.map(function (c) {
        return c.code;
      });
      var initDistricts = sub(raw[0].sub[0]);

      var initDistrictsName = initDistricts.map(function (c) {
        return c.name;
      });
      var initDistrictsCode = initDistricts.map(function (c) {
        return c.code;
      });

      var currentProvince = provincesName[0];
      var currentCity = initCitiesName[0];
      var currentDistrict = initDistrictsName[0];

      var cols = [
          {
            displayValues: provincesName,
            values: provincesCode,
            cssClass: "col-province"
          },
          {
            displayValues: initCitiesName,
            values: initCitiesCode,
            cssClass: "col-city"
          }
        ];

        if(params.showDistrict) cols.push({
          values: initDistrictsCode,
          displayValues: initDistrictsName,
          cssClass: "col-district"
        });

      var config = {

        cssClass: "city-picker",
        rotateEffect: false,  //为了性能
        formatValue: function (p, values, displayValues) {
          return displayValues.join(' ');
        },
        onChange: function (picker, values, displayValues) {
          var newProvince = picker.cols[0].displayValue;
          var newCity;
          if(newProvince !== currentProvince) {
            var newCities = getCities(newProvince);
            newCity = newCities[0].name;
            var newDistricts = getDistricts(newProvince, newCity);
            picker.cols[1].replaceValues(newCities.map(function (c) {
              return c.code;
            }), newCities.map(function (c) {
              return c.name;
            }));
            if(params.showDistrict) picker.cols[2].replaceValues(newDistricts.map(function (d) {
              return d.code;
            }), newDistricts.map(function (d) {
              return d.name;
            }));
            currentProvince = newProvince;
            currentCity = newCity;
            picker.updateValue();
            return false; // 因为数据未更新完，所以这里不进行后序的值的处理
          } else {
            if(params.showDistrict) {
              newCity = picker.cols[1].displayValue;
              if(newCity !== currentCity) {
                var districts = getDistricts(newProvince, newCity);
                picker.cols[2].replaceValues(districts.map(function (d) {
                  return d.code;
                }), districts.map(function (d) {
                  return d.name;
                }));
                currentCity = newCity;
                picker.updateValue();
                return false; // 因为数据未更新完，所以这里不进行后序的值的处理
              }
            }
          }
          //如果最后一列是空的，那么取倒数第二列
          var len = (values[values.length-1] ? values.length - 1 : values.length - 2)
          $(self).attr('data-code', values[len]);
          $(self).attr('data-codes', values.join(','));
          if (params.onChange) {
            params.onChange.call(self, picker, values, displayValues);
          }
        },

        cols: cols
      };

      if(!this) return;
      var p = $.extend({}, params, config);
      //计算value
      var val = $(this).val();
      if (!val) val = '北京 北京市 东城区';
      currentProvince = val.split(" ")[0];
      currentCity = val.split(" ")[1];
      currentDistrict= val.split(" ")[2];
      if(val) {
        p.value = parseInitValue(val);
        if(p.value[0]) {
          var cities = getCities(p.value[0]);
          p.cols[1].values = cities.map(function (c) {
            return c.code;
          });
          p.cols[1].displayValues = cities.map(function (c) {
            return c.name;
          });
        }

        if(p.value[1]) {
          if (params.showDistrict) {
            var dis = getDistricts(p.value[0], p.value[1]);
            p.cols[2].values = dis.map(function (d) {
              return d.code;
            });
            p.cols[2].displayValues = dis.map(function (d) {
              return d.name;
            });
          }
        } else {
          if (params.showDistrict) {
            var dis = getDistricts(p.value[0], p.cols[1].values[0]);
            p.cols[2].values = dis.map(function (d) {
              return d.code;
            });
            p.cols[2].displayValues = dis.map(function (d) {
              return d.name;
            });
          }
        }
      }
      $(this).picker(p);
    });
  };

  defaults = $.fn.cityPicker.prototype.defaults = {
    showDistrict: true //是否显示地区选择
  };

}($);
