---
layout: page
title: 项目经历
---

<style>
/* ──────────────────────────────────────────────────────────
   动森风格“项目故事板”全局布局
   ────────────────────────────────────────────────────────── */
.projects-story-container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 10px 0 80px;
  font-family: var(--vp-font-family-base, 'Space Grotesk', system-ui, sans-serif);
  color: var(--vp-c-text-1, #3a3025);
  box-sizing: border-box;
}

/* 顶部告示牌 */
.storyboard-header-banner {
  background: #ffffff;
  border: 3px solid #5cb85c;
  border-radius: 26px;
  padding: 28px 32px;
  box-shadow: 0 6px 0 #3d9e3d, 0 16px 36px rgba(92, 184, 92, 0.12);
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

:global(.dark) .storyboard-header-banner {
  background: #232f25;
  border-color: #4da34d;
  box-shadow: 0 6px 0 #2a5a2a, 0 16px 36px rgba(0, 0, 0, 0.35);
}

.sb-banner-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #e8f8e8;
  color: #2d7d2d;
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 11px;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: 999px;
  border: 1.5px solid #a8dfa8;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
}

:global(.dark) .sb-banner-tag {
  background: rgba(92, 184, 92, 0.15);
  color: #7dcf7d;
  border-color: rgba(92, 184, 92, 0.35);
}

.sb-banner-title {
  font-size: 1.85rem;
  font-weight: 800;
  color: #2b452e;
  line-height: 1.25;
  margin: 0 0 10px;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .sb-banner-title {
  color: #c4ecc4;
}

.sb-banner-desc {
  font-size: 0.95rem;
  color: #5c4d3c;
  line-height: 1.75;
  margin: 0;
}

:global(.dark) .sb-banner-desc {
  color: #c2d1bd;
}

/* 故事板单张卡片 */
.story-chapter-card {
  background: #ffffff;
  border: 2.5px solid #a0735a;
  border-radius: 26px;
  box-shadow: 0 6px 0 #734f3a, 0 14px 36px rgba(160, 115, 90, 0.14);
  padding: 32px 34px;
  margin-bottom: 48px;
  position: relative;
  box-sizing: border-box;
}

:global(.dark) .story-chapter-card {
  background: #232a25;
  border-color: #8c674b;
  box-shadow: 0 6px 0 #4f3624, 0 14px 36px rgba(0,0,0,0.35);
}

.story-chapter-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  border-bottom: 2px dashed rgba(160, 115, 90, 0.25);
  padding-bottom: 20px;
  margin-bottom: 24px;
}

.story-chapter-num {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  color: #ffffff;
  background: linear-gradient(135deg, #f4845f, #ffd166);
  padding: 10px 16px;
  border-radius: 18px;
  border: 2px solid #a0735a;
  box-shadow: 0 4px 0 #734f3a;
  flex-shrink: 0;
  user-select: none;
}

.story-chapter-meta {
  flex: 1;
}

.story-badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.sb-badge {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 999px;
  border: 1.5px solid;
}

.sb-blue   { background: #e8f4ff; color: #1d72b8; border-color: #b0d7f5; }
.sb-green  { background: #e8f8e8; color: #2d7d2d; border-color: #a8dfa8; }
.sb-orange { background: #fff3e8; color: #c05c1a; border-color: #f5c99a; }
.sb-purple { background: #f3edff; color: #7c3aed; border-color: #d4bbf7; }
.sb-cyan   { background: #ecfeff; color: #0e7490; border-color: #a5f3fc; }

:global(.dark) .sb-blue   { background: rgba(59,130,246,.15); color: #7ec8fa; border-color: rgba(59,130,246,.35); }
:global(.dark) .sb-green  { background: rgba(92,184,92,.15);  color: #8ce68c; border-color: rgba(92,184,92,.35);  }
:global(.dark) .sb-orange { background: rgba(244,132,95,.15); color: #fba985; border-color: rgba(244,132,95,.35); }
:global(.dark) .sb-purple { background: rgba(168,85,247,.15); color: #d8b4fe; border-color: rgba(168,85,247,.35); }
:global(.dark) .sb-cyan   { background: rgba(6,182,212,.15);   color: #67e8f9; border-color: rgba(6,182,212,.35);   }

.story-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: #382c23;
  line-height: 1.35;
  margin: 0 0 8px 0;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .story-title {
  color: #fed7aa;
}

.story-lead-quote {
  font-size: 0.92rem;
  color: #6a5747;
  line-height: 1.7;
  margin: 0;
  font-style: italic;
}

:global(.dark) .story-lead-quote {
  color: #b5c7af;
}

/* 幕标题 */
.story-act-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: 800;
  color: #2b452e;
  margin: 28px 0 14px;
  border-left: 4px solid #5cb85c;
  padding-left: 12px;
  border-top: none !important;
}

:global(.dark) .story-act-heading {
  color: #8ce68c;
}

/* 动森量化战果卡片群 (KPI) */
.story-kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 22px 0 26px;
}

.story-kpi-box {
  background: linear-gradient(135deg, #fdf8f0, #f7efe2);
  border: 2px solid #a0735a;
  border-radius: 18px;
  padding: 16px 12px;
  text-align: center;
  box-shadow: 0 4px 0 #734f3a;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-sizing: border-box;
}

:global(.dark) .story-kpi-box {
  background: #1e2620;
  border-color: #8c674b;
  box-shadow: 0 4px 0 #4f3624;
}

.story-kpi-box:hover {
  transform: translateY(-4px) rotate(-1deg);
}

.kpi-metric {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 1.5rem;
  font-weight: 800;
  color: #d97706;
  line-height: 1.2;
}

:global(.dark) .kpi-metric {
  color: #ffd166;
}

.kpi-label-text {
  font-size: 12px;
  font-weight: 700;
  color: #7a6a58;
  margin-top: 6px;
}

:global(.dark) .kpi-label-text {
  color: #a4b89e;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .story-chapter-card {
    padding: 22px 18px;
    border-radius: 20px;
  }
  .story-chapter-header {
    flex-direction: column;
    gap: 14px;
  }
  .story-chapter-num {
    font-size: 2rem;
    padding: 8px 14px;
  }
  .story-title {
    font-size: 1.3rem;
  }
  .story-kpi-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>

<div class="projects-story-container">

<div class="storyboard-header-banner">
  <div class="sb-banner-tag">
    <span>🎬</span>
    <span>PROJECT STORYBOARDS · 真实战役复盘</span>
  </div>
  <h1 class="sb-banner-title">产品项目故事板</h1>
  <p class="sb-banner-desc">
    摒弃冰冷单调的“负责了某某模块”式简历。在这里，每一场战役都是一次具体的工程冒险：遇到了什么令人头秃的业务巨坑、如何用产品逻辑与技术建模破局、最终拿下了怎样的量化战果。
  </p>
</div>

<!-- ════════════════════════════════════════
     故事板 01：3C 零售 SaaS 平台
════════════════════════════════════════ -->
<div class="story-chapter-card" id="project-01">

<div class="story-chapter-header">
  <div class="story-chapter-num">01</div>
  <div class="story-chapter-meta">
    <div class="story-badges-row">
      <span class="sb-badge sb-blue">SaaS平台架构</span>
      <span class="sb-badge sb-purple">多租户权限</span>
      <span class="sb-badge sb-orange">有限状态机 FSM</span>
      <span class="sb-badge sb-green">库存中台</span>
    </div>
    <h2 class="story-title">3C 零售 SaaS 平台 · 售后回收系统从 0 到 1 架构设计</h2>
    <p class="story-lead-quote">
      “某头部 3C 零售集团，原来几十家直营店和加盟店的售后全靠打勾画叉的内部 OA 和 Excel，状态扯皮、设备丢件是家常便饭。”
    </p>
  </div>
</div>

<h3 class="story-act-heading">💣 Act 1：踩坑现场 · 遭遇什么业务巨坑？</h3>

::: danger ⚠️ 真实痛点全景
* **「OA 孤岛困境」**：售后与质检数据散落在 ERP、WMS、CRM、财务、工单 5 套内部系统中，回收设备处于哪个质检环节只能电话反复催问。
* **盘点误差惊人**：每月全国库位盘点误差率高达 **12%**，翻新零件流向不明。
* **履约时效崩溃**：客诉处理平均需要 **3.2 天**，客户在店面拍桌子退卡成为日常。
:::

<h3 class="story-act-heading">🧠 Act 2：破局推演 · 产品抽象与架构拆解</h3>

::: info 📐 架构破局思路
1. **回收全链路有限状态机（FSM）**：严禁任意跳步修改订单状态，所有跳转严格绑定触发事件（如物理扫码验机、估价签名确认）。
2. **多租户权限中台**：直营店 vs 区域加盟商在数据层严格物理隔离，操作权限精细到“某门店具体设备的二次报价权”。
3. **至臻权益卡数字化**：设计防薅羊毛风控评分模型（`risk_score > 0.7` 自动冻结），打通跨门店通兑核销与账期结算。
:::

<h3 class="story-act-heading">🗺️ Act 3：业务状态机流程图</h3>

```mermaid
flowchart TD
    Start([顾客发起 3C 回收]) --> Eval{在线 AI 估价引擎}
    Eval -->|价格满意| Order[生成回收工单\n状态: PENDING]
    Eval -->|放弃回收| Drop([流程自然终止])

    Order --> Logistics[物流揽收扫码\n状态: IN_TRANSIT]
    Logistics --> Depot[仓库自动分拣\n状态: RECEIVED]

    Depot --> Check{双盲验机质检\n外观 + 核心元器件}
    Check -->|成色吻合| Storage[正式入库\n状态: WAREHOUSED]
    Check -->|发现隐蔽暗病| ReQuote[发起重新报价\n状态: RE_QUOTE]
    Check -->|假货/严重改装| Return[原路拒收退回\n状态: REJECTED]

    ReQuote -->|客户接受| Storage
    ReQuote -->|客户拒绝| Return

    Storage --> Route{自动化分流策略}
    Route --> GradeA[翻新上架二次销售\n状态: REFURBISHED]
    Route --> GradeB[环保拆解提取元器件\n状态: DISASSEMBLED]
    Route --> CardUser[权益卡专属回购通道\n状态: PRIORITY_SELL]

    GradeA & GradeB & CardUser --> Finish([自动触发财务账期与结算])
```

<h3 class="story-act-heading">🏆 Act 4：战果交付 · 用数据说话</h3>

<div class="story-kpi-grid">
  <div class="story-kpi-box">
    <div class="kpi-metric">12%→1.3%</div>
    <div class="kpi-label-text">月度盘点误差率</div>
  </div>
  <div class="story-kpi-box">
    <div class="kpi-metric">3.2天→6h</div>
    <div class="kpi-label-text">客诉平均响应时长</div>
  </div>
  <div class="story-kpi-box">
    <div class="kpi-metric">230+</div>
    <div class="kpi-label-text">接入门店与网点</div>
  </div>
  <div class="story-kpi-box">
    <div class="kpi-metric">40%↓</div>
    <div class="kpi-label-text">售后人工复核工时</div>
  </div>
</div>

::: tip 💡 核心设计复盘
该项目沉淀出了首个完整的**设备全生命周期流转图谱**，原本令人头疼的质检与折旧数据，反向为集团后续搭建“AI 动态估价模型”提供了最关键的干净训练集。
:::

</div>

<!-- ════════════════════════════════════════
     故事板 02：AI 销售对练与打分助手
════════════════════════════════════════ -->
<div class="story-chapter-card" id="project-02">

<div class="story-chapter-header">
  <div class="story-chapter-num">02</div>
  <div class="story-chapter-meta">
    <div class="story-badges-row">
      <span class="sb-badge sb-cyan">LLM Agent 落地</span>
      <span class="sb-badge sb-purple">Prompt Engineering</span>
      <span class="sb-badge sb-orange">CoT 结构化打分</span>
      <span class="sb-badge sb-green">降本增效</span>
    </div>
    <h2 class="story-title">企业级 AI 销售培训与智能打分助手</h2>
    <p class="story-lead-quote">
      “3,000+ 名一线销售每年靠资深讲师人肉陪练，打分标准随心情波动，新人等一轮模拟面试得排队三周……”
    </p>
  </div>
</div>

<h3 class="story-act-heading">💣 Act 1：踩坑现场 · 遭遇什么业务巨坑？</h3>

::: danger ⚠️ 传统企业培训的三座大山
* **培训成本高得离谱**：每场销售面试实操需 2 名资深导师全程陪练，单人次培训成本高达 **¥800/次**。
* **考核主观性如同开盲盒**：讲师喜好不一，同一段对话录音换两个讲师打分，分差竟然高达 **25 分**。
* **反馈周期极长**：销售练完之后，书面改进建议要 **5 个工作日**才能发到手上，早已忘记当时的话术语境。
:::

<h3 class="story-act-heading">🧠 Act 2：破局推演 · PREP 人格体系与 CoT 评分引擎</h3>

::: info 📐 提示词工程与系统链路设计
1. **PREP 客户人格模拟**：
   - **P**ersona（精准人格设定，如 35 岁、私营业主、注重性价比）
   - **R**esistance（预设核心异议点，模拟真实抗拒态度）
   - **E**motion（动态情绪曲线：销售话术扎实则松动，套话敷衍则升级愤怒）
   - **P**ath（自然成交判定链路）
2. **CoT（Chain-of-Thought）结构化五维评分**：
   - 强制要求大模型在给出分数前，先输出具体的亮点行为举证与扣分理由；
   - 引入 50 条专家打标的“黄金基准样本”，有效消除模型评分幻觉。
:::

<h3 class="story-act-heading">🗺️ Act 3：人机对抗与评分时序图</h3>

```mermaid
sequenceDiagram
    autonumber
    actor Trainee as 一线销售学员
    participant Audio as 语音识别 (ASR)
    participant Agent as AI 刁钻客户 (GPT-4o)
    participant Judge as CoT 评分推理引擎
    participant Report as 能力雷达与复盘看板

    Trainee->>Agent: 选择场景开始实战对练 (如: 价格异议逼单)
    loop 动态对练 8~12 轮
        Trainee->>Audio: 销售口述应答话术
        Audio->>Agent: 实时文字流 + 上下文窗口
        Agent->>Trainee: 模拟真实客户情绪反应 (质疑/松动/成交)
    end

    Agent->>Judge: 对话结束，提交完整脱敏对话语料
    Judge->>Judge: 执行行为抽取 -> 维度CoT推理 -> 防幻觉校准
    Judge->>Report: 输出 5 维度量化得分 + 针对性话术修正建议
    Report-->>Trainee: 3 秒内实时生成诊断报告
```

<h3 class="story-act-heading">🏆 Act 4：战果交付 · 用数据说话</h3>

<div class="story-kpi-grid">
  <div class="story-kpi-box">
    <div class="kpi-metric">¥800→¥35</div>
    <div class="kpi-label-text">单次培训综合成本</div>
  </div>
  <div class="story-kpi-box">
    <div class="kpi-metric">40%→94%</div>
    <div class="kpi-label-text">年度学员覆盖率</div>
  </div>
  <div class="story-kpi-box">
    <div class="kpi-metric">5天→3秒</div>
    <div class="kpi-label-text">诊断报告反馈时效</div>
  </div>
  <div class="story-kpi-box">
    <div class="kpi-metric">r = 0.923</div>
    <div class="kpi-label-text">AI与讲师打分相关度</div>
  </div>
</div>

::: tip 🔬 实验证明
上线前进行了严格的 120 场双盲评测：AI 打分与专家团队打分的 Pearson 相关系数达到 **r=0.923**，甚至超越了讲师之间的互评一致性（r=0.871）！
:::

</div>

<!-- ════════════════════════════════════════
     故事板 03：全栈独立游乐园管理系统
════════════════════════════════════════ -->
<div class="story-chapter-card" id="project-03">

<div class="story-chapter-header">
  <div class="story-chapter-num">03</div>
  <div class="story-chapter-meta">
    <div class="story-badges-row">
      <span class="sb-badge sb-green">独立全栈落地</span>
      <span class="sb-badge sb-blue">Flask / Vue 3</span>
      <span class="sb-badge sb-orange">Redis Lua 防超卖</span>
      <span class="sb-badge sb-purple">工程认知沉淀</span>
    </div>
    <h2 class="story-title">Web 端游乐园运营管理系统 · 全栈独立设计与实现</h2>
    <p class="story-lead-quote">
      “我不认同‘产品经理只负责画线框图’。为了能在正确的抽象层上与工程师对等对话，我亲手写了从数据库索引到前端状态管理的全部代码。”
    </p>
  </div>
</div>

<h3 class="story-act-heading">💣 Act 1：踩坑现场 · 遭遇什么业务巨坑？</h3>

::: danger ⚠️ 高频履约业务的典型陷阱
* **高峰期票务超卖**：传统在 MySQL 事务中 `SELECT ... FOR UPDATE` 很容易产生行级锁等待甚至死锁，并发一旦超过 200 QPS 数据库直接卡死。
* **排班冲突逻辑模糊**：员工、设施、班次关联关系繁琐，原型如果没想清楚边界条件，开发阶段极易产生“同一员工同一时间被双派工”的脏数据。
:::

<h3 class="story-act-heading">🧠 Act 2：破局推演 · 架构设计与工程选型</h3>

::: info 📐 产品向技术视角的转变
1. **Redis + Lua 脚本原子性扣减**：把并发库存校验前置到缓存层，查库存与减库存合并为单步原子操作，抗住 2000+ QPS 峰值。
2. **数据库唯一键约束防冲突**：给 `timeslot` 表与员工排班表增加复合唯一索引 `UNIQUE KEY uk_attraction_slot (attraction_id, slot_date, slot_start)`，从存储层彻底杜绝业务逻辑漏网之鱼。
:::

<h3 class="story-act-heading">🗺️ Act 3：全栈系统架构图</h3>

```mermaid
flowchart TD
    subgraph 前端应用层 Frontend
        UI[Vue 3 + Vite 响应式界面]
        Pinia[Pinia 全局状态管理]
        Axios[Axios 请求拦截与 JWT 续签]
        UI --> Pinia --> Axios
    end

    subgraph 后端服务层 Backend
        API[Flask RESTful API 路由]
        Auth[JWT 鉴权与 RBAC 中间件]
        Biz[核心业务层: 票务/排班/看板]
        ORM[SQLAlchemy ORM 映射]
        Axios --> API --> Auth --> Biz --> ORM
    end

    subgraph 高性能缓存层 Cache
        Redis[(Redis 集群)]
        Lua[Lua 原子防超卖脚本]
        Biz -->|库存预检 & 扣减| Lua --> Redis
    end

    subgraph 关系型数据层 Database
        MySQL[(MySQL 8.0 核心存储)]
        T1[(attraction 设施表)]
        T2[(timeslot 时段表)]
        T3[(booking_order 订单表)]
        ORM --> MySQL
        MySQL --- T1 & T2 & T3
    end
```

<h3 class="story-act-heading">🏆 Act 4：战果交付 · PM 视角的三个认知跃迁</h3>

::: warning 📌 这次工程实战带给 PM 工作的真正底气
1. **接口设计即业务语义**：退款和取消绝不能偷懒合并为一个接口，状态机区分清楚，研发沟通成本砍半。
2. **索引与吞吐量的权衡**：明白了“索引不是免费的”，提看板需求时不再盲目要求所有字段任意组合实时多维筛选。
3. **前端状态是产品复杂度的镜子**：Pinia store 越难维护，说明交互状态设计越冗余。在 PRD 原型阶段就把数据流向梳理顺畅，而不是让前端去猜。
:::

</div>

</div>
