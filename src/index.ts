import { Plugin, ResolvedConfig, ViteDevServer } from 'vite'
import { OutputBundle, OutputChunk } from 'rollup'

export interface IPrefetchPluginOption {
    excludeFn?: (assetName: string) => boolean
}

const prefetchPlugin: (option?: IPrefetchPluginOption) => Plugin = (option) => {
    let config: ResolvedConfig
    return {
        name: 'vite-plugin-route-prefetch',
        apply: 'build',
        configResolved(resolvedConfig: ResolvedConfig) {
            config = resolvedConfig
        },
        transformIndexHtml(
            html: string,
            ctx: {
                path: string;
                filename: string;
                server?: ViteDevServer;
                bundle?: OutputBundle;
                chunk?: OutputChunk;
            }
        ) {
            // 获取所有动态入口 chunk
            const bundles = Object.values(ctx.bundle ?? {})
            const dynamicEntryChunks = bundles
                .filter((item): item is OutputChunk => item.type === 'chunk')
                .filter(chunk => chunk.isDynamicEntry)
                .map(chunk => chunk.fileName)

            // 老旧浏览器检测（根据 legacy 文件名判断）
            const isLegacy = dynamicEntryChunks.some(name => name.includes('legacy'))
            if (isLegacy) {
                return html
            }

            // 过滤需要排除的文件
            let prefetchFiles = dynamicEntryChunks
            if (option?.excludeFn) {
                prefetchFiles = prefetchFiles.filter(file => !option.excludeFn!(file))
            }

            // 生成 prefetch 标签
            const prefetchTags = prefetchFiles
                .filter(file => !html.includes(file))
                .map(file => `<link rel="prefetch" href="${config.base}${file}">`)
                .join('')

            // 插入到 head 末尾
            return html.replace(
                /<\/head>/i,
                `${prefetchTags}</head>`
            )
        }
    }
}

export default prefetchPlugin