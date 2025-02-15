import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs'
        },
        {
            file: 'dist/index.mjs',
            format: 'es'
        }
    ],
    external: ['vite'],
    plugins: [
        del({ targets: 'dist' }),
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: true
        }),
        terser()
    ]
}