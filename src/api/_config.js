module.exports = [
  {
    name: 'portEnergy',
    type: 'fe',
    language: 'ts',
    outputDir: './auto',
    json: 'http://pes.app.polarwin.cc:9080/v3/api-docs',
    showUpdateLog: true,
    blackUrls: [
      '/gisc/dict/value/get_list_bytypekey',
      '/mgr/application_user/add_ext',
      '/mgr/application_user/modify_ext',
    ],
    tagNameMap: (name) => {
      const TAG_MAP = {
        '01.账号预登录服务': 'GwsToken',
        '02.账号服务': 'GwsAccount',
        '03.个人信息': 'GwsUserInfo',
        '04.应用管理服务': 'GwsApplication',
        '05.菜单管理服务': 'GwsMenu',
        '06.功能点管理服务': 'GwsPermission',
        '07.角色管理服务': 'GwsRole',
        '08.数据接口管理服务': 'GwsApi',
        '09.平台管理员管理服务': 'GwsPlatformAdmin',
        '10.应用管理员管理服务': 'GwsApplicationAdmin',
        '11.应用与应用管理员关联配置服务': 'GwsRefApp',
        '12.设备管理服务': 'GwsDevice',
        '12.应用用户管理服务': 'GwsUser',
        安全检测计划表服务: 'Sp',
        安全检测计划文件服务: 'Spf',
        安全检查服务: 'Sc',
        安全学习培训服务: 'SafetyTraining',
        常规设备服务: 'Device',
        常规物资台帐服务: 'Gsb',
        '厂家/单位服务': 'Mu',
        多媒体服务: 'Img',
        附件服务: 'Attachment',
        机构管理: 'Org',
        日志服务: 'Operation',
        特种设备检查服务: 'Sec',
        维修报告服务: 'Wo',
        压力管道服务: 'Pip',
        压力容器服务: 'Pv',
        用户管理服务: 'User',
        用户服务: 'UserCustom',
        用气监控服务: 'Gas',
        站点管理服务: 'Org',
        站内信服务: 'Message',
        中修工单服务: 'Mro',
        中修计划服务: 'Mrp',
        资质证书管理: 'Certificate',
        字典服务: 'Dict',
        组织机构管理服务: 'Gisc',
        交接班服务: 'Sg',
        车辆信息管理: 'VehicleManage',
        LNG加气站卸车记录服务: 'Lu',
        加液及充装检查记录: 'Cf',
        进销存服务: 'Sale',
        首页服务: 'Home',
        销售数据服务: 'SalesData',
        进销存报表服务: 'Report',
      };
      return TAG_MAP[name];
    },
    API_MAP: function (apiName) {
      return apiName;
    },
  },
  // {
  //   "outputDir": "src/api/common",
  //   "json": "http://192.168.38.195:9516/rest/swagger.json",
  //   "TAG_MAP": {
  //     "图形验证码服务": "captcha",
  //     "登陆注册服务": "login"
  //   },
  //   "API_MAP": function(apiName) {
  //     return apiName
  //   }
  // },
];
