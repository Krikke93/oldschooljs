import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		name: 'OldschoolJS',
		include: ['test/**/*.test.ts'],
		coverage: {
			provider: 'c8',
			include: ['src'],
			reporter: ['text'],
			exclude: ['src/simulation/monsters/**/*.ts','src/simulation/misc/**/*.ts', 'src/simulation/subtables/**/*.ts','src/simulation/clues/**/*.ts', 'src/simulation/openables/**/*.ts', 'src/structures/Collection.ts']
		}
	}
});
