<template>
  <div class="demo-showcase-page">

    <!-- ════════════════════════════════════════
         顶部导语告示牌
    ════════════════════════════════════════ -->
    <div class="showcase-header">
      <div class="showcase-eyebrow">
        <span>🕹️</span>
        <span>PRODUCT PLAYGROUND · 产品陈列架</span>
      </div>
      <h1 class="showcase-title">试玩 Demo 游乐场</h1>
      <p class="showcase-lead">
        “光说不练假把式，这里是我手搓的一些小玩意儿~” 从独立全栈系统、AI 自动化工作流到业务概念模拟小游戏，欢迎尽情把玩体验！🌿
      </p>
    </div>

    <!-- ════════════════════════════════════════
         陈列货架列表
    ════════════════════════════════════════ -->
    <div class="shelf-list">

      <!-- ── 货架 1：游乐园管理系统 (Web端) ── -->
      <div class="shelf-card">
        <div class="shelf-preview-col">
          <div class="preview-browser-frame">
            <div class="browser-header-dots">
              <span class="b-dot dot-red"></span>
              <span class="b-dot dot-yellow"></span>
              <span class="b-dot dot-green"></span>
            </div>
            <div class="browser-body">
              <div class="browser-mock-icon">🎡</div>
              <span class="browser-mock-tag">Amusement Park OS · Web</span>
            </div>
          </div>
        </div>
        <div class="shelf-info-col">
          <div>
            <div class="item-badge-row">
              <span class="status-pill status-live">● 在线体验版</span>
              <div class="item-tech-tags">
                <span class="tech-tag">Vue 3</span>
                <span class="tech-tag">Flask</span>
                <span class="tech-tag">MySQL</span>
                <span class="tech-tag">Redis Lua</span>
              </div>
            </div>
            <h2 class="item-name">🎡 游乐园管理系统（Web端）</h2>
            <p class="item-desc">
              为了验证“懂技术的 PM 能在正确抽象层做决策”而独立全栈开发落地的运营管理平台。覆盖设施状态调度、基于 Redis Lua 脚本的高并发防超卖票务、员工排班冲突检测与实时运营看板。
            </p>
            <ul class="feature-bullets">
              <li><span class="bullet-icon">✦</span> 票务库存原子扣减：Lua 脚本规避超卖风险，QPS 提升 10 倍</li>
              <li><span class="bullet-icon">✦</span> 设施-班次-员工唯一索引防止双重排班冲突</li>
              <li><span class="bullet-icon">✦</span> 运营数据大盘实时聚合当日营收与热门项目排行</li>
            </ul>
          </div>
          <div class="item-actions">
            <a href="https://github.com/yuzu9410" target="_blank" class="action-btn-primary">
              👉 立即体验 Demo
            </a>
            <a href="/projects#project-03" class="action-btn-sub">
              📖 查看架构复盘
            </a>
          </div>
        </div>
      </div>

      <!-- ── 货架 2：自动化飞书新闻播报 Agent ── -->
      <div class="shelf-card">
        <div class="shelf-preview-col">
          <div class="preview-browser-frame">
            <div class="browser-header-dots">
              <span class="b-dot dot-red"></span>
              <span class="b-dot dot-yellow"></span>
              <span class="b-dot dot-green"></span>
            </div>
            <div class="browser-body">
              <div class="browser-mock-icon">📡</div>
              <span class="browser-mock-tag">Feishu News Bot · Agent</span>
            </div>
          </div>
        </div>
        <div class="shelf-info-col">
          <div>
            <div class="item-badge-row">
              <span class="status-pill status-agent">● 自动化工作流</span>
              <div class="item-tech-tags">
                <span class="tech-tag">n8n</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">Cursor</span>
                <span class="tech-tag">飞书 Webhook</span>
              </div>
            </div>
            <h2 class="item-name">📡 自动化飞书新闻播报 Agent</h2>
            <p class="item-desc">
              针对团队信息茧房与研发追踪痛点打造的打工人摸鱼利器。通过 n8n 编排定时触发器，自动抓取 Hacker News、36Kr、GitHub Trending 热点，利用 DeepSeek 智能清洗摘要并以富文本卡片格式推送到飞书群。
            </p>
            <ul class="feature-bullets">
              <li><span class="bullet-icon">✦</span> 多源数据聚合与去重，支持自定义关键词降噪过滤</li>
              <li><span class="bullet-icon">✦</span> LLM 结构化提取“一句话亮点 + 影响评估”</li>
              <li><span class="bullet-icon">✦</span> 飞书 Interactive Message 交互卡片，支持一键点赞与查看原文</li>
            </ul>
          </div>
          <div class="item-actions">
            <a href="https://github.com/yuzu9410" target="_blank" class="action-btn-primary">
              👉 立即查看工作流
            </a>
            <a href="https://github.com/yuzu9410" target="_blank" class="action-btn-sub">
              💻 部署指南 & 脚本
            </a>
          </div>
        </div>
      </div>

      <!-- ── 货架 3：《CP 营业部：库存与爱》经营模拟 ── -->
      <div class="shelf-card">
        <div class="shelf-preview-col">
          <div class="preview-browser-frame">
            <div class="browser-header-dots">
              <span class="b-dot dot-red"></span>
              <span class="b-dot dot-yellow"></span>
              <span class="b-dot dot-green"></span>
            </div>
            <div class="browser-body">
              <div class="browser-mock-icon">🏪</div>
              <span class="browser-mock-tag">Business Game Concept</span>
            </div>
          </div>
        </div>
        <div class="shelf-info-col">
          <div>
            <div class="item-badge-row">
              <span class="status-pill status-beta">● 游戏概念 Demo</span>
              <div class="item-tech-tags">
                <span class="tech-tag">Vue 3</span>
                <span class="tech-tag">Canvas</span>
                <span class="tech-tag">Pinia</span>
                <span class="tech-tag">供应链建模</span>
              </div>
            </div>
            <h2 class="item-name">🏪 《CP 营业部：库存与爱》经营模拟</h2>
            <p class="item-desc">
              将真实 3C 售后回收、库位周转、再销售定价机制抽象成一款温馨像素风经营模拟游戏。玩家化身门店经理，不仅要防范黄牛刷券薅羊毛，还要平衡设备折旧、质检翻新与现金流安全！
            </p>
            <ul class="feature-bullets">
              <li><span class="bullet-icon">✦</span> 趣味化还原 B 端真实的有限状态机流转与折旧算法</li>
              <li><span class="bullet-icon">✦</span> 动态随机事件触发：突发爆仓、顾客异议谈判、紧急验机任务</li>
              <li><span class="bullet-icon">✦</span> Canvas 绘制生动的小动物顾客与自动化传送带动画</li>
            </ul>
          </div>
          <div class="item-actions">
            <a href="https://github.com/yuzu9410" target="_blank" class="action-btn-primary">
              👉 启动模拟经营
            </a>
            <a href="/projects#project-01" class="action-btn-sub">
              💼 真实业务原型
            </a>
          </div>
        </div>
      </div>

      <!-- ── 货架 4：AI 销售对练与打分助手 ── -->
      <div class="shelf-card">
        <div class="shelf-preview-col">
          <div class="preview-browser-frame">
            <div class="browser-header-dots">
              <span class="b-dot dot-red"></span>
              <span class="b-dot dot-yellow"></span>
              <span class="b-dot dot-green"></span>
            </div>
            <div class="browser-body">
              <div class="browser-mock-icon">🤖</div>
              <span class="browser-mock-tag">AI Roleplay Sandbox</span>
            </div>
          </div>
        </div>
        <div class="shelf-info-col">
          <div>
            <div class="item-badge-row">
              <span class="status-pill status-live">● 实时交互版</span>
              <div class="item-tech-tags">
                <span class="tech-tag">GPT-4o</span>
                <span class="tech-tag">Prompt工程</span>
                <span class="tech-tag">CoT打分</span>
                <span class="tech-tag">FastAPI</span>
              </div>
            </div>
            <h2 class="item-name">🤖 AI 销售对练与实时打分沙盒</h2>
            <p class="item-desc">
              基于 PREP 人格框架构建的 AI 刁钻客户对话模拟器。支持多场景异议处理对抗演练，并在对话结束后由评分引擎基于五维评分体系自动生成亮点行为分析与能力雷达图。
            </p>
            <ul class="feature-bullets">
              <li><span class="bullet-icon">✦</span> 预设价格异议、竞品对比、售后顾虑等多分支博弈树</li>
              <li><span class="bullet-icon">✦</span> 结构化 CoT 推理输出：先行为定性、再分维度定量打分</li>
              <li><span class="bullet-icon">✦</span> 专家黄金样本锚定，杜绝 LLM 评分幻觉</li>
            </ul>
          </div>
          <div class="item-actions">
            <a href="https://github.com/yuzu9410" target="_blank" class="action-btn-primary">
              👉 开启对练实操
            </a>
            <a href="/projects#project-02" class="action-btn-sub">
              📐 提示词工程拆解
            </a>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
/* ──────────────────────────────────────────────────────────
   动森产品陈列架布局
   ────────────────────────────────────────────────────────── */
.demo-showcase-page {
  max-width: 1040px;
  margin: 0 auto;
  padding: 10px 0 80px;
  font-family: var(--vp-font-family-base, 'Space Grotesk', system-ui, sans-serif);
  color: var(--vp-c-text-1, #3a3025);
  box-sizing: border-box;
}

/* 顶部导语告示牌 */
.showcase-header {
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

:global(.dark) .showcase-header {
  background: #232f25;
  border-color: #4da34d;
  box-shadow: 0 6px 0 #2a5a2a, 0 16px 36px rgba(0, 0, 0, 0.35);
}

.showcase-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #e8f8e8;
  color: #2d7d2d;
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 11px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1.5px solid #a8dfa8;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
}

:global(.dark) .showcase-eyebrow {
  background: rgba(92, 184, 92, 0.15);
  color: #7dcf7d;
  border-color: rgba(92, 184, 92, 0.35);
}

.showcase-title {
  font-size: 1.85rem;
  font-weight: 800;
  color: #2b452e;
  line-height: 1.25;
  margin: 0 0 10px;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .showcase-title {
  color: #c4ecc4;
}

.showcase-lead {
  font-size: 1rem;
  color: #5c4d3c;
  line-height: 1.7;
  margin: 0;
}

:global(.dark) .showcase-lead {
  color: #c2d1bd;
}

/* 货架列表 */
.shelf-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* 单个货架卡片 (左图右文) */
.shelf-card {
  background: #ffffff;
  border: 2.5px solid #a0735a;
  border-radius: 26px;
  box-shadow: 0 6px 0 #734f3a, 0 12px 32px rgba(160, 115, 90, 0.14);
  display: flex;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
  position: relative;
  box-sizing: border-box;
}

:global(.dark) .shelf-card {
  background: #232a25;
  border-color: #8c674b;
  box-shadow: 0 6px 0 #4f3624, 0 12px 32px rgba(0,0,0,0.35);
}

.shelf-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 0 #734f3a, 0 20px 44px rgba(160, 115, 90, 0.22);
}

/* 左侧：截图/GIF 展区 */
.shelf-preview-col {
  width: 38%;
  min-width: 280px;
  background: linear-gradient(135deg, #f5ece0, #ebdcc9);
  border-right: 2.5px solid #a0735a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 24px;
  box-sizing: border-box;
}

:global(.dark) .shelf-preview-col {
  background: linear-gradient(135deg, #1c241e, #161d18);
  border-color: #8c674b;
}

.preview-browser-frame {
  width: 100%;
  max-width: 320px;
  background: #ffffff;
  border: 2px solid rgba(160, 115, 90, 0.3);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}

:global(.dark) .preview-browser-frame {
  background: #2a342c;
  border-color: rgba(140, 103, 75, 0.4);
}

.browser-header-dots {
  display: flex;
  gap: 5px;
  padding: 8px 12px;
  background: #fbf8f3;
  border-bottom: 1.5px solid rgba(160, 115, 90, 0.15);
}

:global(.dark) .browser-header-dots {
  background: #232c25;
  border-color: rgba(255,255,255,0.06);
}

.b-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.dot-red { background: #f87171; }
.dot-yellow { background: #fbbf24; }
.dot-green { background: #4ade80; }

.browser-body {
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: radial-gradient(circle at center, rgba(92,184,92,0.08) 0%, transparent 70%);
  user-select: none;
}

.browser-mock-icon {
  font-size: 50px;
  line-height: 1;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.shelf-card:hover .browser-mock-icon {
  transform: scale(1.2) rotate(-8deg);
}

.browser-mock-tag {
  font-size: 11px;
  font-weight: 700;
  font-family: var(--vp-font-family-mono, monospace);
  color: #7a6a58;
  background: rgba(160, 115, 90, 0.12);
  padding: 2px 10px;
  border-radius: 6px;
}

:global(.dark) .browser-mock-tag {
  color: #9fb399;
  background: rgba(255,255,255,0.08);
}

/* 右侧：产品信息区 */
.shelf-info-col {
  flex: 1;
  padding: 28px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.item-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 800;
  padding: 2px 10px;
  border-radius: 999px;
  font-family: var(--vp-font-family-mono, monospace);
}

.status-live { background: #e8f8e8; color: #16a34a; border: 1.5px solid #86efac; }
.status-beta { background: #fef3c7; color: #d97706; border: 1.5px solid #fde68a; }
.status-agent { background: #f3e8ff; color: #9333ea; border: 1.5px solid #d8b4fe; }

:global(.dark) .status-live { background: rgba(34, 197, 94, 0.15); color: #4ade80; border-color: rgba(74, 222, 128, 0.35); }
:global(.dark) .status-beta { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border-color: rgba(251, 191, 36, 0.35); }
:global(.dark) .status-agent { background: rgba(168, 85, 247, 0.15); color: #c084fc; border-color: rgba(192, 132, 252, 0.35); }

.item-tech-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 11px;
  font-weight: 700;
  font-family: var(--vp-font-family-mono, monospace);
  padding: 2px 8px;
  border-radius: 6px;
  background: #f4ede4;
  color: #5c4333;
  border: 1px solid rgba(160, 115, 90, 0.25);
}

:global(.dark) .tech-tag {
  background: #2d382f;
  color: #c0d1bb;
  border-color: rgba(92, 184, 92, 0.25);
}

.item-name {
  font-size: 1.35rem;
  font-weight: 800;
  color: #3a2e25;
  line-height: 1.3;
  margin: 0 0 10px;
  border: none !important;
  padding: 0 !important;
}

:global(.dark) .item-name {
  color: #f0ede6;
}

.item-desc {
  font-size: 0.9rem;
  color: #685747;
  line-height: 1.75;
  margin: 0 0 16px;
}

:global(.dark) .item-desc {
  color: #b5c7af;
}

.feature-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.feature-bullets li {
  font-size: 0.85rem;
  color: #554433;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}

:global(.dark) .feature-bullets li {
  color: #9cb197;
}

.bullet-icon {
  color: #5cb85c;
  font-weight: 800;
}

/* 按钮组 */
.item-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.action-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #5cb85c;
  color: #ffffff !important;
  font-size: 0.88rem;
  font-weight: 800;
  padding: 9px 20px;
  border-radius: 999px;
  border: 2px solid #3d9e3d;
  box-shadow: 0 3px 0 #3d9e3d;
  text-decoration: none !important;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.action-btn-primary:hover {
  background: #4da34d;
  transform: translateY(-2px);
  box-shadow: 0 5px 0 #2a5a2a;
}

.action-btn-sub {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  color: #5c4333 !important;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 9px 18px;
  border-radius: 999px;
  border: 2px solid #a0735a;
  box-shadow: 0 3px 0 #734f3a;
  text-decoration: none !important;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

:global(.dark) .action-btn-sub {
  background: #2a342c;
  color: #e0ede0 !important;
  border-color: #8c674b;
  box-shadow: 0 3px 0 #4f3624;
}

.action-btn-sub:hover {
  background: #f4ede4;
  transform: translateY(-2px);
  box-shadow: 0 5px 0 #734f3a;
}

/* 响应式断点 */
@media (max-width: 768px) {
  .shelf-card {
    flex-direction: column;
  }
  .shelf-preview-col {
    width: 100%;
    min-width: unset;
    border-right: none;
    border-bottom: 2.5px solid #a0735a;
    padding: 20px;
  }
  .preview-browser-frame {
    max-width: 100%;
  }
  .browser-body {
    height: 120px;
  }
  .shelf-info-col {
    padding: 20px;
  }
  .item-actions {
    width: 100%;
  }
  .action-btn-primary, .action-btn-sub {
    flex: 1;
    justify-content: center;
  }
}
</style>
