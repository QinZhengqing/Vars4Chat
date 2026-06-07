/* index.ts - 脚本入口
 *
 * - types/host.d.ts
 * - types/index.ts
 */

import { DISPLAY_VERSION } from './version.js';

/**
 * 脚本初始化
 */
function init(): void {
  console.log(`[Vars4Chat] ${DISPLAY_VERSION} loaded`);
}

init();
