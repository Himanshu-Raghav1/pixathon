// game.js - GLITCH Engine & Game Controller
import { LEVELS } from './levels.js';

class GlitchGame {
  constructor() {
    this.currentLevelIndex = 0;
    this.score = 3000;
    this.gameState = 'START'; // 'START' | 'PLAYING' | 'WIN'
    
    // Time tracking
    this.startTime = 0;
    this.roundStartTime = 0;
    this.elapsedTotalTime = 0;
    this.timerAnimationId = null;

    // Analytics record
    this.analytics = [];
    this.currentRoundAttempts = 0;
    this.isInputLocked = false;

    // DOM Elements
    this.initDOMElements();
    this.bindEvents();
    this.renderStartScreen();
  }

  initDOMElements() {
    this.screens = {
      start: document.getElementById('screen-start'),
      game: document.getElementById('screen-game'),
      win: document.getElementById('screen-win')
    };

    // HUD
    this.hudBar = document.getElementById('hud-bar');
    this.hudRound = document.getElementById('hud-round-val');
    this.hudTimer = document.getElementById('hud-timer-val');
    this.hudScore = document.getElementById('hud-score-val');
    this.progressFill = document.getElementById('progress-fill');

    // Game screen content
    this.roundTag = document.getElementById('challenge-round-tag');
    this.challengeTitle = document.getElementById('challenge-title');
    this.challengeInstruction = document.getElementById('challenge-instruction');
    this.challengeHint = document.getElementById('challenge-hint-text');
    this.challengeArea = document.getElementById('challenge-interactive-area');
    this.feedbackBanner = document.getElementById('feedback-banner');

    // Win screen elements
    this.winScore = document.getElementById('win-score-val');
    this.winTime = document.getElementById('win-time-val');
    this.winAttempts = document.getElementById('win-attempts-val');
    this.winRating = document.getElementById('win-rating-val');
    this.analyticsTableBody = document.getElementById('analytics-table-body');
    this.analyticsToggleBtn = document.getElementById('analytics-toggle-btn');
    this.analyticsContent = document.getElementById('analytics-content');

    // Control buttons
    this.btnStart = document.getElementById('btn-start-game');
    this.btnRestartHeader = document.getElementById('btn-restart-header');
    this.btnPlayAgain = document.getElementById('btn-play-again');
  }

  bindEvents() {
    // Start & Restart buttons
    this.btnStart.addEventListener('click', () => this.startGame());
    this.btnRestartHeader.addEventListener('click', () => this.resetGame());
    this.btnPlayAgain.addEventListener('click', () => this.startGame());

    // Analytics accordion toggle
    this.analyticsToggleBtn.addEventListener('click', () => {
      const isOpen = this.analyticsContent.classList.toggle('open');
      this.analyticsToggleBtn.setAttribute('aria-expanded', isOpen);
      const icon = document.getElementById('analytics-toggle-icon');
      if (icon) icon.textContent = isOpen ? '▲' : '▼';
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => this.handleKeyPress(e));
  }

  handleKeyPress(e) {
    const key = e.key.toLowerCase();

    // Instant restart with 'R'
    if (key === 'r' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      this.resetGame();
      return;
    }

    // Start or Play Again with Space or Enter
    if (key === ' ' || key === 'enter') {
      if (this.gameState === 'START') {
        e.preventDefault();
        this.startGame();
        return;
      }
      if (this.gameState === 'WIN') {
        e.preventDefault();
        this.startGame();
        return;
      }
    }

    // Number keys 1-4 for picking cards
    if (this.gameState === 'PLAYING' && !this.isInputLocked) {
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 4) {
        e.preventDefault();
        this.selectOptionByIndex(num - 1);
      }
    }
  }

  showScreen(name) {
    Object.keys(this.screens).forEach((key) => {
      this.screens[key].classList.toggle('active', key === name);
    });

    // HUD only visible in PLAYING state
    if (name === 'game') {
      this.hudBar.style.display = 'grid';
    } else {
      this.hudBar.style.display = 'none';
    }
  }

  renderStartScreen() {
    this.gameState = 'START';
    this.showScreen('start');
  }

  startGame() {
    this.currentLevelIndex = 0;
    this.score = 3000;
    this.analytics = [];
    this.gameState = 'PLAYING';
    this.isInputLocked = false;
    
    this.startTime = performance.now();
    this.startTimerLoop();

    this.loadLevel(this.currentLevelIndex);
  }

  startTimerLoop() {
    if (this.timerAnimationId) {
      cancelAnimationFrame(this.timerAnimationId);
    }

    const updateTimer = () => {
      if (this.gameState === 'PLAYING') {
        const now = performance.now();
        this.elapsedTotalTime = (now - this.startTime) / 1000;
        this.hudTimer.textContent = `${this.elapsedTotalTime.toFixed(1)}s`;
        
        // Slight time decay on score: -5 points per second elapsed
        const currentLiveScore = Math.max(100, Math.floor(this.score - this.elapsedTotalTime * 5));
        this.hudScore.textContent = `${currentLiveScore}`;

        this.timerAnimationId = requestAnimationFrame(updateTimer);
      }
    };

    this.timerAnimationId = requestAnimationFrame(updateTimer);
  }

  stopTimerLoop() {
    if (this.timerAnimationId) {
      cancelAnimationFrame(this.timerAnimationId);
      this.timerAnimationId = null;
    }
  }

  loadLevel(index) {
    this.currentLevelIndex = index;
    const level = LEVELS[index];
    this.currentRoundAttempts = 0;
    this.roundStartTime = performance.now();
    this.isInputLocked = false;

    // Reset feedback banner
    this.hideFeedback();

    // Update HUD
    this.hudRound.textContent = `0${index + 1} / 0${LEVELS.length}`;
    const progressPercent = (index / LEVELS.length) * 100;
    this.progressFill.style.width = `${progressPercent}%`;

    // Update text
    this.roundTag.textContent = level.subtitle;
    this.challengeTitle.textContent = level.title;
    this.challengeInstruction.textContent = level.instruction;
    this.challengeHint.textContent = level.hint;

    // Render interactive area depending on level type
    this.challengeArea.innerHTML = '';

    if (level.id === 1 || level.id === 2) {
      this.renderStandardGrid(level);
    } else if (level.id === 3) {
      this.renderSceneComparison(level);
    }

    this.showScreen('game');
  }

  renderStandardGrid(level) {
    const grid = document.createElement('div');
    const cols = level.options.length;
    grid.className = `options-grid ${cols === 4 ? 'grid-4' : 'grid-3'}`;

    level.options.forEach((opt, idx) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'option-card';
      card.setAttribute('data-index', idx);
      card.setAttribute('aria-label', `${opt.label}: ${opt.title || opt.description}`);

      card.innerHTML = `
        <span class="key-indicator">[${idx + 1}]</span>
        <div class="option-content">
          ${opt.svg}
        </div>
        <div class="option-footer">
          <div class="option-label">${opt.label}</div>
          <div class="option-sub">${opt.title || opt.description}</div>
        </div>
      `;

      card.addEventListener('click', () => this.handleOptionClick(idx, card, level));
      grid.appendChild(card);
    });

    this.challengeArea.appendChild(grid);
  }

  renderSceneComparison(level) {
    const container = document.createElement('div');
    container.className = 'scene-comparison-container';

    // 1. Dual Scenes Canvas
    const scenesWrapper = document.createElement('div');
    scenesWrapper.className = 'scenes-wrapper';

    // Scene A
    const sceneABox = document.createElement('div');
    sceneABox.className = 'scene-box';
    sceneABox.innerHTML = `
      <div class="scene-header-tag alpha">${level.scenes.sceneA.label}</div>
      ${level.scenes.sceneA.svg}
    `;

    // Scene B
    const sceneBBox = document.createElement('div');
    sceneBBox.className = 'scene-box';
    sceneBBox.innerHTML = `
      <div class="scene-header-tag beta">${level.scenes.sceneB.label}</div>
      ${level.scenes.sceneB.svg}
    `;

    scenesWrapper.appendChild(sceneABox);
    scenesWrapper.appendChild(sceneBBox);
    container.appendChild(scenesWrapper);

    // 2. Subsystem Picker Grid
    const pickerGrid = document.createElement('div');
    pickerGrid.className = 'scene-picker-grid';

    level.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'scene-picker-card';
      btn.setAttribute('data-index', idx);
      btn.setAttribute('aria-label', `${opt.label}: ${opt.title}`);

      btn.innerHTML = `
        <span class="key-indicator">[${idx + 1}]</span>
        ${opt.iconSvg}
        <div class="picker-meta">
          <span class="picker-title">${opt.title}</span>
          <span class="picker-pos">${opt.description}</span>
        </div>
      `;

      btn.addEventListener('click', () => this.handleOptionClick(idx, btn, level));
      pickerGrid.appendChild(btn);
    });

    container.appendChild(pickerGrid);
    this.challengeArea.appendChild(container);
  }

  selectOptionByIndex(idx) {
    const currentLevel = LEVELS[this.currentLevelIndex];
    if (idx >= 0 && idx < currentLevel.options.length) {
      const card = this.challengeArea.querySelector(`[data-index="${idx}"]`);
      if (card && !card.classList.contains('disabled')) {
        this.handleOptionClick(idx, card, currentLevel);
      }
    }
  }

  handleOptionClick(selectedIdx, element, level) {
    if (this.isInputLocked) return;

    this.currentRoundAttempts++;
    const isCorrect = selectedIdx === level.correctIndex;

    if (isCorrect) {
      // Correct selection
      this.isInputLocked = true;
      element.classList.add('correct');

      // Record round analytics
      const roundDuration = (performance.now() - this.roundStartTime) / 1000;
      this.analytics.push({
        roundId: level.id,
        roundTitle: level.title,
        attempts: this.currentRoundAttempts,
        duration: roundDuration,
        success: true
      });

      this.showFeedback(true, `✓ VERIFIED // ${level.explanation}`);

      // Short delay before advancing
      setTimeout(() => {
        if (this.currentLevelIndex + 1 < LEVELS.length) {
          this.loadLevel(this.currentLevelIndex + 1);
        } else {
          this.finishGame();
        }
      }, 750);
    } else {
      // Wrong selection
      element.classList.add('incorrect');
      this.score = Math.max(100, this.score - 200); // 200 pt penalty for incorrect attempt
      this.showFeedback(false, `✕ MISMATCH // Anomaly not verified. Scan carefully and retry.`);

      // Shake animation cleanup
      setTimeout(() => {
        element.classList.remove('incorrect');
      }, 500);
    }
  }

  showFeedback(isSuccess, message) {
    this.feedbackBanner.textContent = message;
    this.feedbackBanner.className = `feedback-banner show ${isSuccess ? 'success' : 'error'}`;
  }

  hideFeedback() {
    this.feedbackBanner.className = 'feedback-banner';
    this.feedbackBanner.textContent = '';
  }

  finishGame() {
    this.stopTimerLoop();
    this.gameState = 'WIN';
    
    // Calculate final time & score
    const finalTime = this.elapsedTotalTime;
    const finalScore = Math.max(150, Math.floor(this.score - finalTime * 5));
    const totalAttempts = this.analytics.reduce((sum, item) => sum + item.attempts, 0);

    // Update Progress bar to 100%
    this.progressFill.style.width = '100%';

    // Populate Win Screen stats
    this.winScore.textContent = `${finalScore}`;
    this.winTime.textContent = `${finalTime.toFixed(1)}s`;
    this.winAttempts.textContent = `${totalAttempts} / 3`;

    // Dynamic rating based on time and attempts
    let rating = 'PERFECT SYNAPSE';
    if (finalTime <= 15 && totalAttempts === 3) {
      rating = 'SUPERIOR INTUITION';
    } else if (finalTime <= 25 && totalAttempts <= 4) {
      rating = 'SHARP OBSERVER';
    } else if (finalTime <= 35) {
      rating = 'TACTICAL ANALYST';
    } else {
      rating = 'METHODICAL AUDITOR';
    }
    this.winRating.textContent = rating;

    // Populate Analytics Table
    this.renderAnalyticsTable(finalTime, totalAttempts);

    // Show Win Screen
    this.showScreen('win');
  }

  renderAnalyticsTable(totalTime, totalAttempts) {
    this.analyticsTableBody.innerHTML = '';

    this.analytics.forEach((rec, idx) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><strong>R0${rec.roundId}</strong>: ${rec.roundTitle.split('//')[1]?.trim() || rec.roundTitle}</td>
        <td class="${rec.attempts === 1 ? 'val-lime' : 'val-red'}">${rec.attempts} attempt${rec.attempts > 1 ? 's' : ''}</td>
        <td>${rec.duration.toFixed(2)}s</td>
        <td class="val-lime">CLEARED</td>
      `;
      this.analyticsTableBody.appendChild(row);
    });

    // Summary row
    const summaryRow = document.createElement('tr');
    summaryRow.style.borderTop = '2px solid rgba(139,92,246,0.3)';
    summaryRow.style.fontWeight = '700';
    summaryRow.innerHTML = `
      <td>TOTAL SESSION</td>
      <td class="val-lime">${totalAttempts} attempts</td>
      <td class="val-lime">${totalTime.toFixed(2)}s</td>
      <td class="val-lime">PASS</td>
    `;
    this.analyticsTableBody.appendChild(summaryRow);
  }

  resetGame() {
    this.stopTimerLoop();
    this.currentLevelIndex = 0;
    this.score = 3000;
    this.elapsedTotalTime = 0;
    this.analytics = [];
    this.isInputLocked = false;
    
    this.hudTimer.textContent = '0.0s';
    this.hudScore.textContent = '3000';
    this.hudRound.textContent = '01 / 03';
    this.progressFill.style.width = '0%';
    this.hideFeedback();

    this.renderStartScreen();
  }
}

// Instantiate game on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.glitchApp = new GlitchGame();
});
