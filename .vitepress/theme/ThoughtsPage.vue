<template>
  <div class="thoughts-wrap">

    <!-- ══ 页面顶部 ══ -->
    <div class="page-header">
      <div class="page-eyebrow">// THOUGHTS</div>
      <h1 class="page-title">产品思考</h1>
      <p class="page-desc">
        这里记录的不是方法论的堆砌，而是在真实项目中被踩过、被验证过的认知。
        每一篇文章背后都有一个具体的业务场景。
      </p>
      <div class="page-stats">
        <span class="stat-item"><span class="stat-num">3</span> 篇文章</span>
        <span class="stat-sep">·</span>
        <span class="stat-item">涵盖 <span class="stat-num">5</span> 个领域</span>
        <span class="stat-sep">·</span>
        <span class="stat-item">持续更新中</span>
      </div>
    </div>

    <!-- ══ 分类过滤器 ══ -->
    <div class="filter-bar">
      <button
        v-for="cat in categories"
        :key="cat.id"
        class="filter-btn"
        :class="{ active: activeCategory === cat.id }"
        @click="activeCategory = cat.id"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- ══ 时间线 ══ -->
    <div class="timeline-wrap">
      <div class="timeline-line"></div>

      <template v-for="(article, index) in filteredArticles" :key="article.id">
        <!-- 年份分隔 -->
        <div v-if="index === 0 || article.year !== filteredArticles[index - 1].year"
             class="year-node">
          <div class="year-dot"></div>
          <span class="year-label">{{ article.year }}</span>
        </div>

        <!-- 文章卡片 -->
        <div class="article-card" :class="`accent-${article.accent}`">

          <!-- 时间线节点 -->
          <div class="tl-dot">
            <div class="tl-dot-inner"></div>
          </div>

          <!-- 卡片内容 -->
          <div class="card-body">

            <!-- 顶部元信息 -->
            <div class="card-top-meta">
              <span class="article-date">{{ article.date }}</span>
              <span class="read-time">☕ {{ article.readTime }} 分钟阅读</span>
            </div>

            <!-- 标签行 -->
            <div class="card-tags">
              <span v-for="tag in article.tags" :key="tag.text"
                    class="tag" :class="`tag-${tag.color}`">
                {{ tag.text }}
              </span>
            </div>

            <!-- 文章标题 -->
            <h2 class="article-title">{{ article.title }}</h2>

            <!-- 引言块 -->
            <blockquote class="article-quote">
              <span class="quote-mark">"</span>
              {{ article.quote }}
              <span class="quote-mark">"</span>
            </blockquote>

            <!-- 核心观点 -->
            <div class="key-points">
              <div class="key-points-label">
                <span class="kp-icon">⚡</span> 核心观点
              </div>
              <ul class="kp-list">
                <li v-for="(point, i) in article.keyPoints" :key="i" class="kp-item">
                  <span class="kp-num">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="kp-text">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- 底部操作栏 -->
            <div class="card-footer">
              <div class="card-footer-left">
                <span class="meta-pill">🔥 {{ article.heat }}</span>
                <span class="meta-pill">👁️ {{ article.views }}</span>
                <span class="meta-pill">💬 {{ article.comments }}</span>
              </div>
              <a class="read-more-btn" :href="article.link">
                阅读全文
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </template>

    </div><!-- /.timeline-wrap -->

    <!-- ══ 底部占位 ══ -->
    <div class="page-footer">
      <div class="footer-line"></div>
      <p class="footer-tip">
        💡 更多思考沉淀中，欢迎通过邮件与我交流
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const categories = [
  { id: 'all',   label: '# 全部' },
  { id: 'saas',  label: '# SaaS架构' },
  { id: 'ai',    label: '# AI落地' },
  { id: 'game',  label: '# 跨界思考' },
]

const activeCategory = ref('all')

const articles = [
  {
    id: 1,
    year: '2024',
    date: '2024 · 11 · 08',
    readTime: 12,
    accent: 'blue',
    category: 'saas',
    tags: [
      { text: 'B端SaaS', color: 'blue' },
      { text: '库存管理', color: 'green' },
      { text: '状态机设计', color: 'purple' },
    ],
    title: '从 0 到 1：B 端 SaaS 逆向库存流转的设计踩坑录',
    quote: '大多数 B 端库存系统崩溃的根因，不是技术问题，是产品在设计初期把"退货"和"换货"当成了同一件事。',
    keyPoints: [
      '痛点一 · 状态定义不清：回收流与正向销售流共享同一套库存状态码，导致"在途回收品"和"在售商品"频繁串数，月末盘点误差高达 12%。核心解法：为逆向流建立独立状态机，用 FSM 枚举所有非法跳转并在 DB 层拦截。',
      '痛点二 · 权责边界模糊：加盟商发起回收、平台仓库验货、品牌商结算三方数据割裂，任何一环的确认延迟都会卡住整条链路。核心解法：引入"逆向工单"作为三方数据载体，以工单 ID 作为唯一追踪锚点。',
      '痛点三 · 超卖与负库存：促销期间"以旧换新"流量峰值冲击，乐观锁频繁冲突。核心解法：将热点库存从 MySQL 迁移至 Redis，用 Lua 脚本保证原子性扣减，QPS 峰值承载从 200 提升至 2000+。',
    ],
    heat: '3.2k',
    views: '21,540',
    comments: '97',
    link: '/thoughts/saas-inventory',
  },
  {
    id: 2,
    year: '2024',
    date: '2024 · 09 · 22',
    readTime: 15,
    accent: 'purple',
    category: 'ai',
    tags: [
      { text: 'AI Agent', color: 'cyan' },
      { text: 'LLM落地', color: 'purple' },
      { text: 'Prompt工程', color: 'orange' },
    ],
    title: 'AI 绝非挂件：大模型在企业内部 OA 系统的深度融合逻辑',
    quote: '绝大多数企业 AI 项目失败，不是因为模型不够好，而是因为把 AI 当成"功能点"而不是"新的系统层"来设计。',
    keyPoints: [
      '边界一 · AI 适合做什么：非结构化输入的结构化转化（如销售对话 → 评分报告）、个性化内容生成（如针对每个学员的定制改进建议）。这类场景有清晰的 Input/Output 边界，质量可量化，适合 AI 介入。',
      '边界二 · AI 不适合做什么：涉及资金、合规、审批的核心决策链路不应由 LLM 自主执行；B 端用户对"可解释性"要求极高，AI 给出的建议必须能追溯推理过程，否则会被直接拒绝采纳。',
      '设计原则 · Human-in-the-Loop：AI 评分系统中，我们设计了三重校验——范围校验、一致性校验、黄金样本锚定。上线盲测显示 AI 与专家评分相关系数 r=0.923，超过人与人之间的互评系数 r=0.871，才获得业务侧信任。',
      'Prompt 工程的本质：不是"让 AI 变聪明"，而是"把业务规则显式化"。把原来隐藏在老员工脑子里的评分标准，逐条写成 Prompt 约束，本身就是一次极有价值的业务知识沉淀。',
    ],
    heat: '5.1k',
    views: '38,204',
    comments: '215',
    link: '/thoughts/ai-oa-integration',
  },
  {
    id: 3,
    year: '2024',
    date: '2024 · 07 · 14',
    readTime: 10,
    accent: 'green',
    category: 'game',
    tags: [
      { text: '独立游戏', color: 'green' },
      { text: '系统建模', color: 'orange' },
      { text: '跨界思考', color: 'blue' },
    ],
    title: '独立设计《CP 营业部》模拟经营游戏的跨界思考：供需关系即系统设计',
    quote: '当我在设计游戏的供应链玩法时，我意识到自己其实在做一件和写 PRD 完全相同的事：为有限资源在不确定环境中的最优分配，建立规则模型。',
    keyPoints: [
      '游戏设计 ≈ 产品设计：《CP 营业部》的核心循环是"采购→仓储→销售→再投资"，每一个环节都有对应的 B 端产品原型——WMS 的库位管理、供应链的 MOQ 约束、零售的动态定价。设计游戏让我对这些业务逻辑的理解从"文字描述"升级为"可运行的心智模型"。',
      '库存周转率是游戏平衡性的核心变量：游戏里"压货"会导致现金流断裂，"断货"会流失客户 Loyalty。这与现实中 B 端库存管理的核心矛盾完全一致——它让我在做 3C 回收 SaaS 时，第一时间想到要将"库存周转天数"作为核心运营指标暴露在管理看板上。',
      '不确定性即产品价值所在：游戏里的随机事件（突发爆款、供应商断货、平台流量波动）模拟的正是真实商业的不确定性。好的系统设计不是消灭不确定性，而是让用户在不确定中拥有决策杠杆——这是我在设计预警系统时的核心设计哲学。',
    ],
    heat: '2.4k',
    views: '14,893',
    comments: '76',
    link: '/thoughts/game-design-thinking',
  },
]

const filteredArticles = computed(() =>
  activeCategory.value === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory.value)
)
</script>

<style scoped>
/* ── 页面容器 ── */
.thoughts-wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 48px 24px 100px;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

/* ── 页面顶部 ── */
.page-header {
  margin-bottom: 44px;
  padding-bottom: 36px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.page-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.2em;
  margin-bottom: 12px;
  opacity: 0.8;
}

.page-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  line-height: 1.2;
  margin: 0 0 16px;
  background: linear-gradient(135deg, var(--vp-c-text-1) 40%, var(--vp-c-brand-1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin: 0 0 20px;
  max-width: 600px;
}

.page-stats {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  font-family: 'JetBrains Mono', monospace;
}

.stat-num {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.stat-sep { opacity: 0.4; }

/* ── 分类过滤器 ── */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 48px;
}

.filter-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.03em;
}

.filter-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.filter-btn.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
  box-shadow: 0 2px 12px rgba(99, 102, 241, 0.35);
}

/* ── 时间线外壳 ── */
.timeline-wrap {
  position: relative;
  padding-left: 36px;
}

.timeline-line {
  position: absolute;
  left: 7px;
  top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--vp-c-brand-1) 0%,
    rgba(99,102,241,0.3) 60%,
    transparent 100%
  );
  border-radius: 2px;
}

/* ── 年份节点 ── */
.year-node {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
  margin-left: -36px;
}

.year-dot {
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
  flex-shrink: 0;
}

.year-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.1em;
}

/* ── 文章卡片 ── */
.article-card {
  position: relative;
  margin-bottom: 36px;
  transition: transform 0.25s ease;
}

.article-card:hover { transform: translateX(4px); }

/* 时间线小圆点 */
.tl-dot {
  position: absolute;
  left: -40px; top: 24px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.2s;
}

.tl-dot-inner {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
  transition: background 0.2s, transform 0.2s;
}

.article-card:hover .tl-dot { border-color: var(--vp-c-brand-1); }
.article-card:hover .tl-dot-inner {
  background: var(--vp-c-brand-1);
  transform: scale(1.4);
}

/* 卡片主体 */
.card-body {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 28px 32px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s;
}

/* 顶部彩色光条 */
.card-body::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity 0.25s;
}

.accent-blue  .card-body::before { background: linear-gradient(90deg, #3b82f6, #6366f1); }
.accent-purple .card-body::before { background: linear-gradient(90deg, #8b5cf6, #ec4899); }
.accent-green  .card-body::before { background: linear-gradient(90deg, #10b981, #06b6d4); }

.article-card:hover .card-body {
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 8px 36px rgba(99, 102, 241, 0.12), 0 2px 8px rgba(0,0,0,0.2);
}

.article-card:hover .card-body::before { opacity: 1; }

/* ── 顶部元信息 ── */
.card-top-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
}

.article-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--vp-c-text-3);
  letter-spacing: 0.08em;
}

.read-time {
  font-size: 11px;
  color: var(--vp-c-text-3);
}

/* ── 标签 ── */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  padding: 2px 10px;
  border-radius: 999px;
  letter-spacing: 0.03em;
}

.tag-blue   { background:rgba(59,130,246,.15);  color:#60a5fa; border:1px solid rgba(59,130,246,.25); }
.tag-purple { background:rgba(168,85,247,.15);  color:#c084fc; border:1px solid rgba(168,85,247,.25); }
.tag-green  { background:rgba(16,185,129,.15);  color:#34d399; border:1px solid rgba(16,185,129,.25); }
.tag-orange { background:rgba(249,115,22,.15);  color:#fb923c; border:1px solid rgba(249,115,22,.25); }
.tag-cyan   { background:rgba(6,182,212,.15);   color:#22d3ee; border:1px solid rgba(6,182,212,.25);  }

/* ── 文章标题 ── */
.article-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  margin: 0 0 18px;
  transition: color 0.2s;
  border-top: none !important;
  padding-top: 0 !important;
}

.article-card:hover .article-title { color: var(--vp-c-brand-1); }

/* ── 引言块 ── */
.article-quote {
  position: relative;
  margin: 0 0 22px;
  padding: 14px 20px;
  background: rgba(99, 102, 241, 0.06);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 0 8px 8px 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  font-style: italic;
}

.quote-mark {
  font-size: 1.4rem;
  color: var(--vp-c-brand-1);
  font-style: normal;
  line-height: 0;
  vertical-align: -4px;
  opacity: 0.7;
}

/* ── 核心观点 ── */
.key-points {
  margin-bottom: 24px;
}

.key-points-label {
  font-size: 11px;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.kp-icon { font-size: 13px; }

.kp-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.kp-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 12px 14px;
  background: var(--vp-c-bg);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s;
}

.kp-item:hover { border-color: rgba(99,102,241,0.3); }

.kp-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  opacity: 0.7;
  flex-shrink: 0;
  margin-top: 2px;
  letter-spacing: 0.05em;
}

.kp-text {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.75;
}

/* ── 卡片底部 ── */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid var(--vp-c-divider);
  flex-wrap: wrap;
  gap: 12px;
}

.card-footer-left {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.meta-pill {
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  padding: 3px 10px;
  border-radius: 999px;
  transition: color 0.2s;
}

.meta-pill:hover { color: var(--vp-c-brand-1); }

/* 阅读全文按钮 */
.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  padding: 6px 16px;
  border: 1px solid rgba(99,102,241,0.35);
  border-radius: 999px;
  transition: all 0.2s;
  letter-spacing: 0.03em;
}

.read-more-btn:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  box-shadow: 0 4px 16px rgba(99,102,241,0.3);
  transform: translateX(2px);
}

.read-more-btn svg {
  transition: transform 0.2s;
}

.read-more-btn:hover svg { transform: translateX(3px); }

/* ── 页面底部 ── */
.page-footer {
  margin-top: 64px;
  text-align: center;
}

.footer-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
  opacity: 0.3;
  margin-bottom: 24px;
}

.footer-tip {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

/* ── 响应式 ── */
@media (max-width: 640px) {
  .thoughts-wrap { padding: 32px 16px 60px; }
  .timeline-wrap { padding-left: 28px; }
  .card-body { padding: 20px 18px; }
  .article-title { font-size: 1.1rem; }
  .page-title { font-size: 1.8rem; }
  .card-footer { flex-direction: column; align-items: flex-start; }
}
</style>
