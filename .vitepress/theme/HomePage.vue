<template>
  <div class="ac-portal">

    <!-- ════════════════════════════════════════
         1. 顶部个人名片区（动森岛民护照）
    ════════════════════════════════════════ -->
    <div class="ac-passport">
      <div class="passport-header">
        <div class="passport-stamp">
          <span class="stamp-leaf">🍃</span>
          <span>NANA'S ISLAND · 岛民档案</span>
        </div>
        <div class="passport-island-meta">
          <span class="meta-pill">🍊 特产：柑橘与代码</span>
          <span class="meta-pill">☀️ 微风 22℃</span>
          <span class="status-indicator">
            <span class="status-dot"></span>
            <span>打理自留地中</span>
          </span>
        </div>
      </div>

      <div class="passport-body">
        <div class="passport-avatar-wrap">
          <div class="passport-avatar">🦊</div>
          <span class="avatar-badge">PM</span>
        </div>

        <div class="passport-info">
          <div class="passport-name-row">
            <h1 class="passport-name">Nana Gu</h1>
            <span class="passport-title-tag">B端与AI产品人 · 探索型造物者</span>
          </div>
          <p class="passport-bio">
            Hi！我是 Nana，一个懂点代码的 B 端 / AI 产品经理。这里是我的私人数字自留地，主要存放我掉过的坑、造过的轮子和一些奇思妙想。不卷数据、不搞浮夸，只记录真诚的思考与实践。🌿
          </p>
          <div class="passport-tags">
            <span class="p-tag">☕ 拿铁续命</span>
            <span class="p-tag">💻 懂点Java/Python</span>
            <span class="p-tag">🤖 大模型落地探索</span>
            <span class="p-tag">📐 复杂业务系统抽象</span>
            <span class="p-tag">🌿 动森资深岛民</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ════════════════════════════════════════
         2. 🕹️ 试玩 Demo 精华橱窗
    ════════════════════════════════════════ -->
    <section class="forum-section">
      <div class="section-headline">
        <div class="headline-title">
          <span class="headline-icon">🕹️</span>
          <span class="headline-text">试玩 Demo 游乐场</span>
          <span class="headline-desc">// 亲手写的一些交互原型与好玩工具</span>
        </div>
        <a href="/demo" class="headline-more-btn">
          <span>进入游乐场</span>
          <span class="arrow">→</span>
        </a>
      </div>

      <div class="cards-grid-2">

        <!-- Demo 卡 1: CP 营业部 -->
        <a href="/demo" class="demo-feature-card">
          <div class="card-content-top">
            <div class="demo-card-top">
              <div class="demo-card-icon">🎪</div>
              <div class="demo-card-title-group">
                <span class="demo-card-badge">GAME CONCEPT</span>
                <h3 class="demo-card-title">《CP 营业部：库存与爱》经营模拟</h3>
              </div>
            </div>
            <p class="demo-card-desc">
              一款基于真实 3C 回收与周转建模的像素模拟经营小游戏。玩家扮演店长处理突发客诉、平衡质检损耗与库位周转，在爆仓与断货的边缘极限反复横跳～
            </p>
          </div>
          <div class="demo-play-btn">
            <span>👉 点击试玩 Demo</span>
            <span>🎮</span>
          </div>
        </a>

        <!-- Demo 卡 2: n8n 消息机器人 -->
        <a href="/demo" class="demo-feature-card">
          <div class="card-content-top">
            <div class="demo-card-top">
              <div class="demo-card-icon">🤖</div>
              <div class="demo-card-title-group">
                <span class="demo-card-badge">AUTOMATION WORKFLOW</span>
                <h3 class="demo-card-title">自动化早报播报 Agent · 摸鱼神器</h3>
              </div>
            </div>
            <p class="demo-card-desc">
              把 GitHub 动态、行业热点与团队群通知自动串联；搭载大模型定时智能提炼行业要闻并生成结构化晨报，自动化解决信息过载痛点。
            </p>
          </div>
          <div class="demo-play-btn">
            <span>👉 查看工作流实现</span>
            <span>⚡</span>
          </div>
        </a>

      </div>
    </section>

    <!-- ════════════════════════════════════════
         3. 💼 项目经历精选
    ════════════════════════════════════════ -->
    <section class="forum-section">
      <div class="section-headline">
        <div class="headline-title">
          <span class="headline-icon">💼</span>
          <span class="headline-text">核心项目沉淀</span>
          <span class="headline-desc">// 真实业务战役 · 从 0 到 1 架构复盘</span>
        </div>
        <a href="/projects" class="headline-more-btn">
          <span>阅读完整复盘</span>
          <span class="arrow">→</span>
        </a>
      </div>

      <div class="cards-grid-2">

        <!-- 项目卡 1: 3C 售后系统 -->
        <a href="/projects#project-01" class="project-post-card">
          <div class="card-content-top">
            <div class="post-tag-row">
              <span class="forum-tag ft-orange">B端架构</span>
              <span class="forum-tag ft-green">多租户隔离</span>
              <span class="forum-tag ft-purple">状态机FSM</span>
            </div>
            <h3 class="project-card-title">3C 零售 SaaS 平台 · 售后回收系统从 0 到 1 建设</h3>
            <p class="project-card-desc">
              主导某头部 3C 集团内部 OA 孤岛向 SaaS 平台的重构。抽象“估价-验机-质检-权益流转”等 68 个节点有限状态机，月盘点误差率从 12% 降至 1.3%，客诉平均响应时长从 3.2 天缩减至 6 小时。
            </p>
          </div>
          <div class="project-card-footer">
            <div class="project-footer-left">
              <span class="meta-tag">📦 0→1 核心系统</span>
              <span class="meta-tag">⚙️ 复杂状态机</span>
            </div>
            <span class="badge-essence">📖 深度复盘</span>
          </div>
        </a>

        <!-- 项目卡 2: AI 销售打分助手 -->
        <a href="/projects#project-02" class="project-post-card">
          <div class="card-content-top">
            <div class="post-tag-row">
              <span class="forum-tag ft-cyan">AI应用</span>
              <span class="forum-tag ft-purple">LLM Agent</span>
              <span class="forum-tag ft-orange">Prompt Engineering</span>
            </div>
            <h3 class="project-card-title">企业级 AI 销售培训与智能打分助手</h3>
            <p class="project-card-desc">
              基于大模型落地销售角色扮演对练体系。采用 PREP 人格框架模拟真实客户异议阻力，设计五维 CoT 结构化打分与防幻觉校准机制，单次培训成本从 ¥800 降至 ¥35，双盲打分相关性达 r=0.923。
            </p>
          </div>
          <div class="project-card-footer">
            <div class="project-footer-left">
              <span class="meta-tag">🤖 Agent实战</span>
              <span class="meta-tag">📊 五维CoT评分</span>
            </div>
            <span class="badge-essence">📖 深度复盘</span>
          </div>
        </a>

      </div>
    </section>

    <!-- ════════════════════════════════════════
         4. 💡 个人思考随笔
    ════════════════════════════════════════ -->
    <section class="forum-section">
      <div class="section-headline">
        <div class="headline-title">
          <span class="headline-icon">💡</span>
          <span class="headline-text">思考与认知随笔</span>
          <span class="headline-desc">// 踩坑经验、认知迭代与非共识思考</span>
        </div>
        <a href="/thoughts" class="headline-more-btn">
          <span>漫游全部思考</span>
          <span class="arrow">→</span>
        </a>
      </div>

      <div class="cards-grid-2">

        <!-- 思考卡 1: 塔罗牌与职业规划 -->
        <a href="/thoughts" class="thought-card">
          <div class="card-content-top">
            <div class="post-tag-row">
              <span class="forum-tag ft-purple">认知隐喻</span>
              <span class="forum-tag ft-orange">职业规划</span>
              <span class="forum-tag ft-green">心智模型</span>
            </div>
            <h3 class="thought-card-title">塔罗牌与职业规划的玄学思考：当 PM 面对不确定性</h3>
            <p class="thought-card-desc">
              做业务看数据指标，但在人生重大关口往往充满不确定性。试着用塔罗 22 张大阿卡那的符号体系拆解产品经理从“愚人”到“世界”的心路历程，用玄学外壳做一次清醒的内在反思。
            </p>
          </div>
          <div class="thought-stats-bar">
            <div class="stats-items">
              <span class="stat-pill">🌱 随笔心得</span>
              <span class="stat-pill">🧭 心智模型</span>
            </div>
            <div class="thought-author-tag">
              <span>☕ 随想</span>
            </div>
          </div>
        </a>

        <!-- 思考卡 2: 大模型落地的真实边界 -->
        <a href="/thoughts" class="thought-card">
          <div class="card-content-top">
            <div class="post-tag-row">
              <span class="forum-tag ft-cyan">大模型落地</span>
              <span class="forum-tag ft-orange">RAG实践</span>
              <span class="forum-tag ft-purple">避坑指南</span>
            </div>
            <h3 class="thought-card-title">大模型落地的真实边界：为什么企业知识库“感觉很蠢”？</h3>
            <p class="thought-card-desc">
              绝大多数企业知识库翻车，问题不在于模型不够大，而在分块策略、元数据召回和上下文重排的产品设计漏洞。脱离具体业务权限和语境的 AI，往往无法解决真实问题。
            </p>
          </div>
          <div class="thought-stats-bar">
            <div class="stats-items">
              <span class="stat-pill">🤖 AI落地观察</span>
              <span class="stat-pill">📐 架构反思</span>
            </div>
            <div class="thought-author-tag">
              <span>🛠️ 避坑</span>
            </div>
          </div>
        </a>

      </div>
    </section>

    <!-- ════════════════════════════════════════
         5. 底部互动信箱 (Island Postbox)
    ════════════════════════════════════════ -->
    <div class="ac-mailbox">
      <div class="mailbox-left">
        <div class="mailbox-icon">📮</div>
        <div>
          <div class="mailbox-title">小岛留言信箱 (Island Postbox)</div>
          <div class="mailbox-sub">如果你也有好玩的点子，或者想聊聊 B 端 / AI 产品，随时欢迎来信交流！</div>
        </div>
      </div>
      <div class="mailbox-links">
        <a href="https://github.com/yuzu9410" target="_blank" class="mailbox-link-btn">
          <span>🐙 GitHub (@yuzu9410)</span>
        </a>
        <a href="mailto:marshtt@163.com" class="mailbox-link-btn primary-mail">
          <span>📬 发邮件 (marshtt@163.com)</span>
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* ──────────────────────────────────────────────────────────
   动森私人自留地全局样式
   ────────────────────────────────────────────────────────── */
.ac-portal {
  max-width: 1040px;
  margin: 0 auto;
  padding: 16px 10px 80px;
  font-family: var(--vp-font-family-base, 'Space Grotesk', system-ui, sans-serif);
  color: var(--vp-c-text-1, #3a3025);
  box-sizing: border-box;
}

.ac-portal a {
  text-decoration: none !important;
  color: inherit;
}

/* ──────────────────────────────────────────────────────────
   1. 顶部名片区（动森岛民护照风格）
   ────────────────────────────────────────────────────────── */
.ac-passport {
  background: #ffffff;
  border: 3px solid #5cb85c;
  border-radius: 28px;
  padding: 28px 34px;
  box-shadow: 0 6px 0 #3d9e3d, 0 16px 36px rgba(92, 184, 92, 0.12);
  margin-bottom: 44px;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-sizing: border-box;
}

:global(.dark) .ac-passport {
  background: #232f25;
  border-color: #4da34d;
  box-shadow: 0 6px 0 #2a5a2a, 0 16px 36px rgba(0, 0, 0, 0.35);
}

.ac-passport:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 #3d9e3d, 0 20px 44px rgba(92, 184, 92, 0.18);
}

.passport-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px dashed rgba(92, 184, 92, 0.3);
  padding-bottom: 14px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.passport-stamp {
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
  letter-spacing: 0.05em;
}

:global(.dark) .passport-stamp {
  background: rgba(92, 184, 92, 0.15);
  color: #7dcf7d;
  border-color: rgba(92, 184, 92, 0.35);
}

.stamp-leaf {
  font-size: 13px;
}

.passport-island-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.meta-pill {
  font-size: 11px;
  font-weight: 700;
  color: #7a6a58;
  background: #fbf5ed;
  border: 1px solid #ebdccb;
  padding: 2px 10px;
  border-radius: 999px;
}

:global(.dark) .meta-pill {
  color: #9cb197;
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.1);
}

.status-indicator {
  font-size: 11px;
  color: #2d7d2d;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
}

:global(.dark) .status-indicator {
  color: #8ce68c;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #5cb85c;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 0 3px rgba(92, 184, 92, 0.25);
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}

.passport-body {
  display: flex;
  align-items: center;
  gap: 30px;
}

.passport-avatar-wrap {
  position: relative;
  flex-shrink: 0;
}

.passport-avatar {
  width: 92px;
  height: 92px;
  background: linear-gradient(135deg, #ffd166, #ffadad);
  border: 3px solid #5cb85c;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  box-shadow: 0 4px 0 #3d9e3d;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.ac-passport:hover .passport-avatar {
  transform: rotate(-6deg) scale(1.06);
}

.avatar-badge {
  position: absolute;
  bottom: -6px;
  right: -6px;
  background: #5bbfef;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
  padding: 1px 7px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

.passport-info {
  flex: 1;
}

.passport-name-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.passport-name {
  font-size: 1.85rem;
  font-weight: 800;
  color: #2b452e;
  line-height: 1.2;
  margin: 0;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .passport-name {
  color: #c4ecc4;
}

.passport-title-tag {
  background: #fdf2d0;
  color: #8c6700;
  border: 1.5px solid #f4d06f;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 8px;
}

:global(.dark) .passport-title-tag {
  background: rgba(255, 209, 102, 0.15);
  color: #ffd166;
  border-color: rgba(255, 209, 102, 0.3);
}

.passport-bio {
  font-size: 0.95rem;
  color: #5c4d3c;
  line-height: 1.75;
  margin: 0 0 16px 0;
}

:global(.dark) .passport-bio {
  color: #c2d1bd;
}

.passport-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.p-tag {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: #f3ece1;
  color: #6a5745;
  border: 1px solid rgba(160, 115, 90, 0.2);
  transition: transform 0.2s ease, background 0.2s ease;
}

:global(.dark) .p-tag {
  background: #2b392d;
  color: #9cb197;
  border-color: rgba(92, 184, 92, 0.25);
}

.p-tag:hover {
  transform: translateY(-2px);
  background: #e8f8e8;
  color: #2d7d2d;
}

/* ──────────────────────────────────────────────────────────
   2. 板块通用标题
   ────────────────────────────────────────────────────────── */
.forum-section {
  margin-bottom: 48px;
}

.section-headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 2.5px solid #5cb85c;
}

.headline-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.35rem;
  font-weight: 800;
  color: #2d5a32;
  letter-spacing: -0.01em;
}

:global(.dark) .headline-title {
  color: #b3ebb3;
}

.headline-icon {
  font-size: 1.4rem;
}

.headline-desc {
  font-size: 0.85rem;
  color: #8c7864;
  font-weight: 600;
  margin-left: 6px;
}

:global(.dark) .headline-desc {
  color: #8fa588;
}

.headline-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-weight: 800;
  color: #3d9e3d;
  background: #e8f8e8;
  border: 1.5px solid #a8dfa8;
  border-radius: 999px;
  padding: 5px 14px;
  box-shadow: 0 2px 0 #a8dfa8;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

:global(.dark) .headline-more-btn {
  background: rgba(92, 184, 92, 0.15);
  color: #8ce68c;
  border-color: rgba(92, 184, 92, 0.35);
  box-shadow: 0 2px 0 rgba(0,0,0,0.3);
}

.headline-more-btn:hover {
  background: #5cb85c;
  color: #fff;
  border-color: #3d9e3d;
  box-shadow: 0 4px 0 #3d9e3d;
  transform: translateY(-2px);
}

.headline-more-btn .arrow {
  transition: transform 0.2s ease;
}

.headline-more-btn:hover .arrow {
  transform: translateX(3px);
}

/* ──────────────────────────────────────────────────────────
   3. 通用栅格 (双列)
   ────────────────────────────────────────────────────────── */
.cards-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.card-content-top {
  display: flex;
  flex-direction: column;
}

/* ──────────────────────────────────────────────────────────
   4. 板块一：🕹️ 试玩 Demo 精华卡
   ────────────────────────────────────────────────────────── */
.demo-feature-card {
  background: #ffffff;
  border: 2.5px solid #5bbfef;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 5px 0 #3aa0d0, 0 10px 24px rgba(91, 191, 239, 0.14);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

:global(.dark) .demo-feature-card {
  background: #1c2b33;
  border-color: #429ec9;
  box-shadow: 0 5px 0 #246482, 0 10px 24px rgba(0,0,0,0.35);
}

.demo-feature-card:hover {
  transform: translateY(-6px) rotate(-0.5deg);
  box-shadow: 0 9px 0 #3aa0d0, 0 18px 36px rgba(91, 191, 239, 0.25);
  border-color: #38bdf8;
}

.demo-card-top {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 14px;
}

.demo-card-icon {
  width: 56px;
  height: 56px;
  background: #e8f7fd;
  border: 2px solid #bae6fd;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  flex-shrink: 0;
  box-shadow: 0 3px 0 #bae6fd;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

:global(.dark) .demo-card-icon {
  background: rgba(91, 191, 239, 0.15);
  border-color: rgba(91, 191, 239, 0.3);
  box-shadow: 0 3px 0 rgba(0,0,0,0.25);
}

.demo-feature-card:hover .demo-card-icon {
  transform: scale(1.15) rotate(-6deg);
}

.demo-card-title-group {
  flex: 1;
}

.demo-card-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 800;
  font-family: var(--vp-font-family-mono, monospace);
  padding: 2px 8px;
  border-radius: 6px;
  background: #e0f2fe;
  color: #0369a1;
  margin-bottom: 4px;
}

:global(.dark) .demo-card-badge {
  background: rgba(14, 165, 233, 0.2);
  color: #7dd3fc;
}

.demo-card-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1e3a5f;
  line-height: 1.35;
  margin: 0;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .demo-card-title {
  color: #e0f2fe;
}

.demo-card-desc {
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.65;
  margin: 0 0 18px 0;
  flex-grow: 1;
}

:global(.dark) .demo-card-desc {
  color: #94a3b8;
}

.demo-play-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #5bbfef;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 800;
  padding: 10px 18px;
  border-radius: 999px;
  border: 2px solid #3aa0d0;
  box-shadow: 0 3px 0 #3aa0d0;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

:global(.dark) .demo-play-btn {
  background: #38bdf8;
  color: #0f172a;
  border-color: #0284c7;
  box-shadow: 0 3px 0 #0284c7;
}

.demo-feature-card:hover .demo-play-btn {
  background: #0284c7;
  border-color: #0369a1;
  color: #ffffff;
  box-shadow: 0 4px 0 #0369a1;
  transform: translateY(-2px);
}

:global(.dark) .demo-feature-card:hover .demo-play-btn {
  background: #7dd3fc;
  color: #082f49;
  border-color: #38bdf8;
}

/* ──────────────────────────────────────────────────────────
   5. 板块二：💼 项目经历卡片 (真实项目属性)
   ────────────────────────────────────────────────────────── */
.project-post-card {
  background: #ffffff;
  border: 2.5px solid #f4845f;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 5px 0 #cf6441, 0 10px 24px rgba(244, 132, 95, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

:global(.dark) .project-post-card {
  background: #2e2320;
  border-color: #cf6e51;
  box-shadow: 0 5px 0 #8c422c, 0 10px 24px rgba(0,0,0,0.35);
}

.project-post-card:hover {
  transform: translateY(-6px) rotate(0.5deg);
  box-shadow: 0 9px 0 #cf6441, 0 18px 36px rgba(244, 132, 95, 0.22);
}

.post-tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.forum-tag {
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 10px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 6px;
}

.ft-orange { background: #fff2ed; color: #c2410c; border: 1.2px solid #fed7aa; }
.ft-green  { background: #e8f8e8; color: #15803d; border: 1.2px solid #bbf7d0; }
.ft-purple { background: #f3edff; color: #7e22ce; border: 1.2px solid #e9d5ff; }
.ft-cyan   { background: #ecfeff; color: #0e7490; border: 1.2px solid #a5f3fc; }

:global(.dark) .ft-orange { background: rgba(244, 132, 95, 0.2); color: #fdba74; border-color: rgba(244, 132, 95, 0.4); }
:global(.dark) .ft-green  { background: rgba(92, 184, 92, 0.2);  color: #86efac; border-color: rgba(92, 184, 92, 0.4); }
:global(.dark) .ft-purple { background: rgba(168, 85, 247, 0.2); color: #d8b4fe; border-color: rgba(168, 85, 247, 0.4); }
:global(.dark) .ft-cyan   { background: rgba(6, 182, 212, 0.2);   color: #67e8f9; border-color: rgba(6, 182, 212, 0.4); }

.project-card-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #3b2a24;
  line-height: 1.4;
  margin: 0 0 10px 0;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .project-card-title {
  color: #fed7aa;
}

.project-card-desc {
  font-size: 0.88rem;
  color: #78655c;
  line-height: 1.65;
  margin: 0 0 18px 0;
  flex-grow: 1;
}

:global(.dark) .project-card-desc {
  color: #c7b8b2;
}

.project-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1.5px dashed rgba(244, 132, 95, 0.3);
  padding-top: 12px;
  font-size: 11px;
  color: #9c8479;
  font-family: var(--vp-font-family-mono, monospace);
}

:global(.dark) .project-card-footer {
  color: #9c8b85;
}

.project-footer-left {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.meta-tag {
  background: #fdf5ed;
  color: #a85a38;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 700;
}

:global(.dark) .meta-tag {
  background: rgba(255,255,255,0.06);
  color: #f4a070;
}

.badge-essence {
  background: linear-gradient(135deg, #ffd166, #f4845f);
  color: #ffffff;
  font-weight: 800;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 11px;
}

/* ──────────────────────────────────────────────────────────
   6. 板块三：💡 个人思考卡片
   ────────────────────────────────────────────────────────── */
.thought-card {
  background: #ffffff;
  border: 2.5px solid #a855f7;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 5px 0 #7e22ce, 0 10px 24px rgba(168, 85, 247, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

:global(.dark) .thought-card {
  background: #271f30;
  border-color: #9333ea;
  box-shadow: 0 5px 0 #581c87, 0 10px 24px rgba(0,0,0,0.35);
}

.thought-card:hover {
  transform: translateY(-6px) rotate(-0.5deg);
  box-shadow: 0 9px 0 #7e22ce, 0 18px 36px rgba(168, 85, 247, 0.22);
}

.thought-card-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #2e1065;
  line-height: 1.4;
  margin: 0 0 10px 0;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .thought-card-title {
  color: #f3e8ff;
}

.thought-card-desc {
  font-size: 0.88rem;
  color: #6b5a7a;
  line-height: 1.65;
  margin: 0 0 18px 0;
  flex-grow: 1;
}

:global(.dark) .thought-card-desc {
  color: #c4b5d4;
}

.thought-stats-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1.5px dashed rgba(168, 85, 247, 0.3);
  padding-top: 12px;
  font-size: 11px;
  color: #8a709c;
  font-family: var(--vp-font-family-mono, monospace);
}

:global(.dark) .thought-stats-bar {
  color: #b8a3c9;
}

.stats-items {
  display: flex;
  gap: 10px;
}

.stat-pill {
  background: #fbf5ff;
  color: #7e22ce;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 700;
}

:global(.dark) .stat-pill {
  background: rgba(168, 85, 247, 0.15);
  color: #d8b4fe;
}

.thought-author-tag {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  color: #6b21a8;
}

:global(.dark) .thought-author-tag {
  color: #c084fc;
}

/* ──────────────────────────────────────────────────────────
   7. 底部岛民留言信箱
   ────────────────────────────────────────────────────────── */
.ac-mailbox {
  background: linear-gradient(135deg, #fdfbf7, #f4eee2);
  border: 2.5px solid #a0735a;
  border-radius: 24px;
  padding: 24px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 0 #734f3a, 0 12px 28px rgba(160, 115, 90, 0.15);
  margin-top: 60px;
  flex-wrap: wrap;
  gap: 16px;
  box-sizing: border-box;
}

:global(.dark) .ac-mailbox {
  background: #242220;
  border-color: #8c674b;
  box-shadow: 0 5px 0 #4f3624, 0 12px 28px rgba(0,0,0,0.3);
}

.mailbox-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.mailbox-icon {
  font-size: 36px;
  line-height: 1;
}

.mailbox-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #4a382c;
  margin-bottom: 2px;
}

:global(.dark) .mailbox-title {
  color: #edd9cc;
}

.mailbox-sub {
  font-size: 0.85rem;
  color: #857062;
}

:global(.dark) .mailbox-sub {
  color: #a89487;
}

.mailbox-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.mailbox-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  color: #5c4333;
  font-size: 0.85rem;
  font-weight: 800;
  padding: 8px 18px;
  border-radius: 999px;
  border: 2px solid #a0735a;
  box-shadow: 0 3px 0 #734f3a;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

:global(.dark) .mailbox-link-btn {
  background: #332d28;
  color: #f0e2d8;
  border-color: #8c674b;
  box-shadow: 0 3px 0 #4f3624;
}

.mailbox-link-btn:hover {
  background: #a0735a;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 5px 0 #734f3a;
}

.mailbox-link-btn.primary-mail {
  background: #5cb85c;
  border-color: #3d9e3d;
  color: #fff;
  box-shadow: 0 3px 0 #3d9e3d;
}

.mailbox-link-btn.primary-mail:hover {
  background: #4da34d;
  box-shadow: 0 5px 0 #2a5a2a;
}

/* ──────────────────────────────────────────────────────────
   8. 响应式适配
   ────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .ac-portal {
    padding: 16px 8px 60px;
  }

  .ac-passport {
    padding: 22px 18px;
  }

  .passport-body {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .passport-avatar {
    width: 76px;
    height: 76px;
    font-size: 42px;
  }

  .passport-name {
    font-size: 1.5rem;
  }

  .cards-grid-2 {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .headline-title {
    font-size: 1.2rem;
  }

  .headline-desc {
    display: none;
  }

  .ac-mailbox {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .mailbox-links {
    width: 100%;
  }

  .mailbox-link-btn {
    flex: 1;
    justify-content: center;
  }
}
</style>
