* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    min-height: 100vh;
    color: #fff;
    -webkit-tap-highlight-color: transparent;
}

.app {
    max-width: 500px;
    margin: 0 auto;
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
}

.page {
    display: none;
    padding: 20px;
    min-height: 100vh;
    opacity: 0;
    transition: opacity 0.3s;
}

.page.active {
    display: block;
    opacity: 1;
}

/* 封面页 */
.cover-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    text-align: center;
    padding: 40px 20px;
}

.cover-badge {
    background: rgba(255, 107, 107, 0.2);
    color: #ff6b6b;
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 30px;
    border: 1px solid rgba(255, 107, 107, 0.3);
}

.cover-title {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #ff6b6b, #ffd93d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 2px;
}

.cover-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 5px;
}

.cover-desc {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 40px;
}

.cover-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
}

.cover-stats span {
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
}

.btn-primary {
    background: linear-gradient(135deg, #ff6b6b, #ff8e53);
    border: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 16px 48px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(255, 107, 107, 0.4);
}

.btn-primary:active {
    transform: translateY(0);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 30px;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
}

.btn-secondary:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.cover-disclaimer {
    margin-top: 30px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
}

/* 答题页 */
.quiz-header {
    margin-bottom: 30px;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #ff6b6b, #ffd93d);
    border-radius: 3px;
    transition: width 0.3s;
    width: 4%;
}

.progress-text {
    text-align: right;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}

.dimension-tag {
    display: inline-block;
    background: rgba(255, 107, 107, 0.15);
    color: #ff6b6b;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 107, 107, 0.2);
}

.question-text {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 30px;
}

.options-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
}

.option-item {
    background: rgba(255, 255, 255, 0.08);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 18px 20px;
    cursor: pointer;
    transition: all 0.2s;
}

.option-item:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
}

.option-item.selected {
    background: rgba(255, 107, 107, 0.2);
    border-color: #ff6b6b;
}

.option-prefix {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    margin-right: 12px;
}

.option-text {
    font-size: 16px;
    line-height: 1.5;
}

.option-note {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 6px;
    margin-left: 42px;
}

.quiz-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}

/* 结果页 */
.result-header {
    text-align: center;
    padding: 20px 0 10px;
}

/* 小人图容器 */
.character-container {
    margin-bottom: 15px;
}

#characterCanvas {
    display: block;
    margin: 0 auto;
    width: 160px;
    height: 160px;
}

.character-label {
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 4px;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.result-badge {
    display: inline-block;
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;
}

.result-badge.green {
    background: rgba(46, 213, 115, 0.2);
    color: #2ed573;
    border: 1px solid rgba(46, 213, 115, 0.3);
}

.result-badge.blue {
    background: rgba(30, 144, 255, 0.2);
    color: #1e90ff;
    border: 1px solid rgba(30, 144, 255, 0.3);
}

.result-badge.yellow {
    background: rgba(255, 193, 7, 0.2);
    color: #ffc107;
    border: 1px solid rgba(255, 193, 7, 0.3);
}

.result-badge.purple {
    background: rgba(155, 89, 182, 0.2);
    color: #9b59b6;
    border: 1px solid rgba(155, 89, 182, 0.3);
}

.result-type {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 5px;
}

.result-nickname {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 10px;
}

.result-content {
    padding: 0 10px;
}

.result-section {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 16px;
}

.result-section h3 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #ffd93d;
}

.result-section p {
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
}

#radarChart {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 300px;
    height: auto;
}

.chart-note {
    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 10px;
}

.result-footer {
    display: flex;
    gap: 12px;
    padding: 20px 0 40px;
}

.result-footer .btn-primary,
.result-footer .btn-secondary {
    flex: 1;
    text-align: center;
}

/* 水印 */
.watermark {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.03;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 20px;
    writing-mode: vertical-rl;
}

/* 移动端适配 */
@media (max-width: 400px) {
    .cover-title {
        font-size: 36px;
    }
    .question-text {
        font-size: 20px;
    }
    .option-text {
        font-size: 14px;
    }
    .result-type {
        font-size: 28px;
    }
    .character-label {
        font-size: 20px;
    }
}
