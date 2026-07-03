import {
  BookOpenText,
  BrainCircuit,
  FlaskConical,
  GitBranch,
  Layers3,
  MapPinned,
  Orbit,
  Users,
} from "lucide-react";

const assetPath = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

export const profile = {
  name: "Xuefei Liu",
  chineseName: "刘雪飞",
  title: "南方科技大学访问学者、中南大学生命科学学院拟聘副教授",
  focus: "计算生物学、单细胞与空间组学",
  location: "广东深圳",
  emails: ["12231372@mail.sustech.edu.cn", "liter_frye@163.com"],
  portrait: assetPath("xuefei-liu.png"),
  wechatQr: assetPath("wechat-qr.png"),
  scholarUrl: "https://scholar.google.com/citations?user=WlfjtbwAAAAJ",
  scholarQr: assetPath("google-scholar-qr.png"),
};

export const navTabs = [
  { id: "profile", label: "个人主页", icon: BrainCircuit },
  { id: "publications", label: "论文成果", icon: BookOpenText },
  { id: "projects", label: "项目荣誉", icon: FlaskConical },
  { id: "team", label: "DX Team", icon: Users },
];

export const cellModes = [
  {
    id: "cluster",
    label: "细胞分群",
    icon: Layers3,
    kicker: "注释视角",
    title: "细胞类型分离成漂浮的转录组岛屿。",
    copy: "从类似 UMAP 的抽象视角出发，恶性细胞、内皮细胞、T 细胞、巨噬细胞和基质细胞形成不同但彼此通讯的邻域。",
  },
  {
    id: "spatial",
    label: "空间定位",
    icon: MapPinned,
    kicker: "组织地图",
    title: "细胞分群重新折叠到组织空间场中。",
    copy: "同一批细胞被映射回分层的微环境，展示转录组身份与空间位置如何被共同解读。",
  },
  {
    id: "trajectory",
    label: "状态轨迹",
    icon: GitBranch,
    kicker: "状态切换",
    title: "细胞沿分支轨迹进入转移相关状态。",
    copy: "分支路线突出细胞状态转换、可塑性，以及肿瘤程序与免疫压力之间不断变化的关系。",
  },
  {
    id: "niche",
    label: "生态位互作",
    icon: Orbit,
    kicker: "互作网络",
    title: "肿瘤-内皮-免疫生态位在三维空间中浮现。",
    copy: "互作视角将内皮细胞和免疫细胞拉入围绕恶性细胞的共享轨道，对应本站的研究重心。",
  },
];

export const metrics = [
  { value: "305.5", label: "累计影响因子" },
  { value: "10+", label: "代表性论文与合作成果" },
  { value: "3", label: "单细胞 / 空间 / 转移方向" },
];

export const education = [
  {
    school: "南方科技大学",
    detail: "生物学博士 | 医学院 / 深圳市儿童医院",
    years: "2022.09 - 2026.06",
  },
  {
    school: "中山大学",
    detail: "基础医学硕士 | 肿瘤防治中心",
    years: "2019.09 - 2022.06",
  },
  {
    school: "西南交通大学",
    detail: "生物工程本科 | 生命科学与工程学院",
    years: "2015.09 - 2019.06",
  },
];

export const researchInterests = [
  "单细胞与空间组学",
  "肿瘤转移机制",
  "肿瘤-内皮-免疫互作",
  "循环肿瘤细胞",
];

export const labOverview = {
  title: "课题概览",
  body:
    "本人长期围绕循环肿瘤细胞（CTC）介导的癌症转移机制开展研究，重点关注 CTC 在血液循环中的存活、增殖、免疫逃逸及远端器官定植过程。通过结合 CTC 分离富集技术、单细胞转录组测序、空间转录组测序及计算生物学分析，系统绘制 CTC 转移演化与克隆增殖图谱，解析其与血管内皮细胞之间的互作机制。研究进一步聚焦 CTC 诱导内皮屏障损伤、促进血管内侵和远端转移的分子基础，并探索肿瘤-内皮-免疫微环境重塑在转移进展中的作用，为 CTC 相关转移预测、靶向干预和免疫联合治疗提供理论依据。",
  points: [
    "结合 CTC 分离技术和单细胞组学绘制 CTC 转移和增殖的癌细胞进化图谱。",
    "基于单细胞转录组测序与空间转录组测序揭示肿瘤远端转移的机制。",
    "解析 CXCL13+ CD4+ T 细胞对肿瘤免疫治疗及癌转移的影响。",
  ],
};

export const principalInvestigator = {
  title: "个人简介",
  body: "",
  journals: ["Cancer Discovery", "Gut", "Advanced Science", "Cancer Research", "Cancer Letters"],
  cumulativeImpactFactor: "305.5",
  grant: "国家自然科学基金青年学生基础研究项目（博士研究生）",
  reviewerJournals: [
    "Theranostics",
    "International Immunopharmacology",
    "Molecular Therapy Nucleic Acids",
  ],
};

export const journalMeta = {
  "Cancer Discov": { name: "Cancer Discovery", impactFactor: "29.5" },
  "Adv Sci (Weinh)": { name: "Advanced Science", impactFactor: "14.1" },
  "Cancer Immunol Res": { name: "Cancer Immunology Research", impactFactor: "7.9" },
  "Cancer Lett": { name: "Cancer Letters", impactFactor: "11.8" },
  Gut: { name: "Gut", impactFactor: "24.6" },
  "J Hematol Oncol": { name: "Journal of Hematology & Oncology", impactFactor: "47.8" },
  "Cell Rep": { name: "Cell Reports", impactFactor: "7.7" },
  "Cancer Res": { name: "Cancer Research", impactFactor: "22.6" },
  "Cell Res": { name: "Cell Research", impactFactor: "31.1" },
  "Clin Transl Med": { name: "Clinical and Translational Medicine", impactFactor: "7.9" },
  "Front Cell Dev Biol": { name: "Frontiers in Cell and Developmental Biology", impactFactor: "5.3" },
  "Genomics Proteomics Bioinformatics": { name: "Genomics, Proteomics & Bioinformatics", impactFactor: "7.2" },
  "Front Immunol": { name: "Frontiers in Immunology", impactFactor: "7.0" },
  "Nat Commun": { name: "Nature Communications", impactFactor: "18.1" },
  Heliyon: { name: "Heliyon", impactFactor: "3.6" },
};

export const publications = [
  {
    title: "GPNMB Drives Brain Metastasis by Sculpting a Pathologic Endothelial-Immune Interactome.",
    authors:
      "Liu X, Tan J, Wu C, Huang G, Cheng Y, Hu J, Zhang B, Zhao M, Zhao B, Lian J, Zheng S, Zeng L, Xu M, Xu Y, Zeng S, Yu H, Yang H, Zuo Z, Liu C, Feng W, Guo W, Li C, Liu SL, Liu Q, Wen F, Hong X",
    journal: "Cancer Discov",
    year: "2026 Jul 1",
    role: "共同一作排名第一",
    equalAuthors: ["Liu X", "Tan J", "Wu C", "Huang G", "Cheng Y"],
    correspondingAuthors: ["Guo W", "Li C", "Liu SL", "Liu Q", "Wen F", "Hong X"],
    href: "https://pubmed.ncbi.nlm.nih.gov/41973996/",
  },
  {
    title:
      "Abnormal Cellular Populations Shape Thymic Epithelial Tumor Heterogeneity and Anti-Tumor by Blocking Metabolic Interactions in Organoids.",
    authors: "Liu X, Wang C, Huang Y, Lv Q, Yu C, Ying J, Duan L, Guo Y, Huang G, Shen W, Jiang M, Mao W, Zuo Z, Zhao A",
    journal: "Adv Sci (Weinh)",
    year: "2024 Nov",
    role: "共同一作排名第一",
    equalAuthors: ["Liu X", "Wang C", "Huang Y", "Lv Q"],
    correspondingAuthors: ["Mao W", "Zuo Z", "Zhao A"],
    href: "https://pubmed.ncbi.nlm.nih.gov/39258580/",
  },
  {
    title:
      "NMB+CXCL13+CD4+ T Cell-Derived Neuromedin B Promotes Neuropeptide S Receptor 1-Positive Malignant Cell Senescence and Malignancy.",
    authors:
      "Yu M, Duan L, Huang Y, Cheng Y, Wang Y, Huang G, Lian J, Chen S, Wen F, Guo L, Hong X, Shen S, Chen G, Gao Y, Wu C, Liu X",
    journal: "Cancer Immunol Res",
    year: "2026 Jul 2",
    role: "最后通讯作者",
    equalAuthors: ["Yu M", "Duan L", "Huang Y", "Cheng Y"],
    correspondingAuthors: ["Liu X"],
    href: "https://pubmed.ncbi.nlm.nih.gov/42029557/",
  },
  {
    title: "The paracrine TAC1-TACR1 signaling promotes endothelial senescence and metastatic progression in neuroblastoma.",
    authors:
      "Liu X, Wang Y, Cheng Y, Yuan X, Li Y, Lian J, Duan Y, Zheng S, Wu C, Huang G, Zhao B, Hu J, Zhang B, Xu H, Liu C, Duan L, Dong R, Hong X, Wen F",
    journal: "Cancer Lett",
    year: "2026 Jul 10",
    role: "排名第一",
    correspondingAuthors: ["Dong R", "Hong X", "Wen F"],
    href: "https://pubmed.ncbi.nlm.nih.gov/41985871/",
  },
  {
    title:
      "Single-cell transcriptomic analysis deciphers heterogeneous cancer stem-like cells in colorectal cancer and their organ-specific metastasis.",
    authors:
      "Li R, Liu X, Huang X, Zhang D, Chen Z, Zhang J, Bai R, Zhang S, Zhao H, Xu Z, Zeng L, Zhuang L, Wen S, Wu S, Li M, Zuo Z, Lin J, Lin D, Zheng J",
    journal: "Gut",
    year: "2024 Feb 23",
    role: "共同一作排名第二",
    equalAuthors: ["Li R", "Liu X", "Huang X", "Zhang D"],
    correspondingAuthors: ["Lin J", "Lin D", "Zheng J"],
    href: "https://pubmed.ncbi.nlm.nih.gov/38050068/",
  },
  {
    title:
      "The Tumor-to-Endothelial Transfer of FTO Promotes Vascular Remodeling and Metastasis in Nasopharyngeal Carcinoma.",
    authors:
      "Wu C, Liu X, Gu L, Lian J, Wang Y, Cheng Y, Duan L, Huang G, Chen S, Zhao B, Liu S, Yang Y, Zheng S, Lu Z, Guo W, Hu J, Wang W, Zuo Z, Mai H, Tang L, Zhang S, Wen F, Hong X, Guo L",
    journal: "Adv Sci (Weinh)",
    year: "2026 Feb",
    role: "共同一作排名第二，共同通讯作者",
    equalAuthors: ["Wu C", "Liu X", "Gu L", "Lian J", "Wang Y"],
    correspondingAuthors: ["Liu X", "Zhang S", "Wen F", "Hong X", "Guo L"],
    href: "https://pubmed.ncbi.nlm.nih.gov/41311280/",
  },
  {
    title: "CBX3 confers ferroptosis resistance during blood-borne metastasis.",
    authors: "Wu C, Liu X, Zhao B, Zhao M, Zhang B, Huang G, Cheng Y, Zheng S, Hu J, Guo L, Guo W, Tan J, Hong X",
    journal: "J Hematol Oncol",
    year: "2026 Jan 15",
    role: "共同一作排名第二",
    equalAuthors: ["Wu C", "Liu X", "Zhao B"],
    correspondingAuthors: ["Guo W", "Tan J", "Hong X"],
    href: "https://pubmed.ncbi.nlm.nih.gov/41540451/",
  },
  {
    title: "Cannabinoid CB(2) receptor controls chronic itch by regulating spinal microglial activation and synaptic transmission.",
    authors: "Xu K, Liu X, Zeng Q, Liu Y, Shan L, Ji L, Wu Y, Wu J, Chen Y, Li Y, Huang S, Jiang C, Hong X, Wu C, Wang Z",
    journal: "Cell Rep",
    year: "2025 Apr 22",
    role: "共同一作排名第二",
    equalAuthors: ["Xu K", "Liu X"],
    correspondingAuthors: ["Hong X", "Wu C", "Wang Z"],
    href: "https://pubmed.ncbi.nlm.nih.gov/40222011/",
  },
  {
    title:
      "Fusion of Tumor Cells with Lipid-Associated Macrophages Drives Metastatic Progression of Breast Cancer.",
    authors:
      "Cheng Y, Huang G, Liu X, Wu C, Lian J, Cao J, Duan L, Zhao B, Yang Y, Chen S, Li G, Wu L, Zheng S, Wang W, Zha T, Yang Y, Lu Y, Zhang J, Yu H, Tan J, Wen F, He Z, Hong X",
    journal: "Cancer Res",
    year: "2026 Feb 2",
    role: "共同一作排名第三",
    equalAuthors: ["Cheng Y", "Huang G", "Liu X", "Wu C", "Lian J", "Cao J"],
    href: "https://pubmed.ncbi.nlm.nih.gov/41342370/",
  },
  {
    title:
      "PRDM1+ Malignant Cells Mediate an Immunosuppressive Landscape and Resistance to Neoadjuvant Chemoradiotherapy and Immunotherapy in Esophageal Squamous Cell Carcinoma.",
    authors: "Shen D, Li R, She Y, Liu X, Huang Y, Ji Y, Chen K, Song Z, Chen R, Li X, Zhao Q, Chen Q, Chen M",
    journal: "Adv Sci (Weinh)",
    year: "2026 Mar",
    role: "共同一作排名第四",
    equalAuthors: ["Shen D", "Li R", "She Y", "Liu X"],
    href: "https://pubmed.ncbi.nlm.nih.gov/41556358/",
  },
  {
    title:
      "Defined tumor antigen-specific T cells potentiate personalized TCR-T cell therapy and prediction of immunotherapy response.",
    authors:
      "He J, Xiong X, Yang H, Li D, Liu X, Li S, Liao S, Chen S, Wen X, Yu K, Fu L, Dong X, Zhu K, Xia X, Kang T, Bian C, Li X, Liu H, Ding P, Zhang X, Liu Z, Li W, Zuo Z, Zhou P",
    journal: "Cell Res",
    year: "2022 Jun",
    role: "共同一作排名第五",
    equalAuthors: ["He J", "Xiong X", "Yang H", "Li D", "Liu X"],
    correspondingAuthors: ["Ding P", "Zhang X", "Liu Z", "Li W", "Zuo Z", "Zhou P"],
    href: "https://pubmed.ncbi.nlm.nih.gov/35165422/",
  },
  {
    title: "Dysregulated adaptive immune response contributes to severe COVID-19.",
    authors: "Yu K, He J, Wu Y, Xie B, Liu X, Wei B, Zhou H, Lin B, Zuo Z, Wen W, Xu W, Zou B, Wei L, Huang X, Zhou P",
    journal: "Cell Res",
    year: "2020 Sep",
    role: "共同一作排名第五",
    equalAuthors: ["Yu K", "He J", "Wu Y", "Xie B", "Liu X", "Wei B"],
    correspondingAuthors: ["Wei L", "Huang X", "Zhou P"],
    href: "https://pubmed.ncbi.nlm.nih.gov/32759967/",
  },
  {
    title:
      "PD1(hi) CD200(hi) CD4(+) exhausted T cell increase immunotherapy resistance and tumour progression by promoting epithelial-mesenchymal transition in bladder cancer.",
    authors:
      "Wu C, Duan L, Li H, Liu X, Cai T, Yang Y, Yin Y, Chang W, Zhong L, Zhang L, Cheng Y, Qin H, Wen Z, Wang H, Mai S",
    journal: "Clin Transl Med",
    year: "2023 Jun",
    role: "共同一作排名第四，共同通讯作者",
    equalAuthors: ["Wu C", "Duan L", "Li H", "Liu X"],
    correspondingAuthors: ["Liu X", "Wang H", "Mai S"],
    href: "https://pubmed.ncbi.nlm.nih.gov/37313656/",
  },
  {
    title:
      "The Crosstalk Between Malignant Cells and Tumor-Promoting Immune Cells Relevant to Immunotherapy in Pancreatic Ductal Adenocarcinoma.",
    authors: "Liu X, Luo Z, Ren X, Chen Z, Bao X, Zheng J, Zuo Z",
    journal: "Front Cell Dev Biol",
    year: "2021",
    role: "共同一作排名第一",
    equalAuthors: ["Liu X", "Luo Z", "Ren X"],
    correspondingAuthors: ["Zheng J", "Zuo Z"],
    href: "https://pubmed.ncbi.nlm.nih.gov/35087839/",
  },
  {
    title: "TIGER: A Web Portal of Tumor Immunotherapy Gene Expression Resource.",
    authors: "Chen Z, Luo Z, Zhang D, Li H, Liu X, Zhu K, Zhang H, Wang Z, Zhou P, Ren J, Zhao A, Zuo Z",
    journal: "Genomics Proteomics Bioinformatics",
    year: "2023 Apr",
    role: "共同一作排名第五",
    equalAuthors: ["Chen Z", "Luo Z", "Zhang D", "Li H", "Liu X"],
    correspondingAuthors: ["Zhou P", "Ren J", "Zhao A", "Zuo Z"],
    href: "https://pubmed.ncbi.nlm.nih.gov/36049666/",
  },
  {
    title:
      "Comprehensive Evaluation of the m(6)A Regulator Prognostic Risk Score in the Prediction of Immunotherapy Response in Clear Cell Renal Cell Carcinoma.",
    authors: "Yu M, Liu X, Xu H, Shen S, Wang F, Chen D, Li G, Wang Z, Zuo Z, Zhao A",
    journal: "Front Immunol",
    year: "2022",
    role: "共同一作排名第二",
    equalAuthors: ["Yu M", "Liu X", "Xu H"],
    correspondingAuthors: ["Wang Z", "Zuo Z", "Zhao A"],
    href: "https://pubmed.ncbi.nlm.nih.gov/35784363/",
  },
  {
    title: "Evolutionary route of nasopharyngeal carcinoma metastasis and its clinical significance.",
    authors:
      "Lin M, Zhang XL, You R, Liu YP, Cai HM, Liu LZ, Liu XF, Zou X, Xie YL, Zou RH, Zhang YN, Sun R, Feng WY, Wang HY, Tao GH, Li HJ, Huang WJ, Zhang C, Huang PY, Wang J, Zhao Q, Yang Q, Zhang HW, Liu T, Li HF, Jiang XB, Tang J, Gu YK, Yu T, Wang ZQ, Feng L, Kang TB, Zuo ZX, Chen MY",
    journal: "Nat Commun",
    year: "2023 Feb 4",
    role: "共同一作排名第七",
    equalAuthors: ["Lin M", "Zhang XL", "You R", "Liu YP", "Cai HM", "Liu LZ", "Liu XF"],
    correspondingAuthors: ["Zuo ZX", "Chen MY"],
    href: "https://pubmed.ncbi.nlm.nih.gov/36739462/",
  },
  {
    title: "Gene features of tumor-specific T cells relevant to immunotherapy, targeted therapy and chemotherapy in lung cancer.",
    authors: "Luo Z, Liu X, Chen Y, Shen L, Qin H, Zha Q, Hu F, Wang Y",
    journal: "Heliyon",
    year: "2024 Apr 15",
    role: "共同一作排名第二",
    equalAuthors: ["Luo Z", "Liu X", "Chen Y"],
    correspondingAuthors: ["Wang Y"],
    href: "https://pubmed.ncbi.nlm.nih.gov/38590880/",
  },
];

export const projects = [
  {
    title:
      "神经母细胞瘤与内皮互作促进血管内侵的机制研究",
    years: "2025.01.01 - 2027.12.31",
    amount: "30万元",
    body: "国家自然科学基金委员会青年学生基础研究项目（博士研究生），在研，主持。",
    tag: "在研",
  },
  {
    title:
      "红薯山药复合功能性饮料的研制及其活性物质去氢表雄酮的提取优化研究",
    years: "2018.01.01 - 2018.12.31",
    amount: "2万元",
    body: "国家级大学生创新创业训练计划，结题优秀，主持。",
    tag: "已结题",
  },
  {
    title:
      "天然产物多球壳菌素介导线粒体相关功能而调控细胞寿命",
    years: "2017.01.01 - 2017.12.31",
    amount: "2万元",
    body: "国家级大学生创新创业训练计划，结题合格，主持。",
    tag: "已结题",
  },
];

export const awards = [
  "2026 年 南方科技大学优秀毕业生",
  "2025 年 比亚迪奖学金",
  "2025 年 南方科技大学未来之星研究生学术论坛二等奖",
  "2022 年 泰和诚企业奖学金",
  "2022 年 中山大学优秀硕士学位论文",
  "2018 年 唐立新奖学金",
  "2018 年 国家奖学金",
];

export const team = [
  {
    name: "Xuefei Liu",
    cn: "刘雪飞",
    displayName: "刘雪飞 (Xuefei Liu)",
    role: "课题负责人",
    school: "南方科技大学",
    degree: "博士研究生（已毕业）",
    image: assetPath("xuefei-liu.png"),
  },
  {
    name: "Chun Wu",
    cn: "吴纯",
    displayName: "吴纯 (Chun Wu)",
    role: "负责基础实验",
    school: "中山大学 肿瘤防治中心",
    degree: "博士研究生（已毕业）",
    image: assetPath("wuchun.jpg"),
  },
  {
    name: "Yixin Cheng",
    cn: "程一昕",
    displayName: "程一昕 (Yixin Cheng)",
    role: "负责基础实验",
    school: "中山大学 肿瘤防治中心",
    degree: "博士研究生",
    image: assetPath("chengyx.jpg"),
  },
  {
    name: "Guanyin Huang",
    cn: "黄官印",
    displayName: "黄官印 (Guanyin Huang)",
    role: "负责生信分析",
    school: "南方科技大学",
    degree: "博士研究生",
    image: assetPath("huanggy.jpg"),
  },
  {
    name: "Lianhui Duan",
    cn: "段连慧",
    displayName: "段连慧 (Lianhui Duan)",
    role: "负责生信分析",
    school: "清华大学",
    degree: "博士研究生",
    image: assetPath("duanlh.jpg"),
  },
];

export const dxTeam = {
  title: "地下小分队 DX Team",
  aboutTitle: "关于地下小分队 (DX Team)",
  statements: [
    "我们受够了平庸的盲从与无休止的内耗！！绝不向荒谬的‘瞎搞’妥协，绝不为愚蠢的决策买单！！！！",
    "独立自主，去伪存真。DX Team 坚持从设计、分析、实验、撰写的全栈式科研，拒绝无效内卷，整合核心资源。",
  ],
  badges: [
    "基金超200万元",
    "发表8篇 / 在投3篇",
    "博士国自然 x1",
    "博士青托工程 x2",
    "国奖 x2 / 专项奖 x1",
  ],
  membersTitle: "小分队成员 Team Members",
};
