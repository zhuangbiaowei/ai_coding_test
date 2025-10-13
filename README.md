# AI编码功能测试试题集

## 项目介绍

这是一个专门用于测试 AI 编码能力的试题集合项目，覆盖前端、后端、数据处理、DevOps 等多个真实开发场景。试题旨在评估和验证 AI 在代码生成、调试、优化、安全加固等方面的表现。

## 项目结构

```
.
├── README.md          # 中文说明文档
├── README.en.md       # 英文说明文档
├── LICENSE            # 许可证文件
└── questions/         # 测试题目目录
```

## 使用方法

1. 克隆或下载本仓库。
2. 进入 `questions/` 目录，选择感兴趣的试题。
3. 阅读试题目录下的 README 或注释了解背景与目标。
4. 根据说明修改代码、补充测试或调整配置。
5. 运行试题自带的测试脚本或手动验证，确认修复完成。

## 当前测试题目

### 前端与客户端
- `questions/html-css-navigation/` —— 调整导航栏样式，使菜单在不同屏幕宽度下保持居中排列。
- `questions/left-side-navigation/` —— 为左侧导航实现鼠标靠近时滑出、移开后隐藏的交互动效。
- `questions/animation-performance/` —— 优化首屏卡片动画的 CSS/JS，避免强制回流并保持 60fps 流畅度。
- `questions/css-grid-clamp-layout/` —— 修复使用 `clamp()` 的 CSS Grid 三列布局，确保移动、平板和桌面断点对齐。
- `questions/react-state-sync-bug/` —— 修复 React 组件的派生状态同步问题，保证子组件实时跟随父级 `value`。
- `questions/typescript-prop-typing/` —— 恢复 `<SmartSelect>` 组件的泛型推导，让 `value` 与 `onChange` 的类型安全生效。

### 后端与服务端
- `questions/concurrent-redis-reading/` —— 排查 Redis 缓存层的并发读取竞态，确保测试 `test_cache.py` 全部通过。
- `questions/express-request-queue/` —— 修复 Express 请求队列的竞争条件，让入队任务串行执行并保持 FIFO 顺序。
- `questions/file-upload-boundary-check/` —— 完善上传文件的边界校验，阻止超限体积、路径穿越与伪造扩展名。
- `questions/input-validation-security/` —— 加固 Flask `/feedback` 接口，防止 SQL 注入和存储型 XSS，同时限制输入长度。
- `questions/go-data-race/` —— 为 Go 会话注册表补充并发保护，解决 map 写入数据竞争和测试失败。
- `questions/java-stream-aggregation/` —— 修正 Java Streams 聚合逻辑，使区域销售额只统计已完成订单并应用退货调整。

### 数据处理与脚本
- `questions/pandas-data-cleaning/` —— 恢复 Pandas `clean_orders` 的去重与缺失值填充，确保输出排序稳定。
- `questions/html-to-markdown/` —— 扩展 Ruby 转换器，正确支持将 HTML 表格转换为 Markdown 表格。

### 基础设施与工程实践
- `questions/docker-image-optimization/` —— 使用多阶段构建与健康检查压缩 Next.js 镜像体积并保持运行时轻量。
- `questions/github-actions-debug/` —— 修复 GitHub Actions CI 流程，使用 Node 18、正确安装依赖并执行测试。
- `questions/kubernetes-deployment/` —— 调整 `web-frontend` 部署的就绪探针与滚动策略，避免发布中断服务。

### 语言与测试覆盖
- `questions/rust-unit-tests/` —— 补全 Rust `id_tools` 的单元测试用例，覆盖标准化、校验位与掩码逻辑。

## 贡献

欢迎提交新的测试用例、改进现有题目或完善文档说明。

## 许可证

本项目基于 MIT License 授权发布，详情参见 [LICENSE](LICENSE)。
