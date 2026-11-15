<template>
  <div class="pm-section">

    <!-- ══ 🕹️ 试玩 Demo — 醒目横幅入口 ══ -->
    <div class="pm-block demo-banner-block">
      <div class="demo-banner">
        <div class="demo-banner-left">
          <div class="demo-banner-eyebrow">🕹️ PLAYGROUND</div>
          <div class="demo-banner-title">来试玩 Demo！</div>
          <div class="demo-banner-desc">
            AI 销售助手、数据可视化、低代码流程……可以直接上手把玩的小玩意儿
          </div>
        </div>
        <div class="demo-banner-right">
          <div class="demo-mini-cards">
            <a class="demo-mini-card" href="/demo">
              <span class="dmc-icon">🤖</span>
              <span class="dmc-label">AI 对练</span>
            </a>
            <a class="demo-mini-card" href="/demo">
              <span class="dmc-icon">📊</span>
              <span class="dmc-label">数据图表</span>
            </a>
            <a class="demo-mini-card soon" href="/demo">
              <span class="dmc-icon">🗂️</span>
              <span class="dmc-label">流程编辑</span>
              <span class="dmc-soon">即将上线</span>
            </a>
          </div>
          <a href="/demo" class="demo-banner-btn">
            进入试玩场
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- ══ 💼 项目经历 ══ -->
    <div class="pm-block">
      <div class="pm-block-header">
        <div class="pm-section-title">
          💼 项目经历
        </div>
        <div class="pm-section-sub">主导 or 独立负责 · 从 0 到 1 完整交付</div>
        <a href="/projects" class="pm-view-all">查看全部 →</a>
      </div>
      <div class="pm-divider"></div>

      <div class="card-list">

        <a class="post-card" href="/projects#saas-platform">
          <div class="card-tags">
            <span class="tag tag-blue">SaaS架构</span>
            <span class="tag tag-purple">权限模型</span>
            <span class="tag tag-green">Java</span>
          </div>
          <div class="card-title">千万级 B 端 SaaS 平台 · 多租户权限中台 0→1 设计</div>
          <div class="card-summary">
            主导某头部 ERP 厂商多租户权限体系从零到一的建设，覆盖 RBAC + ABAC 混合模型设计、菜单 / 数据 / 操作三层权限拆解，
            支撑 200+ 企业客户接入。通过对 Spring Security 鉴权链路的深度拆解，将原有鉴权耗时从 120ms 优化至 18ms，
            核心接口 QPS 提升 3.8 倍。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 2.4k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 18,302 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 86 评论</span>
            <span class="badge-top">📌 置顶</span>
          </div>
        </a>

        <a class="post-card" href="/projects#ai-agent">
          <div class="card-tags">
            <span class="tag tag-cyan">AI Agent</span>
            <span class="tag tag-purple">RAG</span>
            <span class="tag tag-orange">LangChain</span>
          </div>
          <div class="card-title">企业内部知识库 AI Agent · 从 POC 到规模化落地全过程复盘</div>
          <div class="card-summary">
            基于 RAG + ReAct Agent 架构，为某制造业客户落地内部知识问答系统。
            负责完整的产品定义：分块策略选型（Sentence Splitter vs. Semantic Chunking）、向量召回 + BM25 混合检索设计、
            Prompt 工程迭代，以及"幻觉率"评估体系搭建。上线 3 个月，客服工单量下降 41%。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 3.1k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 24,517 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 134 评论</span>
            <span class="badge-top">🏆 精华</span>
          </div>
        </a>

        <a class="post-card" href="/projects#lowcode">
          <div class="card-tags">
            <span class="tag tag-purple">低代码</span>
            <span class="tag tag-cyan">流程引擎</span>
            <span class="tag tag-blue">SaaS架构</span>
          </div>
          <div class="card-title">低代码流程引擎 · 可视化审批流 DSL 设计与执行器实现</div>
          <div class="card-summary">
            设计基于 JSON DSL 的可视化审批流配置方案，支持条件分支、并行网关、超时回退等复杂场景，
            兼容钉钉 / 企微 / 自研 App 三端消息推送。用 Python 实现 DSL 解释器原型验证可行性，
            最终落地后客户自助配置流程平均耗时从 3 天缩短至 2 小时。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 2.0k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 14,230 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 72 评论</span>
          </div>
        </a>

        <a class="post-card" href="/projects#data-platform">
          <div class="card-tags">
            <span class="tag tag-blue">数据产品</span>
            <span class="tag tag-green">BI</span>
            <span class="tag tag-orange">Python</span>
          </div>
          <div class="card-title">供应链数据中台 · 实时 BI 看板与智能预警系统设计</div>
          <div class="card-summary">
            牵头某零售集团供应链数据中台建设，设计覆盖 50+ 核心指标的统一指标树，
            对接 Flink 实时计算层实现 T+0 数据刷新。智能预警模块采用 Prophet 时序预测，
            库存异常预警准确率达 89%，帮助客户减少滞销损耗约 1,200 万/年。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 1.8k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 11,048 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 57 评论</span>
          </div>
        </a>

      </div>
    </div>

    <!-- ══ 💡 个人思考 ══ -->
    <div class="pm-block">
      <div class="pm-block-header">
        <div class="pm-section-title">
          💡 个人思考
        </div>
        <div class="pm-section-sub">在真实项目中被温过、被验证过的认知</div>
        <a href="/thoughts" class="pm-view-all">查看全部 →</a>
      </div>
      <div class="pm-divider"></div>

      <div class="card-list">

        <a class="post-card" href="/thoughts#llm-pm">
          <div class="card-tags">
            <span class="tag tag-cyan">大模型</span>
            <span class="tag tag-purple">产品方法论</span>
          </div>
          <div class="card-title">当 LLM 遇上 B 端产品：我总结的 5 个「不能照搬 C 端」的坑</div>
          <div class="card-summary">
            大模型在 C 端爆发之后，很多团队开始照搬思路做 B 端 AI 产品，踩了一堆坑。
            本文从权限边界、数据安全、稳定性 SLA、"可解释性"诉求和 ROI 核算五个维度，
            系统梳理 B 端 AI 产品与 C 端的本质差异，并给出具体的产品设计对策。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 4.2k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 31,886 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 203 评论</span>
            <span class="badge-top">🏆 精华</span>
          </div>
        </a>

        <a class="post-card" href="/thoughts#rag-product">
          <div class="card-tags">
            <span class="tag tag-cyan">RAG</span>
            <span class="tag tag-orange">AI Agent</span>
            <span class="tag tag-blue">架构</span>
          </div>
          <div class="card-title">产品视角看 RAG：为什么你的知识库"感觉很蠢"？</div>
          <div class="card-summary">
            绝大多数企业知识库"感觉很蠢"，根因不在模型，在产品设计。
            本文从分块粒度、元数据富化、检索策略、重排序和上下文裁剪五个环节，
            用非技术语言解释每一步对"回答质量"的影响，帮助 PM 与算法团队对齐语言。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 3.6k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 26,104 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 158 评论</span>
          </div>
        </a>

        <a class="post-card" href="/thoughts#saas-abstraction">
          <div class="card-tags">
            <span class="tag tag-blue">SaaS架构</span>
            <span class="tag tag-green">系统抽象</span>
          </div>
          <div class="card-title">SaaS 产品的「抽象层」：为什么有开发背景的 PM 更容易做好 B 端？</div>
          <div class="card-summary">
            "懂技术的 PM"不是会写代码，而是能在正确的抽象层上思考问题。
            本文以权限、工作流、多租户三个经典模块为例，
            分析"抽象层选错"如何造成后期无法迭代的技术债，以及 PM 应该如何在需求阶段介入。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 2.9k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 19,560 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 91 评论</span>
            <span class="badge-top">📌 置顶</span>
          </div>
        </a>

        <a class="post-card" href="/thoughts#metrics">
          <div class="card-tags">
            <span class="tag tag-orange">数据分析</span>
            <span class="tag tag-green">指标体系</span>
            <span class="tag tag-purple">产品方法论</span>
          </div>
          <div class="card-title">B 端产品的指标陷阱：DAU、留存率为什么在 ToB 里"没用"？</div>
          <div class="card-summary">
            ToC 的黄金指标套到 ToB 往往南辕北辙。本文梳理 B 端产品真正应该关注的核心指标——
            合同续约率、功能渗透率、关键路径完成率、客户健康度评分（CHS），
            并给出每个指标的计算方式与埋点设计建议。
          </div>
          <div class="card-meta">
            <span class="meta-item"><span class="meta-icon">🔥</span> 2.1k 热度</span>
            <span class="meta-item"><span class="meta-icon">👁️</span> 15,772 阅读</span>
            <span class="meta-item"><span class="meta-icon">💬</span> 68 评论</span>
          </div>
        </a>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* ── 外层容器 ── */
.pm-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px 100px;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

/* ── 板块间距 ── */
.pm-block + .pm-block {
  margin-top: 80px;
}

/* ── 板块顶部 header ── */
.pm-block-header {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px 16px;
  margin-bottom: 10px;
}

/* ── 板块大标题 ── */
.pm-section-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--vp-c-text-1, #3a3025);
  letter-spacing: -0.01em;
  line-height: 1.3;
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 100%;
}

/* ── 副标题 ── */
.pm-section-sub {
  font-size: 0.875rem;
  color: var(--vp-c-text-3, #b0a090);
  flex: 1 1 auto;
  padding-top: 2px;
}

/* ── 查看全部 ── */
.pm-view-all {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--ac-leaf, #5cb85c);
  text-decoration: none;
  border: 1.5px solid rgba(92,184,92,0.4);
  border-radius: 999px;
  padding: 4px 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
  align-self: center;
}

.pm-view-all:hover {
  background: var(--ac-leaf, #5cb85c);
  color: #fff;
  border-color: var(--ac-leaf, #5cb85c);
  transform: translateY(-1px);
  box-shadow: 0 3px 0 rgba(61,158,61,0.4);
}

/* ── 分隔线 ── */
.pm-divider {
  height: 3px;
  background: linear-gradient(90deg,
    #5cb85c 0%,
    #5bbfef 50%,
    transparent 100%
  );
  margin-bottom: 28px;
  opacity: 0.55;
  border-radius: 2px;
}

/* ── 卡片列表 ── */
.card-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* ── 单张帖子卡片 ── */
.post-card {
  position: relative;
  background: #fff;
  border: 2px solid rgba(92,184,92,0.25);
  border-radius: 22px;
  padding: 22px 24px;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.3s ease,
              border-color 0.3s ease;
  overflow: hidden;
  text-decoration: none;
  display: block;
  color: inherit;
  box-shadow: 0 2px 10px rgba(160,115,90,0.1);
}

.post-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 5px; height: 100%;
  background: linear-gradient(180deg, #5cb85c, #5bbfef);
  opacity: 0;
  transition: opacity 0.25s ease;
  border-radius: 4px 0 0 4px;
}

.post-card:hover {
  transform: translateY(-5px);
  border-color: #5cb85c;
  box-shadow:
    0 8px 0 rgba(92,184,92,0.25),
    0 16px 40px rgba(92,184,92,0.18),
    0 4px 12px rgba(160,115,90,0.1);
}

.post-card:hover::before { opacity: 1; }

/* ── 标签 ── */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 12px;
}

.tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  padding: 2px 10px;
  border-radius: 999px;
  letter-spacing: 0.03em;
  transition: transform 0.2s ease;
}

.tag-blue   { background:#e8f4ff; color:#2e86c1; border:1.5px solid #bdd9f0; }
.tag-purple { background:#f3edff; color:#7c3aed; border:1.5px solid #d4bbf7; }
.tag-green  { background:#e8f8e8; color:#2d7d2d; border:1.5px solid #a8dfa8; }
.tag-orange { background:#fff3e8; color:#c05c1a; border:1.5px solid #f5c99a; }
.tag-cyan   { background:#e8f7fd; color:#0e7490; border:1.5px solid #a0dcf0; }

/* 暗色 */
:global(.dark) .post-card {
  background: #263228;
  border-color: rgba(92,184,92,0.18);
}
:global(.dark) .tag-blue   { background:rgba(59,130,246,.15);  color:#7ec8fa; border-color:rgba(59,130,246,.3); }
:global(.dark) .tag-purple { background:rgba(124,58,237,.15);  color:#c084fc; border-color:rgba(124,58,237,.3); }
:global(.dark) .tag-green  { background:rgba(92,184,92,.15);   color:#7dcf7d; border-color:rgba(92,184,92,.3);  }
:global(.dark) .tag-orange { background:rgba(244,132,95,.15);  color:#f4a070; border-color:rgba(244,132,95,.3); }
:global(.dark) .tag-cyan   { background:rgba(91,191,239,.15);  color:#5bbfef; border-color:rgba(91,191,239,.3); }

/* ── 卡片标题 ── */
.card-title {
  font-size: 1.08rem;
  font-weight: 800;
  color: var(--vp-c-text-1, #3a3025);
  margin-bottom: 10px;
  line-height: 1.5;
  transition: color 0.2s;
}

.post-card:hover .card-title {
  color: #3d9e3d;
}

/* ── 摘要 ── */
.card-summary {
  font-size: 0.875rem;
  color: var(--vp-c-text-2, #7a6a58);
  line-height: 1.8;
  margin-bottom: 18px;
}

/* ── 底部数据栏 ── */
.card-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  color: var(--vp-c-text-3, #b0a090);
  font-family: 'JetBrains Mono', monospace;
  border-top: 1.5px solid rgba(160,115,90,0.14);
  padding-top: 12px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
}

.meta-item:hover { color: #5cb85c; }
.meta-icon { font-size: 14px; }

/* ── 置顶/精华徽章 ── */
.badge-top {
  margin-left: auto;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffd166, #f4845f);
  color: #fff;
  border: 1.5px solid rgba(0,0,0,0.08);
  box-shadow: 0 2px 0 rgba(0,0,0,0.1);
}

/* ════════════════════════════════════════
   Demo 横幅入口
   ════════════════════════════════════════ */
.demo-banner-block {
  margin-bottom: 0;
}

.demo-banner {
  display: flex;
  align-items: center;
  gap: 32px;
  background: linear-gradient(135deg,
    #e8f8e8 0%,
    #e0f4fb 50%,
    #f0eaff 100%
  );
  border: 2.5px solid #5cb85c;
  border-radius: 28px;
  padding: 32px 36px;
  box-shadow: 0 6px 0 rgba(92,184,92,0.4), 0 12px 40px rgba(92,184,92,0.14);
  position: relative;
  overflow: hidden;
}

/* 背景装饰 emoji */
.demo-banner::after {
  content: '🌿🌸🍄';
  position: absolute;
  right: 24px; top: 12px;
  font-size: 1.8rem;
  opacity: 0.18;
  letter-spacing: 4px;
  pointer-events: none;
}

:global(.dark) .demo-banner {
  background: linear-gradient(135deg,
    rgba(92,184,92,0.08) 0%,
    rgba(91,191,239,0.08) 50%,
    rgba(201,182,228,0.08) 100%
  );
}

.demo-banner-left {
  flex: 1;
  min-width: 0;
}

.demo-banner-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: #3d9e3d;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.demo-banner-title {
  font-size: 1.9rem;
  font-weight: 800;
  color: #2a5a2a;
  line-height: 1.2;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

:global(.dark) .demo-banner-title {
  color: #b0e0b0;
}

.demo-banner-desc {
  font-size: 0.9rem;
  color: #7a6a58;
  line-height: 1.7;
}

:global(.dark) .demo-banner-desc {
  color: #b8c4b0;
}

.demo-banner-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  flex-shrink: 0;
}

/* 迷你卡片横排 */
.demo-mini-cards {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.demo-mini-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: #fff;
  border: 2px solid rgba(92,184,92,0.4);
  border-radius: 16px;
  padding: 12px 16px;
  text-decoration: none;
  color: inherit;
  min-width: 72px;
  box-shadow: 0 3px 0 rgba(92,184,92,0.3);
  transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.25s ease;
  position: relative;
}

:global(.dark) .demo-mini-card {
  background: rgba(255,255,255,0.08);
  border-color: rgba(92,184,92,0.25);
}

.demo-mini-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 7px 0 rgba(92,184,92,0.3), 0 12px 24px rgba(92,184,92,0.2);
}

.demo-mini-card.soon {
  opacity: 0.65;
  cursor: default;
}
.demo-mini-card.soon:hover { transform: none; box-shadow: 0 3px 0 rgba(92,184,92,0.3); }

.dmc-icon { font-size: 1.5rem; line-height: 1; }

.dmc-label {
  font-size: 11px;
  font-weight: 700;
  color: #3a3025;
  white-space: nowrap;
}
:global(.dark) .dmc-label { color: #d0e0d0; }

.dmc-soon {
  position: absolute;
  top: -8px; right: -6px;
  font-size: 9px;
  font-weight: 800;
  padding: 1px 6px;
  border-radius: 999px;
  background: #ffd166;
  color: #7a4e00;
  border: 1px solid rgba(0,0,0,0.1);
  white-space: nowrap;
}

/* 进入试玩按钮 */
.demo-banner-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 800;
  color: #fff;
  background: #5cb85c;
  border: 2.5px solid #3d9e3d;
  border-radius: 999px;
  padding: 10px 24px;
  text-decoration: none;
  box-shadow: 0 4px 0 #3d9e3d, 0 8px 24px rgba(92,184,92,0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  white-space: nowrap;
}

.demo-banner-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 0 #3d9e3d, 0 12px 32px rgba(92,184,92,0.35);
}

.demo-banner-btn:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #3d9e3d;
}

/* ── 响应式 ── */
@media (max-width: 700px) {
  .demo-banner {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 22px;
    gap: 24px;
  }
  .demo-banner-right {
    align-items: flex-start;
    width: 100%;
  }
  .demo-mini-cards { justify-content: flex-start; }
  .demo-banner-title { font-size: 1.5rem; }
  .demo-banner::after { display: none; }
}

@media (max-width: 640px) {
  .pm-section { padding: 32px 16px 60px; }
  .post-card { padding: 18px 16px; }
  .card-title { font-size: 1rem; }
  .card-meta { gap: 10px; }
  .pm-section-title { font-size: 1.4rem; }
  .pm-block-header { flex-direction: column; gap: 6px; }
  .pm-view-all { align-self: flex-start; }
}
</style>
