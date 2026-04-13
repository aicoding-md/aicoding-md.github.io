export const siteMeta = {
  title: "采摘园网 | 中国周末采摘园城市指南",
  description:
    "采摘园网精选中国各省份适合周末出发的采摘城市，首页聚合城市采摘特色，详情页整理采摘园卡片清单、地址线索、联系电话、时令水果和亲子出行提醒。",
  heroImage:
    "https://images.unsplash.com/photo-1726587141088-77db7fb1fe93?auto=format&fit=crop&w=1200&q=80"
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
    orchards: orchards ?? makeOrchards({ province, city, crops, theme }),
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
        name: "西营娟子种植园",
        address: "北京市昌平区兴寿镇西营村草莓园",
        phone: "010-61722828",
        crop: "草莓",
        highlight: "昌平草莓采摘代表园区之一，适合冬春季亲子草莓采摘。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/"
      },
      {
        name: "优优草莓采摘园",
        address: "北京市昌平区兴寿镇辛庄村",
        phone: "13683062353",
        crop: "草莓",
        highlight: "适合自驾前往，主打草莓采摘和近郊农事体验。",
        source: "北京旅游网公开采摘信息",
        sourceUrl: "https://www.visitbeijing.com.cn/"
      },
      {
        name: "美林间草莓基地",
        address: "北京市昌平区兴寿镇沙陀村南",
        phone: "400-0365395",
        crop: "草莓",
        highlight: "主打草莓采摘，可接待团体，适合家庭和团队春季采摘。",
        source: "北京本地宝公开采摘信息",
        sourceUrl: "https://bj.bendibao.com/"
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
  makeDestination({ slug: "xinjiang-turpan", province: "新疆", city: "吐鲁番", crops: ["葡萄", "哈密瓜", "桑葚"], season: "6月至9月", theme: "西域瓜果", image: "grape" })
];
