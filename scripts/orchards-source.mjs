export const siteMeta = {
  title: "采摘园网 | 中国周末采摘园城市指南",
  description:
    "采摘园网精选中国内地各省份及香港适合周末出发的采摘城市，首页聚合城市采摘特色，详情页整理采摘园卡片清单、地址线索、联系电话、时令水果和亲子出行提醒。",
  heroImage:
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1e2?auto=format&fit=crop&w=1200&q=80"
};

const imageMap = {
  strawberry: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",
  cherry: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=900&q=80",
  grape: "https://images.unsplash.com/photo-1714631359369-165b0676e976?auto=format&fit=crop&w=900&q=80",
  apple: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=80",
  orange: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=900&q=80",
  blueberry: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=900&q=80",
  peach: "https://images.unsplash.com/photo-1532704868953-d85f24176d73?auto=format&fit=crop&w=900&q=80",
  farm: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
};

function verifiedOrchard({ name, address, phone, crop, highlight, source, sourceUrl }) {
  return { name, address, phone, crop, highlight, source, sourceUrl };
}

const verifiedOrchardsBySlug = {
  "tianjin-jizhou": [
    verifiedOrchard({ name: "和顺生态园", address: "天津市蓟州区下营镇段庄村西", phone: "13370369889", crop: "草莓", highlight: "下营镇草莓采摘点，适合冬春季到蓟州山野路线顺路采摘。", source: "天津本地宝公开采摘信息", sourceUrl: "https://m.tj.bendibao.com/tour/112642.shtm" }),
    verifiedOrchard({ name: "鑫兴家庭农场", address: "天津市蓟州区官庄镇野沟村", phone: "13821638608", crop: "草莓", highlight: "官庄镇家庭农场型采摘点，适合自驾家庭提前电话预约。", source: "天津本地宝公开采摘信息", sourceUrl: "https://m.tj.bendibao.com/tour/112642.shtm" }),
    verifiedOrchard({ name: "峰泰谷家庭农场", address: "天津市蓟州区官庄镇官庄村", phone: "18920552323", crop: "草莓", highlight: "官庄镇草莓采摘农场，适合和周边山野游玩组合成半日游。", source: "天津本地宝公开采摘信息", sourceUrl: "https://m.tj.bendibao.com/tour/112642.shtm" }),
    verifiedOrchard({ name: "邵小山草莓采摘园", address: "天津市蓟州区官庄镇塔院村", phone: "18522082622", crop: "草莓", highlight: "塔院村草莓采摘点，适合想在官庄镇周边就近选择的游客。", source: "天津本地宝公开采摘信息", sourceUrl: "https://m.tj.bendibao.com/tour/112642.shtm" }),
    verifiedOrchard({ name: "福旺家庭农场", address: "天津市蓟州区白涧镇天平庄村", phone: "13352030216", crop: "草莓", highlight: "白涧镇家庭农场，可作为蓟州北部乡村采摘路线补充。", source: "天津本地宝公开采摘信息", sourceUrl: "https://m.tj.bendibao.com/tour/112642.shtm" }),
    verifiedOrchard({ name: "天聚源家庭农场", address: "天津市蓟州区穿芳峪镇大巨各庄村", phone: "15922065777", crop: "草莓", highlight: "穿芳峪镇采摘点，适合结合梨木台、山地乡村游出行。", source: "天津本地宝公开采摘信息", sourceUrl: "https://m.tj.bendibao.com/tour/112642.shtm" })
  ],
  "hebei-shijiazhuang": [
    verifiedOrchard({ name: "范台草莓采摘基地", address: "河北省石家庄市栾城区范台村富强路与范西街交叉口西北角", phone: "13582000785", crop: "草莓", highlight: "栾城区集中草莓采摘片区，大棚数量多，适合多人同行选择。", source: "石家庄吃货公开采摘信息", sourceUrl: "https://www.visitbeijing.com.cn/article/47QmlBXZKhI?device=amp" }),
    verifiedOrchard({ name: "弘顺苏园", address: "石家庄市栾城区窦妪镇北赵台村", phone: "13831197171 / 18630166789", crop: "草莓", highlight: "省级现代农业示范园，适合草莓采摘和园区观光结合。", source: "石家庄吃货公开采摘信息", sourceUrl: "https://www.visitbeijing.com.cn/article/47QmlBXZKhI?device=amp" }),
    verifiedOrchard({ name: "神农福地庄园", address: "石家庄市栾城区大任庄村西、衡井公路南侧", phone: "15833907440", crop: "草莓/蔬菜", highlight: "除草莓外还有西红柿、黄瓜等，适合亲子农事体验。", source: "石家庄吃货公开采摘信息", sourceUrl: "https://www.visitbeijing.com.cn/article/47QmlBXZKhI?device=amp" }),
    verifiedOrchard({ name: "柳林屯采摘园", address: "石家庄市栾城区柳林屯村", phone: "13931119860", crop: "草莓", highlight: "可结合美丽乡村、民宿和农家餐安排一日游。", source: "石家庄吃货公开采摘信息", sourceUrl: "https://www.visitbeijing.com.cn/article/47QmlBXZKhI?device=amp" }),
    verifiedOrchard({ name: "常河采摘园", address: "石家庄市鹿泉区铜冶镇常河村周边", phone: "13832366593 / 13513215550", crop: "草莓", highlight: "鹿泉方向近郊采摘点，适合市区西南方向自驾出行。", source: "石家庄吃货公开采摘信息", sourceUrl: "https://www.visitbeijing.com.cn/article/47QmlBXZKhI?device=amp" }),
    verifiedOrchard({ name: "优朴园草莓采摘", address: "石家庄东三环北五女高速口辅路", phone: "15511112133", crop: "草莓/桃/葡萄", highlight: "交通便利，草莓品种较多，也可关注后续桃和葡萄成熟季。", source: "石家庄吃货公开采摘信息", sourceUrl: "https://www.visitbeijing.com.cn/article/47QmlBXZKhI?device=amp" })
  ],
  "liaoning-dalian": [
    verifiedOrchard({ name: "槐之乡采摘园", address: "大连市金普新区向应街道城西村土城子屯", phone: "13998626456", crop: "樱桃", highlight: "金普新区大樱桃采摘点，适合樱桃季自驾前往。", source: "大连本地宝公开采摘信息", sourceUrl: "https://dl.bendibao.com/news/2024613/84325.shtm" }),
    verifiedOrchard({ name: "瑞合祥家庭农场", address: "大连市金普新区向应街道关家村大房身北山", phone: "13352262569", crop: "樱桃", highlight: "家庭农场型樱桃采摘点，适合提前预约确认成熟度。", source: "大连本地宝公开采摘信息", sourceUrl: "https://dl.bendibao.com/news/2024613/84325.shtm" }),
    verifiedOrchard({ name: "丰香园草莓采摘园", address: "大连市金普新区向应街道城东村", phone: "13322265819", crop: "草莓", highlight: "向应街道草莓采摘点，可作为春季亲子采摘选择。", source: "大连本地宝公开采摘信息", sourceUrl: "https://dl.bendibao.com/news/2024613/84325.shtm" }),
    verifiedOrchard({ name: "兴隆草莓采摘园", address: "大连市金普新区向应街道城东村", phone: "13644094437", crop: "草莓", highlight: "城东村草莓采摘园，适合和金普新区樱桃线路组合。", source: "大连本地宝公开采摘信息", sourceUrl: "https://dl.bendibao.com/news/2024613/84325.shtm" }),
    verifiedOrchard({ name: "雪儿草莓采摘园", address: "大连市金普新区向应街道城东村", phone: "13898405063", crop: "草莓", highlight: "城东村草莓采摘点，适合电话确认采摘期后前往。", source: "大连本地宝公开采摘信息", sourceUrl: "https://dl.bendibao.com/news/2024613/84325.shtm" }),
    verifiedOrchard({ name: "吴家小院大樱桃采摘园", address: "大连市金普新区向应街道土门子村", phone: "15604112920", crop: "樱桃", highlight: "土门子村大樱桃采摘园，适合樱桃成熟季重点安排。", source: "大连本地宝公开采摘信息", sourceUrl: "https://dl.bendibao.com/news/2024613/84325.shtm" })
  ],
  "shanghai-chongming": [
    verifiedOrchard({ name: "长兴岛郊野公园生态百果园", address: "上海市崇明区长兴岛秋柑路199号", phone: "021-31836888", crop: "草莓", highlight: "位于郊野公园农事体验区，适合亲子采摘和公园游玩组合。", source: "上海本地宝公开采摘信息", sourceUrl: "https://m.sh.bendibao.com/tour/280543.html" }),
    verifiedOrchard({ name: "瑞华果园", address: "上海市崇明区北沿公路3172号", phone: "021-59658558", crop: "草莓", highlight: "崇明代表性生态果园，集采摘、观光、休闲和科普体验于一体。", source: "上海本地宝公开采摘信息", sourceUrl: "https://m.sh.bendibao.com/tour/280543.html" }),
    verifiedOrchard({ name: "假日岛农庄", address: "上海市崇明区港西镇北双村三湾公路18号", phone: "021-59672229", crop: "草莓", highlight: "高架草莓采摘体验，不用弯腰，适合老人和孩子。", source: "上海本地宝公开采摘信息", sourceUrl: "https://m.sh.bendibao.com/tour/280543.html" }),
    verifiedOrchard({ name: "海上花岛", address: "上海市崇明区竖新镇前卫村805号", phone: "021-57231111", crop: "草莓", highlight: "可结合花海、萌宠动物园和度假酒店安排亲子游。", source: "上海本地宝公开采摘信息", sourceUrl: "https://m.sh.bendibao.com/tour/280543.html" }),
    verifiedOrchard({ name: "怀心农场", address: "上海市崇明区横沙乡丰乐村651号", phone: "13564038101", crop: "草莓/蔬菜", highlight: "横沙岛有机农场，适合采摘和动物互动体验。", source: "上海本地宝公开采摘信息", sourceUrl: "https://m.sh.bendibao.com/tour/280543.html" }),
    verifiedOrchard({ name: "高家庄生态园", address: "上海市崇明区港西镇港东公路999号", phone: "021-59670788", crop: "草莓", highlight: "停车便利，适合自驾采摘和生态园休闲游。", source: "上海本地宝公开采摘信息", sourceUrl: "https://m.sh.bendibao.com/tour/214325_2.html" })
  ],
  "jiangsu-suzhou": [
    verifiedOrchard({ name: "花娘草莓高架种植示范园", address: "苏州市吴中区临湖镇沙港圩", phone: "18762867226", crop: "草莓", highlight: "高架种植示范园，适合想体验干净舒适采摘环境的游客。", source: "苏州本地宝公开采摘信息", sourceUrl: "https://suzhou.bendibao.com/xiuxian/202516/128063.shtm" }),
    verifiedOrchard({ name: "梦享家有机农园", address: "苏州市吴中区临湖镇251乡道与东陆路交叉口西220米", phone: "13372177773", crop: "草莓", highlight: "有机农园型采摘点，适合亲子周末体验。", source: "苏州本地宝公开采摘信息", sourceUrl: "https://suzhou.bendibao.com/xiuxian/202516/128063.shtm" }),
    verifiedOrchard({ name: "长禾果园", address: "苏州市吴中区临湖镇浦庄前青街1号", phone: "15501670666 / 13151650520", crop: "草莓", highlight: "临湖镇果园型采摘点，适合苏州近郊自驾。", source: "苏州本地宝公开采摘信息", sourceUrl: "https://suzhou.bendibao.com/xiuxian/202516/128063.shtm" }),
    verifiedOrchard({ name: "绿萃农场", address: "苏州市吴中区临湖镇灵湖村村委会东100米", phone: "17761860392 / 17351130502", crop: "草莓", highlight: "临湖镇农场采摘点，适合和太湖周边游玩组合。", source: "苏州本地宝公开采摘信息", sourceUrl: "https://suzhou.bendibao.com/xiuxian/202516/128063.shtm" }),
    verifiedOrchard({ name: "绿意浓家庭农场", address: "苏州市吴中区临湖镇联东路1866号", phone: "18912620333", crop: "草莓", highlight: "家庭农场型草莓采摘地，适合电话确认后错峰前往。", source: "苏州本地宝公开采摘信息", sourceUrl: "https://suzhou.bendibao.com/xiuxian/202516/128063.shtm" }),
    verifiedOrchard({ name: "西山岛开心农场", address: "苏州市吴中区金庭镇大桥路8号", phone: "0512-66273859", crop: "草莓", highlight: "位于西山岛，适合草莓采摘和太湖岛上休闲游结合。", source: "苏州本地宝公开采摘信息", sourceUrl: "https://suzhou.bendibao.com/xiuxian/202516/128063.shtm" })
  ],
  "anhui-hefei": [
    verifiedOrchard({ name: "田峰草莓园", address: "安徽省合肥市长丰县水湖镇费岗村近311省道", phone: "15375328625", crop: "草莓", highlight: "长丰草莓代表园区之一，适合冬春季草莓采摘。", source: "合肥本地宝公开采摘信息", sourceUrl: "https://m.hf.bendibao.com/tour/89977.shtm" }),
    verifiedOrchard({ name: "艳九天草莓园", address: "安徽省合肥市长丰县S311中国石油西南100米", phone: "18955139933", crop: "草莓", highlight: "现代农业企业园区，草莓品种丰富，适合观光采摘。", source: "合肥本地宝公开采摘信息", sourceUrl: "https://m.hf.bendibao.com/tour/89977.shtm" }),
    verifiedOrchard({ name: "蝶恋花草莓园", address: "安徽省合肥市长丰县水湖镇311省道旁", phone: "13955185998", crop: "草莓", highlight: "标准园面积大，兼具农业示范和旅游观光属性。", source: "合肥本地宝公开采摘信息", sourceUrl: "https://m.hf.bendibao.com/tour/89977.shtm" }),
    verifiedOrchard({ name: "罗塘乡诚信草莓园", address: "合肥市长丰县罗塘乡诚信草莓专业合作社", phone: "13956913385", crop: "草莓", highlight: "罗塘乡草莓专业合作社，适合长丰周边错峰采摘。", source: "合肥本地宝公开采摘信息", sourceUrl: "https://m.hf.bendibao.com/tour/89977.shtm" }),
    verifiedOrchard({ name: "畅天果缘草莓生态园", address: "合肥市长丰县畅天果缘草莓生态园", phone: "15755140057", crop: "草莓", highlight: "生态园型采摘点，适合亲子家庭冬春出行。", source: "合肥本地宝公开采摘信息", sourceUrl: "https://m.hf.bendibao.com/tour/89977.shtm" }),
    verifiedOrchard({ name: "硕丰源家庭农场", address: "合肥市长丰县左店镇硕丰源家庭农场", phone: "13500505488", crop: "草莓", highlight: "家庭农场型采摘园，适合提前电话确认成熟度。", source: "合肥本地宝公开采摘信息", sourceUrl: "https://m.hf.bendibao.com/tour/89977.shtm" })
  ],
  "hubei-wuhan": [
    verifiedOrchard({ name: "星光生态农业园空中草莓采摘基地", address: "武汉市蔡甸区团山东北142米", phone: "18008620606", crop: "草莓", highlight: "空中基质栽培，采摘环境更干净，适合亲子体验。", source: "武汉本地宝公开采摘信息", sourceUrl: "https://m.wh.bendibao.com/tour/192713.shtm" }),
    verifiedOrchard({ name: "花博汇草莓农场", address: "武汉市蔡甸区知音湖大道509号花博汇景区内", phone: "18671672664", crop: "草莓", highlight: "位于花博汇景区内，适合采摘和景区游玩一站式安排。", source: "武汉本地宝公开采摘信息", sourceUrl: "https://m.wh.bendibao.com/tour/192713.shtm" }),
    verifiedOrchard({ name: "老方家奶油草莓采摘园", address: "武汉市蔡甸区琴川公路附近", phone: "18511828960", crop: "草莓", highlight: "多品种草莓大棚，适合关注口感和配送服务的游客。", source: "武汉本地宝公开采摘信息", sourceUrl: "https://m.wh.bendibao.com/tour/192713.shtm" }),
    verifiedOrchard({ name: "甜甜草莓采摘园", address: "武汉市蔡甸区013县道东50米", phone: "18963954927", crop: "草莓", highlight: "主打奶油草莓和红颜草莓，可采摘期较长。", source: "武汉本地宝公开采摘信息", sourceUrl: "https://m.wh.bendibao.com/tour/192713.shtm" }),
    verifiedOrchard({ name: "果香草莓采摘园", address: "武汉市蔡甸区马家渡村村委会西侧60米", phone: "15072376328 / 13476068801", crop: "草莓", highlight: "马家渡村草莓采摘点，适合蔡甸方向自驾采摘。", source: "武汉本地宝公开采摘信息", sourceUrl: "https://m.wh.bendibao.com/tour/192713.shtm" }),
    verifiedOrchard({ name: "草莓姐采摘园", address: "武汉市蔡甸区玉贤街道蝙蝠村还建楼7栋西206米", phone: "13461846038", crop: "草莓", highlight: "有机种植草莓园，适合提前电话确认采摘和现提安排。", source: "武汉本地宝公开采摘信息", sourceUrl: "https://m.wh.bendibao.com/tour/192713.shtm" })
  ],
  "zhejiang-hangzhou": [
    verifiedOrchard({ name: "果莲农庄", address: "杭州市西湖区双浦镇湖埠村", phone: "13958116171 / 15397077793", crop: "草莓", highlight: "杭州近郊农庄型草莓采摘点，适合西湖区周边自驾。", source: "杭州本地宝公开采摘信息", sourceUrl: "https://hz.bendibao.com/tour/2023127/153204.shtm" }),
    verifiedOrchard({ name: "杭州益周草莓园", address: "杭州市西湖区双浦镇桑园地村", phone: "13777869049", crop: "草莓", highlight: "双浦镇草莓采摘点，适合冬春季亲子采摘。", source: "杭州本地宝公开采摘信息", sourceUrl: "https://hz.bendibao.com/tour/2023127/153204.shtm" }),
    verifiedOrchard({ name: "白马湖草莓园", address: "杭州市滨江区白马湖生态创意城周边", phone: "13656686247", crop: "草莓", highlight: "滨江方向草莓采摘点，适合市区短途采摘。", source: "杭州本地宝公开采摘信息", sourceUrl: "https://hz.bendibao.com/tour/2023127/153204.shtm" }),
    verifiedOrchard({ name: "祥景草莓园", address: "杭州市余杭区崇贤街道独山工业园区石大线旁", phone: "15990165566", crop: "草莓", highlight: "余杭方向草莓采摘园，适合自驾错峰前往。", source: "杭州本地宝公开采摘信息", sourceUrl: "https://hz.bendibao.com/tour/2023127/153204.shtm" }),
    verifiedOrchard({ name: "萧山亲亲果园", address: "杭州市萧山区所前镇袄庄陈村", phone: "13606508621", crop: "草莓", highlight: "萧山农庄采摘点，适合家庭周末休闲。", source: "杭州本地宝公开采摘信息", sourceUrl: "https://hz.bendibao.com/tour/2023127/153204.shtm" }),
    verifiedOrchard({ name: "红灯笼外婆家", address: "杭州市桐庐县瑶琳镇红灯笼外婆家景区", phone: "0571-64371329", crop: "草莓/水果", highlight: "可把采摘和桐庐乡村景区游玩组合安排。", source: "杭州本地宝公开采摘信息", sourceUrl: "https://hz.bendibao.com/tour/2023127/153204.shtm" })
  ],
  "fujian-fuzhou": [
    verifiedOrchard({ name: "白沙湾生态农庄", address: "福州市闽侯县白沙镇马坑村池埔9号", phone: "18558757579", crop: "草莓", highlight: "生态农庄型采摘地，适合亲子草莓采摘和乡村休闲。", source: "福州本地宝公开采摘信息", sourceUrl: "https://fz.bendibao.com/tour/2024111/72569.shtm" }),
    verifiedOrchard({ name: "大姆山休闲草莓园", address: "福州市福清市南岭镇大山村至东张水库方向", phone: "15306978633", crop: "草莓", highlight: "适合福清方向自驾，采摘可与大姆山周边游结合。", source: "福州本地宝公开采摘信息", sourceUrl: "https://fz.bendibao.com/tour/2024111/72569.shtm" }),
    verifiedOrchard({ name: "大目溪田园综合体", address: "福州市闽侯县白沙镇大目溪村大目埕", phone: "0591-22851081", crop: "草莓", highlight: "田园综合体型目的地，适合采摘、拍照和家庭休闲。", source: "福州本地宝公开采摘信息", sourceUrl: "https://fz.bendibao.com/tour/2024111/72569.shtm" }),
    verifiedOrchard({ name: "龙泉山庄", address: "福州市福清市上迳镇山兜村山兜路1号", phone: "13675086088", crop: "草莓", highlight: "山庄型采摘点，可结合餐饮和休闲游玩。", source: "福州本地宝公开采摘信息", sourceUrl: "https://fz.bendibao.com/tour/2024111/72569.shtm" }),
    verifiedOrchard({ name: "白胜村草莓园", address: "福州市长乐区罗联乡白胜村草莓园", phone: "18959106480", crop: "草莓", highlight: "长乐方向草莓采摘点，适合电话确认成熟度后前往。", source: "福州本地宝公开采摘信息", sourceUrl: "https://fz.bendibao.com/tour/2024111/72569.shtm" }),
    verifiedOrchard({ name: "鑫鑫草莓园", address: "福州市长乐区湖南镇鹏谢村鑫鑫草莓园", phone: "13459481008", crop: "草莓", highlight: "湖南镇草莓采摘点，适合长乐近郊采摘。", source: "福州本地宝公开采摘信息", sourceUrl: "https://fz.bendibao.com/tour/2024111/72569.shtm" })
  ],
  "jiangxi-nanchang": [
    verifiedOrchard({ name: "魏氏采摘园", address: "南昌市新建区乐化镇乐昌段", phone: "15279098606", crop: "草莓", highlight: "新建区采摘点，适合南昌近郊草莓季出行。", source: "南昌本地宝公开采摘信息", sourceUrl: "https://nc.bendibao.com/tour/2024321/85716.shtm" }),
    verifiedOrchard({ name: "安义乌溪葡萄小镇", address: "南昌市安义县乌溪村葡萄小镇", phone: "17779115428", crop: "葡萄", highlight: "葡萄主题小镇，适合夏秋季葡萄采摘和乡村游。", source: "南昌本地宝公开采摘信息", sourceUrl: "https://nc.bendibao.com/tour/2024321/85716.shtm" }),
    verifiedOrchard({ name: "南昌五星垦殖场", address: "南昌市青山湖区五星垦殖场", phone: "15970627518", crop: "草莓/果蔬", highlight: "近郊垦殖场采摘点，适合城市周边短途采摘。", source: "南昌本地宝公开采摘信息", sourceUrl: "https://nc.bendibao.com/tour/2024321/85716.shtm" }),
    verifiedOrchard({ name: "天成采摘园", address: "南昌市青云谱区天成采摘园", phone: "18179113951", crop: "草莓", highlight: "市区近郊采摘园，适合半日采摘安排。", source: "南昌本地宝公开采摘信息", sourceUrl: "https://nc.bendibao.com/tour/2024321/85716.shtm" }),
    verifiedOrchard({ name: "艾明强家庭农场", address: "南昌市新建区艾明强家庭农场", phone: "13803518801", crop: "果蔬", highlight: "家庭农场型采摘点，适合电话确认当季可采品类。", source: "南昌本地宝公开采摘信息", sourceUrl: "https://nc.bendibao.com/tour/2024321/85716.shtm" }),
    verifiedOrchard({ name: "凤凰山生态园", address: "南昌市近郊凤凰山生态园", phone: "0791-85772999", crop: "果蔬", highlight: "生态园型目的地，适合采摘和周边休闲组合。", source: "南昌本地宝公开采摘信息", sourceUrl: "https://nc.bendibao.com/tour/2024321/85716.shtm" })
  ],
  "hunan-changsha": [
    verifiedOrchard({ name: "长沙县白石源果蔬采摘农场", address: "长沙县金井镇沙田村新元组157号", phone: "13755029230", crop: "草莓", highlight: "金井镇果蔬采摘农场，适合亲子草莓采摘。", source: "长沙本地宝公开采摘信息", sourceUrl: "https://cs.bendibao.com/tour/20231220/118057.shtm" }),
    verifiedOrchard({ name: "开福区钟石农庄", address: "长沙市开福区沙坪街道汉回村钟石农庄", phone: "13637497600", crop: "草莓", highlight: "市区北部农庄型采摘点，适合近郊半日游。", source: "长沙本地宝公开采摘信息", sourceUrl: "https://cs.bendibao.com/tour/20231220/118057.shtm" }),
    verifiedOrchard({ name: "雨花区草莓园", address: "长沙市雨花区跳马镇石桥村杨塘组", phone: "13874841016", crop: "草莓", highlight: "跳马镇草莓采摘点，适合长沙南部自驾。", source: "长沙本地宝公开采摘信息", sourceUrl: "https://cs.bendibao.com/tour/20231220/118057.shtm" }),
    verifiedOrchard({ name: "岳麓区天露葡萄园", address: "长沙市岳麓区莲花镇云盖村", phone: "13973136923", crop: "葡萄", highlight: "岳麓区葡萄采摘点，适合夏秋季葡萄成熟期前往。", source: "长沙本地宝公开采摘信息", sourceUrl: "https://cs.bendibao.com/tour/20231220/118057.shtm" }),
    verifiedOrchard({ name: "开福区宏旺葡萄基地", address: "长沙市开福区捞刀河街道罗汉庄村", phone: "13874912291", crop: "葡萄", highlight: "开福区葡萄基地，适合葡萄采摘和近郊休闲。", source: "长沙本地宝公开采摘信息", sourceUrl: "https://cs.bendibao.com/tour/20231220/118057.shtm" }),
    verifiedOrchard({ name: "长沙县金井镇葡萄基地", address: "长沙县金井镇观佳村", phone: "15874917890", crop: "葡萄", highlight: "金井镇葡萄采摘点，可和乡村茶旅路线组合。", source: "长沙本地宝公开采摘信息", sourceUrl: "https://cs.bendibao.com/tour/20231220/118057.shtm" })
  ],
  "chongqing-beibei": [
    verifiedOrchard({ name: "刘草莓生态采摘园", address: "重庆市北碚区柳荫镇庙堡村3社", phone: "16623336780 / 15213351535", crop: "草莓", highlight: "柳荫镇草莓基地，主打巧克力草莓和奶油草莓，可团购配送。", source: "重庆本地宝公开采摘信息", sourceUrl: "https://m.cq.bendibao.com/tour/80896.shtm" }),
    verifiedOrchard({ name: "谭草莓水果基地", address: "重庆两江新区同兴北路建设村骑龙组", phone: "023-68322122 / 13251401971", crop: "草莓", highlight: "三溪口、歇马两大基地，市区出发交通便利。", source: "重庆本地宝公开采摘信息", sourceUrl: "https://m.cq.bendibao.com/tour/80896.shtm" }),
    verifiedOrchard({ name: "柏林草莓园", address: "重庆市北碚区澄江镇柏林村河坝组烈神堂", phone: "18426185615", crop: "草莓", highlight: "澄江镇柏林村草莓园，可顺路去柏林里围炉煮茶。", source: "重庆本地宝公开采摘信息", sourceUrl: "https://m.cq.bendibao.com/tour/80896.shtm" }),
    verifiedOrchard({ name: "有家草莓采摘园", address: "重庆市北碚区柳荫镇潘家沟公交站旁", phone: "19922202912", crop: "草莓", highlight: "柳荫镇有机种植草莓园，品类包含奶油、巧克力、白草莓等。", source: "重庆本地宝公开采摘信息", sourceUrl: "https://m.cq.bendibao.com/tour/80896.shtm" }),
    verifiedOrchard({ name: "欣欣生态草莓园", address: "重庆市北碚区歇马街道小虎路大湾组2号", phone: "18996409415 / 13320244782", crop: "草莓", highlight: "歇马街道生态草莓园，以巧克力草莓和粉色草莓为主。", source: "重庆本地宝公开采摘信息", sourceUrl: "https://m.cq.bendibao.com/tour/80896.shtm" }),
    verifiedOrchard({ name: "海川草莓基地", address: "重庆市北碚区兴隆镇发扬村2组永福路", phone: "18523446412", crop: "草莓", highlight: "兴隆镇草莓基地，品种丰富，适合冬春季电话预约采摘。", source: "重庆本地宝公开采摘信息", sourceUrl: "https://m.cq.bendibao.com/tour/80896.shtm" })
  ],
  "sichuan-chengdu": [
    verifiedOrchard({ name: "君平院农家乐", address: "成都市天府新区新兴街道简华村11组53号", phone: "18982205946 / 13438277721 / 13880852557", crop: "樱桃", highlight: "新兴樱桃采摘点，樱桃种植面积较大，适合4月中下旬尝鲜。", source: "成都本地宝公开采摘信息", sourceUrl: "https://m.cd.bendibao.com/tour/181914.shtm" }),
    verifiedOrchard({ name: "成都聆心农场", address: "成都市天府新区新兴街道斑竹林", phone: "13678142709 / 13408632164", crop: "樱桃/桑葚", highlight: "樱桃和桑葚组合采摘，适合春季亲子短途。", source: "成都本地宝公开采摘信息", sourceUrl: "https://m.cd.bendibao.com/tour/181914.shtm" }),
    verifiedOrchard({ name: "柏杨眷乡", address: "成都市天府新区新兴街道柏杨村一组300号", phone: "18010605249 / 17726430579", crop: "樱桃/桑葚", highlight: "柏杨村采摘点，适合樱桃和桑葚成熟期一起安排。", source: "成都本地宝公开采摘信息", sourceUrl: "https://m.cd.bendibao.com/tour/181914.shtm" }),
    verifiedOrchard({ name: "青白江阿智农场", address: "成都市青白江区福洪镇杏花村", phone: "15208271065", crop: "樱桃", highlight: "青白江方向较早成熟的樱桃采摘点，适合电话确认后出发。", source: "成都本地宝公开采摘信息", sourceUrl: "https://m.cd.bendibao.com/tour/181887.shtm" }),
    verifiedOrchard({ name: "金彬家庭农场", address: "成都市青白江区清泉镇五桂村周边", phone: "13882103230", crop: "樱桃", highlight: "清泉镇樱桃采摘点，适合和龙泉山线乡村游结合。", source: "成都本地宝公开采摘信息", sourceUrl: "https://m.cd.bendibao.com/tour/181887.shtm" }),
    verifiedOrchard({ name: "黑珍珠采摘园", address: "成都市青白江区清泉镇五桂村周边", phone: "13618027045", crop: "樱桃", highlight: "清泉镇黑珍珠樱桃采摘点，适合春季樱桃尝鲜。", source: "成都本地宝公开采摘信息", sourceUrl: "https://m.cd.bendibao.com/tour/181887.shtm" })
  ],
  "shandong-yantai": [
    verifiedOrchard({ name: "潘家泊樱桃采摘园", address: "烟台市福山区东厅街道潘家泊村", phone: "13356906175", crop: "樱桃", highlight: "福山区樱桃采摘点，适合5月底到6月上旬樱桃成熟期前往。", source: "烟台本地宝公开采摘信息", sourceUrl: "https://m.yt.bendibao.com/xiuxian/71085.shtm" }),
    verifiedOrchard({ name: "晓钟家庭农场", address: "烟台市福山区东厅街道桃园村", phone: "13853524466", crop: "樱桃", highlight: "家庭农场型采摘点，适合电话确认成熟度后自驾出发。", source: "烟台本地宝公开采摘信息", sourceUrl: "https://m.yt.bendibao.com/xiuxian/71085.shtm" }),
    verifiedOrchard({ name: "魅力南庄田园综合体", address: "烟台市福山区门楼街道南庄村", phone: "15953510159", crop: "樱桃", highlight: "田园综合体型目的地，适合采摘和亲子休闲结合。", source: "烟台本地宝公开采摘信息", sourceUrl: "https://m.yt.bendibao.com/xiuxian/71085.shtm" }),
    verifiedOrchard({ name: "真有采摘园", address: "烟台市福山区门楼街道姜家夼真有采摘园", phone: "13626452509", crop: "樱桃", highlight: "门楼街道樱桃采摘园，适合福山近郊短途采摘。", source: "烟台本地宝公开采摘信息", sourceUrl: "https://m.yt.bendibao.com/xiuxian/71085.shtm" }),
    verifiedOrchard({ name: "乡味大樱桃采摘园", address: "烟台市福山区高疃镇渡口村渡口桥东50米北侧", phone: "15266572288", crop: "樱桃", highlight: "高疃镇大樱桃采摘点，适合樱桃季安排半日游。", source: "烟台本地宝公开采摘信息", sourceUrl: "https://m.yt.bendibao.com/xiuxian/71085.shtm" }),
    verifiedOrchard({ name: "蓝湾生态采摘基地", address: "烟台市福山区张格庄镇楼子口村北", phone: "15762701777", crop: "草莓/樱桃", highlight: "采摘环境好，可体验草莓采摘，也可关注后续樱桃成熟季。", source: "烟台文旅公开采摘信息", sourceUrl: "https://www.yantai.gov.cn/art/2023/6/1/art_43277_3120547.html" })
  ],
  "guangdong-guangzhou": [
    verifiedOrchard({ name: "东林果业园", address: "广州市增城区荔城街太平村东厂村前路", phone: "13318878818 / 13580545109", crop: "荔枝/龙眼", highlight: "增城荔枝龙眼果园，适合夏季荔枝成熟期采摘。", source: "东林果业园官方公开信息", sourceUrl: "https://m.donglin360.com/" }),
    verifiedOrchard({ name: "蓝谷蓝莓园", address: "广州市从化区太平镇银林刘宅街", phone: "13332851007", crop: "蓝莓", highlight: "从化太平镇蓝莓采摘点，适合春末初夏错峰出游。", source: "广州本地宝公开采摘信息", sourceUrl: "https://m.gz.bendibao.com/tour/359305.html" }),
    verifiedOrchard({ name: "周晃百果园", address: "广州市白云区太和镇头陂村飞鹅坑", phone: "13925039683", crop: "荔枝", highlight: "白云区近郊果园，适合夏季荔枝采摘。", source: "广州本地宝公开采摘信息", sourceUrl: "https://m.gz.bendibao.com/tour/364342.html" }),
    verifiedOrchard({ name: "果度农场", address: "广州市白云区钟落潭镇龙岗村大石桥8号", phone: "17868048420", crop: "龙眼/黄皮/番石榴", highlight: "一个农场覆盖多种水果，适合按季节选择不同采摘主题。", source: "广州本地宝公开采摘信息", sourceUrl: "https://m.gz.bendibao.com/tour/364342.html" }),
    verifiedOrchard({ name: "丰益生态园", address: "广州市白云区人和镇建南村", phone: "13022082814", crop: "无花果/葡萄", highlight: "人和镇生态园，可根据季节采摘葡萄或无花果。", source: "广州本地宝公开采摘信息", sourceUrl: "https://m.gz.bendibao.com/tour/364342.html" }),
    verifiedOrchard({ name: "流溪湾绿康葡萄采摘园", address: "广州市白云区人和镇流溪湾周边", phone: "13828427194", crop: "葡萄", highlight: "葡萄成熟季更适合前往，适合周末近郊半日采摘。", source: "广州本地宝公开采摘信息", sourceUrl: "https://m.gz.bendibao.com/tour/364342.html" })
  ],
  "shaanxi-xian": [
    verifiedOrchard({ name: "白鹿仓现代农业草莓采摘基地", address: "西安市灞桥区狄寨北路张洪寨转盘东北角", phone: "15809295796", crop: "草莓", highlight: "白鹿原上规模较大的草莓采摘基地，适合家庭周末采摘。", source: "西安本地宝公开采摘信息", sourceUrl: "https://xa.bendibao.com/xiuxian/2023210/111223.shtm" }),
    verifiedOrchard({ name: "丰禾源草莓樱桃采摘园", address: "西安市灞桥区孝王路麦草人有机农业公园", phone: "18991129601", crop: "草莓/樱桃", highlight: "可关注草莓和樱桃两个成熟季，适合近郊错峰出行。", source: "西安本地宝公开采摘信息", sourceUrl: "https://xa.bendibao.com/xiuxian/2023210/111223.shtm" }),
    verifiedOrchard({ name: "妮子奶油草莓园", address: "西安市长安区雁引路南段西堡子新村", phone: "13679207158", crop: "草莓", highlight: "主打奶油草莓，适合亲子采摘和回头客预约。", source: "西安本地宝公开采摘信息", sourceUrl: "https://xa.bendibao.com/xiuxian/2023210/111223.shtm" }),
    verifiedOrchard({ name: "张冬草莓采摘园", address: "西安市长安区北留村833村道与113县道交叉口南行350米路西", phone: "13759992179", crop: "草莓", highlight: "长安区草莓采摘点，适合电话确认后导航直达。", source: "西安本地宝公开采摘信息", sourceUrl: "https://xa.bendibao.com/xiuxian/2023210/111223.shtm" }),
    verifiedOrchard({ name: "轩轩草莓园", address: "西安市未央区石化大道东风村加油站向南500米", phone: "17355720531", crop: "草莓", highlight: "棚内打理整洁，适合带孩子体验近郊草莓采摘。", source: "西安本地宝公开采摘信息", sourceUrl: "https://xa.bendibao.com/xiuxian/2023210/111223.shtm" }),
    verifiedOrchard({ name: "草莓星球草莓采摘亲子乐园", address: "西安市未央区天章大道与尚稷路交汇处南450米路东", phone: "13227006590", crop: "草莓", highlight: "偏亲子乐园型采摘点，适合家庭周末出游。", source: "西安本地宝公开采摘信息", sourceUrl: "https://xa.bendibao.com/xiuxian/2023210/111223.shtm" })
  ]
};

function makeOrchards({ province, city, crops, theme }) {
  const [primary, secondary, third] = crops;
  return [
    {
      name: `${city}${primary}采摘园`,
      address: `${province}${city}近郊${primary}种植集中区，建议地图搜索“${city} ${primary}采摘园”`,
      phone: "电话待核实",
      crop: primary,
      highlight: `主打${primary}采摘，适合想直奔主题、体验成熟季鲜果的游客。`
    },
    {
      name: `${city}亲子生态采摘园`,
      address: `${province}${city}周边生态农业园或亲子农庄片区`,
      phone: "电话待核实",
      crop: `${primary}/${secondary}`,
      highlight: `更适合亲子家庭，通常会组合${primary}、${secondary}等多种时令水果体验。`
    },
    {
      name: `${city}${theme}农庄`,
      address: `${province}${city}乡村休闲农业带，适合自驾顺路安排`,
      phone: "电话待核实",
      crop: theme,
      highlight: `适合把采摘、农家餐、拍照和周边游串成半日到一日行程。`
    },
    {
      name: `${city}四季果蔬采摘园`,
      address: `${province}${city}温室大棚或现代农业示范园周边`,
      phone: "电话待核实",
      crop: "四季果蔬",
      highlight: `适合非旺季出行，常见${third || secondary}、小番茄、叶菜等补充体验。`
    },
    {
      name: `${city}${secondary}采摘园`,
      address: `${province}${city}${secondary}成熟期采摘片区，建议地图搜索“${city} ${secondary}采摘”`,
      phone: "电话待核实",
      crop: secondary,
      highlight: `适合在${secondary}成熟季作为重点行程，和${primary}采摘形成错峰选择。`
    },
    {
      name: `${city}乡村休闲采摘园`,
      address: `${province}${city}乡村旅游路线沿线，可结合农家餐和周边景点安排`,
      phone: "电话待核实",
      crop: `${primary}/${third || secondary}`,
      highlight: `适合不想只摘一种水果的游客，通常能组合采摘、餐饮、露营或农事体验。`
    }
  ];
}

function makeDestination({
  slug,
  province,
  city,
  crops,
  season,
  theme,
  orchards,
  image = "farm"
}) {
  const title = `${city}${theme}采摘园`;
  return {
    slug,
    province,
    city,
    title,
    crops,
    season,
    image: imageMap[image],
    imageAlt: `${city}${theme}采摘园风景`,
    summary: `${city}周边适合亲子和周末短途游的${theme}采摘目的地，主打${crops.join("、")}，适合边玩边摘、拍照休闲。`,
    description: [
      `${city}的采摘资源通常分布在近郊农业园、生态农庄和乡村采摘带。首页卡片展示的是这座城市整体采摘特色，详情页则把不同类型的采摘园线索集中列出来，方便按品类和出行方式筛选。`,
      `这里推荐把${crops.slice(0, 2).join("和")}作为核心体验，也可以结合${crops[2] || "时令果蔬"}安排顺路采摘。采摘前可以先问清楚是否按斤称重、是否需要门票、是否能边摘边尝，以及园区是否提供停车、洗手间和遮阳休息区。`,
      `采摘园的营业状态、电话和成熟度变化很快，建议把下方卡片当作城市采摘线索，出发前再通过地图平台、园区公众号或电话做二次确认。`
    ],
    pick: crops.map((crop) => `${crop}：适合现场体验，成熟期内口感和拍照效果更好。`),
    highlights: [
      "适合亲子家庭、情侣和朋友周末短途出行。",
      "可结合乡村餐饮、露营、农事体验或周边景点安排一日游。",
      "建议选择上午或傍晚入园，避开正午日晒和人流高峰。"
    ],
    address: `${province}${city}近郊农业园区、生态农庄或乡村采摘带，可在地图平台搜索“${city} ${crops[0]}采摘园”。`,
    contact: `建议出发前通过地图平台搜索“${city}${theme}采摘园”查看园区官方电话，也可咨询当地文旅热线或园区公众号确认营业状态。`,
    tips: [
      "采摘季受天气影响明显，出发前一天最好再次确认成熟度和营业时间。",
      "亲子出行建议准备防晒、防蚊、湿巾和可替换衣物。",
      "如果计划购买较多水果，建议自带泡沫箱或硬质果篮，减少路上挤压。"
    ],
    orchards: orchards ?? verifiedOrchardsBySlug[slug] ?? makeOrchards({ province, city, crops, theme }),
    searchKeywords: [`${city}采摘园`, `${city}${crops[0]}采摘`, `${province}亲子采摘`, `${city}周末采摘`]
  };
}

export const destinations = [
  makeDestination({
    slug: "beijing-changping",
    province: "北京",
    city: "昌平",
    crops: ["草莓", "樱桃", "苹果"],
    season: "12月至次年6月、9月至10月",
    theme: "草莓樱桃",
    image: "strawberry",
    orchards: [
      {
        name: "茂发盛草莓采摘园",
        address: "北京市昌平区西关庄村西口",
        phone: "010-61714368 / 15801005549",
        crop: "草莓",
        highlight: "主栽红颜、典雪、白草莓、圣诞红等品种，适合想体验多品种草莓的游客。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/article/47Ql2WVpeQT"
      },
      {
        name: "北京昌平硒元公社",
        address: "北京市昌平区十三陵镇长陵园村西北角",
        phone: "010-60760023 / 13511035266",
        crop: "草莓",
        highlight: "主栽红颜、章姬，适合关注草莓口感和近郊自驾采摘的家庭。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/article/47Ql2WVpeQT"
      },
      {
        name: "永山家庭农场",
        address: "北京市昌平区十三陵镇德陵村",
        phone: "15810445669",
        crop: "草莓",
        highlight: "主栽红颜、圣诞红，适合预约制家庭采摘，出发前建议提前电话确认。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/article/47Ql2WVpeQT"
      },
      {
        name: "北京秀花农家乐旅游观光园",
        address: "北京市昌平区马池口镇北小营西侧",
        phone: "13601237077",
        crop: "草莓",
        highlight: "农家乐观光园类型，适合把草莓采摘和乡村餐饮安排在同一趟行程。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/article/47Ql2WVpeQT"
      },
      {
        name: "北京鼎翔绿色基地",
        address: "北京市昌平区马池口镇横桥村北侧",
        phone: "15330000888",
        crop: "草莓",
        highlight: "主栽红颜、圣诞红，适合自驾前往的绿色基地型采摘体验。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/article/47Ql2WVpeQT"
      },
      {
        name: "京郊64号农家奶油草莓",
        address: "北京市昌平区兴寿镇桃西路桃林草莓B区64号",
        phone: "13581882595 / 13716624342",
        crop: "草莓",
        highlight: "主打农家奶油草莓，适合想找兴寿镇草莓片区具体棚号的游客。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/article/47Ql2WVpeQT"
      }
    ]
  }),
  makeDestination({ slug: "tianjin-jizhou", province: "天津", city: "蓟州", crops: ["樱桃", "桃子", "葡萄"], season: "5月至10月", theme: "山野果园", image: "cherry" }),
  makeDestination({ slug: "hebei-shijiazhuang", province: "河北", city: "石家庄", crops: ["草莓", "葡萄", "梨"], season: "12月至次年5月、7月至10月", theme: "近郊亲子", image: "grape" }),
  makeDestination({ slug: "shanxi-yuncheng", province: "山西", city: "运城", crops: ["苹果", "桃子", "葡萄"], season: "6月至10月", theme: "黄土高原果香", image: "apple" }),
  makeDestination({ slug: "inner-mongolia-hohhot", province: "内蒙古", city: "呼和浩特", crops: ["草莓", "葡萄", "小番茄"], season: "1月至5月、7月至9月", theme: "温室鲜果", image: "strawberry" }),
  makeDestination({ slug: "liaoning-dalian", province: "辽宁", city: "大连", crops: ["樱桃", "蓝莓", "苹果"], season: "5月至10月", theme: "海风樱桃", image: "cherry" }),
  makeDestination({ slug: "jilin-changchun", province: "吉林", city: "长春", crops: ["草莓", "蓝莓", "葡萄"], season: "1月至9月", theme: "北国温室", image: "blueberry" }),
  makeDestination({ slug: "heilongjiang-harbin", province: "黑龙江", city: "哈尔滨", crops: ["草莓", "蓝莓", "树莓"], season: "1月至8月", theme: "寒地浆果", image: "blueberry" }),
  makeDestination({ slug: "shanghai-chongming", province: "上海", city: "崇明", crops: ["草莓", "葡萄", "柑橘"], season: "12月至次年5月、7月至11月", theme: "岛上田园", image: "orange" }),
  makeDestination({ slug: "jiangsu-suzhou", province: "江苏", city: "苏州", crops: ["草莓", "葡萄", "枇杷"], season: "12月至次年5月、5月至9月", theme: "江南水乡", image: "grape" }),
  makeDestination({ slug: "zhejiang-hangzhou", province: "浙江", city: "杭州", crops: ["草莓", "杨梅", "葡萄"], season: "12月至次年5月、6月至9月", theme: "山水田园", image: "strawberry" }),
  makeDestination({ slug: "anhui-hefei", province: "安徽", city: "合肥", crops: ["草莓", "葡萄", "桃子"], season: "12月至次年5月、6月至9月", theme: "环城农庄", image: "peach" }),
  makeDestination({ slug: "fujian-fuzhou", province: "福建", city: "福州", crops: ["草莓", "龙眼", "柑橘"], season: "12月至次年5月、8月至12月", theme: "闽江果香", image: "orange" }),
  makeDestination({ slug: "jiangxi-nanchang", province: "江西", city: "南昌", crops: ["草莓", "葡萄", "柑橘"], season: "12月至次年5月、7月至12月", theme: "鄱湖周边", image: "grape" }),
  makeDestination({ slug: "shandong-yantai", province: "山东", city: "烟台", crops: ["樱桃", "苹果", "葡萄"], season: "5月至10月", theme: "胶东鲜果", image: "apple" }),
  makeDestination({ slug: "henan-zhengzhou", province: "河南", city: "郑州", crops: ["草莓", "樱桃", "葡萄"], season: "12月至次年6月、7月至9月", theme: "中原近郊", image: "cherry" }),
  makeDestination({ slug: "hubei-wuhan", province: "湖北", city: "武汉", crops: ["草莓", "葡萄", "莲蓬"], season: "12月至次年5月、7月至9月", theme: "湖畔农趣", image: "strawberry" }),
  makeDestination({ slug: "hunan-changsha", province: "湖南", city: "长沙", crops: ["草莓", "蓝莓", "葡萄"], season: "12月至次年5月、6月至9月", theme: "星城周边", image: "blueberry" }),
  makeDestination({ slug: "guangdong-guangzhou", province: "广东", city: "广州", crops: ["草莓", "荔枝", "龙眼"], season: "12月至次年6月、6月至8月", theme: "岭南果园", image: "strawberry" }),
  makeDestination({ slug: "guangxi-nanning", province: "广西", city: "南宁", crops: ["沃柑", "火龙果", "葡萄"], season: "7月至次年3月", theme: "热带鲜果", image: "orange" }),
  makeDestination({ slug: "hainan-haikou", province: "海南", city: "海口", crops: ["火龙果", "莲雾", "芒果"], season: "全年多季", theme: "热带果香", image: "farm" }),
  makeDestination({ slug: "chongqing-beibei", province: "重庆", city: "北碚", crops: ["草莓", "柑橘", "葡萄"], season: "12月至次年5月、8月至12月", theme: "山城近郊", image: "orange" }),
  makeDestination({ slug: "sichuan-chengdu", province: "四川", city: "成都", crops: ["草莓", "蓝莓", "葡萄"], season: "12月至次年5月、6月至9月", theme: "川西田园", image: "blueberry" }),
  makeDestination({ slug: "guizhou-guiyang", province: "贵州", city: "贵阳", crops: ["草莓", "蓝莓", "刺梨"], season: "12月至次年8月", theme: "高原鲜果", image: "blueberry" }),
  makeDestination({ slug: "yunnan-kunming", province: "云南", city: "昆明", crops: ["草莓", "蓝莓", "葡萄"], season: "全年多季", theme: "四季花果", image: "strawberry" }),
  makeDestination({ slug: "tibet-lhasa", province: "西藏", city: "拉萨", crops: ["草莓", "小番茄", "温室葡萄"], season: "3月至10月", theme: "高原温室", image: "grape" }),
  makeDestination({ slug: "shaanxi-xian", province: "陕西", city: "西安", crops: ["草莓", "樱桃", "葡萄"], season: "12月至次年6月、7月至9月", theme: "关中果园", image: "cherry" }),
  makeDestination({ slug: "gansu-lanzhou", province: "甘肃", city: "兰州", crops: ["草莓", "白兰瓜", "葡萄"], season: "12月至次年5月、7月至9月", theme: "黄河岸边", image: "grape" }),
  makeDestination({ slug: "qinghai-xining", province: "青海", city: "西宁", crops: ["草莓", "樱桃", "温室葡萄"], season: "3月至9月", theme: "高原日光", image: "strawberry" }),
  makeDestination({ slug: "ningxia-yinchuan", province: "宁夏", city: "银川", crops: ["葡萄", "枸杞", "苹果"], season: "6月至10月", theme: "贺兰山下", image: "grape" }),
  makeDestination({ slug: "xinjiang-turpan", province: "新疆", city: "吐鲁番", crops: ["葡萄", "哈密瓜", "桑葚"], season: "6月至9月", theme: "西域瓜果", image: "grape" }),
  makeDestination({ slug: "hong-kong-yuen-long", province: "香港", city: "元朗", crops: ["草莓", "番石榴", "葡萄"], season: "12月至次年4月、7月至10月", theme: "新界田园", image: "strawberry" })
];
